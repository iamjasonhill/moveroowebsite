# Moveroo 14-Day Revenue Capture Sprint

## Sprint Goal

Increase qualified quote volume and improve quote-to-booking conversion without making promises Moveroo cannot control.

Commercial priority:

1. Household removals
2. Vehicle transport
3. Combined household + vehicle relocation

Positioning rule: Moveroo coordinates the quote path, planning, support flow and vetted transport partner fit. Do not promise the cheapest price, one provider for combined moves, or same-day delivery across both household and vehicle services.

## Sprint OKRs

Objective: get more qualified revenue opportunities through the door in 14 days.

Key results:

- Increase quote-path clicks from the homepage and core service pages.
- Establish a quote pipeline with stage, owner, source and lost-reason tracking.
- Launch a narrow high-intent Google Ads test for household removals and vehicle transport.
- Create a weekly revenue dashboard for quote volume, source quality, conversion and margin signals.
- Ship at least one conversion improvement to the homepage or quote path.

## Offer Architecture

| Offer                          | Role                   | Primary CTA             | Notes                                                                                  |
| ------------------------------ | ---------------------- | ----------------------- | -------------------------------------------------------------------------------------- |
| Household removals             | Main revenue lane      | Start a household quote | Lead with inventory, access, route, timing and support needs.                          |
| Vehicle transport              | Secondary revenue lane | Start a vehicle quote   | Lead with vehicle type, condition, route, access and timing.                           |
| Household + vehicle relocation | Differentiator         | Start a household quote | Use when furniture/cartons are part of the move; include vehicle details in the brief. |
| Callback/support               | Assisted path          | Request a callback      | Use for complex or uncertain jobs, not as the primary homepage action.                 |

## Quote Pipeline

| Stage            | Entry                                           | SLA                               | Next action                                               | Exit                    |
| ---------------- | ----------------------------------------------- | --------------------------------- | --------------------------------------------------------- | ----------------------- |
| New enquiry      | Quote, call, email or callback request received | Same business day where practical | Confirm receipt and missing details                       | Qualified or closed     |
| Details needed   | Required move/vehicle details are incomplete    | Same business day                 | Request route, timing, inventory/access/vehicle condition | Quote-ready or closed   |
| Quote requested  | Enough details exist to route the job           | Same business day                 | Match service pathway/provider fit                        | Quote sent              |
| Quote sent       | Customer has quote or quote pathway             | 24-hour follow-up                 | Clarify questions and decision timing                     | Won/lost/follow-up      |
| Pending decision | Customer is considering                         | 48-72 hour follow-up              | Handle objections and confirm timing                      | Won/lost                |
| Won              | Customer proceeds                               | Immediate                         | Confirm booking/support steps                             | Handoff to delivery ops |
| Lost             | Customer does not proceed                       | Same day logged                   | Record lost reason                                        | Reporting               |

Lost reasons:

- Price
- Timing
- Trust/proof
- Already booked
- Unsupported route/service
- Could not reach
- Details incomplete
- Not ready yet
- Other

## Follow-Up Sequences

### New Quote Received

Subject: We have your Moveroo quote request

Thanks for sending the details through. We will check the route, timing and service pathway so the quote is matched to the job properly.

If anything important is missing, we will ask before treating this as ready to quote. A quote request is not a booking.

### Missing Details

Subject: A few details will help us quote this properly

To avoid guessing, can you send through:

- pickup and delivery suburbs
- preferred timing
- inventory or vehicle details
- access notes
- any storage, packing or extra support needs

For household moves with a vehicle included, start from the household move details and include the vehicle information in the same brief.

### 24-Hour Quote Follow-Up

Subject: Any questions about the Moveroo quote?

Just checking whether anything in the quote pathway needs clarification. The main things that can affect next steps are timing, access, inventory/vehicle condition and provider availability.

If the move has changed, send through the updated details and we can adjust the pathway.

### 72-Hour Decision Follow-Up

Subject: Should we keep this move open?

Do you still need help with this move or vehicle transport? If you are still deciding, we can clarify the quote assumptions or help work out whether the household, vehicle or combined pathway is the right fit.

## Paid Search Test

Run Google Ads only for the sprint. Do not start broad social awareness until conversion tracking and quote handling are reliable.

Campaigns:

| Campaign                         | Intent                                                           | Landing page                     | Notes                                                |
| -------------------------------- | ---------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------- |
| Household removals - high intent | household removalist, interstate removalist, moving company      | `/household-removals/`           | Phrase/exact match first.                            |
| Vehicle transport - high intent  | car transport, vehicle transport, interstate car transport       | `/moving-cars/`                  | Separate running/non-running terms if volume allows. |
| Combined move - exploratory      | move house and car interstate, car transport with household move | `/household-vehicle-relocation/` | Small budget cap until signal improves.              |
| Brand protection                 | moveroo, moving cars moveroo                                     | homepage or service page         | Keep cheap if competitors/aggregators appear.        |

Initial rules:

- Use tight geography: Australia only, with priority to serviceable/high-value regions.
- Start exact and phrase before broad.
- Add negatives quickly: jobs, careers, salary, free, DIY, truck hire, furniture only if irrelevant, shipping container if irrelevant.
- Measure qualified quote, not just clicks.
- Pause keywords that create low-fit leads.

Ad angles:

- Household moves: clear quote path around route, inventory, access and timing.
- Vehicle transport: car and motorcycle transport with vehicle-first quote handling.
- Combined moves: household move plus vehicle details in one brief.
- Trust: quote requests are checked before booking; support path is clear.

## Page CRO Sprint Actions

Already shipped:

- Homepage primary CTA changed to `Start a household quote`.
- Homepage secondary CTA changed to `Start a vehicle quote`.
- Callback remains available through the contact page.

Next CRO priorities:

1. Add a compact quote-path chooser on the homepage below the hero.
2. Add trust/protection proof near each core service CTA.
3. Add a short "what happens after requesting a quote" module to household and vehicle pages.
4. Reduce secondary navigation choices near paid-search landing sections.
5. Add callback fallback near complex-move CTAs.

## Dashboard

Review daily during the sprint, then weekly.

| Metric                   | Definition                                           | Source                 | Cadence | Action trigger                   |
| ------------------------ | ---------------------------------------------------- | ---------------------- | ------- | -------------------------------- |
| Quote clicks             | Clicks to household, vehicle or callback quote paths | GA4/site events        | Daily   | Drop or mismatch by service page |
| Qualified quotes         | Quote requests with enough details to route          | Quote workspace/CRM    | Daily   | Low quality from source          |
| Quote sent rate          | Quotes sent / qualified quotes                       | CRM/manual tracker     | Daily   | Bottleneck in quote handling     |
| Speed to first response  | Time from enquiry to first response                  | CRM/email/call log     | Daily   | Above same-business-day target   |
| Close rate               | Won jobs / quotes sent                               | CRM/manual tracker     | Weekly  | Follow-up or trust issue         |
| Lost reason mix          | Categorised lost opportunities                       | CRM/manual tracker     | Weekly  | Fix top recurring reason         |
| Cost per qualified quote | Ad spend / qualified paid quotes                     | Google Ads + CRM       | Daily   | Pause wasteful terms             |
| Service mix              | Household vs vehicle vs combined                     | CRM/manual tracker     | Weekly  | Reallocate content/ad effort     |
| Margin signal            | Revenue less provider/direct job costs               | Finance/manual tracker | Weekly  | Stop scaling weak-margin lane    |

## Day-by-Day Plan

Day 1:

- Confirm quote pipeline stages and lost reasons.
- Verify tracking for quote/callback clicks.
- Ship homepage quote-first CTA priority.

Day 2:

- Create manual quote tracker if CRM reporting is not ready.
- Add source, service type, stage, first-response time and lost reason fields.

Day 3:

- Finalise quote follow-up templates.
- Add support/protection links to quote follow-up copy.

Day 4:

- Build Google Ads account structure and keyword list.
- Draft ads for household, vehicle and combined campaigns.

Day 5:

- Launch paid search with conservative daily budget and exact/phrase match.
- Check search terms and lead quality within 24 hours.

Day 6:

- Review homepage and service-page quote-click data.
- Identify the highest-exit or weakest CTA page.

Day 7:

- First sprint review: quote volume, source quality, response time, lost reasons.
- Cut poor-fit paid terms and reallocate to high-intent service terms.

Day 8:

- Add or refine "what happens after requesting a quote" messaging on core pages.

Day 9:

- Add review/proof request process for completed jobs.
- Start collecting usable proof snippets with permission.

Day 10:

- Create objection bank from lost reasons and customer questions.
- Add the top objection to follow-up copy.

Day 11:

- Review paid search query report.
- Add negatives and split high-quality terms if needed.

Day 12:

- Review quote-to-booking blockers.
- Decide whether the issue is traffic quality, response speed, quote clarity, price, or trust.

Day 13:

- Prepare the next 30-day revenue plan from actual sprint data.

Day 14:

- Final sprint review.
- Keep, scale, pause or fix each channel/service lane.

## End-of-Sprint Decision Rules

Scale:

- High qualified quote rate
- Acceptable cost per qualified quote
- Reasonable close rate or clear path to improve it
- No serious margin/service quality concern

Fix:

- Good quote volume but weak close rate
- Repeated objections
- Slow response
- Confusing quote path

Pause:

- Low-fit leads
- Weak margin
- High support load
- Repeated unsupported routes/services

## What Not To Do During This Sprint

- Do not run broad social awareness ads.
- Do not discount before checking margin.
- Do not promise cheapest pricing.
- Do not promise one provider for combined household and vehicle moves.
- Do not promise same-day delivery for both services.
- Do not build large pSEO sets until quote capture and reporting are stable.
