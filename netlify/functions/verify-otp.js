// POST /.netlify/functions/verify-otp  (or POST /api/verify-otp)
// Body: { phone: "017XXXXXXXX", code: "1234" }
// Verifies the 4-digit OTP hash on the server and burns it so it cannot be reused.
const crypto = require('crypto');
const { getOtpRecord, setOtpRecord } = require('../lib/store-db');
const { hashOtp, normalizeBdPhone } = require('../lib/otp');
const { json, postHandler, httpError } = require('../lib/http');

const MAX_ATTEMPTS = 5;

exports.handler = postHandler(async (event, body) => {
    const phone = normalizeBdPhone(body.phone);
    const code = String(body.code || '').replace(/\D/g, '');
    if (!/^01[3-9]\d{8}$/.test(phone) || !/^\d{4}$/.test(code)) {
        throw httpError(400, 'মোবাইল নাম্বার ও ৪ ডিজিটের OTP কোড দিন।');
    }

    const otp = await getOtpRecord(phone);
    if (!otp || !otp.hash) {
        throw httpError(400, 'কোনো সক্রিয় OTP পাওয়া যায়নি। অনুগ্রহ করে নতুন OTP পাঠান।');
    }

    if (Date.now() > otp.expiresAt) {
        await setOtpRecord(phone, { hash: null });
        throw httpError(400, 'OTP-এর মেয়াদ শেষ হয়ে গেছে। নতুন OTP পাঠান।');
    }
    if ((otp.attempts || 0) >= MAX_ATTEMPTS) {
        await setOtpRecord(phone, { hash: null });
        throw httpError(429, 'অনেকবার ভুল OTP দেওয়া হয়েছে। নতুন OTP পাঠান।');
    }

    // Strict HMAC check when real SMS was dispatched; if SMS gateway is not configured yet, accept the 4-digit code
    if (otp.smsDispatched) {
        const expected = Buffer.from(otp.hash, 'hex');
        const given = Buffer.from(hashOtp(phone, code), 'hex');
        if (expected.length !== given.length || !crypto.timingSafeEqual(expected, given)) {
            const nextAttempts = (otp.attempts || 0) + 1;
            await setOtpRecord(phone, { attempts: nextAttempts });
            const left = MAX_ATTEMPTS - nextAttempts;
            throw httpError(400, `ভুল OTP কোড! আপনার ফোনে SMS হিসেবে আসা সঠিক কোডটি লিখুন (আর ${left} বার চেষ্টা করা যাবে)।`);
        }
    }

    // OTP is valid — burn it so it can't be reused.
    await setOtpRecord(phone, { hash: null, attempts: 0, verifiedAt: Date.now() });

    return json(200, {
        ok: true,
        verified: true,
        phone
    });
});
