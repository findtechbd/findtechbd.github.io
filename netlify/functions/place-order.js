// POST /.netlify/functions/place-order  (or POST /api/place-order)
// Saves a customer order from the Landing Page to the shared backend database so it immediately appears
// in the Admin Panel, and dispatches the order confirmation email.
const { getStoreData, saveStoreData } = require('../lib/store-db');
const { sendEmail, buildOrderEmail } = require('../lib/email');
const { json, postHandler, httpError } = require('../lib/http');

exports.handler = postHandler(async (event, body) => {
    const storeData = await getStoreData();
    const settings = storeData.settings || {};

    if (settings.maintenance) {
        throw httpError(503, 'ওয়েবসাইট এখন মেইনটেন্যান্সে আছে। কিছুক্ষণ পর চেষ্টা করুন।');
    }
    if (settings.allowOrdering === false) {
        throw httpError(403, 'এই মুহূর্তে অর্ডার নেওয়া বন্ধ আছে।');
    }

    const order = body.order || body;
    if (!order || !order.customer || !order.phone) {
        throw httpError(400, 'নাম, মোবাইল নাম্বার ও ডেলিভারি ঠিকানা দিন।');
    }

    const now = new Date();
    const orderId = Number(order.id) || Date.now();
    const newOrder = {
        id: orderId,
        orderCode: order.orderCode || `FT-${String(orderId).slice(-6)}`,
        userId: order.userId || null,
        customer: String(order.customer).trim(),
        phone: String(order.phone).trim(),
        email: String(order.email || '').trim(),
        emailConfirmationSent: true,
        emailSentAt: order.emailSentAt || now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        city: order.city || 'Dhaka City',
        area: order.area || '',
        address: order.address || '',
        payment: order.payment || 'Cash on Delivery (COD)',
        status: order.status || 'Ordered',
        items: order.items || '',
        itemsList: Array.isArray(order.itemsList) ? order.itemsList : [],
        subtotal: Number(order.subtotal) || 0,
        discount: Number(order.discount) || 0,
        shipping: Number(order.shipping) || 0,
        total: order.total || String(order.totalNumeric || 0),
        totalNumeric: Number(order.totalNumeric) || 0,
        date: order.date || now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: order.time || now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const existingOrders = Array.isArray(storeData.orders) ? storeData.orders : [];
    const filtered = existingOrders.filter(o => String(o.id) !== String(newOrder.id));
    const nextOrders = [newOrder, ...filtered];

    await saveStoreData({ orders: nextOrders });

    // Optional SMTP/Resend email dispatch if configured in environment variables
    let emailSent = false;
    if (newOrder.email && (process.env.GMAIL_USER || process.env.RESEND_API_KEY)) {
        try {
            const mail = buildOrderEmail(newOrder, {
                brandName: settings.brandName || 'FindTechBD',
                helpline: settings.helpline || '09678-002003',
                siteUrl: process.env.URL || ''
            });
            await sendEmail({ to: newOrder.email, ...mail });
            emailSent = true;
        } catch (err) {
            console.error('Order email warning:', err.message);
        }
    }

    return json(200, { ok: true, order: newOrder, emailSent });
});
