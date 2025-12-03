# Quadro Hair - Looking Good, Feeling Good

A professional, modern website for Quadro Hair salon in Melbourne, Brandon Park. Featuring our revolutionary Nanoplasty treatment and full-service hair color and styling.

## Overview

This website showcases Quadro Hair's premium services including Nanoplasty (formaldehyde-free keratin treatment lasting 6-12 months) and expert color services. The site features:

- **Hero Section** with rotating image carousel
- **About Section** introducing Quadro Hair Team
- **Specialties Section** showcasing:
  - Blonde Specialists
  - Balayage
  - Lived-in Colours
  - Brunettes
- **Nanoplasty Section** with interactive tabs covering:
  - Key Benefits (6 benefit cards)
  - Competitor Comparison table
  - 5-step Process Timeline
- **Women's & Men's Gallery Sections** with real client photos
- **Testimonials Section** with 10 customer reviews
- **Contact Section** with SMS booking, maps, hours, and location details
- Fully responsive design
- Smooth scroll navigation
- Modern UI with clean aesthetics

## Technology Stack

- **React** 19.2.0 - UI framework with hooks (useState, useEffect)
- **Vite** 7.2.4 - Build tool and dev server
- **CSS3** - Custom styling with animations
- **Netlify** - Hosting and continuous deployment

## Location

**Quadro Hair Salon**
- Brandon Park Shopping Centre (Next to NAB)
- Springvale Road & Ferntree Gully Road
- Mulgrave VIC 3170
- Free parking available

**Contact:**
- Mobile: 0418 533 927
- Salon: 9561 7822
- Ask for Dominic or Maria
- Instagram: @quadrohairteam

**Hours:**
- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 9:00 AM - 5:00 PM
- Sunday: Closed

## Key Services

### Nanoplasty Treatment (Hero Service)
- 6-12 months duration
- 100% formaldehyde-free
- 100% frizz reduction
- Repairs damaged hair
- Starting from $350

### Color Services
- Blonde Specialists (platinum to honey)
- Balayage (hand-painted highlights)
- Lived-in Colours (low-maintenance)
- Brunettes (chocolate to caramel)

## Project Structure

```
quadro-hair/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets (images)
├── social-media-content/ # Social media posts
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies
└── README.md           # This file
```

## Local Development

### Installation

```bash
cd quadro-hair
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Git Workflow

**IMPORTANT:** We work directly on the `main` branch only.
- No dev branch
- Old static index.html removed
- Commit directly to main
- Push triggers automatic Netlify deployment

### Netlify Deployment (Automatic)

1. Push to main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Netlify automatically:
   - Detects the push
   - Runs `npm run build`
   - Deploys `dist/` folder
   - Updates production site

### Production URLs

- Primary: https://quadrohair.netlify.app
- Custom Domain: https://quadrohairteam.com.au

### Netlify Configuration

Build settings in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

## Customization

### Colors

The site uses CSS custom properties. Update in `App.css`:

```css
:root {
  --primary-color: #D4AF37;     /* Gold */
  --secondary-color: #8B7355;   /* Brown */
  --accent-color: #E5C294;      /* Light Gold */
}
```

### Content

All content is in `src/App.jsx`:
- Hero carousel images
- About section
- Specialties
- Nanoplasty benefits
- Gallery images
- Testimonials
- Contact information

### Images

Add images to `public/` folder and reference in JSX:
```jsx
<img src="/your-image.png" alt="Description" />
```

## Features

### SMS Booking
- Pre-filled SMS messages for easy appointment booking
- Direct links to text mobile: 0418 533 927

### Interactive Elements
- Hero image carousel (5-second rotation)
- Tabbed Nanoplasty benefits section
- Hover effects on cards and buttons
- Smooth scroll navigation

### Responsive Design
- Mobile-first approach
- Breakpoints at 968px and 640px
- Flexible grid layouts
- Touch-friendly buttons

## Performance

- Lighthouse Score: 95+ target
- Fast with Vite's optimized build
- Lazy loading ready
- Optimized images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance Notes

### Adding New Images
1. Add to `public/` folder
2. Reference in App.jsx
3. Commit and push to deploy

### Updating Content
1. Edit `src/App.jsx`
2. Test locally: `npm run dev`
3. Commit and push to deploy

### Social Media Content
Pre-written posts in `social-media-content/` folder:
- Introduction post
- Comparison post
- Benefits/lifestyle post
- Science education post
- Testimonial CTA post

## Important Reminders

- ✅ Work on `main` branch only
- ✅ No more dev branch
- ✅ Old static HTML site removed
- ✅ React app is the only site
- ✅ Push to main = automatic deploy
- ✅ Local dev: http://localhost:5173
- ✅ Production: quadrohair.netlify.app & quadrohairteam.com.au

## Credits

Designed and developed for Quadro Hair - Melbourne's Premier Hair Specialists

**Services:** Nanoplasty, Blonde Specialists, Balayage, Lived-in Colours, Brunettes, Men's Styling

---

**Note:** This is a professional hair salon website. All content, design, and branding are property of Quadro Hair Salon.
