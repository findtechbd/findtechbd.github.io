// Small helpers for consistent JSON responses from Netlify Functions & Node HTTP Server.
const JSON_HEADERS = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};

function json(statusCode, body) {
    return { statusCode, headers: JSON_HEADERS, body: JSON.stringify(body) };
}

function parseBody(event) {
    try {
        if (!event.body) return {};
        return typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    } catch (e) {
        return {};
    }
}

// Wraps a POST handler and converts thrown errors into JSON responses.
function postHandler(fn) {
    return async (event) => {
        if (event.httpMethod === 'OPTIONS') {
            return json(200, { ok: true });
        }
        if (event.httpMethod !== 'POST') {
            return json(405, { error: 'Method not allowed' });
        }
        try {
            return await fn(event, parseBody(event));
        } catch (err) {
            const status = err.statusCode || 500;
            if (status >= 500) console.error(err);
            return json(status, { error: err.message || 'Server error. Please try again.' });
        }
    };
}

// Wraps a GET/POST handler.
function apiHandler(fn) {
    return async (event) => {
        if (event.httpMethod === 'OPTIONS') {
            return json(200, { ok: true });
        }
        try {
            return await fn(event, parseBody(event));
        } catch (err) {
            const status = err.statusCode || 500;
            if (status >= 500) console.error(err);
            return json(status, { error: err.message || 'Server error. Please try again.' });
        }
    };
}

function httpError(statusCode, message) {
    const err = new Error(message);
    err.statusCode = statusCode;
    return err;
}

module.exports = { json, parseBody, postHandler, apiHandler, httpError, JSON_HEADERS };
