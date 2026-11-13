// Sends transactional emails. Provider is selected with EMAIL_PROVIDER:
//   "gmail"  -> Gmail SMTP using a Google App Password (works without owning a domain)
//   "resend" -> Resend API (requires a verified domain to email customers)
let gmailTransport = null;

async function sendEmail({ to, subject, html, text }) {
    const provider = (process.env.EMAIL_PROVIDER || 'gmail').toLowerCase();

    if (provider === 'resend') {
        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.EMAIL_FROM;
        if (!apiKey || !from) throw new Error('Resend is not configured. Set RESEND_API_KEY and EMAIL_FROM.');
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ from, to: [to], subject, html, text })
        });
        if (!res.ok) throw new Error(`Resend error ${res.status}: ${await res.text()}`);
        return res.json();
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) throw new Error('Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.');
    if (!gmailTransport) {
        const nodemailer = require('nodemailer');
        gmailTransport = nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
    }
    const fromName = process.env.EMAIL_FROM_NAME || 'FindTechBD';
    return gmailTransport.sendMail({ from: `"${fromName}" <${user}>`, to, subject, html, text });
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const STATUS_COPY = {
    Ordered: 'আপনার অর্ডারটি আমরা পেয়েছি এবং প্রসেসিং-এর জন্য প্রস্তুত করা হচ্ছে।',
    Processing: 'আপনার অর্ডারটি এখন প্রসেস করা হচ্ছে।',
    Shipped: 'আপনার অর্ডারটি কুরিয়ারে পাঠানো হয়েছে।',
    'Out for Delivery': 'আপনার অর্ডারটি আজ ডেলিভারির জন্য বের হয়েছে।',
    Delivered: 'আপনার অর্ডারটি ডেলিভারি সম্পন্ন হয়েছে। FindTechBD-এর সাথে কেনাকাটার জন্য ধন্যবাদ!',
    Cancelled: 'আপনার অর্ডারটি বাতিল করা হয়েছে। কোনো প্রশ্ন থাকলে আমাদের হেল্পলাইনে যোগাযোগ করুন।'
};

// Builds the order confirmation / status update email.
function buildOrderEmail(order, { brandName = 'FindTechBD', helpline = '09678-002003', isStatusUpdate = false, siteUrl = '' } = {}) {
    const code = order.orderCode;
    const status = order.status || 'Ordered';
    const subject = isStatusUpdate
        ? `[${brandName}] Order #${code} status: ${status}`
        : `[${brandName}] Order Confirmed — #${code}`;

    const rows = (order.itemsList || []).map(item => `
        <tr>
            <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;color:#1e293b;font-size:13px;">${escapeHtml(item.name)} × ${item.qty}</td>
            <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:13px;font-weight:bold;text-align:right;">${(item.price * item.qty).toLocaleString('en-US')}৳</td>
        </tr>`).join('');

    const trackLink = siteUrl ? `<p style="margin:16px 0 0;"><a href="${siteUrl}" style="background:#ef4a23;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:13px;">Track Your Order</a></p>` : '';

    const html = `
    <div style="background:#f8fafc;padding:24px;font-family:Segoe UI,Arial,sans-serif;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
        <div style="background:#0f172a;color:#fff;padding:18px 22px;">
          <span style="background:#ef4a23;color:#fff;font-weight:900;padding:6px 9px;border-radius:8px;">FT</span>
          <strong style="margin-left:8px;font-size:16px;">${escapeHtml(brandName)}</strong>
          <span style="float:right;background:#ef4a23;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:bold;">#${escapeHtml(code)}</span>
        </div>
        <div style="padding:22px;">
          <p style="margin:0 0 10px;color:#334155;font-size:14px;">প্রিয় <strong>${escapeHtml(order.customer)}</strong>,</p>
          <p style="margin:0 0 16px;color:#475569;font-size:13px;line-height:1.6;">
            ${isStatusUpdate ? escapeHtml(STATUS_COPY[status] || `আপনার অর্ডারের স্ট্যাটাস এখন: ${status}`) : `ধন্যবাদ! আপনার অর্ডার <strong>#${escapeHtml(code)}</strong> সফলভাবে গ্রহণ করা হয়েছে।`}
          </p>
          <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:10px;padding:12px 14px;margin-bottom:16px;">
            <div style="font-size:11px;color:#047857;font-weight:bold;text-transform:uppercase;">Current Order Status</div>
            <div style="font-size:15px;color:#064e3b;font-weight:900;margin-top:2px;">${escapeHtml(status)}</div>
          </div>
          <table style="width:100%;border-collapse:collapse;">${rows}</table>
          <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:13px;color:#475569;">
            <tr><td>Subtotal</td><td style="text-align:right;">${Number(order.subtotal).toLocaleString('en-US')}৳</td></tr>
            <tr><td>Discount</td><td style="text-align:right;color:#059669;">-${Number(order.discount).toLocaleString('en-US')}৳</td></tr>
            <tr><td>Delivery</td><td style="text-align:right;">${Number(order.shipping).toLocaleString('en-US')}৳</td></tr>
            <tr><td style="padding-top:8px;font-weight:900;color:#0f172a;font-size:15px;">Total</td><td style="padding-top:8px;text-align:right;font-weight:900;color:#ef4a23;font-size:16px;">${escapeHtml(order.total)}৳</td></tr>
          </table>
          <div style="margin-top:16px;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;font-size:12px;color:#475569;">
            <strong style="color:#1e293b;">Payment:</strong> ${escapeHtml(order.payment)}<br>
            <strong style="color:#1e293b;">Delivery To:</strong> ${escapeHtml(order.customer)} (${escapeHtml(order.phone)}) — ${escapeHtml(order.address)}
          </div>
          ${trackLink}
        </div>
        <div style="padding:14px 22px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;">
          Helpline: ${escapeHtml(helpline)} • This is an automated email from ${escapeHtml(brandName)}.
        </div>
      </div>
    </div>`;

    const text = [
        `Hello ${order.customer},`,
        isStatusUpdate ? `Your order #${code} status is now: ${status}.` : `Thank you! Your order #${code} has been confirmed.`,
        `Items: ${order.items}`,
        `Total: ${order.total} BDT (${order.payment})`,
        `Delivery: ${order.address} (${order.phone})`,
        `Helpline: ${helpline}`
    ].join('\n');

    return { subject, html, text };
}

module.exports = { sendEmail, buildOrderEmail };

