# Moveroo Improvement Checklist

Living checklist for the Moveroo business, website, trust, conversion, SEO, analytics, operations, and data-access improvements identified from the repo audit.

Use this as the shared backlog across future chats. Items marked **Access needed** require credentials, data exports, third-party access, customer evidence, or business decisions before they can be completed.

## 0. Immediate Triage

- [x] Fix or verify the `/api/cancellation` production route.
  - Completed in repo: removed the `vercel.json` redirect that sent `/api/cancellation` to `/`.
  - Access still needed: production/Vercel routing verification after deployment.
- [ ] Review all insurance/cover language for compliance.
  - Replace broad phrases such as "insurance options" and "coordinate insurance coverage options" with narrower, accurate language.
  - Access needed: legal/compliance sign-off on final wording.
- [x] Update `public/llms.txt` so quote and booking URLs match `src/config/site.ts`.
- [x] Add spam protection and safer HTML escaping to the cancellation email endpoint.
  - Completed in repo: added a honeypot field, server-side field limits, email validation, safer subject handling, and HTML escaping.
  - Future option: add Turnstile/reCAPTCHA or rate limiting if spam continues.
- [ ] Confirm SendGrid environment variables are configured in production.
  - Access needed: Vercel/env access or deployment owner confirmation.

## 1. Trust And Risk-Reduction Content

- [x] Build `/how-moveroo-protects-your-move/`.
  - Include partner fit, quote clarity, communication expectations, cover limits, change support, and escalation.
- [x] Link the trust page from homepage trust copy, service pages, footer, and quote CTA reassurance text.
- [x] Add a "Moveroo is a coordination team" explanation in clear public copy.
- [x] Add a "what Moveroo controls vs what transport partners control" table.
- [x] Define "vetted transport partners" publicly.
  - Include fit-for-job checks and ongoing performance review.
- [x] Add a "what can change during a move" section.
  - Include access, weather, traffic, settlement dates, inventory, delays, and provider availability.
- [x] Add an escalation pathway.
  - Cover pickup-window changes, access changes, unclear updates, damage reports, cancellation review, and cover pathway referral.
- [x] Add a "before you pay a deposit" checklist.
- [ ] Explain the 25% deposit model.
- [x] Explain balance-payment options and timing.
- [x] Explain fair inventory flexibility and the one-week inventory check-in.
- [x] Add common quote-surprise prevention content.
  - Stairs, long carries, shuttle vehicles, extra stops, route changes, packing, fragile items, storage, permits.
- [ ] Add a plain-language cover/insurance explainer.
  - Drafted on `/how-moveroo-protects-your-move/`; still needs legal/compliance review before marking complete.
  - Access needed: legal/compliance review.

## 2. Offer And Service Architecture

- [ ] Tighten the core positioning: Moveroo as the coordination layer for moves with moving parts.
- [ ] Separate user journeys for simple household moves, vehicle-only moves, combined moves, and specialty/complex moves.
- [ ] Add a combined household + vehicle relocation page.
- [ ] Add a backloading removals page.
- [ ] Add a dedicated removals page.
- [ ] Add a storage coordination page or section.
- [ ] Add a non-running vehicle transport page or section.
- [ ] Add a motorcycle transport page or section.
- [ ] Add a boat/caravan/trailer transport page or section.
- [ ] Add business/fleet vehicle relocation content.
- [ ] Add apartment/access-constrained move content.
- [ ] Add settlement-date move content.
- [ ] Add urgent/short-notice move content with capacity caveats.
- [ ] Add "what Moveroo is less suited for" guidance to reduce bad-fit leads.
- [ ] Create a lightweight service router or "help me choose" page.

## 3. Conversion And Quote Flow

- [x] Add "what happens after I submit a quote?" near major CTAs.
- [x] Add outbound transition reassurance before sending users to `quotes.moveroo.com.au`.
- [x] Add microcopy under quote CTAs: "Submitting a quote does not create a booking."
- [x] Use intent-specific CTAs:
  - [x] "Check what applies to my move"
  - [x] "Start your quote"
  - [x] "Request a callback"
  - [x] "Call 07 2143 2557"
- [x] Add a sticky mobile CTA bar with call, quote, and callback actions.
- [ ] Consider embedding the first step of the quote flow on the main site.
  - Access needed: quote-flow code/API/embed support.
- [ ] Audit the external quote flow from start to finish.
  - Access needed: quote app access or staging/test submission permission.
- [ ] Preserve UTMs across all external quote/contact/booking links.
- [ ] Add cross-domain tracking between `moveroo.com.au` and `quotes.moveroo.com.au`.
  - Access needed: GA4/admin access and quote-domain implementation access.
- [ ] A/B test callback-first vs quote-first hero CTA.
  - Access needed: experimentation tooling or analytics decision.

## 4. Social Proof And Reputation

- [ ] Replace generic testimonials with verified customer proof.
  - Access needed: customer permission and source reviews.
- [ ] Add real review source links, e.g. Google reviews or other platforms.
  - Access needed: review profile URLs and approval to use reviews.
- [ ] Add route-specific case studies.
  - Combined home + vehicle move.
  - Complex access move.
  - Regional/interstate move.
  - Fleet or multi-vehicle move.
- [ ] Add "recent routes coordinated" if operationally safe.
  - Access needed: job history and privacy rules.
- [ ] Add measurable proof only where verifiable.
  - Response time, quote turnaround, booking confirmation time, review rating.
  - Access needed: CRM/support/analytics data.
- [ ] Add complaint-aware trust content without defensive language.
  - Delay handling, communication gaps, payment clarity, damage reporting.
- [ ] Add review request workflow after completed moves.
  - Access needed: CRM/email/SMS tooling.

## 5. SEO And Content Expansion

- [ ] Build core city pages:
  - [ ] Brisbane
  - [ ] Sydney
  - [ ] Melbourne
  - [ ] Gold Coast
  - [ ] Adelaide
  - [ ] Perth
  - [ ] Canberra
- [ ] Build route pages for major household move corridors.
- [ ] Build route pages for vehicle transport corridors.
- [ ] Build high-intent commercial pages:
  - [ ] Interstate removalists
  - [ ] Backloading removals
  - [ ] Move car interstate
  - [ ] Transport car interstate
  - [ ] Interstate car transport
- [ ] Build moving cost guide pages.
- [ ] Build vehicle transport cost guide pages.
- [ ] Build moving checklist content.
- [ ] Build vehicle transport checklist content.
- [ ] Build "how to compare moving quotes" content.
- [ ] Build "questions to ask before booking a removalist" content.
- [ ] Build "backloading vs dedicated move" content.
- [ ] Build "door-to-door vs depot vehicle transport" content.
- [ ] Build glossary content:
  - [ ] Backloading
  - [ ] Cubic metres
  - [ ] Shuttle vehicle
  - [ ] Depot
  - [ ] Carrier
  - [ ] Condition report
  - [ ] Access constraints
- [ ] Add internal links from informational content to quote paths and trust page.
- [ ] Use review/rating schema only if real review data is available.
  - Access needed: verified review count, rating, and source.

## 6. Analytics, Measurement, And Funnel Visibility

- [ ] Track all CTA clicks, not only household and vehicle quote links.
- [ ] Track phone taps.
- [ ] Track callback/contact clicks.
- [ ] Track booking clicks.
- [ ] Track cancellation form starts, submissions, and errors.
- [ ] Track service-lane clicks.
- [ ] Track FAQ opens.
- [ ] Track scroll depth on major pages.
- [ ] Track trust-page CTA clicks once the page exists.
- [ ] Create a weekly dashboard:
  - Leads
  - Quote-starts
  - Quote completions
  - Bookings
  - Revenue
  - Gross margin
  - Cancellations
  - Refunds
  - Damage/support claims
  - Reviews requested/received
  - Average response time
  - Access needed: GA4, quote system, CRM, payments, support data.
- [ ] Segment reporting by service type:
  - Household
  - Vehicle
  - Combined
  - Specialty
  - Business/fleet
  - Access needed: CRM/quote taxonomy.
- [ ] Track bad-fit lead reasons.
  - Access needed: sales/CRM workflow.
- [ ] Track quote abandonment reasons.
  - Access needed: quote form analytics or customer follow-up.

## 7. Sales, Follow-Up, And Customer Lifecycle

- [ ] Define speed-to-lead target by channel.
  - Access needed: current sales capacity and CRM timestamps.
- [ ] Create quote follow-up sequences.
  - First response, reminder, trust proof, urgency, callback offer, close/lost.
- [ ] Create abandoned quote recovery.
  - Access needed: quote platform events and email/SMS tooling.
- [ ] Create call scripts for common objections:
  - Price
  - Trust
  - Damage
  - Delays
  - Deposit
  - Insurance/cover
  - Partner responsibility
- [ ] Create post-quote educational emails explaining the process.
- [ ] Create pre-move check-in emails/SMS.
- [ ] Create one-week inventory check-in workflow.
- [ ] Create post-move review/referral workflow.
- [ ] Create win-back flow for lost quotes.
- [ ] Define ideal-job profile.
  - Access needed: margin, conversion, and support data.
- [ ] Define bad-fit job profile and routing/filtering rules.
  - Access needed: operations and sales input.

## 8. Operations And Partner Quality

- [ ] Document the actual partner allocation process.
  - Access needed: internal operations workflow.
- [ ] Define partner vetting standards.
  - Draft created: `docs/PARTNER-VETTING-STANDARDS-DRAFT.md`.
  - Still needed: review against actual partner records and Konrad approval for operations use.
  - Access needed: current partner requirements and legal constraints.
- [ ] Create customer/partner-facing explainer for how Moveroo matches jobs with transport partners.
  - Draft created: `docs/PARTNER-MATCHING-EXPLAINER-DRAFT.md`.
  - Still needed: Konrad review for operational accuracy and Jason review for public-claim, cover, payment, and legal/commercial risk.
  - Use the internal vetting standard as source material, but do not expose operational thresholds, restriction logic, incident handling, or removal/re-entry details.
- [ ] Define partner performance scorecard.
  - Communication
  - Reliability
  - Damage claims
  - Cancellation rate
  - Customer feedback
  - Route/service suitability
- [ ] Track partner performance by job type and route.
  - Access needed: job history and partner data.
- [ ] Define escalation SLAs.
  - Access needed: support capacity.
- [ ] Create damage-reporting process and public summary.
  - Access needed: legal/insurance review.
- [ ] Create delay/access-change handling process and public summary.
- [ ] Create internal customer status states:
  - Quote requested
  - Details under review
  - Provider fit checked
  - Quote clarified
  - Provider/date confirmed
  - Deposit pending
  - Booked
  - Pre-move check
  - Collection
  - Delivery
  - Closed/review requested
- [ ] Consider a customer-facing move dashboard.
  - Access needed: quote/CRM/product feasibility.

## 9. Legal, Compliance, And Policy Clarity

- [ ] Legal review of public insurance/cover wording.
- [ ] Legal review of deposit, cancellation, and refund policy.
- [ ] Legal review of "coordination team" vs "carrier/removalist" role language.
- [ ] Align website promises with transport terms.
- [ ] Add ACL-friendly plain-language summaries on legal pages.
- [ ] Make cancellation/refund examples clearer.
- [ ] Confirm whether Moveroo may recommend third-party cover and how that must be phrased.
- [ ] Confirm use of "licensed partners" in footer.
  - Access needed: proof of partner licensing or safer wording.
- [ ] Confirm use of "verified," "vetted," "trusted," and similar trust claims.
  - Access needed: substantiation for claims.

## 10. Design, Brand, And Visual Proof

- [ ] Add real transport/moving imagery.
  - Homepage hero.
  - Household move.
  - Vehicle transport.
  - Specialty/storage/freight.
  - Access needed: photo assets, shoot, stock budget, or generated-image approval.
- [ ] Reduce reliance on abstract gradient visuals where real-world proof would work better.
- [ ] Add process timelines.
- [ ] Add route-board visual modules with operational meaning.
- [ ] Add trust modules for:
  - Partner allocation
  - Deposit
  - Inventory check
  - Collection
  - Delivery
  - Escalation
- [ ] Improve mobile CTA density and trust reassurance.
- [ ] Add comparison module:
  - Moveroo vs booking separate providers vs direct removalist/carrier.
- [ ] Make legal/support pages easier to scan with plain-language summary boxes.

## 11. Technical And Repo Hygiene

- [ ] Add automated link check for internal and external links.
- [ ] Add a check that `public/llms.txt` links match `src/config/site.ts`.
- [ ] Add a check for prohibited or risky insurance phrases.
- [ ] Add a check for stale quote domains.
- [ ] Add tests or checks for critical redirects.
- [ ] Add a cancellation form smoke test.
- [ ] Remove unused starter assets if confirmed unused.
- [ ] Archive old crawl snapshots or move them out of the active working tree if they become noisy.
- [ ] Resolve Astro check hints where worthwhile.
- [ ] Add `is:inline` explicitly to schema scripts if keeping current pattern.
- [ ] Remove unused `index` variable in testimonials.
- [ ] Review internal design/template pages and noindex behavior.

## 12. Growth, Partnerships, And Revenue Strategy

- [ ] Define priority acquisition channels.
  - Organic SEO
  - Paid search
  - Dealerships
  - Real estate agents
  - Storage facilities
  - Auction houses
  - Relocation partners
- [ ] Build paid-search landing pages by intent.
  - Household move
  - Vehicle transport
  - Combined move
  - Backloading
  - Urgent move
- [ ] Build partner referral pitch materials.
  - Access needed: commercial offer and partner terms.
- [ ] Create referral program for completed customers.
  - Access needed: incentive decision.
- [ ] Create "send us your quote and we'll sanity-check it" lead magnet.
  - Access needed: legal/commercial guardrails.
- [ ] Segment campaigns by high-margin job profile.
  - Access needed: margin and booking data.

## 13. Research And External Audits

- [ ] Interview 10 recent customers.
  - Access needed: customer list and permission.
- [ ] Interview 5 lost leads.
  - Access needed: CRM lost-lead list.
- [ ] Review call recordings or call notes.
  - Access needed: call platform access and privacy approval.
- [ ] Review support emails and complaint themes.
  - Access needed: support inbox/export.
- [ ] Review cancellation reasons.
  - Access needed: cancellation/support records.
- [ ] Review damage/refund disputes.
  - Access needed: operations/support records.
- [ ] Mystery-shop competitors.
  - Muval
  - Find a Mover
  - Moving Cars/vehicle competitors
  - Direct removalists
  - Direct car carriers
- [ ] Compare competitor response speed, quote clarity, pricing, trust proof, and follow-up.
- [ ] Audit Google reviews and third-party review presence.
  - Access needed: review profiles or search findings.

## Access Needed Summary

The following access or inputs would unlock the next layer of work:

- [ ] Vercel/project deployment access or owner confirmation.
- [ ] Quote app access for `quotes.moveroo.com.au`.
- [ ] GA4/admin access.
- [ ] CRM or lead database export.
- [ ] Call tracking/call recording access.
- [ ] Support inbox or support-ticket export.
- [ ] Cancellation/refund/damage logs.
- [ ] Partner list and partner performance data.
- [ ] Revenue, job value, and gross margin by service type.
- [ ] Paid ad account access if paid campaigns exist.
- [ ] Verified customer reviews and permission to use them.
- [ ] Legal/compliance review support.
- [ ] Brand/image asset source or budget.

## Suggested Work Order

1. Immediate triage: cancellation route, insurance language, `llms.txt`, SendGrid, spam protection.
2. Trust foundation: build the protection page and link it into core conversion paths.
3. Conversion instrumentation: track all key CTAs, phone taps, and quote handoffs.
4. Service architecture: combined moves, backloading, dedicated moves, vehicle sub-services.
5. Proof: verified reviews, case studies, route examples, measurable operating claims.
6. SEO expansion: city, route, cost, checklist, and glossary content.
7. Operations alignment: partner scorecards, escalation process, check-in workflows.
8. Growth: paid landing pages, referral partners, customer referral loops.
9. Deep business audit: CRM, calls, margins, cancellations, complaints, competitors.
