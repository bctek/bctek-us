# CLOUDFLARE & DEPLOYMENT SYSTEM MEMORY

This file stores persistent deployment configuration and Cloudflare account details for AI agents.

## 1. Cloudflare Environment
- **Account Email:** `bachancellor@gmail.com`
- **Account ID:** `0e20021c89cc91125158664af924ef95`
- **Config Location:** `/Users/bc/.wrangler/config/default.toml`
- **Primary Worker:** `bctek-site`
- **Live Worker Endpoint:** `https://bctek-site.bachancellor.workers.dev`

## 2. GitHub & CI/CD
- **Local Path:** `/Users/bc/Projects/bctek-site`
- **GitHub Repository:** `https://github.com/bctek/bctek-us`
- **Deployment Script:** `npx wrangler deploy --name bctek-site`
- **GitHub Workflow:** `.github/workflows/deploy.yml`

## 3. Worker Bindings
- **KV Namespace:** `SESSION`
- **Images Binding:** `IMAGES`
- **Assets Bucket:** `./dist`
