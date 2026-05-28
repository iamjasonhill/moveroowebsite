# Non-Running Car Transport Pre-Launch Skill Audit

Date: 2026-05-28
Page: `/non-running-car-transport/`
Draft file: `src/pages/non-running-car-transport.astro`
Local draft URL: `http://127.0.0.1:4321/non-running-car-transport/`

## Result

Human review has passed. The page is publish-ready from the prelaunch review, pending the user's explicit instruction to push it live.

## Source Evidence

- SEO Champion capability manifest checked before page creation: `2026-05-27-quote-host-operational-buckets`.
- Exact-match GSC checks for non-running, non-drivable, inoperable, and related wording were quiet, so the page is being treated as a supporting vehicle transport page rather than an existing high-impression query page.
- Competitor and legacy wording checks supported using "non-running car transport" for SEO and "car that can't be driven" / "non-drivable" in customer-facing copy.
- User confirmed the key domain rule: unregistered cars are standard car transport when they can be driven normally. They should not be treated as non-running/non-drivable just because they are unregistered.

## Domain Decisions Preserved

- Page URL: `/non-running-car-transport/`.
- SEO title: `Non-Running Car Transport | Moveroo`.
- H1: `Moving a car that can't be driven`.
- Page scope is planned transport, not towing, roadside recovery, or emergency breakdown assistance.
- Non-drivable car transport is usually door-to-door because the customer cannot drive the car to or from a depot.
- The page does not use a price example table because non-running costs depend on loading, access, carrier fit, keys, tyres, wheels, damage, and manual review.
- The page asks customers to share whether the car starts, rolls, steers and brakes before pricing is prepared.

## Direct Skill Findings

### Copywriting and Copy Editing

Status: Pass.

The page uses human-facing wording and avoids machine-language scaffolding. The hero uses the agreed visible H1 and explains the customer problem directly. The page explains practical situations such as auction cars, project cars, damaged cars, cars going to a repairer, long-sitting vehicles, locked wheels, missing keys, flat tyres and tight access.

### SEO and Content Strategy

Status: Pass.

Checks:

- SEO title is concise and keyword-aligned.
- H1 is customer-natural rather than keyword-stuffed.
- Canonical points to `https://moveroo.com.au/non-running-car-transport/`.
- Meta description describes the page without implying emergency towing or guaranteed availability.
- Search intent is a supporting commercial/service page under the vehicle transport cluster.
- The page is not a thin doorway page; it contains definitions, quote-detail guidance, access guidance, service boundary, pricing caveat, related links, and FAQs.

### Internal Linking and Site Architecture

Status: Pass.

Incoming discovery has been added from:

- `/interstate-car-transport/` in the non-running support card.
- `/moving-cars/` in the quote factors section.
- `/door-to-door-vs-depot-car-transport/` where depot is contrasted with non-drivable transport.
- `/services/` in the vehicle service card and chooser notes.
- Footer service navigation.
- HTML sitemap.
- `llms.txt`.

Outgoing links from the page point to:

- `/interstate-car-transport/`
- `/moving-cars/`
- `/door-to-door-vs-depot-car-transport/`
- `/household-vehicle-relocation/`
- Vehicle quote flow.
- Contact/callback page.

### Schema and Rendered Page Checks

Status: Pass.

Rendered schema checks found:

- Global layout schema: `Organization`, `WebSite`, `BreadcrumbList`.
- Page schema: `WebPage`, `Service`, `FAQPage`.
- FAQ schema matches visible FAQ content.
- Rendered title, H1 and canonical are correct.

### Risk and Compliance

Status: Pass.

Risk wording reviewed:

- No claim that Moveroo can move any non-running car.
- No claim that non-running cars are easy or always available.
- No towing, roadside recovery, or emergency assistance promise.
- No price guarantees or standard surcharge claim.
- No incorrect implication that unregistered cars are non-running by default.
- No insurance or cover claims.
- Carrier suitability is framed as something Moveroo checks before pricing.

### CRO and Quote Conversion

Status: Pass.

The primary CTA is `Start a vehicle transport quote`; the secondary CTA is `Request a callback`. The page reduces bad-fit enquiries by telling customers what to include before pricing: starts, rolls, steers, brakes, keys, flat tyres, locked wheels, damage, clearance and access.

### AI SEO and AI Discoverability

Status: Pass.

The page has extractable definitions, practical checklist sections, FAQ schema and `llms.txt` inclusion. It is linked into the broader vehicle transport cluster so search and AI systems can understand its relationship to interstate car transport, Moving Cars and door/depot guidance.

### Performance, Core Web Vitals and Mobile

Status: Pass.

The page adds no heavy images, video, third-party embeds, or extra client-side application logic. Mobile render at `390px` showed no horizontal overflow.

### PSEO Quality Gate

Status: Pass.

This is a single human-authored support page, not a programmatic page set. It has unique business value and is not a swapped-variable route page.

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

## Publish Notes

After the user approves publish:

- Commit and push only the page-related files.
- Do not include unrelated `vercel.json` or `src/pages/api/v1/` worktree changes.
- Log an SEO Champion annotation/request for the new page after deploy.
- Update the improvement checklist only after the page is live.
