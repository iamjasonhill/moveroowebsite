# Door-to-Door vs Depot Car Transport Pre-Launch Skill Audit

Date: 2026-05-27
Page: `/door-to-door-vs-depot-car-transport/`
Draft file: `src/pages/door-to-door-vs-depot-car-transport.astro`
Local draft URL: `http://127.0.0.1:4321/door-to-door-vs-depot-car-transport/`

## Result

Human review has passed. The page is publish-ready from the prelaunch review, pending the user's explicit instruction to push it live.

## Source Evidence

- SEO Champion capability manifest checked before page creation: `2026-05-27-quote-host-operational-buckets`.
- Exact-match GSC evidence for "door to door" and "depot to depot" was quiet, so this page is being treated as a supporting comparison page rather than a primary search hub.
- Broader evidence exists around `car transport` and `vehicle transport`, with existing visibility mostly attached to `/moving-cars/`.
- Page supports the `/interstate-car-transport/` and `/moving-cars/` cluster instead of competing with those broader pages.
- Real quote examples were pulled from recent admin vehicle quotes and anonymised before use.

## Domain Decisions Preserved

- Door-to-door means the carrier collects and delivers as close as practical to the requested addresses.
- Door-to-door may still require a nearby safe meeting point if the truck cannot safely access the exact driveway, apartment entry or street.
- Depot-to-depot means the customer drops the vehicle at the nominated pickup depot and collects from the nominated destination depot.
- Depot suburbs are carrier-specific and should be visible before the customer chooses that option.
- Depot-to-depot is cheaper than door-to-door within the same carrier's quote options, but the cheapest overall option can still depend on carrier availability.
- The page avoids implying a negotiable discount, a guaranteed saving, guaranteed driveway collection, instant pricing, or that every route has every carrier option.

## Quote Examples

The public page uses fresh examples that were not reused from the `/interstate-car-transport/` page.

| Internal quote | Public route | Vehicle | Public comparison |
| --- | --- | --- | --- |
| `SVQ-000559` | Perth WA to Ashmore QLD | Hyundai Santa Fe | Door-to-door `$2,249.38`, depot-to-depot `$2,001.29`, difference `$248.09` |
| `SVQ-000557` | Prahran VIC to Hawthorne QLD | Audi A3 | Door-to-door `$1,506.49`, depot-to-depot `$1,186.72`, difference `$319.77` |
| `SVQ-000560` | Maroochydore QLD to Bayswater North VIC | Holden Captiva | Door-to-door `$1,734.40`, depot-to-depot `$1,152.30`, difference `$582.10` |

Public copy keeps these framed as anonymised examples only, not promises of the same difference on every move.

## Direct Skill Findings

### Copywriting and Copy Editing

Status: Pass.

The page uses customer-facing language and avoids the phrases that previously sounded machine-written. The final human-language pass removed older wording such as "handover effort" in favour of "the work involved." The page speaks to practical customer decisions: depot distance, timing, transit time, someone being available at each end, and whether the simpler handover is worth paying more for.

### SEO and Content Strategy

Status: Pass.

Checks:

- SEO title: `Door-to-Door vs Depot Car Transport | Moveroo`.
- H1: `Door-to-door or depot car transport: which option makes sense?`.
- Canonical: `https://moveroo.com.au/door-to-door-vs-depot-car-transport/`.
- Meta description matches the page intent and does not overclaim.
- Search intent is comparison/supporting intent, not a broad interstate car transport hub.
- Page has useful standalone content: definitions, fit guidance, real examples, handover notes, FAQs and CTAs.

### Internal Linking and Site Architecture

Status: Pass.

Incoming discovery has been added from:

- `/interstate-car-transport/` in a relevant body section.
- `/moving-cars/` in the quote factors area.
- `/services/` in the vehicle service area and chooser notes.
- Footer service navigation.
- HTML sitemap.
- `llms.txt`.

Outgoing links from the page point to:

- `/interstate-car-transport/`
- `/moving-cars/`
- `/household-vehicle-relocation/`
- Vehicle quote flow.
- Contact/callback page.

The page sits as a vehicle transport support page, with `/interstate-car-transport/` remaining the broader hub.

### Schema and Rendered Page Checks

Status: Pass.

Rendered schema checks found:

- Global site schema from layout: `Organization`, `WebSite`, `BreadcrumbList`.
- Page schema: `WebPage`, `Service`, `FAQPage`.
- FAQ schema matches visible FAQ content.
- The page has one H1 and the expected canonical/title.

### Risk and Compliance

Status: Pass.

Risk wording reviewed:

- No "guaranteed cheapest" claim.
- No unqualified "always cheaper" public claim.
- No "save $X" framing.
- No promise that door-to-door means the truck reaches the exact driveway.
- No carrier names or customer-identifying details shown in public examples.
- No implication that Moveroo performs the physical vehicle transport.

### CRO and Quote Conversion

Status: Pass.

The primary CTA is `Start a vehicle transport quote`; the secondary CTA is `Request a callback`. The page reduces choice anxiety by explaining what to compare before booking rather than pushing a single option as universally better.

### AI SEO and AI Discoverability

Status: Pass.

The page has extractable definitions, comparison sections, FAQ schema, and is included in `public/llms.txt`. It is also linked from related vehicle transport pages so AI crawlers and search engines can understand the page's role in the broader cluster.

### Performance, Core Web Vitals and Mobile

Status: Pass.

The page adds no heavy images, third-party embeds, video, or extra client-side application logic. Mobile rendering was checked at narrow width with no horizontal overflow found.

### PSEO Quality Gate

Status: Pass.

This is not a programmatic page set. The page is unique, based on a specific customer decision, and uses real anonymised examples, so doorway or thin-template risk is low.

## Skills Accounted For

Directly used or reviewed:

- ai-seo
- copy-editing
- copywriting
- grill-with-docs
- internal-linking-optimizer
- llms-txt-and-ai-crawler-audit
- page-cro
- performance
- pseo-quality-gate
- rendered-schema-validator
- risk-compliance-review
- seo-audit
- site-architecture

Relevant checklist coverage:

- analytics-tracking
- brand-positioning-audit
- content-strategy
- core-web-vitals
- customer-research
- entity-brand-consistency-audit
- form-cro
- image-video-seo-audit
- quote-conversion-ops
- schema-markup
- service-delivery-ops
- supplier-partner-quality

Not materially applicable to this static page:

- ad-creative
- affiliate-partner-channel
- app-store/ASO work
- cold-email
- creator/influencer marketing
- email-sequence
- paid-ads
- popup-cro
- PR outreach
- signup/onboarding/paywall CRO
- video generation

## Verification

Completed checks:

- `npm.cmd run check:content`: passed.
- `npm.cmd run check:seo`: passed.
- `npm.cmd run check`: passed with no errors; existing Astro hints remain.
- `npm.cmd run build`: passed.
- `git diff --check`: passed; only existing line-ending warnings were reported.
- Local route: returned `200`.
- Rendered schema: `Organization`, `WebSite`, `BreadcrumbList`, `WebPage`, `Service`, `FAQPage`.
- Mobile emulation at `390px`: no horizontal overflow detected.
- Desktop screenshot: hero and first section render correctly at `1366px`.

## Publish Notes

After the user approves publish:

- Commit and push only the page-related files.
- Do not include unrelated `vercel.json` or `src/pages/api/v1/` worktree changes.
- Log an SEO Champion annotation/request for the new page after deploy.
- Update the improvement checklist only after the page is live.
