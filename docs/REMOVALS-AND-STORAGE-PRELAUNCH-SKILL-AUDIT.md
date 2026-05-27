# Removals and Storage Prelaunch Skill Audit

Date: 2026-05-27
Draft URL: http://127.0.0.1:4321/removals-and-storage/
Planned live URL: https://moveroo.com.au/removals-and-storage/
Source file: `src/pages/removals-and-storage.astro`

## Decision

Conditional pass for human review.

The page is technically ready for review and publishing once the final customer-facing copy is approved. Do not mark the checklist item complete until after the page is live, the SEO Champion note/request is logged, and post-publish checks are done.

## Skill Suite Findings

### Copywriting and Copy Editing

- Completed a dedicated customer-language pass before human review.
- Removed internal/process phrasing such as "service pathway" from the shared quote CTA.
- Adjusted page labels and related-page copy to sound less like an internal brief.
- Current copy stays conversational and avoids stuffing "removals and storage" into every section.

### Grill With Docs / Domain Fit

- Page follows the agreed domain rules in `CONTEXT.md`.
- It does not say Moveroo owns storage, operates storage facilities, or can always provide a specific storage type.
- It explains that storage usually needs extra follow-up because the quote form deliberately stays shorter for customers who do not need storage.
- It handles customer access carefully by recommending self-storage where access is needed.

### SEO Champion / GSC Opportunity

- SEO Champion capabilities checked on 2026-05-27. Latest manifest: `2026-05-27-technical-seo-final-url-coverage`.
- Current GSC source is fresh through 2026-05-25.
- Storage-related query evidence exists but is weakly served by current pages:
  - `interstate removals and storage`: 39 impressions, average position about 71.9.
  - `interstate moving and storage companies`: 1 impression, average position 45.
  - `transport moving and storage`: 1 impression, average position 27.
  - `van storage services`: 1 impression, average position 16.
- Query/page mapping shows these storage queries currently resolve mainly to the homepage or services page, so a dedicated storage page is justified.
- No SEO Champion annotations exist yet for this new storage URL because it is not live. Add one after publishing.

### SEO Audit / On-Page

- Title: `Removals and Storage Australia | Moveroo`.
- Meta description is present and customer-facing.
- Canonical is `https://moveroo.com.au/removals-and-storage/`.
- H1 directly matches the page purpose: removals and storage when dates do not line up.
- The page is included in the generated XML sitemap and HTML sitemap.
- The page is included in `llms.txt`.

### Schema / Rendered Schema

- Rendered page includes the site-level schema graph and the page-level schema graph.
- Page-level schema includes `WebPage`, `Service`, and `FAQPage`.
- FAQ schema is backed by visible FAQ content on the page.
- No schema claims were added for unsupported storage facility ownership, guaranteed availability, or ratings/reviews.

### AI SEO / LLM Extractability

- The page gives direct answer blocks for why storage is needed, when self-storage makes more sense, how storage is quoted, and what information Moveroo needs.
- FAQ questions match natural customer questions.
- `llms.txt` includes the storage page and explains the storage support cautiously.
- The copy is intentionally plain rather than over-optimised for exact-match phrases.

### Internal Linking / Site Architecture

- Outgoing links from the page point to:
  - `/interstate-removalists/`
  - `/backloading-removals/`
  - `/household-vehicle-relocation/`
  - `/how-moveroo-protects-your-move/`
  - household quote and contact destinations.
- Incoming links now exist from:
  - `/household-removals/`
  - `/interstate-removalists/`
  - `/backloading-removals/`
  - `/services/`
  - `/how-moveroo-protects-your-move/`
  - footer services navigation
  - HTML sitemap
  - `llms.txt`
- Contextual links were added in body copy where possible, not only as footer links.

### Page CRO / Quote Conversion

- Primary CTA is `Start a moving quote`.
- Secondary CTA is `Request a callback`.
- The page explains that submitting a quote request does not create a booking through the shared CTA component.
- The information checklist supports better quote qualification without making the page feel like a form.

### Risk / Compliance

- No claim that Moveroo stores the goods itself.
- No "secure storage" or "fully insured storage" claim on this page.
- No guarantee that storage is always available.
- No promise of instant storage pricing.
- Cover wording remains cautious: cover and responsibility depend on provider, arrangement, and terms.

### Mobile / Performance / Core Web Vitals

- Browser render checked at 390px wide and desktop width.
- No horizontal overflow detected.
- The page is static Astro content with no heavy page-specific JavaScript.
- No above-fold image dependency was introduced, so LCP risk is low for this page.

### pSEO Quality Gate

- This is not a programmatic SEO page set.
- The page is unique and not a thin location/template variant.
- Doorway risk is low because the page solves a real service situation and is supported by existing query evidence and internal links.

## Verification

- `npm.cmd run check:content`: pass.
- `npm.cmd run check:seo`: pass.
- `npm.cmd run check`: pass with 12 Astro JSON-LD/script-processing hints, consistent with the existing schema pattern used across the site.
- `npm.cmd run build`: pass.
- `git diff --check`: pass, with existing CRLF warnings only.
- Browser render check: mobile 390px and desktop render without horizontal overflow.
- Generated sitemap contains `https://moveroo.com.au/removals-and-storage/`.

## Remaining Before Publish

- Human copy approval.
- Deploy/publish.
- After publish, log SEO Champion annotation or agent request for the new URL.
- Run post-publish live URL checks when the page is available publicly.
- Update the improvement checklist only after the page is live.
