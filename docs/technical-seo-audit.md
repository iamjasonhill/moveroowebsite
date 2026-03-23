# Moveroo Technical SEO Audit

See [technical-seo-history.md](./technical-seo-history.md) for timestamped audit runs and Lighthouse result history.

## Latest Pass

- Date: 2026-03-23
- Scope: core public pages, metadata, indexing controls, rendered mobile QA, FAQ/schema consistency, canonical slash behavior, performance-risk review

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
- enforced trailing slash redirects in Astro and Vercel so canonical HTML routes do not resolve both slash variants with `200`
- replaced the non-standard `LLMs.txt:` robots directive with a comment so Lighthouse no longer treats `robots.txt` as malformed
- reduced a mobile homepage CLS culprit by hiding the large lower-left hero blur shape on small screens
- removed unsupported or misleading schema patterns such as homepage `SearchAction`, homepage `LocalBusiness`, and FAQ schema on pages without visible FAQs
- refined page schema types so key pages now use more appropriate entities like `CollectionPage`, `ContactPage`, and service-specific schema

## Current State

- no critical indexation issues were found in the checked public pages
- main public routes have titles, descriptions and canonicals
- slash-based canonicals are now backed by explicit redirect behavior in config
- internal review/template pages are intentionally excluded or noindexed
- sitemap exclusions are in place for the known internal/template routes
- `robots.txt` exists and points crawlers to the sitemap index
- Lighthouse rerun on production now reports `SEO 100` on both mobile and desktop
- Lighthouse rerun on production now reports `Performance 100` on both mobile and desktop
- Lighthouse rerun on production now reports `Best Practices 100` on both mobile and desktop after removing Partytown from the GA path
- page schema is now closer to the visible page purpose across homepage, services, moving cars, contact, and legal support pages
- analytics stack is now simpler, with GA4 kept and the second sitewide analytics script removed
- GA4 no longer relies on Partytown and now uses the standard direct Google tag

## Remaining Non-Critical Follow-Up

- optional: review GA4 consent mode and privacy requirements if tracking policy changes
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
