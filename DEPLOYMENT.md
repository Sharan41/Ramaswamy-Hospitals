# Deployment Guide

Complete deployment documentation for the Dr. Ramaswamy Hospitals website.

## Current Deployment Setup

**Hosting**: Render (https://render.com)  
**Domain**: Wix-purchased domain  
**Live URL**: https://www.ramaswamyhospitals.com/  
**Repository**: GitHub  
**Auto-Deploy**: Enabled (on push to main branch)

---

## Table of Contents

1. [Overview](#overview)
2. [Render Deployment](#render-deployment)
3. [Domain Configuration](#domain-configuration)
4. [Environment Setup](#environment-setup)
5. [Deployment Process](#deployment-process)
6. [Troubleshooting](#troubleshooting)
7. [Alternative Deployment Options](#alternative-deployment-options)

---

## Overview

### Current Architecture

```
GitHub Repository
       ↓
   (git push)
       ↓
Render (Auto-build & Deploy)
       ↓
   Static Files
       ↓
Wix Domain (DNS)
       ↓
https://www.ramaswamyhospitals.com/
```

### Deployment Flow

1. Developer pushes code to GitHub
2. Render detects the push via webhook
3. Render runs `npm run build` automatically
4. Render serves the static files from `dist/` folder
5. Domain points to Render URL
6. Site is live at https://www.ramaswamyhospitals.com/

---

## Render Deployment

### Initial Setup (Already Done)

This section documents the initial setup for reference.

#### Step 1: Create Render Account

1. Go to https://render.com/
2. Sign up with GitHub account
3. Authorize Render to access your GitHub repositories

#### Step 2: Create New Static Site

1. Click **"New +"** → **"Static Site"**
2. Connect your GitHub repository
3. Configure build settings:
   - **Name**: `ramaswamy-hospitals` (or your choice)
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Auto-Deploy**: Yes

#### Step 3: Configure for React Router

**Important**: For React Router to work correctly, you need to configure redirects.

Add a `render.yaml` file in the project root:

```yaml
services:
  - type: web
    name: ramaswamy-hospitals
    env: static
    buildCommand: npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

**OR** manually configure in Render Dashboard:
- Go to **Settings** → **Redirects/Rewrites**
- Add rule: `/*` → `/index.html` (SPA)

#### Step 4: Deploy

1. Click **"Create Static Site"**
2. Render will automatically build and deploy
3. You'll get a Render URL: `https://ramaswamy-hospitals.onrender.com`

### Current Configuration

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `dist`
- Node Version: 18+ (specified in render.yaml or auto-detected)

**Environment:**
- Environment: `static`
- Auto-Deploy: Enabled on `main` branch
- Branch Deploys: Optional (can enable for preview branches)

**Custom Domain:**
- Primary Domain: `www.ramaswamyhospitals.com`
- Redirect: `ramaswamyhospitals.com` → `www.ramaswamyhospitals.com`

---

## Domain Configuration

### Wix Domain Setup

#### Step 1: Get Render DNS Information

1. Go to Render Dashboard → Your Static Site
2. Click **Settings** → **Custom Domain**
3. Add your domain: `www.ramaswamyhospitals.com`
4. Render will show DNS records to add:
   - **CNAME** record for `www`
   - **A** record for root domain (optional)

Example:
```
Type: CNAME
Name: www
Value: ramaswamy-hospitals.onrender.com
```

#### Step 2: Configure in Wix

1. Go to Wix Dashboard
2. Navigate to **Domains** settings
3. Click your domain → **Manage DNS**
4. Add the DNS records from Render:

**For www subdomain:**
```
Type: CNAME
Host: www
Points to: ramaswamy-hospitals.onrender.com
TTL: 3600 (or automatic)
```

**For root domain (optional):**
```
Type: A
Host: @
Points to: [Render IP address]
TTL: 3600
```

**OR use redirect:**
```
Type: Redirect
From: ramaswamyhospitals.com
To: www.ramaswamyhospitals.com
```

#### Step 3: Wait for DNS Propagation

- DNS changes can take **1-48 hours** to propagate
- Usually takes 1-4 hours
- Check status: https://dnschecker.org

#### Step 4: Verify in Render

1. Return to Render Dashboard
2. Wait for SSL certificate to be issued automatically
3. Verify site is accessible at https://www.ramaswamyhospitals.com/

### SSL Certificate

**Automatic SSL:**
- Render automatically provides free SSL via Let's Encrypt
- Renews automatically
- No configuration needed

**Force HTTPS:**
- Render automatically redirects HTTP to HTTPS
- No additional configuration needed

---

## Environment Setup

### Environment Variables

Currently, the project **does not require environment variables** for basic functionality.

If you need to add environment variables in the future:

#### In Render Dashboard:

1. Go to **Settings** → **Environment**
2. Click **Add Environment Variable**
3. Add key-value pairs:
   ```
   VITE_API_URL=https://api.example.com
   VITE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

#### In Code:

Access via `import.meta.env`:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

**Note**: Vite requires `VITE_` prefix for environment variables exposed to client.

### Build Configuration

**Vite Config** (`vite.config.js`):

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

**No changes needed** - already configured correctly.

---

## Deployment Process

### Manual Deployment

#### Option 1: Git Push (Recommended)

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push origin main
```

Render automatically detects and deploys.

#### Option 2: Manual Deploy in Render

1. Go to Render Dashboard
2. Click **Manual Deploy** → **Deploy latest commit**
3. Wait for build to complete

### Deployment Checklist

Before deploying:

- ✅ Test locally with `npm run dev`
- ✅ Run build test: `npm run build`
- ✅ Check for linter errors: `npm run lint`
- ✅ Verify all images load correctly
- ✅ Test on mobile viewport
- ✅ Check both English and Telugu content
- ✅ Review console for errors
- ✅ Test all links and navigation

### Deployment Timeline

Typical deployment time: **2-5 minutes**

**Stages:**
1. Render detects push: 10-30 seconds
2. Install dependencies: 1-2 minutes
3. Build project: 30-60 seconds
4. Deploy to CDN: 10-30 seconds
5. DNS propagation (if domain change): Instant to 48 hours

### Monitoring Deployment

#### In Render Dashboard:

1. Go to your static site
2. View **Logs** tab for build output
3. Check **Events** tab for deployment history
4. Monitor **Metrics** for traffic and performance

#### Check Deployment Status:

```bash
# Check if site is live
curl -I https://www.ramaswamyhospitals.com/

# Should return HTTP 200 OK
```

---

## Troubleshooting

### Common Issues

#### 1. Build Fails on Render

**Symptoms:**
- Red failed status in Render dashboard
- Build logs show errors

**Solutions:**

**Check Node Version:**
```bash
# Ensure local Node matches Render
node --version  # Should be 18+
```

Add to `package.json`:
```json
"engines": {
  "node": ">=18.0.0"
}
```

**Check Build Locally:**
```bash
npm run build
```
Fix any errors shown.

**Check Dependencies:**
```bash
npm ci  # Clean install
npm run build
```

**Common Errors:**
- Missing dependencies: Run `npm install <package>`
- Import errors: Check file paths (case-sensitive on Linux)
- Image errors: Verify all images exist in `src/assets/`

#### 2. 404 Errors on Page Refresh

**Symptoms:**
- Home page works
- Refresh on `/about` shows 404

**Solution:**
Add redirect rule (see [Render Configuration](#step-3-configure-for-react-router))

Create `render.yaml`:
```yaml
routes:
  - type: rewrite
    source: /*
    destination: /index.html
```

#### 3. Images Not Loading

**Symptoms:**
- Broken image icons
- 404 errors in console

**Solutions:**

**Check import paths:**
```javascript
// ✅ Correct
import logo from '../assets/logo.jpg'

// ❌ Wrong
import logo from '/assets/logo.jpg'  // Missing src/
```

**Check file exists:**
```bash
ls src/assets/logo.jpg
```

**Check case sensitivity:**
- Filenames are case-sensitive on Linux/Render
- `Logo.jpg` ≠ `logo.jpg`

#### 4. Changes Not Appearing

**Symptoms:**
- Deployed successfully but changes not visible

**Solutions:**

**Clear browser cache:**
- Chrome: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Hard reload: Ctrl+F5

**Check correct branch deployed:**
```bash
git branch  # Should show * main
git log     # Verify latest commit
```

**Check Render logs:**
- Verify build includes your changes
- Check timestamp of deployment

**Verify files in build:**
```bash
npm run build
ls dist/  # Check build output
```

#### 5. Domain Not Working

**Symptoms:**
- Render URL works, custom domain doesn't

**Solutions:**

**Check DNS propagation:**
- Visit https://dnschecker.org
- Enter `www.ramaswamyhospitals.com`
- Wait if not fully propagated

**Verify DNS settings in Wix:**
```
CNAME: www → ramaswamy-hospitals.onrender.com
```

**Check SSL certificate:**
- Render Dashboard → Settings → Custom Domain
- SSL should be "Active"
- If "Verifying", wait a few hours

**Try without www:**
- `https://ramaswamyhospitals.com` vs `https://www.ramaswamyhospitals.com`
- Set up redirect if needed

#### 6. Slow Loading

**Solutions:**

**Optimize images:**
```bash
# Use TinyPNG or Squoosh
# Target: < 500KB per image
```

**Check bundle size:**
```bash
npm run build
# Review dist/ folder sizes
```

**Enable caching:**
- Render automatically caches static assets
- Verify in Network tab (DevTools)

**Code splitting:**
- Already implemented via React Router lazy loading

---

## Alternative Deployment Options

If you need to move away from Render in the future:

### Option 1: Netlify

**Pros:** Free tier, easy setup, great DX
**Setup:**
1. Connect GitHub repo
2. Build: `npm run build`
3. Publish: `dist`
4. Add redirect: `_redirects` file with `/* /index.html 200`

### Option 2: Vercel

**Pros:** Fast, optimized for React, free tier
**Setup:**
1. Import GitHub project
2. Framework: Vite
3. Auto-detects settings
4. Automatic deployment

### Option 3: GitHub Pages

**Pros:** Free, integrated with GitHub
**Cons:** Requires configuration for custom domain
**Setup:**
1. Add `gh-pages` package
2. Configure `vite.config.js` with base
3. Deploy: `npm run build && npm run deploy`

### Option 4: Traditional Hosting (Hostinger, etc.)

**Setup:**
1. Build: `npm run build`
2. Upload `dist/` folder contents to `public_html/`
3. Configure `.htaccess` for React Router:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Deployment Best Practices

### Version Control

- ✅ Always commit with meaningful messages
- ✅ Never commit `node_modules/` or `dist/`
- ✅ Use `.gitignore` properly
- ✅ Tag releases: `git tag v1.0.0`

### Testing

- ✅ Test locally before deploying
- ✅ Test on multiple devices
- ✅ Test both languages
- ✅ Check browser console for errors

### Backups

- ✅ GitHub serves as backup
- ✅ Keep local copy of repository
- ✅ Tag stable versions
- ✅ Document major changes

### Monitoring

- ✅ Check Render dashboard weekly
- ✅ Monitor site uptime
- ✅ Review error logs
- ✅ Check performance metrics

### Security

- ✅ Keep dependencies updated: `npm update`
- ✅ Review security advisories: `npm audit`
- ✅ Use HTTPS (automatic with Render)
- ✅ Don't commit secrets or API keys

---

## Quick Reference

### Render Dashboard URLs

- Main Dashboard: https://dashboard.render.com/
- Your Site: https://dashboard.render.com/static/[your-site-id]
- Logs: https://dashboard.render.com/static/[your-site-id]/logs
- Settings: https://dashboard.render.com/static/[your-site-id]/settings

### Important Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy (via Git)
git push origin main
```

### Important Files

- `vite.config.js` - Vite configuration
- `render.yaml` - Render deployment config
- `package.json` - Dependencies and scripts
- `.gitignore` - Git ignore rules
- `index.html` - HTML template

---

## Support

### Need Help?

**Render Support:**
- Documentation: https://render.com/docs
- Community: https://community.render.com/
- Status: https://status.render.com/

**Wix Support:**
- Help Center: https://support.wix.com/
- Domain Management: Wix Dashboard → Domains

**Developer Support:**
- **Contact**: Sai Sharan V
- **Email**: [saisharanvishnu@gmail.com](mailto:saisharanvishnu@gmail.com)
- **Phone**: [+91 63839 91383](tel:+916383991383)
- **Rate**: ₹1,000/hour for deployment assistance

---

**Last Updated**: January 2025  
**Deployment Status**: ✅ Live at https://www.ramaswamyhospitals.com/

