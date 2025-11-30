# Deployment Guide - Quadro Hair Website

This guide covers deploying the Quadro Hair website to Netlify.

## Prerequisites

- Node.js and npm installed
- Netlify account (free tier is sufficient)
- Netlify CLI installed: `npm install -g netlify-cli`
- Git installed

## Build the Project

Before deploying, always build the project locally to ensure there are no errors:

```bash
cd quadro-hair
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

1. **Login to Netlify:**
   ```bash
   netlify login
   ```

2. **Initialize Netlify (First Time Only):**
   ```bash
   netlify init
   ```

   Follow the prompts:
   - Create & configure a new site
   - Choose your team
   - Site name: `quadro-hair` (or your preferred name)
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy to Production:**
   ```bash
   netlify deploy --prod
   ```

4. **Your site will be live at:**
   `https://quadro-hair.netlify.app` (or your custom domain)

### Option 2: Netlify Web Interface

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit https://app.netlify.com
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder

3. **Configure site settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

### Option 3: Connect GitHub Repository

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Quadro Hair website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/quadro-hair.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Automatic deployments:**
   - Every push to main branch will auto-deploy
   - Preview deployments for pull requests

## Custom Domain Setup

### Using Netlify's Domain

Your site will be available at: `https://YOUR-SITE-NAME.netlify.app`

### Using Custom Domain

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `www.quadrohair.com.au`)

2. **Configure DNS:**
   - Add Netlify's nameservers to your domain registrar, OR
   - Add a CNAME record pointing to your Netlify URL

3. **Enable HTTPS:**
   - Netlify provides free SSL certificates
   - Enable HTTPS redirect in settings

## Environment Variables (If Needed)

If you add any API keys or secrets:

1. **Create `.env` file** (don't commit this!):
   ```
   VITE_API_KEY=your_key_here
   ```

2. **Add to Netlify:**
   - Site settings → Environment variables
   - Add each variable

3. **Update `.gitignore`:**
   ```
   .env
   .env.local
   ```

## Performance Optimization

### Before Deployment Checklist

- [ ] Build passes without errors
- [ ] All images optimized
- [ ] Lighthouse score >90
- [ ] Mobile responsive tested
- [ ] All links working
- [ ] Contact phone number correct (9561 7822)
- [ ] Forms working (if added)

### Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## Post-Deployment Testing

1. **Test all links and navigation**
2. **Verify phone number clickable on mobile:** tel:95617822
3. **Check responsive design on:**
   - iPhone (Safari)
   - Android (Chrome)
   - Tablet (iPad)
   - Desktop (Chrome, Firefox, Safari)
4. **Verify animations:**
   - Pulsating orb
   - Scroll effects
   - Hover states
5. **Test performance:**
   - Run Lighthouse audit
   - Check page load time
   - Verify images load

## Continuous Deployment Workflow

1. **Make changes locally**
2. **Test in development:**
   ```bash
   npm run dev
   ```
3. **Build and test:**
   ```bash
   npm run build
   npm run preview
   ```
4. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
5. **Push to GitHub:**
   ```bash
   git push
   ```
6. **Netlify auto-deploys** (if connected to GitHub)

## Rollback

If you need to rollback to a previous version:

1. **In Netlify Dashboard:**
   - Go to Deploys
   - Find the previous successful deploy
   - Click "Publish deploy"

## Monitoring

### Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics or other analytics code -->
```

### Performance Monitoring

- Use Netlify Analytics (paid add-on)
- Or integrate Google Analytics
- Monitor Core Web Vitals

## Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading

- Check `index.html` imports
- Verify `dist` folder structure
- Clear Netlify cache and rebuild

### Routing Issues

- Ensure `netlify.toml` has redirect rules
- Check SPA routing configuration

## Support

For deployment issues:
- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support

---

## Quick Reference

**Deploy to Netlify:**
```bash
npm run build
netlify deploy --prod
```

**Preview deploy:**
```bash
netlify deploy
```

**Check deploy status:**
```bash
netlify status
```

**Open site:**
```bash
netlify open:site
```
