<!-- prettier-ignore-start -->
# Deftly Builder Action: generate_sitemap

- Action ID: `40`
- Run ID: `38`
- Generated At (UTC): `2026-03-05T22:50:48+00:00`
- Issue Code: `missing_lastmod_in_sitemap`
- Target URL: `https://moveroo.com.au/`

## Why This PR Exists
One or more sitemap URL entries are missing a valid lastmod value.

## Detected Metrics
- `entries_total`: 8
- `missing_lastmod_total`: 8

## Suggested Implementation Steps
1. Ensure sitemap generation includes `<lastmod>` for every URL entry.
2. Use content publish/update timestamps for `<lastmod>` (ISO-8601).
3. Regenerate sitemap and verify no entries are missing `<lastmod>`.
4. Submit refreshed sitemap through connected search integrations.

## Sample Entries Missing lastmod
- URL: `https://moveroo.com.au/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`
- URL: `https://moveroo.com.au/cancellation/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`
- URL: `https://moveroo.com.au/contact/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`
- URL: `https://moveroo.com.au/moving-cars/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`
- URL: `https://moveroo.com.au/privacy-policy/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`
- URL: `https://moveroo.com.au/services/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`
- URL: `https://moveroo.com.au/terms-and-conditions-transport/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`
- URL: `https://moveroo.com.au/terms-of-use/` · sitemap: `https://moveroo.com.au/sitemap-0.xml`

## Notes
- This is a Builder-generated manual-safe PR artifact.
- Approve/merge only after validating rendered sitemap output in production-like environment.

<!-- prettier-ignore-end -->
