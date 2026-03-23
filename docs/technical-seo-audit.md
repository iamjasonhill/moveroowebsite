# Moveroo Technical SEO Audit

## Latest Pass

- Date: 2026-03-23
- Scope: core public pages, metadata, indexing controls, rendered mobile QA, FAQ/schema consistency

## Routes Reviewed

- `/`
- `/services/`
- `/moving-cars/`
- `/contact/`
- `/terms-and-conditions-transport/`
- `/privacy-policy/`
- `/terms-of-use/`
- `/cancellation/`
- `/design/`
- `/template-light/`
- `/template-dark/`
- `404`

## Tools Used

- local code review
- local Astro build
- rendered QA with Playwright CLI on mobile, tablet and desktop states

## Fixed In This Pass

- tightened homepage FAQ content and moved FAQ data into a shared source so the visible FAQ and homepage schema stay aligned
- improved testimonial specificity so the proof layer feels less generic
- marked the 404 page as `noindex, nofollow`
- marked `template-light` and `template-dark` as `noindex, nofollow`
- marked `public/sitemap.html` as `noindex, nofollow`
- removed layout references to missing PNG and Apple touch icon assets
- confirmed the checked public pages had no horizontal overflow in the QA pass
- corrected the repo SEO baseline to reflect the existing `robots.txt` route

## Current State

- no critical indexation issues were found in the checked public pages
- main public routes have titles, descriptions and canonicals
- internal review/template pages are intentionally excluded or noindexed
- sitemap exclusions are in place for the known internal/template routes
- `robots.txt` exists and points crawlers to the sitemap index

## Remaining Non-Critical Follow-Up

- run a deeper Lighthouse and performance-focused SEO pass when performance becomes the priority
- review share-image strategy if future campaign or service-specific OG assets are added
- keep repo docs updated as new public routes are introduced

## Accepted Tradeoffs

- legal pages remain public and indexable
- technical SEO checks currently rely on local build, rendered QA and repo inspection rather than an external crawler platform

## Next Checks To Rerun

- after major page redesigns
- after routing or sitemap changes
- after schema changes
- before significant production launches
