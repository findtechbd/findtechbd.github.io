// POST /.netlify/functions/sync-store  (or POST /api/sync-store)
// Syncs Admin Panel changes (new/edited/deleted products, categories, banners, settings, and order actions)
// so they immediately go live on all Landing Pages across all devices.
const { saveStoreData } = require('../lib/store-db');
const { json, postHandler } = require('../lib/http');

exports.handler = postHandler(async (event, body) => {
    const updated = await saveStoreData({
        settings: body.settings,
        categories: body.categories,
        products: body.products,
        orders: body.orders
    });
    return json(200, {
        ok: true,
        updatedAt: updated.updatedAt,
        productCount: (updated.products || []).length,
        orderCount: (updated.orders || []).length
    });
});

