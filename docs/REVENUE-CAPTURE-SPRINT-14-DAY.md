# Moveroo 14-Day Revenue Capture Sprint

## Source Repos Reviewed

This sprint is based on both accessible Moveroo repos:

- Website repo: `iamjasonhill/moveroowebsite`
  - Public marketing site, service pages, homepage CTAs, GA4 tracked links, canonical quote handoffs.
- Admin/quote-system analysis repo: `moveroo/moveroocombined-analysis`
  - Private analysis mirror for reading and issue filing only.
  - Source sync checked: `6ee2e0f7b181453901923fa7952f7c42ab030196`, synced `2026-05-06T06:36:12Z`.
  - Because this mirror may lag the live implementation, confirm any admin-system action against production before treating it as operationally final.

## Sprint Goal

Get more qualified revenue opportunities through the door in 14 days by improving quote capture, quote follow-up, source visibility and paid-search focus.

Commercial priority:

1. Household removals
2. Vehicle transport
3. Combined household + vehicle relocation

Positioning rule: Moveroo coordinates the quote path, planning, support flow and vetted transport partner fit. Do not promise the cheapest price, one provider for combined moves, or same-day delivery across both household and vehicle services.

## Sprint OKRs

Objective: increase qualified quote flow and reduce leakage between first click, quote submission, quote review and booking action.

Key results:

- Homepage and service pages point ready buyers to the correct quote path first.
- Every paid-search click uses clean UTMs that survive into the admin attribution views.
- Household and vehicle quote submissions are reviewed daily through the existing quote/admin surfaces.
- Quote follow-up uses current SMS/email journey capability before new manual processes are invented.
- The sprint dashboard reports quote volume, attribution, quote journey progress, response blockers and next actions.

## Existing System Surfaces To Use

Use existing admin capabilities before creating new spreadsheets or tooling.

| Need                    | Existing surface                                                                       | Notes                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Public quote entry      | `/quote/household`, `/quote/vehicle`                                                   | Website CTAs already hand off to `quotes.moveroo.com.au`.                     |
| Callback fallback       | `/contact#callback` and callback booking                                               | Use for uncertain or complex jobs, not as the primary homepage action.        |
| Attribution review      | `/admin/attribution/quotes`                                                            | Shows household quote attribution, UTM, click IDs, landing host and customer. |
| Customer attribution    | `/admin/attribution/customers`                                                         | Useful for repeat/return customer source history.                             |
| UTM setup               | `/admin/utm/generator`, `/admin/tracking-seo/presets`, `/admin/tracking-seo/campaigns` | Use existing UTM presets/generator for ad URLs.                               |
| Owned link tracking     | `/admin/tracking-seo/owned-links`                                                      | Use when links should route through tracked short redirects.                  |
| Household quote journey | `/admin/tracking-seo/quote-journeys/household`                                         | Email funnel from first notification through booking/payment signals.         |
| Vehicle quote journey   | `/admin/tracking-seo/quote-journeys/vehicle`                                           | Vehicle results-ready email through booking/payment signals.                  |
| Provider reminders      | `/admin/quote-reminders`                                                               | Tracks pending/due provider quote reminders.                                  |
| Customer quote portal   | `/customer/quotes/removals/{id}`, `/customer/quotes/cars/{id}`                         | Customer-facing quote option review and booking actions.                      |
| SMS follow-up context   | SMS automation/intent guidance in admin mirror                                         | Use as follow-up guardrails; do not invent conflicting SMS behaviour.         |

## Offer Architecture

| Offer                          | Role                   | Primary CTA             | Quote path          | Notes                                                                                               |
| ------------------------------ | ---------------------- | ----------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| Household removals             | Main revenue lane      | Start a household quote | `/quote/household`  | Lead with inventory, access, route, timing and support needs.                                       |
| Vehicle transport              | Secondary revenue lane | Start a vehicle quote   | `/quote/vehicle`    | Lead with vehicle type, condition, route, access and timing.                                        |
| Household + vehicle relocation | Differentiator         | Start a household quote | `/quote/household`  | If furniture/cartons are part of the job, start household and include vehicle details in the brief. |
| Callback/support               | Assisted path          | Request a callback      | `/contact#callback` | Use for complex or uncertain jobs. It should not outrank direct quote CTAs for ready buyers.        |

## Quote Pipeline

Use these as operating stages even if the underlying admin status labels differ.

| Stage                  | Entry                                                   | SLA                               | Admin/source signal                                                             | Next action                                               | Exit                                      |
| ---------------------- | ------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| Quote path click       | Visitor clicks household, vehicle or callback CTA       | Daily review                      | GA4/site events and attribution capture                                         | Confirm click volume and service mix                      | Submitted or abandoned                    |
| Draft started          | Quote form/wizard begins                                | Daily review                      | `household_quote_started`, `vehicle_quote_started`, draft records where visible | Identify drop-off if starts do not become submissions     | Submitted or abandoned                    |
| Submitted              | Customer submits quote request                          | Same business day where practical | Quote/admin records, confirmation SMS/email                                     | Review detail quality and route to correct lane           | Details needed or pricing/review ready    |
| Details needed         | Required details are incomplete                         | Same business day                 | Staff review, SMS/email reply context                                           | Ask for route, timing, inventory/access/vehicle condition | Quote-ready or closed                     |
| Pricing/review ready   | Enough details exist to price or request provider input | Same business day                 | Household status/vehicle quote state, provider request surfaces                 | Check provider availability or quote options              | Customer-facing option available          |
| Customer-facing option | Customer can act on price/options                       | 24-hour follow-up                 | Customer quote view and journey reports                                         | Prompt customer to review options and choose next step    | Booking started, pending decision or lost |
| Pending decision       | Customer has not acted                                  | 48-72 hour follow-up              | Email/SMS journey, quote reminders, customer portal                             | Handle objection and confirm timing                       | Won/lost                                  |
| Won                    | Customer starts/requests booking                        | Immediate                         | Booking create/success/customer portal                                          | Confirm booking/support path                              | Delivery ops                              |
| Lost/no-thanks         | Customer does not proceed                               | Same day logged                   | Staff disposition/status/lost reason where available                            | Record reason and stop inappropriate follow-up            | Reporting                                 |

Lost-reason taxonomy for sprint review:

- Price/cost concern
- Timing/date/availability concern
- Provider fit/trust concern
- Already booked elsewhere
- Unsupported route/service
- Could not reach/no response
- Details incomplete
- Not ready yet
- Duplicate/test/spam
- Other

## Follow-Up Guardrails

The admin mirror already contains SMS journey and intent guidance. Do not create conflicting customer messaging.

Use these principles:

- First receipt should confirm the request was received and set the reply path.
- If pricing is already available, send the price/options message instead of a generic receipt.
- Price-ready messages should direct customers to review options in the customer quote view.
- Customer replies about price, timing, help, provider fit or booking status should pause generic follow-up and route to a human.
- Ambiguous replies such as "already booked" need staff review before marking lost.
- Keep copy customer-facing: use "Moveroo options", "removalists", "quote request" and "review your options"; avoid internal terms like "manual intervention".

### Manual Follow-Up Templates

Use these only when a staff member needs a human fallback outside the automated journey.

#### Missing Details

Subject: A few details will help us quote this properly

To avoid guessing, can you send through:

- pickup and delivery suburbs
- preferred timing
- inventory or vehicle details
- access notes
- any storage, packing or extra support needs

For household moves with a vehicle included, start from the household move details and include the vehicle information in the same brief.

#### 24-Hour Options Follow-Up

Subject: Any questions about your Moveroo options?

Just checking whether anything needs clarification. The main things that can affect the next step are timing, access, inventory or vehicle condition, and provider availability.

If the move has changed, send through the updated details and we can review the pathway.

#### 72-Hour Decision Follow-Up

Subject: Should we keep this move open?

Do you still need help with this move or vehicle transport? If you are still deciding, we can help clarify whether the household, vehicle or combined pathway is the right fit.

## Paid Search Test

Run Google Ads only during the sprint. Do not start broad social awareness until quote capture and source reporting are stable.

Use admin UTM tooling/presets where possible. Every paid URL should include:

- `utm_source=google`
- `utm_medium=cpc`
- `utm_campaign=moveroo_revenue_capture_2026_05`
- `utm_term={keyword}`
- `utm_content={adgroup_or_ad_variant}`

Campaigns:

| Campaign                         | Intent                                                           | Landing page                      | Quote path         | Budget posture                               |
| -------------------------------- | ---------------------------------------------------------------- | --------------------------------- | ------------------ | -------------------------------------------- |
| Household removals - high intent | household removalist, interstate removalist, moving company      | `/household-removals/`            | `/quote/household` | Primary budget                               |
| Vehicle transport - high intent  | car transport, vehicle transport, interstate car transport       | `/moving-cars/`                   | `/quote/vehicle`   | Secondary budget                             |
| Combined move - exploratory      | move house and car interstate, car transport with household move | `/household-vehicle-relocation/`  | `/quote/household` | Small test cap                               |
| Brand protection                 | moveroo, moving cars moveroo                                     | homepage or relevant service page | matched to intent  | Keep cheap if competitors/aggregators appear |

Initial rules:

- Exact and phrase match first.
- Australia-only targeting, with priority to serviceable/high-value regions.
- Negative keywords from day one: jobs, careers, salary, free, DIY, truck hire, rental, template, meaning, furniture only if irrelevant, shipping container if irrelevant.
- Optimise to qualified quote submissions, not raw clicks.
- Review search terms within 24 hours of launch.
- Pause keywords that create low-fit or unsupported jobs.

Ad angles:

- Household: clear quote path around route, inventory, access and timing.
- Vehicle: car and motorcycle transport with vehicle-first quote handling.
- Combined: household move plus vehicle details in one brief.
- Trust: quote requests are reviewed before booking; support path is clear.

## Page CRO Sprint Actions

Already shipped:

- Homepage primary CTA changed to `Start a household quote`.
- Homepage secondary CTA changed to `Start a vehicle quote`.
- Callback remains available through the contact page.

Next CRO priorities:

1. Add a compact quote-path chooser below the homepage hero.
2. Add "what happens after requesting a quote" modules to household and vehicle pages.
3. Add trust/protection proof near the final CTA on each core service page.
4. Make paid-search landing sections minimise distracting secondary CTAs.
5. Keep callback as fallback for complex jobs, not the main path for ready buyers.

## Dashboard

Review daily during the sprint, then weekly.

| Metric                       | Definition                                           | Primary source                         | Cadence | Action trigger                     |
| ---------------------------- | ---------------------------------------------------- | -------------------------------------- | ------- | ---------------------------------- |
| Quote CTA clicks             | Clicks to household, vehicle or callback quote paths | Website GA4 events and tracked links   | Daily   | Service mix mismatch or click drop |
| Started quote forms          | Household/vehicle quote form starts                  | Admin quote form analytics/events      | Daily   | Starts without submissions         |
| Submitted quotes             | Customer quote requests submitted                    | Admin quote records                    | Daily   | Volume below target                |
| Attribution coverage         | Submitted quotes with UTM/click ID/landing data      | `/admin/attribution/quotes`            | Daily   | Paid traffic missing attribution   |
| Qualified quotes             | Submitted quotes with enough detail to route         | Staff review/admin quote state         | Daily   | Low quality by source              |
| Customer-facing options      | Quotes with visible options/results                  | Customer quote views/journey reports   | Daily   | Pricing/review bottleneck          |
| Booking starts               | Customers moving from quote option to booking        | Quote journey reports/customer portal  | Daily   | Weak options-to-booking conversion |
| Provider response bottleneck | Pending/due provider quote requests                  | `/admin/quote-reminders`               | Daily   | Due-now reminders accumulating     |
| Lost reason mix              | Categorised lost/no-thanks outcomes                  | Admin status/disposition + staff notes | Weekly  | Same objection recurring           |
| Cost per qualified quote     | Ad spend / qualified paid quotes                     | Google Ads + attribution/admin review  | Daily   | Pause wasteful terms               |
| Margin signal                | Revenue less provider/direct job costs               | Finance/admin/manual review            | Weekly  | Stop scaling weak-margin lane      |

## Day-by-Day Plan

### Day 1: Confirm Instrumentation And Source Of Truth

- Confirm website quote CTAs point to the correct quote workspace URLs.
- Confirm quote starts/submissions appear in the admin system for household and vehicle.
- Open `/admin/attribution/quotes` and confirm recent household quotes show landing/UTM data where expected.
- Open vehicle quote admin views and confirm vehicle quotes show attribution fields where expected.
- Confirm admin mirror freshness before using it for implementation assumptions.

### Day 2: Campaign Tracking Setup

- Create or confirm a sprint campaign in admin UTM/campaign tooling.
- Generate paid-search URLs for each landing page.
- Ensure URLs preserve `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` and `utm_content`.
- Record the exact final URLs to be used in Google Ads.

### Day 3: Quote Handling Operating Cadence

- Define the daily quote review time block.
- Review new household quotes, vehicle quotes and callback requests.
- For each new quote, assign one of: details needed, pricing/review ready, customer-facing option, pending decision, won, lost.
- Start logging the sprint lost-reason taxonomy in notes/status where the admin system supports it.

### Day 4: Paid Search Build

- Build Google Ads campaigns/ad groups.
- Use exact/phrase match first.
- Draft at least two ads per ad group.
- Apply negatives before launch.
- Use household budget first, vehicle second, combined exploratory third.

### Day 5: Launch Paid Search

- Launch with conservative daily budgets.
- Check that ad clicks land on the intended service pages.
- Confirm paid traffic appears in attribution views after test clicks or first live clicks.
- Review search terms within 24 hours.

### Day 6: Customer-Facing Quote Path Review

- Review `/quote/household` and `/quote/vehicle` from the customer perspective.
- Note friction points that could reduce completion.
- Confirm the quote request copy still makes clear that submitting a quote request is not a booking.
- Identify the first form/page improvement candidate for the next implementation pass.

### Day 7: First Sprint Review

- Review quote CTA clicks, submitted quotes, attribution coverage and provider reminder bottlenecks.
- Cut obvious low-fit paid terms.
- Check if quote handling or provider response is the real bottleneck.
- Decide whether Day 8 CRO should target homepage, household page, vehicle page or quote workspace.

### Day 8: CRO Implementation Pass

- Implement one narrow CRO improvement.
- Preferred candidates:
  - homepage quote-path chooser;
  - "what happens after requesting a quote" module;
  - trust/protection snippet near core service CTAs;
  - paid-search landing section cleanup.
- Verify with local checks before deploy.

### Day 9: Follow-Up Quality Review

- Review household and vehicle journey reports.
- Confirm automated or staff follow-up is happening at the right stage.
- Compare manual follow-up templates against live SMS/email journey copy before using them.
- Add the top customer objection to staff notes or follow-up guidance.

### Day 10: Provider And Pricing Bottleneck Review

- Check `/admin/quote-reminders`.
- Identify due-now and never-responded provider quote requests.
- For household quotes stuck before customer-facing options, decide whether the issue is provider response, missing detail, route fit or internal handling.
- For vehicle quotes, check provider/manual pricing and booking-on-behalf paths where relevant.

### Day 11: Paid Search Optimisation

- Review search terms, campaign/ad group quality and attribution coverage.
- Add negatives.
- Split high-quality terms if needed.
- Pause campaigns that produce low-fit or unsupported jobs.

### Day 12: Conversion Blocker Diagnosis

- For the last 7 days of sprint activity, classify blockers:
  - traffic quality;
  - quote form friction;
  - missing details;
  - provider response;
  - price objection;
  - timing/availability;
  - trust/proof;
  - booking step friction.
- Pick one blocker to fix immediately and one for the next 30-day plan.

### Day 13: Next 30-Day Revenue Plan

- Use actual sprint data to decide scale/fix/pause by service lane.
- Prepare next page/CRO changes.
- Prepare next paid-search budget allocation.
- Prepare admin-system improvement issues if the analysis mirror revealed reporting or workflow gaps.

### Day 14: Final Sprint Review

- Review all dashboard metrics.
- Decide which channels/service lanes to scale, fix or pause.
- Convert unresolved admin-system gaps into issues in `moveroo/moveroocombined-analysis`, not implementation PRs.
- Convert website CRO wins into follow-up website tasks or direct commits if scoped and verified.

## End-of-Sprint Decision Rules

Scale:

- High qualified quote rate
- Attribution is visible enough to trust the source
- Acceptable cost per qualified quote
- Reasonable options-to-booking path or clear fix
- No serious margin/service quality concern

Fix:

- Good quote volume but weak form completion
- Good submissions but weak customer-facing options
- Customer-facing options but weak booking starts
- Repeated price/timing/trust objections
- Provider reminders accumulating
- Attribution missing from paid traffic

Pause:

- Low-fit leads
- Weak margin
- High support load
- Repeated unsupported routes/services
- Paid clicks that do not preserve usable attribution

## Admin-System Issues To Watch

If these are not already solved in the current production implementation, file focused analysis issues rather than changing the mirror:

- Paid-search campaign/reporting view does not easily show cost per qualified quote.
- Household and vehicle dashboards do not share a single sprint scorecard.
- Lost-reason taxonomy is not easy to apply consistently.
- Quote-form starts, submissions and booking-started events are not easy to compare in one view.
- Provider reminder bottlenecks are not connected to customer quote ageing.
- Vehicle attribution is harder to compare with household attribution.

## What Not To Do During This Sprint

- Do not run broad social awareness ads.
- Do not discount before checking margin.
- Do not promise cheapest pricing.
- Do not promise one provider for combined household and vehicle moves.
- Do not promise same-day delivery for both services.
- Do not build large pSEO sets until quote capture and reporting are stable.
- Do not implement code in the admin analysis mirror.
