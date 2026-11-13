// Shared Firebase Admin SDK initialisation for all Netlify Functions.
// Credentials come from Netlify environment variables (never shipped to the browser).
const admin = require('firebase-admin');

function getApp() {
    if (admin.apps.length) return admin.app();

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // Netlify stores multi-line values with literal "\n" — convert them back to real newlines.
    const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
        throw new Error('Firebase Admin credentials are missing. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY in Netlify environment variables.');
    }

    return admin.initializeApp({
        credential: admin.credential.cert({ projectId, clientEmail, privateKey })
    });
}

function db() {
    getApp();
    return admin.firestore();
}

function auth() {
    getApp();
    return admin.auth();
}

// Verifies the "Authorization: Bearer <Firebase ID token>" header and returns the decoded token.
async function verifyRequestUser(event) {
    const header = event.headers.authorization || event.headers.Authorization || '';
    const match = header.match(/^Bearer\s+(.+)$/i);
    if (!match) {
        const err = new Error('Login required');
        err.statusCode = 401;
        throw err;
    }
    try {
        return await auth().verifyIdToken(match[1]);
    } catch (e) {
        const err = new Error('Session expired. Please log in again.');
        err.statusCode = 401;
        throw err;
    }
}

module.exports = { admin, db, auth, verifyRequestUser };

