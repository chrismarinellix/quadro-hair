# Deployment Guide - Quadro Hair Website

This guide covers deploying the Quadro Hair website to Netlify.

## IMPORTANT: Git Workflow

**We work directly on the `main` branch only:**
- ✅ No dev branch
- ✅ Old static index.html removed
- ✅ React app is the only site
- ✅ Commit directly to main
- ✅ Push triggers automatic Netlify deployment

## Prerequisites

- Node.js and npm installed
- Netlify account connected to GitHub repository
- Git installed

## Production URLs

- **Primary:** https://quadrohair.netlify.app
- **Custom Domain:** https://quadrohairteam.com.au

## Automatic Deployment (Current Setup)

The site is configured for **automatic deployment** via Netlify + GitHub integration:

1. **Make changes locally**
2. **Test in development:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173

3. **Commit to main:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push to GitHub main branch:**
   ```bash
   git push origin main
   ```

5. **Netlify automatically:**
   - Detects the push to main
   - Runs `npm run build`
   - Deploys `dist/` folder to production
   - Updates both quadrohair.netlify.app and quadrohairteam.com.au

## Netlify Configuration

Configuration in `netlify.toml`:

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

## Build the Project Locally

To test the build before pushing:

```bash
cd quadro-hair
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Visit http://localhost:4173 to preview the production build.

## Custom Domain Setup

### Current Configuration

- **Custom Domain:** quadrohairteam.com.au
- **DNS:** Configured through GoDaddy with Netlify nameservers
- **SSL:** Automatic HTTPS via Netlify (Let's Encrypt)

### DNS Settings (Already Configured)

Domain uses Netlify DNS nameservers in GoDaddy:
- Netlify handles all DNS routing
- Automatic SSL certificate provisioning
- HTTPS redirect enabled

## Pre-Deployment Checklist

Before pushing changes to main:

- [ ] Build passes without errors (`npm run build`)
- [ ] Test locally (`npm run dev`)
- [ ] All images optimized and loading
- [ ] Mobile responsive tested
- [ ] Contact info correct:
  - Mobile: 0418 533 927
  - Salon: 9561 7822
  - Location: Brandon Park Shopping Centre
- [ ] SMS booking links work
- [ ] Navigation links work
- [ ] Carousel rotating correctly
- [ ] All sections present (About, Specialties, Nanoplasty, Gallery, Testimonials, Contact)

## Post-Deployment Testing

After Netlify deploys (usually 1-2 minutes):

1. **Test both URLs:**
   - https://quadrohair.netlify.app
   - https://quadrohairteam.com.au

2. **Verify phone numbers clickable on mobile:**
   - Mobile: tel:0418533927
   - Salon: tel:95617822
   - SMS: sms:0418533927

3. **Check responsive design on:**
   - iPhone (Safari)
   - Android (Chrome)
   - Tablet (iPad)
   - Desktop (Chrome, Firefox, Safari)

4. **Test all sections:**
   - Hero carousel (5-second rotation)
   - About section
   - Specialties cards
   - Nanoplasty tabs (Benefits, Comparison, Process)
   - Women's Gallery
   - Men's Gallery
   - Testimonials (10 reviews)
   - Contact section with map
   - Footer with social media

5. **Verify performance:**
   - Run Lighthouse audit (target 95+)
   - Check page load time
   - Verify images load quickly

## Rollback

If you need to rollback to a previous version:

1. **In Netlify Dashboard:**
   - Go to Deploys tab
   - Find the previous successful deploy
   - Click three dots → "Publish deploy"

2. **Or revert via Git:**
   ```bash
   git revert HEAD
   git push origin main
   ```

## Monitoring Deployments

### View Deploy Status

- Netlify Dashboard: https://app.netlify.com
- Deploy logs show real-time build progress
- Email notifications on deploy success/failure

### Recent Deploys

Netlify dashboard shows:
- Deploy time and duration
- Commit message
- Deploy preview
- Build logs

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Changes Not Showing

1. Wait 1-2 minutes for deploy to complete
2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Clear browser cache
4. Check Netlify deploy logs for errors

### CSS Not Loading

- Verify `dist` folder has all CSS files
- Check build logs in Netlify
- Clear Netlify cache and redeploy

### Routing Issues

- Ensure `netlify.toml` has redirect rules
- SPA routing configured for React Router (if added)

## Performance Optimization

### Images

- Keep images under 500KB
- Use WebP format when possible
- Optimize before adding to `public/` folder

### Build Optimization

Vite automatically:
- Minifies JavaScript and CSS
- Optimizes chunks
- Tree-shakes unused code
- Generates source maps

## Support

For deployment issues:
- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://www.netlify.com/support
- **GitHub Issues:** Check repo issues tab

---

## Quick Reference

### Local Development
```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build (localhost:4173)
```

### Git Workflow (Main Branch Only)
```bash
git add .
git commit -m "Your changes"
git push origin main  # Auto-deploys to Netlify
```

### Important Reminders

- ✅ Work on **main** branch only
- ✅ No dev branch anymore
- ✅ Old static HTML site removed
- ✅ Push to main = automatic deploy
- ✅ Wait 1-2 minutes for deploy to complete
- ✅ Test on both URLs after deploy

### Site Information

**Quadro Hair Salon**
- Location: Brandon Park Shopping Centre (Next to NAB), Mulgrave VIC 3170
- Mobile: 0418 533 927
- Salon: 9561 7822
- Instagram: @quadrohairteam
- Hours: Mon-Fri 9AM-6PM, Sat 9AM-5PM, Sun Closed

**Services:**
- Nanoplasty Treatment (Hero Service - $350+)
- Blonde Specialists
- Balayage
- Lived-in Colours
- Brunettes
- Men's Styling
