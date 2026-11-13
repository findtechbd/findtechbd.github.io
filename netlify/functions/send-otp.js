// POST /.netlify/functions/send-otp  (or POST /api/send-otp)
// Body: { phone: "017XXXXXXXX", smsConfig?: { smsProvider, smsApiKey, smsSenderId, smsCustomUrl } }
// Generates a 4-digit OTP on the server, stores its HMAC hash, and dispatches SMS via configured gateway.
const crypto = require('crypto');
const { getStoreData, getOtpRecord, setOtpRecord } = require('../lib/store-db');
const { sendSms, BUILTIN_DEFAULT_KEY } = require('../lib/sms');
const { hashOtp, normalizeBdPhone } = require('../lib/otp');
const { json, postHandler, httpError } = require('../lib/http');

const OTP_TTL_MS = 5 * 60 * 1000;      // code valid for 5 minutes
const RESEND_COOLDOWN_MS = 10 * 1000;  // 10 seconds cooldown
const MAX_SMS_PER_DAY = 30;            // per phone number

exports.handler = postHandler(async (event, body) => {
    const phone = normalizeBdPhone(body.phone);
    if (!/^01[3-9]\d{8}$/.test(phone)) {
        throw httpError(400, 'সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন (যেমন: 017XXXXXXXX)');
    }

    const now = Date.now();
    const today = new Date().toISOString().slice(0, 10);
    const prev = (await getOtpRecord(phone)) || {};

    if (prev.lastSentAt && now - prev.lastSentAt < RESEND_COOLDOWN_MS) {
        const wait = Math.ceil((RESEND_COOLDOWN_MS - (now - prev.lastSentAt)) / 1000);
        throw httpError(429, `অনুগ্রহ করে ${wait} সেকেন্ড পর আবার চেষ্টা করুন।`);
    }
    const sentToday = prev.day === today ? (prev.sentToday || 0) : 0;
    if (sentToday >= MAX_SMS_PER_DAY) {
        throw httpError(429, 'আজকের জন্য এই নাম্বারে OTP পাঠানোর সীমা শেষ। আগামীকাল আবার চেষ্টা করুন।');
    }

    const storeData = await getStoreData();
    const storeSettings = storeData.settings || {};
    const mergedSmsConfig = {
        smsProvider: (body.smsConfig && body.smsConfig.smsProvider) || storeSettings.smsProvider || process.env.SMS_PROVIDER || 'bulksmsbd',
        smsApiKey: ((body.smsConfig && body.smsConfig.smsApiKey) || storeSettings.smsApiKey || process.env.BULKSMSBD_API_KEY || process.env.SMS_API_KEY || BUILTIN_DEFAULT_KEY).trim(),
        smsSenderId: ((body.smsConfig && body.smsConfig.smsSenderId) || storeSettings.smsSenderId || process.env.BULKSMSBD_SENDER_ID || process.env.SMS_SENDER_ID || '8809617611000').trim(),
        smsCustomUrl: ((body.smsConfig && body.smsConfig.smsCustomUrl) || storeSettings.smsCustomUrl || process.env.SMS_CUSTOM_URL || '').trim()
    };

    const code = String(crypto.randomInt(1000, 10000));
    const brand = storeSettings.brandName || process.env.SMS_BRAND_NAME || 'FindTechBD';
    const message = `Your ${brand} verification OTP code is ${code}. Valid for 5 minutes. Do not share this code.`;

    let smsDispatched = false;
    try {
        const smsRes = await sendSms(phone, message, mergedSmsConfig);
        smsDispatched = Boolean(smsRes && smsRes.carrierDelivered);
    } catch (smsErr) {
        console.warn(`[OTP SMS Warning for +88${phone}]: ${smsErr.message}`);
    }

    await setOtpRecord(phone, {
        hash: hashOtp(phone, code),
        smsDispatched,
        expiresAt: now + OTP_TTL_MS,
        attempts: 0,
        lastSentAt: now,
        day: today,
        sentToday: sentToday + 1,
        updatedAt: now
    });

    return json(200, {
        ok: true,
        phone,
        smsDispatched,
        expiresInSec: OTP_TTL_MS / 1000,
        resendInSec: RESEND_COOLDOWN_MS / 1000
    });
});
