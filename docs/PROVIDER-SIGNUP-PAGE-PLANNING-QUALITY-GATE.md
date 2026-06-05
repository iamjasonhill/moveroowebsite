# Provider Signup Page Planning Quality Gate

Date: 2026-06-05
Status: Implemented-page quality gate
Recommended canonical URL: `https://moveroo.com.au/providers/`
Source file: `src/pages/providers.astro`
Related live provider surfaces:

- `https://quotes.moveroo.com.au/providers/apply`
- `https://removalist.net/providers/payment-terms`
- `https://removalist.net/login`
- `https://removalist.net/provider/login`

## Decision

Pass for launch after final deploy QA. The payment, fee, provider-quality, and public-claim wording was grilled and approved in-thread on 2026-06-05.

The page is justified as a provider-facing hub/landing page because the existing provider application, payment terms, and login surfaces exist but do not yet explain the commercial and operational reason to sign up for Moveroo work. The implemented page is not a thin SEO page because it stays focused on provider decision-making, job-fit expectations, payment clarity, and onboarding next steps.

## Page Brief

- Accountable reviewer: Konrad for operational fit; Jason for payment, fee, claim, and legal/commercial wording.
- Page type: provider-facing marketing and onboarding-information page.
- Primary audience: removalists, vehicle carriers, specialty transport providers, non-running vehicle carriers, and storage and/or packing partners that may want Moveroo work.
- Primary provider problem: they need to know whether Moveroo sends relevant work, whether leads cost anything, how payment works, and what is expected before they apply.
- Primary business goal: attract higher-fit transport partners and filter out providers who are unlikely to quote clearly or communicate reliably.
- Primary conversion action: `Apply to become a Moveroo provider`.
- Secondary hero action: `Provider login`.
- Site architecture role: provider hub that links out to application, payment terms, and provider login surfaces.
- Search/non-search reason: primarily outreach and advertising landing page; secondarily an indexable provider information page if canonical host and internal links are approved.
- Bad-fit filtering: avoid attracting providers expecting guaranteed volume, employment, exclusive work, paid leads, raw lead dumps, or automatic allocation.
- Post-launch review trigger: first ad/outreach traffic quality review, plus 2-4 week review of provider applications, bad-fit applications, CTA clicks, and search/indexing behaviour if indexed.

## Canonical Host And Slug

Recommended: `https://moveroo.com.au/providers/`.

Rationale: the page sells working with Moveroo. It can then link to the existing cross-domain operational surfaces:

- application: `https://quotes.moveroo.com.au/providers/apply`
- payment terms: `https://removalist.net/providers/payment-terms`
- login: `https://removalist.net/provider/login` for already-approved providers

Do not launch on multiple hosts with duplicate content. If a `removalist.net/providers/` page is also needed, decide whether it redirects, canonicalises, or carries a different role before publishing.

## Architecture And Cannibalisation

The page has a distinct job from:

- provider application: collects initial provider details
- provider payment terms: explains payment timing and handling
- provider login: authenticated provider access
- customer trust pages: explain Moveroo's partner model to customers

Risk is low if the page does not duplicate the payment terms or become a generic "transport partners" explainer. It should summarize and route, not restate policy.

## pSEO Quality Gate

Gate decision: Pass at planning stage for a single page; not a programmatic page set.

Quality risks checked:

- Doorway risk: low, because this is one canonical provider hub, not a set of swapped-location pages.
- Thin-content risk: low if the page includes commercial model, provider categories, work lifecycle, expectations, onboarding, payment basics, and FAQ.
- Duplicate-template risk: low if it uses Moveroo-specific provider mechanics rather than generic partner-network copy.
- Intent mismatch risk: moderate if the title/meta over-indexes on "jobs" or "careers"; the page is for businesses, not employees.

Required guardrail: avoid route/city variants, provider-category clone pages, or ad-only doorway pages until there is unique evidence and a stronger page-set plan.

## Claims And Compliance

Approved core claims for drafting:

- Leads are free to the provider.
- Moveroo does not charge the provider a fee or take a commission out of the provider's quoted job price on secured work.
- If a provider quotes `$1,000`, the provider amount is `$1,000`, subject to applicable provider payment terms and job-specific payment path.
- Moveroo's customer pricing is handled separately from the provider's quoted amount.
- Providers may quote or decline when a job is not a fit.

Avoid:

- guaranteed job volume
- employment, wage, or contractor-income promises
- exclusive territory or exclusive work promises
- "verified", "fully insured", "licensed", "trusted", "best", or "guaranteed" partner claims
- "no commission ever" if that could be misread as the whole commercial model rather than the provider payable promise
- detailed customer margin or pricing mechanics

Human approval required before publish: Jason should review payment, fee, cover, provider-quality, and public-claim wording.

## Commercial Fit

The page should attract providers who:

- quote only work they can genuinely service
- say no when a job is not a fit
- provide clear pickup, delivery, payment, and timing updates
- tell Moveroo early if access, inventory, route, timing, or capacity assumptions change
- treat the customer handoff as part of the job

The page should filter out providers who expect guaranteed lead flow, automatic allocation, paid leads, vague quoting, or unsupported late changes.

## CRO Check

Primary CTA: `Apply to become a Moveroo provider`.

Secondary CTA: `Read provider payment terms`.

Provider login should be visible but secondary for already-approved providers. It must not compete with the application CTA.

The first screen should communicate:

- suitable work opportunities
- free leads
- no provider fee from the quoted job price
- clear application next step

## SEO And AI Discoverability

Recommended title direction: `Become a Moveroo Provider | Free Leads for Transport Partners`.

Recommended H1 direction: `Become a Moveroo provider`.

Recommended meta direction: `Apply to receive suitable Moveroo work opportunities. Leads are free, providers keep their quoted job amount, and work is matched by route, service fit and availability.`

Use "transport partners" in relationship copy and "provider" for application, payment terms, portal, and login mechanics.

If the page is intended to be indexed, update:

- XML sitemap source
- HTML sitemap
- `llms.txt`
- relevant footer or provider-hub navigation if appropriate

Do not add FAQ schema unless visible FAQs are present. Do not add review, rating, price, offer, job-posting, or employment schema.

## Internal Link Plan

Outgoing links from the provider page:

- application: `https://quotes.moveroo.com.au/providers/apply`
- payment terms: `https://removalist.net/providers/payment-terms`
- provider login: `https://removalist.net/provider/login`
- customer trust page where partner matching is explained, only if useful and not confusing for providers

Recommended incoming links:

- footer or sitemap under a provider/partner grouping
- `llms.txt` under key pages or a provider section
- customer trust page only if the context naturally mentions becoming a transport partner
- contact page if it has a business/provider enquiry path

Avoid stuffing provider recruitment links into customer service pages where the reader is trying to book a move.

## Copy And Brand Language

Use practical, calm Australian English. Avoid SaaS-style partner-network hype.

Recommended page structure:

1. Hero: suitable work opportunities, free leads, no fee from the provider's quoted job price.
2. Who it is for: removalists, vehicle carriers, specialty transport, non-running vehicle, storage, packing.
3. How work is sent: quote/availability request, decline if not fit, allocation after customer path is confirmed.
4. Why work with Moveroo: clearer handoffs, fit-based requests, published payment terms.
5. What Moveroo expects: honest quoting, clear updates, early notice when assumptions change.
6. Payment basics: summarize only, link to payment terms.
7. Onboarding: apply, review, approval, portal access.
8. FAQ.
9. Final CTA.

## Installed Skill Accounting

Directly checked at planning stage:

- `grill-with-docs`: domain terms and provider-page positioning captured in root `CONTEXT.md`.
- `pseo-quality-gate`: single-page thin/doorway/template risk checked.
- `risk-compliance-review`: payment, fee, partner-quality, employment, and public-claim risks checked.
- `page-cro`: CTA hierarchy, first-screen clarity, and objection handling checked.
- `internal-linking-optimizer`: initial incoming/outgoing link plan defined.
- `copywriting` / `copy-editing`: brand-language and human-copy constraints identified from `docs/brand-writing.md`.

Tangentially relevant for implementation and prelaunch:

- `seo-audit`, `schema-markup`, `rendered-schema-validator`, `llms-txt-and-ai-crawler-audit`, `ai-seo`, `image-video-seo-audit`, `performance`, `core-web-vitals`, `accessibility via workflow`, `form-cro`, `signup-flow-cro`, `paid-ads`, `cold-email`, `integrated-campaign-planner`, `supplier-partner-quality`, `service-delivery-ops`, `cash-flow-ar-ops`, `unit-economics-margin-control`, `sales-enablement`, `entity-brand-consistency-audit`, `seo-crawl-diff-monitor`, and `seo-migration-redirect-qa`.

Not applicable unless the scope changes:

- city, route, local SEO, hreflang, log-file analysis, review/reputation, affiliate/referral, lifecycle CRM, paywall, popup, community, creator, video, hiring, onboarding, support knowledge base, dashboards, data analytics, Gmail, Google Drive, GitHub PR/CI, Supabase, OpenAI developer, and automation-specific skills.

A full prelaunch skill audit was run against the drafted page before publication.

## Launch Blockers

- None remaining from content or implementation review.

Post-launch:

- SEO Champion annotation or launch note: completed in this document because no SEO Champion connector/API is available in this session.
- Production URL render check after deploy: completed.
- Google Search Console URL inspection once live: pending external GSC access.

## Implementation Checks

Implemented:

- Added `src/pages/providers.astro`.
- Added provider application, payment terms, and provider login destinations to `src/config/site.ts`.
- Added provider CTA tracking metadata for provider application, provider payment terms, and provider login handoffs.
- Added footer discovery through the existing footer service link group.
- Added HTML sitemap discovery.
- Added `llms.txt` provider-signup summary and key provider links.
- Confirmed the generated XML sitemap includes `https://moveroo.com.au/providers/`.
- Rendered HTML assertions passed for title, canonical, H1, FAQ schema, application link, payment terms link, and provider login link.
- Review-swarm sequential pass changed the provider login destination from the generic login page to the stable provider login route.
- Confirmed no `JobPosting` schema is present.
- Chrome headless screenshot QA completed at mobile, tablet, and desktop widths. Mobile review found the payment example rows were too tight, so those rows were changed to stack label/value on small screens and return to side-by-side layout from the `sm` breakpoint.
- Human-language copy pass completed after draft review. Removed synthetic/internal phrasing such as "lane", "pathway", "handoff", "work channel", and "fit-based" from the public provider page while preserving the free-leads and no-provider-fee claims.
- Grill signoff completed for no-cut payment wording, no cost per quote, no minimum quote quotas, inbox guards, automatic leads, included customer sales support, repeated customer detail checks, and open provider-category wording.

## Required Verification Once Drafted

Run from `moveroowebsite/`:

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run check:seo
npm.cmd run check:content
git diff --check
```

Completed verification:

- `npm.cmd run check:content`: pass.
- `npm.cmd run check:seo`: pass.
- `npm.cmd run check:contract`: pass.
- `npm.cmd run check`: pass after copy pass with the existing Astro JSON-LD inline-script hints and one existing unused variable warning in `Testimonials.astro`.
- `npm.cmd run build`: pass after copy pass.
- `git diff --check` on touched files: pass with existing LF-to-CRLF warnings only.
- `npx.cmd prettier --check` on parseable touched files: pass.

Rendered browser QA note: Node REPL Playwright was not available, so screenshot review used local Chrome headless against `http://127.0.0.1:4321/providers/`. Screenshots were reviewed at 390px mobile, 768px tablet, and 1440px desktop widths. No content overlap, CTA-fit, section-order, or major readability issues remained after the mobile payment-example fix.

## Launch Note

Launched to `main` on 2026-06-05 in commit `43ffa4f`.

Post-launch production checks completed against `https://moveroo.com.au/providers/`:

- Live page returned `200`.
- Title, canonical, H1, application link, provider login link, payment terms link, FAQ schema, no-`JobPosting` guard, and `$1,000` no-cut copy assertions passed.
- Live sitemap includes `https://moveroo.com.au/providers/`.
- Live `llms.txt` includes the provider signup section and no-cost-per-quote language.
- External provider application, provider login, and provider payment terms targets returned `200`.
- Chrome headless production screenshot reviewed at desktop width with no obvious render, section-order, or CTA issues.

Remaining external follow-up: inspect the live URL in Google Search Console when GSC access is available, then review indexing, provider application quality, and CTA clicks after the first meaningful outreach or ad traffic.
