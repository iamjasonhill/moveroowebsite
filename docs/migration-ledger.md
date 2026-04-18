# Moveroo Migration Ledger

## Controller

- domain: `moveroo.com.au`
- current local controller: `MM-moveroo.com.au`
- framework: Astro
- hosting: Vercel
- current live platform: Astro

## Site Shape

Moveroo is a lighter marketing/controller site than the larger programmatic fleet properties. It acts as a brand and conversion surface that sends users into quote, contact, and booking flows on external Moveroo subdomains.

## Current Content Sources

- page routes in `src/pages/`
- layout and metadata logic in `src/layouts/Layout.astro`
- FAQ/supporting content in `src/data/faqs.ts`
- deployment contract in `vercel.json`

## Evidence Captured

- current Astro page count: `15`
- robots route present at `src/pages/robots.txt.ts`
- AI/LLM support file present at `public/llms.txt`
- redirect and security policy config present in `vercel.json`

## Standardization Outcome On 2026-04-18

- repo-level migration docs added
- README rewritten around the canonical controller role
- `.env.example` aligned to the live domain
- `check` and `check:seo` added to the package baseline
- robots route updated to use `PUBLIC_SITE_URL`
