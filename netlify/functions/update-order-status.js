// POST /.netlify/functions/update-order-status  (or POST /api/update-order-status)
// Body: { orderId, status, action?: 'update' | 'delete' }
// Allows the Admin Panel to update order status or delete/complete an order and sync across all clients.
const { getStoreData, saveStoreData } = require('../lib/store-db');
const { sendEmail, buildOrderEmail } = require('../lib/email');
const { json, postHandler, httpError } = require('../lib/http');

const STATUSES = ['Ordered', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'];

exports.handler = postHandler(async (event, body) => {
    const storeData = await getStoreData();
    const orders = Array.isArray(storeData.orders) ? storeData.orders : [];
    const orderId = body.orderId || body.id;

    if (!orderId) {
        throw httpError(400, 'Order ID is required.');
    }

    if (body.action === 'delete') {
        const nextOrders = orders.filter(o => String(o.id) !== String(orderId));
        await saveStoreData({ orders: nextOrders });
        return json(200, { ok: true, deleted: true, orderId });
    }

    const status = String(body.status || '');
    if (!STATUSES.includes(status)) {
        throw httpError(400, 'Invalid order status.');
    }

    const idx = orders.findIndex(o => String(o.id) === String(orderId));
    if (idx === -1) {
        throw httpError(404, 'Order not found.');
    }

    orders[idx] = {
        ...orders[idx],
        status,
        statusUpdatedAt: new Date().toISOString()
    };

    await saveStoreData({ orders });

    let emailSent = false;
    if (orders[idx].email && (process.env.GMAIL_USER || process.env.RESEND_API_KEY)) {
        try {
            const settings = storeData.settings || {};
            const mail = buildOrderEmail(orders[idx], {
                brandName: settings.brandName || 'FindTechBD',
                helpline: settings.helpline || '09678-002003',
                isStatusUpdate: true,
                siteUrl: process.env.URL || ''
            });
            await sendEmail({ to: orders[idx].email, ...mail });
            emailSent = true;
        } catch (err) {
            console.error('Status email warning:', err.message);
        }
    }

    return json(200, { ok: true, order: orders[idx], status, emailSent });
});
