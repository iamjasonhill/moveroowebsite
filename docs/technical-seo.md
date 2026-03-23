# Moveroo Technical SEO Baseline

Use this file as the stable source of truth for technical SEO intent on the Moveroo website.
Update it when indexation rules, canonical behavior, sitemap policy, schema policy or other SEO conventions change.

## Production Domain

- Primary production domain: `https://moveroo.com.au`

## Indexation Intent

These page types should be indexable unless there is a specific reason to hide them:

- homepage
- key service pages
- contact page
- public legal pages

Current intended indexable routes:

- `/`
- `/services/`
- `/moving-cars/`
- `/contact/`
- `/privacy-policy/`
- `/terms-of-use/`
- `/terms-and-conditions-transport/`
- `/cancellation/`

These routes should stay out of search:

- `/design/`
- `/template-light/`
- `/template-dark/`
- 404 page

## Canonical Rules

- Canonicals should always use the production domain `https://moveroo.com.au`
- Public pages should use trailing slash canonicals
- Public HTML routes should redirect to the trailing slash version instead of serving both variants with `200`
- Internal review or template pages may keep canonicals for consistency, but must also stay `noindex`

## Sitemap Rules

- Main sitemap output: `/sitemap-index.xml`
- Compatibility copy: `/sitemap_index.xml`
- Internal review and template pages should stay excluded from the sitemap

Current known exclusions:

- `/design/`
- `/template-light/`
- `/template-dark/`

## Robots And Crawl Guidance

- Important public pages should remain crawlable and indexable
- Internal review and template pages should use `noindex, nofollow`
- 404 page should remain `noindex, nofollow`

Current note:

- `robots.txt` is served by `src/pages/robots.txt.ts`
- current rules allow full crawl access and point crawlers to `/sitemap-index.xml`

## Metadata Rules

- Each public page should have its own title, description and canonical
- Metadata should match the visible page purpose after redesign or copy changes
- Utility, review and template pages should not present themselves as indexable public landing pages

## Structured Data Rules

- Base organization and website schema are handled in `src/layouts/Layout.astro`
- Page-specific schema should match the page's visible content
- FAQ schema must stay aligned with the visible FAQ copy
- Breadcrumb schema should reflect the real route structure

## Analytics Rules

- Primary analytics stack: `GA4` only
- GA4 is loaded directly from the standard Google tag in `src/layouts/Layout.astro`
- Avoid layering a second page analytics script on top unless there is a clear reporting need
- If analytics changes, update CSP and this file in the same pass

## Social And Asset Rules

- Primary social image: `public/og-image.png`
- Manifest should include the SVG favicon plus the PNG and maskable icon set
- Layout should not reference icon assets that do not exist in `public/`

## Known Intentional Exceptions

- `design` page exists as an internal review surface and is intentionally `noindex`
- `template-light` and `template-dark` exist as showcase pages and are intentionally `noindex`
- legal pages are allowed to stay public and indexable
