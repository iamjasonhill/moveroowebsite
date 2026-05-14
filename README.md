# MM-moveroo.com.au

Canonical Astro controller for `moveroo.com.au`.

This repo contains the live Moveroo marketing site and its current Vercel deployment contract. The site is lighter than the bigger programmatic fleet surfaces, but it still needs the same core operating paperwork so it is managed like a first-class controller instead of an isolated marketing repo.

## Current State

- domain: `https://moveroo.com.au`
- framework: Astro
- hosting: Vercel
- local controller path: `MM-moveroo.com.au`
- site shape: branded marketing site with service pathways into external quote and booking flows

The current migration and operating paperwork lives in:

- [docs/migration-ledger.md](docs/migration-ledger.md)
- [docs/redirect-map.md](docs/redirect-map.md)
- [docs/indexed-valid-inventory.md](docs/indexed-valid-inventory.md)
- [docs/homepage-audit.md](docs/homepage-audit.md)
- [docs/live-cutover-status.md](docs/live-cutover-status.md)

## Important Commands

```bash
npm run dev
npm run build
npm run check
npm run check:seo
npm run seo:audit
```

Useful supporting commands:

- `npm run seo:page`
- `npm run seo:crawl`
- `npm run lint`
- `npm run format:check`

## Site Shape

Moveroo is a smaller, more curated surface than the larger programmatic estates.

Current highlights:

- homepage, services, contact, legal pages, and the `moving-cars` merger/support page
- external quote and booking endpoints for household, vehicle, and contact flows
- Vercel redirect, header, and security policy config in `vercel.json`
- branded OG assets and `llms.txt` already present in `public/`

## Environment

Copy `.env.example` and set the real values when needed:

- `PUBLIC_SITE_URL`
- `PUBLIC_SITE_NAME`
- `PUBLIC_SITE_DESCRIPTION`
- `PUBLIC_ANALYTICS_ENABLED`
- `PUBLIC_ANALYTICS_PROVIDER`
- `PUBLIC_ANALYTICS_CONFIG`
- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_GA_TAG_URL`
- `PUBLIC_GA_SEND_PAGE_VIEW`
- `PUBLIC_GA_ANONYMIZE_IP`
- `PUBLIC_MATOMO_BASE_URL`
- `PUBLIC_MATOMO_SITE_ID`
- `SENDGRID_API_KEY`
- `SENDGRID_FROM_EMAIL`

`SENDGRID_API_KEY` is required in the production Vercel environment for the cancellation form at `/cancellation/` to send email to `removals@moveroo.com.au`.

## Notes

- external contributors should follow the branch and pull request workflow in [AGENTS.md](AGENTS.md)
- there is already active in-progress design/content work in this repo; the fleet-standard docs are intended to sit alongside that work, not replace it
- the live controller is confirmed locally under the `MM-<domain>` naming standard
