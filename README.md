# Quadro Hair - Nano Plaster Treatment Website

A professional, modern website promoting Nano Plaster keratin hair treatment services for Quadro Hair salon in Sydney, Australia.

## Overview

This website showcases the revolutionary Nano Plaster (Nanoplasty) hair treatment - a formaldehyde-free keratin smoothing service that lasts 6-12 months. The site features:

- **Hero Section** with glassmorphic pulsating orb animation
- **About Section** explaining Nano Plaster technology
- **Benefits Section** with interactive tabs covering:
  - Key Benefits (6 benefit cards)
  - Competitor Comparison table (vs Brazilian Blowout, Cezanne, Traditional Keratin)
  - 5-step Process Timeline
- **Gallery Section** with before/after SVG illustrations
- **Contact Section** with booking CTA and salon information
- Fully responsive design
- Smooth scroll navigation
- Modern glassmorphic UI elements

## Technology Stack

- **React** 19.2.0 - UI framework
- **Vite** 7.2.4 - Build tool and dev server
- **CSS3** - Custom styling with animations
- **SVG** - Custom hair illustrations

## Key Features

### Nano Plaster Treatment Benefits

- 6-12 months duration (vs 2-4 months for traditional treatments)
- 100% formaldehyde-free
- 100% frizz reduction
- Repairs damaged hair
- Cost-effective long-term solution
- Time-saving daily styling

### Design Features

- **Glassmorphism** - Modern frosted glass effects
- **Smooth Animations** - Fade-ins, pulse effects, floating orb
- **Responsive** - Mobile-first design
- **Accessible** - Semantic HTML, ARIA labels
- **Fast** - Optimized with Vite
- **SEO-Friendly** - Proper meta tags and structure

## Project Structure

```
quadro-hair/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
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

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Netlify Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### GitHub Pages Deployment

1. Update `vite.config.js` to set the base path
2. Build and deploy using GitHub Actions or manually

## Contact Information

**Quadro Hair Salon**
- Phone: 9561 7822
- Contact: Dominic or Maria
- Location: Sydney, Australia

## Customization

### Colors

The site uses CSS custom properties for easy theming. Update in `App.css`:

```css
:root {
  --primary-color: #D4AF37;     /* Gold */
  --secondary-color: #8B7355;   /* Brown */
  --accent-color: #E5C294;      /* Light Gold */
}
```

### Content

All content is in `src/App.jsx`:
- Hero section text
- About section information
- Benefits and features
- Comparison table data
- Contact information

### Animations

Pulsating orb animation can be customized in `App.css`:
- `@keyframes pulse` - Scale and opacity
- `@keyframes float` - Vertical movement
- `@keyframes shine` - Inner glow effect

## Best Practices

### Hair Salon Web Design

This site follows industry best practices for hair salon websites:

1. **Visual Impact** - Striking hero with animated elements
2. **Clear CTA** - Prominent "Book Now" buttons
3. **Social Proof** - Before/after gallery
4. **Educational** - Detailed treatment information
5. **Easy Contact** - Phone number prominently displayed
6. **Mobile-First** - Responsive for all devices
7. **Fast Loading** - Optimized images and code
8. **Professional** - Clean, modern design

### SEO Optimization

- Semantic HTML5 structure
- Descriptive meta tags
- Alt text for all images
- Fast page load times
- Mobile-responsive
- Clean URLs
- Proper heading hierarchy

## Maintenance

### Adding New Content

1. Update text in `src/App.jsx`
2. Add new images to `public/` folder
3. Reference images in JSX components

### Updating Styles

1. Modify `src/App.css` for component styles
2. Modify `src/index.css` for global styles

## Performance

- Lighthouse Score: ~95+ (target)
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Optimized with Vite's build process

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private project for Quadro Hair Salon

## Credits

Designed and developed for Quadro Hair - Sydney's Premier Nano Plaster Specialists

---

**Note:** This is a professional hair salon website. All content, design, and branding are property of Quadro Hair Salon.
