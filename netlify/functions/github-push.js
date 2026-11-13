// POST /api/github-push
// Body: { token: "ghp_...", repoName: "findtechbd-ecommerce", isPrivate: false }
// Creates the GitHub repository (if it doesn't exist) and pushes all project files in a single commit using GitHub Git Data API.
const fs = require('fs');
const path = require('path');
const { json, postHandler, httpError } = require('../lib/http');

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
            results.push({ fullPath, relPath });
        }
    }
    return results;
}

async function ghFetch(url, token, options = {}) {
    const res = await fetch(url, {
        ...options,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'FindTechBD-Uploader',
            'X-GitHub-Api-Version': '2022-11-28',
            'Content-Type': 'application/json',
            ...(options.headers || {})
        }
    });
    const text = await res.text();
    let data = {};
    try { data = JSON.parse(text); } catch (e) { data = { raw: text }; }
    return { ok: res.ok, status: res.status, data };
}

exports.handler = postHandler(async (event, body) => {
    const token = String(body.token || '').trim();
    const repoName = String(body.repoName || 'findtechbd-ecommerce').trim().replace(/[^a-zA-Z0-9._-]/g, '-');
    const isPrivate = Boolean(body.isPrivate);

    if (!token) {
        throw httpError(400, 'অনুগ্রহ করে আপনার GitHub Personal Access Token দিন।');
    }

    // 1. Get authenticated GitHub user
    const userRes = await ghFetch('https://api.github.com/user', token);
    if (!userRes.ok) {
        throw httpError(401, 'GitHub Token সঠিক নয় অথবা মেয়াদ শেষ হয়েছে। অনুগ্রহ করে `repo` পারমিশন সহ নতুন Token দিন।');
    }
    const owner = userRes.data.login;

    // 2. Check if repository exists; if not, create it with auto_init: true so main branch exists
    let repoRes = await ghFetch(`https://api.github.com/repos/${owner}/${repoName}`, token);
    if (!repoRes.ok) {
        const createRes = await ghFetch('https://api.github.com/user/repos', token, {
            method: 'POST',
            body: JSON.stringify({
                name: repoName,
                description: 'FindTechBD Full-Stack E-Commerce Storefront & Master Admin Portal',
                private: isPrivate,
                auto_init: true
            })
        });
        if (!createRes.ok) {
            throw httpError(createRes.status, createRes.data.message || 'GitHub Repository তৈরি করা সম্ভব হয়নি।');
        }
        repoRes = createRes;
        // Wait briefly for GitHub to initialize main branch
        await new Promise(r => setTimeout(r, 1500));
    }

    const defaultBranch = repoRes.data.default_branch || 'main';

    // 3. Get latest commit SHA on defaultBranch (if empty repo, initialize README first)
    let refRes = await ghFetch(`https://api.github.com/repos/${owner}/${repoName}/git/ref/heads/${defaultBranch}`, token);
    if (!refRes.ok) {
        await ghFetch(`https://api.github.com/repos/${owner}/${repoName}/contents/README.md`, token, {
            method: 'PUT',
            body: JSON.stringify({
                message: 'Initialize repository',
                content: Buffer.from('# FindTechBD E-Commerce\n').toString('base64')
            })
        });
        await new Promise(r => setTimeout(r, 1000));
        refRes = await ghFetch(`https://api.github.com/repos/${owner}/${repoName}/git/ref/heads/${defaultBranch}`, token);
    }

    const latestCommitSha = refRes.data.object.sha;

    // 4. Collect all project files and create Git blobs in parallel batches
    const files = collectProjectFiles(ROOT_DIR);
    const treeItems = [];
    const batchSize = 8;

    for (let i = 0; i < files.length; i += batchSize) {
        const batch = files.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(async (f) => {
            const contentBase64 = fs.readFileSync(f.fullPath).toString('base64');
            const blobRes = await ghFetch(`https://api.github.com/repos/${owner}/${repoName}/git/blobs`, token, {
                method: 'POST',
                body: JSON.stringify({
                    content: contentBase64,
                    encoding: 'base64'
                })
            });
            if (!blobRes.ok) {
                throw new Error(`Failed to upload ${f.relPath}: ${blobRes.data.message || blobRes.status}`);
            }
            return {
                path: f.relPath,
                mode: '100644',
                type: 'blob',
                sha: blobRes.data.sha
            };
        }));
        treeItems.push(...batchResults);
    }

    // 5. Create Git tree
    const treeRes = await ghFetch(`https://api.github.com/repos/${owner}/${repoName}/git/trees`, token, {
        method: 'POST',
        body: JSON.stringify({
            base_tree: latestCommitSha,
            tree: treeItems
        })
    });
    if (!treeRes.ok) {
        throw httpError(500, `Git Tree তৈরি ব্যর্থ হয়েছে: ${treeRes.data.message || ''}`);
    }

    // 6. Create Git commit
    const commitRes = await ghFetch(`https://api.github.com/repos/${owner}/${repoName}/git/commits`, token, {
        method: 'POST',
        body: JSON.stringify({
            message: '🚀 Deploy FindTechBD Full-Stack Storefront, Admin Portal & OTP Functions',
            tree: treeRes.data.sha,
            parents: [latestCommitSha]
        })
    });
    if (!commitRes.ok) {
        throw httpError(500, `Git Commit তৈরি ব্যর্থ হয়েছে: ${commitRes.data.message || ''}`);
    }

    // 7. Update branch reference
    const updateRefRes = await ghFetch(`https://api.github.com/repos/${owner}/${repoName}/git/refs/heads/${defaultBranch}`, token, {
        method: 'PATCH',
        body: JSON.stringify({
            sha: commitRes.data.sha,
            force: true
        })
    });
    if (!updateRefRes.ok) {
        throw httpError(500, `Branch update ব্যর্থ হয়েছে: ${updateRefRes.data.message || ''}`);
    }

    return json(200, {
        ok: true,
        owner,
        repoName,
        filesUploaded: treeItems.length,
        repoUrl: `https://github.com/${owner}/${repoName}`
    });
});

