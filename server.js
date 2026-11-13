const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;
// Auto-load .env file (dotenv_loaded)
const envFile = path.join(__dirname, ".env");
if (fs.existsSync(envFile)) {
    fs.readFileSync(envFile, "utf8").split(/\r?\n/).forEach(line => {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
    });
}


const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.zip': 'application/zip'
};

// Map API endpoints to Netlify Function handlers so local/VPS Node server and Netlify share identical logic
const API_FUNCTIONS = {
    'store-data': require('./netlify/functions/store-data').handler,
    'sync-store': require('./netlify/functions/sync-store').handler,
    'send-otp': require('./netlify/functions/send-otp').handler,
    'verify-otp': require('./netlify/functions/verify-otp').handler,
    'place-order': require('./netlify/functions/place-order').handler,
    'update-order-status': require('./netlify/functions/update-order-status').handler,
    'github-push': require('./netlify/functions/github-push').handler,
    'local-files': require('./netlify/functions/local-files').handler
};

function readRequestBody(req) {
    return new Promise((resolve) => {
        let chunks = '';
        req.on('data', chunk => {
            chunks += chunk;
            if (chunks.length > 25 * 1024 * 1024) req.destroy(); // 25MB limit for base64 product images
        });
        req.on('end', () => resolve(chunks));
        req.on('error', () => resolve(''));
    });
}

const server = http.createServer(async (req, res) => {
    const cleanUrl = decodeURIComponent((req.url || '/').split('?')[0]);

    // Check if request targets /api/<fn> or /.netlify/functions/<fn>
    const apiMatch = cleanUrl.match(/^\/(?:api|\.netlify\/functions)\/([a-z0-9-]+)$/i);
    if (apiMatch) {
        const fnName = apiMatch[1].toLowerCase();
        const handler = API_FUNCTIONS[fnName];
        if (!handler) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: `API endpoint "${fnName}" not found` }));
        }
        const rawBody = await readRequestBody(req);
        const result = await handler({
            httpMethod: req.method,
            headers: req.headers,
            body: rawBody,
            path: cleanUrl
        });
        res.writeHead(result.statusCode || 200, result.headers || { 'Content-Type': 'application/json' });
        return res.end(result.body || '{}');
    }

    let relPath = cleanUrl === '/' ? '/index.html' : cleanUrl;
    if (relPath.toLowerCase() === '/admin' || relPath.toLowerCase() === '/admin.html') {
        relPath = '/Admin.html';
    }

    let filePath = path.join(ROOT, relPath);
    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        return res.end('Forbidden');
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(ROOT, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            return res.end('Server Error');
        }
        res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
        res.end(content);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`FindTechBD Full-Stack Server running at:`);
    console.log(`- Storefront: http://localhost:${PORT}/index.html`);
    console.log(`- Admin Panel: http://localhost:${PORT}/Admin.html`);
});
