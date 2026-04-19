# Non-Indexed Redirect Strategy

## Objective

Keep indexed and conversion-critical Moveroo pages live in Astro, and redirect
low-value legacy aliases only after they are confirmed non-indexed and unnecessary
for search or quote flow continuity.

## Current rule

- Keep core service, quote, contact, and legal pages live in Astro.
- Preserve indexed content that still contributes search demand or quote intent.
- Redirect duplicate or low-value aliases only after coverage and crawl review.

## Verification

- Confirm non-indexed status before removing any legacy page.
- Record each redirect decision in `docs/redirect-map.md`.
- Retest redirects after deploy.
