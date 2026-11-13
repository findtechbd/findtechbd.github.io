// GET /.netlify/functions/store-data  (or GET /api/store-data)
// Returns live products, categories, store settings, and orders for both Landing Pages & Admin Panel.
const { getStoreData } = require('../lib/store-db');
const { json, apiHandler } = require('../lib/http');

exports.handler = apiHandler(async () => {
    const data = await getStoreData();
    const { otpCodes, ...publicData } = data;
    return json(200, { ok: true, ...publicData });
});

