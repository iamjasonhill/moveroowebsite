# Moveroo Website

The official website for Moveroo Australia - your trusted partner for moving and
transport services across Australia.

## 🚀 About

Moveroo connects customers with trusted removalists, vehicle carriers, and
logistics specialists nationwide. This website serves as the primary marketing
and information hub for our services.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.x
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4 + Again Analytics (via Partytown)

## 📁 Project Structure

```
/
├── public/              # Static assets (favicon, manifest)
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Astro components
│   │   └── sections/    # Page section components
│   ├── layouts/         # Layout templates
│   ├── pages/           # Route pages
│   └── styles/          # Global CSS
├── astro.config.mjs     # Astro configuration
├── tailwind.config.ts   # Tailwind configuration
└── vercel.json          # Vercel deployment config
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌐 Key Features

- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemaps
- **Performance**: Partytown for third-party script optimization
- **Accessibility**: WCAG AA compliant with skip links and ARIA labels
- **Mobile First**: Responsive design with mobile navigation
- **Analytics**: Integrated Google Analytics 4 and Again Analytics

## 📄 Pages

- `/` - Homepage with hero, features, pricing, and testimonials
- `/services/` - Comprehensive service overview
- `/moving-cars/` - Moving Cars merger announcement
- `/contact/` - Contact form and information
- `/privacy-policy/` - Privacy policy
- `/terms-of-use/` - Website terms of use
- `/terms-and-conditions-transport/` - Transport service terms

## 🔗 External Services

- **Removalist Quotes**:
  [removalists.moveroo.com.au](https://removalists.moveroo.com.au)
- **Vehicle Transport**: [cars.moveroo.com.au](https://cars.moveroo.com.au)
- **Booking System**: Setmore integration

## 🚀 Deployment

The site is automatically deployed to Vercel on push to the main branch. Build
output is optimized with:

- Static asset caching (1 year)
- Page caching with revalidation
- Sitemap generation with dual format support

## 📝 License

© 2024 Moveroo Australia. All rights reserved.

## 📧 Contact

For questions about this codebase, contact the development team at
[removals@moveroo.com.au](mailto:removals@moveroo.com.au)
