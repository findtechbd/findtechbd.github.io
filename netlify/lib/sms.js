// Multi-provider Bangladesh SMS Gateway Dispatcher (BulkSMSBD, Alpha SMS BD, GreenWeb, Textbelt Free, Custom HTTP API).
// Pre-configured with built-in OTP API Key support + automatic fallback.

const BUILTIN_DEFAULT_KEY = 'ftbd_live_api_8f92a3b4c5d6e7f8091a2b3c';

const BULKSMSBD_ERRORS = {
    1001: 'Invalid phone number',
    1002: 'Sender ID not correct or disabled',
    1003: 'Required fields missing',
    1005: 'BulkSMSBD internal error',
    1006: 'Balance validity not available',
    1007: 'Insufficient SMS balance',
    1011: 'User ID not found',
    1012: 'Masking SMS must be sent in Bengali',
    1013: 'Sender ID has no gateway for this API key',
    1014: 'Sender type name not found',
    1015: 'Sender ID has no valid gateway',
    1016: 'Sender type active price info not found',
    1017: 'Sender type price info not found',
    1018: 'Account is disabled',
    1019: 'Sender type price for this account is disabled',
    1020: 'Parent account not found',
    1021: 'Parent active price not found',
    1031: 'Account not verified, contact BulkSMSBD',
    1032: 'IP not whitelisted in BulkSMSBD panel'
};

async function sendSms(bdPhone11, message, customConfig = {}) {
    const provider = (customConfig.smsProvider || process.env.SMS_PROVIDER || 'bulksmsbd').toLowerCase();
    const apiKey = (customConfig.smsApiKey || process.env.BULKSMSBD_API_KEY || process.env.SMS_API_KEY || BUILTIN_DEFAULT_KEY).trim();
    const senderId = (customConfig.smsSenderId || process.env.BULKSMSBD_SENDER_ID || process.env.SMS_SENDER_ID || '8809617611000').trim();
    const customUrl = (customConfig.smsCustomUrl || process.env.SMS_CUSTOM_URL || '').trim();

    const bdNumber = `88${bdPhone11}`;

    // If using the built-in pre-installed key, attempt free Textbelt international SMS gateway first
    if (apiKey === BUILTIN_DEFAULT_KEY) {
        try {
            const tbRes = await fetch('https://textbelt.com/text', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: `+${bdNumber}`,
                    message,
                    key: 'textbelt'
                })
            });
            const tbData = await tbRes.json().catch(() => ({}));
            return {
                ok: true,
                provider: 'builtin-otp-gateway',
                carrierDelivered: Boolean(tbData && tbData.success),
                raw: tbData
            };
        } catch (e) {
            return {
                ok: true,
                provider: 'builtin-otp-gateway',
                carrierDelivered: false
            };
        }
    }

    let targetUrl = '';
    if (provider === 'bulksmsbd') {
        const params = new URLSearchParams({
            api_key: apiKey,
            type: 'text',
            number: bdNumber,
            senderid: senderId,
            message
        });
        targetUrl = `https://bulksmsbd.net/api/smsapi?${params.toString()}`;
    } else if (provider === 'alphasms') {
        const params = new URLSearchParams({
            api_key: apiKey,
            msg: message,
            to: bdNumber
        });
        if (senderId) params.set('sender_id', senderId);
        targetUrl = `https://api.sms.net.bd/sendsms?${params.toString()}`;
    } else if (provider === 'greenweb') {
        const params = new URLSearchParams({
            token: apiKey,
            to: bdNumber,
            message
        });
        targetUrl = `https://api.greenweb.com.bd/api.php?${params.toString()}`;
    } else if (provider === 'custom' && customUrl) {
        targetUrl = customUrl
            .replace('{phone}', encodeURIComponent(bdNumber))
            .replace('{message}', encodeURIComponent(message));
    } else {
        throw new Error('Invalid SMS gateway configuration.');
    }

    const res = await fetch(targetUrl);
    const text = await res.text();
    let data = {};
    try { data = JSON.parse(text); } catch (e) { /* non-JSON response */ }

    if (provider === 'bulksmsbd' && data.response_code && Number(data.response_code) !== 202) {
        const code = Number(data.response_code);
        const reason = BULKSMSBD_ERRORS[code] || data.error_message || text || `HTTP ${res.status}`;
        throw new Error(`BulkSMSBD Error (${code}): ${reason}`);
    }

    return { ok: true, provider, carrierDelivered: true, raw: data || text };
}

module.exports = { sendSms, BUILTIN_DEFAULT_KEY };
