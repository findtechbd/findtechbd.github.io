const fs = require('fs');
const path = require('path');

const SEED_DB_PATH = path.resolve(__dirname, '../../data/db.json');
const TMP_DB_PATH = '/tmp/findtechbd_live_db.json';

let memoryDb = null;

function hasFirebaseEnv() {
    return Boolean(
        process.env.FIREBASE_PROJECT_ID &&
        process.env.FIREBASE_CLIENT_EMAIL &&
        process.env.FIREBASE_PRIVATE_KEY
    );
}

function loadLocalDb() {
    // 1. Try reading from project data/db.json or /tmp/findtechbd_live_db.json
    try {
        if (fs.existsSync(TMP_DB_PATH)) {
            const tmpData = JSON.parse(fs.readFileSync(TMP_DB_PATH, 'utf8'));
            if (tmpData && Array.isArray(tmpData.products)) {
                memoryDb = tmpData;
            }
        }
    } catch (e) { /* ignore */ }

    if (!memoryDb) {
        try {
            if (fs.existsSync(SEED_DB_PATH)) {
                memoryDb = JSON.parse(fs.readFileSync(SEED_DB_PATH, 'utf8'));
            }
        } catch (e) { /* ignore */ }
    }

    if (!memoryDb) {
        memoryDb = {
            version: 'v3_solitine_tenda_102',
            updatedAt: Date.now(),
            settings: {},
            categories: [],
            products: [],
            orders: [],
            otpCodes: {}
        };
    }
    if (!memoryDb.otpCodes) memoryDb.otpCodes = {};
    if (!Array.isArray(memoryDb.orders)) memoryDb.orders = [];
    return memoryDb;
}

function saveLocalDb(nextDb) {
    nextDb.updatedAt = Date.now();
    memoryDb = nextDb;
    try {
        fs.writeFileSync(SEED_DB_PATH, JSON.stringify(nextDb, null, 2), 'utf8');
    } catch (e) {
        // On read-only serverless filesystems (e.g. Netlify Lambda), write to /tmp
    }
    try {
        fs.writeFileSync(TMP_DB_PATH, JSON.stringify(nextDb, null, 2), 'utf8');
    } catch (e) { /* ignore */ }
    return memoryDb;
}

async function getStoreData() {
    const local = loadLocalDb();
    if (!hasFirebaseEnv()) {
        return local;
    }

    try {
        const { db } = require('./firebase');
        const firestore = db();
        const [settingsSnap, catsSnap, prodsSnap, ordersSnap] = await Promise.all([
            firestore.collection('settings').doc('store').get(),
            firestore.collection('categories').doc('list').get(),
            firestore.collection('products').get(),
            firestore.collection('orders').orderBy('id', 'desc').limit(200).get()
        ]);

        const settings = settingsSnap.exists ? { ...local.settings, ...settingsSnap.data() } : local.settings;
        const categories = (catsSnap.exists && Array.isArray(catsSnap.data().items)) ? catsSnap.data().items : local.categories;
        const products = !prodsSnap.empty ? prodsSnap.docs.map(d => d.data()) : local.products;
        const orders = !ordersSnap.empty ? ordersSnap.docs.map(d => d.data()) : local.orders;

        return {
            version: local.version,
            updatedAt: Date.now(),
            settings,
            categories,
            products,
            orders,
            otpCodes: local.otpCodes || {}
        };
    } catch (err) {
        console.error('Firestore read fallback to local DB:', err.message);
        return local;
    }
}

async function saveStoreData(partial) {
    const current = await getStoreData();
    const updated = {
        ...current,
        settings: partial.settings !== undefined ? { ...current.settings, ...partial.settings } : current.settings,
        categories: Array.isArray(partial.categories) ? partial.categories : current.categories,
        products: Array.isArray(partial.products) ? partial.products : current.products,
        orders: Array.isArray(partial.orders) ? partial.orders : current.orders,
        otpCodes: partial.otpCodes !== undefined ? { ...current.otpCodes, ...partial.otpCodes } : (current.otpCodes || {}),
        updatedAt: Date.now()
    };

    saveLocalDb(updated);

    if (hasFirebaseEnv()) {
        try {
            const { db } = require('./firebase');
            const firestore = db();
            const tasks = [];
            if (partial.settings !== undefined) {
                tasks.push(firestore.collection('settings').doc('store').set(updated.settings, { merge: true }));
            }
            if (Array.isArray(partial.categories)) {
                tasks.push(firestore.collection('categories').doc('list').set({ items: updated.categories }));
            }
            await Promise.all(tasks);
        } catch (err) {
            console.error('Firestore write warning:', err.message);
        }
    }

    return updated;
}

async function getOtpRecord(phone) {
    if (hasFirebaseEnv()) {
        try {
            const { db } = require('./firebase');
            const snap = await db().collection('otp_codes').doc(phone).get();
            if (snap.exists) return snap.data();
        } catch (e) { /* fallback */ }
    }
    const store = loadLocalDb();
    return (store.otpCodes && store.otpCodes[phone]) || null;
}

async function setOtpRecord(phone, record) {
    const store = loadLocalDb();
    if (!store.otpCodes) store.otpCodes = {};
    store.otpCodes[phone] = { ...(store.otpCodes[phone] || {}), ...record };
    saveLocalDb(store);

    if (hasFirebaseEnv()) {
        try {
            const { db } = require('./firebase');
            await db().collection('otp_codes').doc(phone).set(store.otpCodes[phone], { merge: true });
        } catch (e) { /* fallback */ }
    }
    return store.otpCodes[phone];
}

module.exports = {
    getStoreData,
    saveStoreData,
    getOtpRecord,
    setOtpRecord,
    loadLocalDb,
    saveLocalDb
};

