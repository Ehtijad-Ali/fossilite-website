# Deployment Guide

This guide explains how to deploy the Fossilite website to GitHub Pages and Vercel.

## Issues Fixed

The blank white screen issue was caused by:
1. **Missing `homepage` field in package.json** - This is critical for GitHub Pages to resolve asset paths correctly
2. **Base path configuration** - Already properly configured in vite.config.ts to handle both GitHub Pages and Vercel

## Changes Made

### 1. Updated `package.json`
Added the `homepage` field to ensure correct asset path resolution:
```json
{
  "homepage": "https://ehtijad-ali.github.io/fossilite-website"
}
```

### 2. Verified `vite.config.ts`
The base path is already correctly configured:
- **Vercel**: Uses `/` (root)
- **GitHub Pages**: Uses `/fossilite-website/` (repository name)

### 3. Verified `vercel.json`
Contains the correct rewrite rule for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 4. Verified `public/404.html`
Contains the SPA redirect script for GitHub Pages deep linking.

---

## Deployment Instructions

### GitHub Pages Deployment

#### Option 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Go to your repository Settings → Pages
3. Under "Build and deployment" → "Source", select "GitHub Actions"
4. Push to main branch to trigger deployment

#### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist -b gh-pages
```

Or using the `homepage` field in package.json, add this script:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist -b gh-pages"
  }
}
```

Then run:
```bash
npm run deploy
```

#### Option 3: Using git subtree

```bash
# Build
npm run build

# Deploy using subtree
git subtree push --prefix dist origin gh-pages
```

---

### Vercel Deployment

#### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production:
```bash
vercel --prod
```

#### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect the Vite configuration
4. Click "Deploy"

The `vercel.json` file is already configured with the correct rewrite rules for SPA routing.

#### Option 3: Using Vercel Git Integration

1. Push your code to GitHub
2. Go to Vercel Dashboard
3. Click "Add New Project"
4. Import your repository
5. Vercel will automatically:
   - Detect the framework (Vite)
   - Use the build command: `npm run build`
   - Use the output directory: `dist`
   - Apply the `vercel.json` configuration

---

## Verification Steps

After deployment, verify:

### 1. Check Asset Loading
- Open browser DevTools (F12)
- Go to Network tab
- Refresh the page
- Ensure all assets (JS, CSS, images) load with status 200
- Check that asset paths include `/fossilite-website/` for GitHub Pages

### 2. Check Console for Errors
- Open browser Console (F12)
- Look for any 404 errors or JavaScript errors
- There should be no errors related to missing assets

### 3. Test Navigation
- Click through all navigation links
- Test direct URL access (e.g., `/about`, `/products`)
- Refresh on different routes to ensure SPA routing works

### 4. Test on Different Environments

#### Local Testing:
```bash
# Test GitHub Pages build locally
npm run build
npm run preview
# Visit: http://localhost:4173/fossilite-website/
```

#### Production Testing:
- **GitHub Pages**: `https://ehtijad-ali.github.io/fossilite-website/`
- **Vercel**: Your Vercel deployment URL

---

## Common Issues and Solutions

### Issue: Blank White Screen

**Cause**: Assets not loading due to incorrect base path

**Solution**: 
- Ensure `homepage` field is set in package.json
- Ensure `vite.config.ts` has correct base path configuration
- Rebuild and redeploy

### Issue: 404 on Refresh

**Cause**: SPA routing not configured correctly

**Solution**:
- For GitHub Pages: Ensure `public/404.html` exists and is copied to `dist/`
- For Vercel: Ensure `vercel.json` has rewrite rules

### Issue: Assets Loading from Root Instead of Subdirectory

**Cause**: Missing or incorrect `homepage` field

**Solution**:
```json
{
  "homepage": "https://ehtijad-ali.github.io/fossilite-website"
}
```

### Issue: Styles Not Loading

**Cause**: CSS files not found due to incorrect paths

**Solution**:
- Check that `vite.config.ts` base path is correct
- Rebuild the project
- Clear browser cache

---

## Build Configuration Summary

### package.json
- `homepage`: Set to GitHub Pages URL
- `build`: `tsc -b && vite build`
- `preview`: `vite preview` (for local testing)

### vite.config.ts
- `base`: Dynamic based on environment
  - Vercel: `/`
  - GitHub Pages: `/fossilite-website/`
- `build.outputs`: Code splitting for optimal loading

### vercel.json
- SPA routing rewrite rule configured

### public/404.html
- GitHub Pages SPA redirect script included

---

## Quick Deployment Checklist

- [ ] `homepage` field added to package.json ✓
- [ ] `vite.config.ts` base path configured ✓
- [ ] `vercel.json` configured ✓
- [ ] `public/404.html` exists ✓
- [ ] Build completes without errors ✓
- [ ] Local preview works with base path ✓
- [ ] Deployed to GitHub Pages
- [ ] Deployed to Vercel
- [ ] Tested navigation on production
- [ ] Tested direct URL access on production
- [ ] No console errors in production

---

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify asset paths in Network tab
3. Ensure all configuration files are committed to git
4. Rebuild the project after making changes
5. Clear browser cache and test again