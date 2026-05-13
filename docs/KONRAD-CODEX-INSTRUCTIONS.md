# Konrad Codex Instructions

This repo allows trusted direct work from Jason, Konrad, and their agents.

Repo: `iamjasonhill/moveroowebsite`
Local path: `/Users/jasonhill/Projects/Business/websites/MM-moveroo.com.au`
Stack: Astro on Vercel.

## Contribution Policy

Direct pushes to `main` are allowed for clear, scoped, verified work.

Use a branch and pull request when the work is broad, uncertain, risky, or Jason
asks for review.

Before direct-pushing to `main`:

1. Run `git status --short --branch`.
2. Pull or rebase the latest `main`.
3. Keep the diff narrow.
4. Run relevant checks.
5. Commit with a clear message.
6. Push to `origin main`.

Do not:

- change production secrets or credentials
- force-push or rewrite shared history
- bypass review when Jason specifically requests a PR or approval gate
- make broad rewrites when a small fix will do

## Standard Checks

Use these depending on scope:

```bash
npm run check
npm run check:seo
npm run check:contract
npm run check:content
npm run build
```

For small docs-only changes, `npm run check:content` or Prettier may be enough.
For page, routing, SEO, or analytics changes, run the full set.

Known harmless local warning: `npm run build` may warn that local Node 23 differs
from Vercel's Node 24 runtime.

## Important Repo Conventions

Central site config lives in:

```txt
src/config/site.ts
```

Use it for quote URLs, contact URLs, booking URLs, and GA4 tracked link
definitions.

Analytics:

- The site uses direct GA4 through `src/components/analytics/Ga4.astro`.
- Prefer delegated `mmTrack` and `site.analytics.trackedLinks` patterns.
- Internal tracked links should match the GA helper's canonical absolute form,
  for example `https://moveroo.com.au/contact/`.
- Do not add GTM or another analytics provider unless Jason explicitly asks.

Contact:

- `/contact/` is the on-site canonical contact page.
- `https://quotes.moveroo.com.au/contact` is the external quote/contact
  workspace.
- Keep contact aliases and redirects consistent.

SEO and routing:

- Canonicals should use `https://moveroo.com.au`.
- Keep sitemap, RSS, and `llms.txt` updated when adding important public pages.
- Avoid indexing template, design, and internal utility pages.
- Check `docs/technical-seo.md`, `docs/redirect-map.md`, and
  `docs/MOVEROO-IMPROVEMENT-CHECKLIST.md` when touching SEO or service content.

Vercel/domain note:

- `www.moveroo.com.au` redirects to `moveroo.com.au` through Vercel domain
  settings and should return permanent `308`.
- Do not treat that as a `vercel.json` bug unless live checks prove it regressed.

## Content Standards

Moveroo copy should stay:

- practical, calm, and trust-building
- careful about claims
- clear that quotes and requests are not bookings
- honest about coordination versus direct service delivery
- Australian English

Avoid:

- exaggerated guarantees
- unsupported review or rating claims
- vague "best", "cheapest", or "guaranteed" language
- adding review/rating schema without verified data

## When To Use A PR

Use a PR when:

- multiple service pages or routing rules change
- analytics taxonomy changes
- production redirects or domain behavior is involved
- the change is hard to review from a single commit
- Jason asks for review

Otherwise, direct-to-main is OK for clear, scoped work.
