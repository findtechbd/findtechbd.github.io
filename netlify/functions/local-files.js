// GET /api/local-files
// Returns all project files (path + base64 content) so github-upload.html can push them
// directly from the browser to https://api.github.com without any server network restriction.
const fs = require('fs');
const path = require('path');
const { json, apiHandler } = require('../lib/http');

const ROOT_DIR = path.resolve(__dirname, '../..');

const IGNORE_NAMES = new Set([
    '.git',
    'node_modules',
    '.netlify',
    '.DS_Store',
    'FindTechBD-GitHub-Ready.zip',
    'github-upload.html',
    '.env'
]);

function collectProjectFiles(dir, relPrefix = '') {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (IGNORE_NAMES.has(entry.name) || entry.name.endsWith('.zip') || entry.name.endsWith('.log')) continue;
        const fullPath = path.join(dir, entry.name);
        const relPath = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
        if (entry.isDirectory()) {
            results = results.concat(collectProjectFiles(fullPath, relPath));
        } else if (entry.isFile()) {
            results.push({
                path: relPath,
                contentBase64: fs.readFileSync(fullPath).toString('base64')
            });
        }
    }
    return results;
}

exports.handler = apiHandler(async () => {
    const files = collectProjectFiles(ROOT_DIR);
    return json(200, { ok: true, count: files.length, files });
});

