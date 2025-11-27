# Moveroo Website

> Reimagining the relocation experience with transparent pricing, dependable partners and friendly support.

Modern, lightweight marketing website built with [Astro](https://astro.build), TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/iamjasonhill/moveroowebsite.git
cd moveroowebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the site.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🏗️ Project Structure

```
moveroowebsite/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Welcome.astro
│   │   └── sections/      # Page sections
│   │       ├── Hero.astro
│   │       ├── Features.astro
│   │       ├── Pricing.astro
│   │       ├── Testimonials.astro
│   │       └── QuoteCta.astro
│   ├── layouts/
│   │   └── Layout.astro   # Master page layout
│   ├── pages/             # File-based routing
│   │   ├── index.astro    # Home page
│   │   ├── services.astro
│   │   ├── moving-cars.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms-of-use.astro
│   │   ├── terms-and-conditions-transport.astro
│   │   ├── 404.astro      # Custom error page
│   │   └── robots.txt.ts  # Dynamic robots.txt
│   └── styles/
│       └── global.css     # Global styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── vercel.json            # Deployment config
```

## 🛠️ Tech Stack

- **Framework**: [Astro 5.14+](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS 4.1+](https://tailwindcss.com) - Utility-first CSS
- **Language**: TypeScript - Type safety
- **Analytics**: Google Analytics (via Partytown)
- **Deployment**: [Vercel](https://vercel.com)

### Key Integrations

- **@astrojs/sitemap** - Automatic XML sitemap generation
- **@astrojs/partytown** - Offload analytics to web workers for better performance
- **Tailwind CSS** - Utility-first styling

## 🎨 Styling

This project uses Tailwind CSS 4.1 with custom configuration:

- **Primary Color**: Emerald (`emerald-700`, `emerald-500`)
- **Text Colors**: Slate scale
- **Dark Mode**: Class-based (`.dark`)
- **Responsive**: Mobile-first approach

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, pricing, testimonials |
| `/services/` | Service offerings overview |
| `/moving-cars/` | Vehicle transport information |
| `/contact/` | Contact form and information |
| `/privacy-policy/` | Privacy policy |
| `/terms-of-use/` | Terms of use |
| `/terms-and-conditions-transport/` | Transport T&Cs |
| `/404/` | Custom 404 error page |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Site Configuration
PUBLIC_SITE_URL=https://moveroo.com.au

# Analytics (optional)
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_ANALYTICS_WEBSITE_ID=your-website-id
```

### SEO

The site includes:
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data (JSON-LD) for Organization, WebSite, and Service schemas
- XML sitemap at `/sitemap-index.xml`
- Robots.txt at `/robots.txt`

### Security Headers

Production deployment includes security headers via `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically on push to `main`

The site is configured for Vercel with:
- Automatic builds on push
- Cache headers for static assets (1 year)
- Security headers
- Edge network delivery

### Manual Build

```bash
npm run build
# Output in ./dist/
```

Deploy the `dist/` folder to any static hosting service.

## 📊 Performance

- **Build Size**: ~293KB (highly optimized)
- **Static-First**: Pre-rendered HTML for instant loads
- **Zero JavaScript**: Minimal client-side JS (only for mobile nav)
- **Analytics**: Loaded via Partytown (non-blocking)
- **Caching**: Aggressive caching for static assets

## ♿ Accessibility

- Semantic HTML5
- ARIA labels and attributes
- Skip-to-content link
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly

## 🧪 Code Quality

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking (strict mode)

## 📝 Contributing

1. Create a feature branch
2. Make changes
3. Run `npm run lint` and `npm run format`
4. Commit with clear message
5. Push and create PR

## 📜 License

Copyright © 2024 Moveroo Australia. All rights reserved.

## 🔗 Links

- **Website**: [moveroo.com.au](https://moveroo.com.au)
- **Moving Quote Portal**: [removalists.moveroo.com.au](https://removalists.moveroo.com.au)
- **Vehicle Transport**: [cars.moveroo.com.au](https://cars.moveroo.com.au)
- **Support**: removals@moveroo.com.au
- **Phone**: +61 7 2143 2557

## 🆘 Support

For technical issues or questions:
- Open an issue in this repository
- Contact: removals@moveroo.com.au
