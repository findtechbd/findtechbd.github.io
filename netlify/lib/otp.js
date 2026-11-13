const crypto = require('crypto');

// HMAC of phone+code so the plain OTP is never stored in the database.
function hashOtp(phone, code) {
    const secret = process.env.OTP_SECRET || 'findtechbd-otp-hmac-secret-key-2026';
    return crypto.createHmac('sha256', secret).update(`${phone}:${code}`).digest('hex');
}

function normalizeBdPhone(value) {
    return String(value || '').replace(/\D/g, '').replace(/^88/, '');
}

module.exports = { hashOtp, normalizeBdPhone };
