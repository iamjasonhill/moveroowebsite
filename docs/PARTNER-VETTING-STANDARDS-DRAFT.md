# Partner Vetting Standards Draft

Status: Draft v0.1.

Draft operating standard for substantiating Moveroo's public use of "vetted transport partners".

This document captures the intended partner vetting and recommendation model, but it is not yet an adopted operating policy until reviewed against actual partner records and approved by Konrad for operations use.

This document is internal only. A shorter customer/partner-facing explainer may be created later, but should not expose operational thresholds, restriction logic, incident handling, or removal/re-entry details.

## Purpose

Moveroo uses "vetted transport partners" as customer-facing language. Internally, that phrase should mean more than a one-time badge. It should describe a repeatable process for deciding whether a provider is suitable for a job, monitoring how they perform, and knowing when to pause or avoid allocation.

## Public Claim To Substantiate

Customer-facing meaning:

> "Vetted" means Moveroo checks whether a provider is suitable for the job type, route, timing, access needs, equipment requirements, and service expectations before allocating work. Moveroo also pays attention to communication, reliability, and past job outcomes when deciding who is suitable for future bookings.

This should not imply that every partner is identical, that Moveroo performs the physical move, or that nothing can go wrong.

## Partner Categories

Use these categories when assessing fit:

- Household removalist
- Vehicle carrier
- Motorcycle transport provider
- Non-running vehicle provider
- Boat, caravan, or trailer transport provider
- Storage partner
- Packing or handling support provider
- Specialty freight provider
- Business or fleet relocation provider

## Minimum Partner Record

Each active partner should have a simple internal record containing:

- Legal/business name
- Trading name
- ABN or equivalent business identifier
- Primary contacts
- Service categories supported
- Routes and regions supported
- Equipment or capacity notes
- Access limitations
- Insurance or provider-supplied cover notes, if applicable
- Payment handling rules
- Cancellation or rescheduling constraints
- Known exclusions or bad-fit work
- Date added
- Current status

Moveroo should store operational and business-contact details needed to quote, allocate, support, and review jobs. Avoid storing unnecessary personal documents or sensitive personal information unless there is a clear legal, compliance, or operational need.

If documents such as licences, certificates, or insurance evidence are stored, record the document type, expiry date, and review date.

Recommended statuses:

- Prospect
- Approved for trial
- Active
- Preferred
- Restricted
- Paused
- Removed

Recommendation eligibility:

- `Active` and `Preferred` partners may appear as recommended options by default.
- `Approved for trial` partners may be allocated operationally where appropriate, but should not be presented as the recommended customer option unless Konrad approves the recommendation and records why the trial partner is a suitable fit.
- `Restricted`, `Paused`, and `Removed` partners must not be recommended to customers.

`Restricted` means the partner may still be suitable for some work, but should not be allocated outside documented conditions. A restriction must record:

- Why the provider is restricted
- Evidence or incident that triggered the restriction
- Allowed routes, service types, complexity levels, or customer-risk profiles
- Work that should be avoided
- Review date or condition for changing the status

Example restriction: `Vehicle-only jobs on Brisbane to Sydney corridor; no household moves; no access-constrained jobs. Restricted due to repeated unclear updates on complex access jobs. Review after 3 successful vehicle-only jobs.`

`Paused` means Moveroo should avoid new allocations to the provider except where needed to keep customer service operating. A paused provider may still be allocated when no other options are available or when no other provider is fit for purpose.

A pause must record:

- Why the provider is paused
- Evidence or incident that triggered the pause
- Whether active jobs may continue
- Whether last-resort allocation is allowed
- Conditions for reinstatement
- Review date

When using a paused provider as a last-resort allocation, record why no other suitable option was available and what mitigation is in place.

`Removed` means Moveroo does not intend to allocate future jobs to the provider. Removal should be handled carefully when active jobs may still be in process.

Before formally changing a provider to `Removed`, check whether:

- Any jobs are currently allocated to the provider
- Any jobs have been picked up recently and may still be in transit
- Any customer support, delivery, payment, or cover questions remain open

Removal must record the reason, evidence, active-job check, in-transit check, and whether re-entry would require a fresh approval process.

A removed provider may re-enter the network if the issues that caused removal have been addressed.

Re-entry must record:

- Why re-entry is being considered
- What changed since removal
- Evidence that the original issue has been addressed
- Safeguards to reduce the chance of the issue reappearing
- Whether the provider re-enters as `Prospect`, `Approved for trial`, or `Restricted`
- Follow-up review date

If removal involved serious legal, payment, cover/liability, customer safety, or public trust risk, Jason should be consulted before re-entry.

## Ownership

Konrad owns partner approval and partner status changes because partner allocation, partner contact, and provider fit sit closest to his operating domain.

Jason should be consulted when a partner decision creates legal, policy, commercial, or public-claim risk, including cover wording, payment handling, cancellation disputes, serious incidents, or whether Moveroo can publicly use a claim such as "licensed", "verified", "trusted", or "vetted".

Every status change should record:

- Date
- Owner
- Previous status
- New status
- Short reason

Moves to `Restricted`, `Paused`, `Removed`, or any override require additional evidence, customer-impact notes, active-job check where relevant, and follow-up review date.

### Partner Status Change Log Template

- Date:
- Partner:
- Owner:
- Previous status:
- New status:
- Reason:
- Evidence:
- Customer impact:
- Active/in-transit jobs checked: Yes / No / Not applicable
- Restrictions or conditions:
- Follow-up review date:
- Jason consultation needed: Yes / No
- Notes:

## Trial To Active Threshold

A partner may move from `Approved for trial` to `Active` after at least 3 completed jobs or a documented equivalent review where job volume is low.

The review must show:

- Acceptable communication
- Reliable pickup and delivery behavior
- No unresolved serious complaints
- Clear payment handling
- No unresolved cover or liability confusion

If fewer than 3 jobs are available, Konrad may approve `Active` status with written rationale and a follow-up review date.

## Active To Preferred Threshold

A partner may become `Preferred` only after a pattern of successful jobs across the relevant service type or route.

As a default, require at least 10 completed jobs or 3 months of active use, with:

- Consistently strong communication
- Reliable pickup and delivery timing
- Low complaint rate
- Clear handling of payment questions
- Clear handling of cover or liability questions
- No unresolved serious incidents

Preferred status should be scoped to the context where the partner has proven performance, such as `Preferred for Brisbane to Sydney vehicle transport` or `Preferred for apartment moves in South East Queensland`. It should not be treated as a blanket status across all job types, routes, or service categories.

Moveroo may choose to show a customer-facing recommended or preferred provider for a specific job. If shown publicly or in the quote flow, the recommendation should explain why that provider is the best fit for that job, such as route experience, equipment, timing, access fit, communication history, service category, or past job outcomes.

Customer-facing preferred-provider language should be job-specific. Avoid presenting preferred status as a blanket guarantee, certification, or promise that nothing can go wrong.

Customer-facing recommendations should present who Moveroo believes is the best choice based on the information available at the time. Where it meaningfully helps the customer decide, Moveroo may also show alternative options with clear trade-offs, such as cheaper, slower, faster, more available, more flexible, or better suited to a specific access or vehicle requirement.

This should feel like a guided recommendation, not a generic marketplace list.

Provider names should not be disclosed too early. Early quote or recommendation views may describe the recommended option and the reason it fits, but should generally avoid naming the provider until allocation has been made and ideally until the deposit has been paid.

This protects commercial relationships, reduces provider-shopping issues, and avoids creating expectations before the booking pathway is secured.

Before allocation or deposit, use option labels rather than provider-name labels. Recommended labels include:

- Recommended option
- Lower-cost option
- Earlier availability
- More flexible dates
- Best for access constraints
- Best for non-running vehicle

Example:

> Recommended option: best fit for this job because it supports your route, pickup window, and access requirements. Provider details are confirmed after allocation.

Provider details activate on the customer dashboard once both conditions are met:

1. The job has been allocated.
2. The deposit has been paid.

At that point, the dashboard may show the provider name, provider role in the job, expected contact path, collection/delivery expectations, and what to do if details change.

Minimum customer dashboard provider fields:

- Provider name
- Provider role, such as `vehicle carrier` or `household removalist`
- Service covered by provider
- Pickup/contact expectations
- Collection window or confirmed date
- Delivery window, if available
- Moveroo support contact
- What to do if something changes
- Provider-specific payment or balance note, if applicable
- Provider-supplied cover note, if applicable and carefully worded

Once provider details are active, customers may use provider contact details for operational pickup or delivery coordination if provided.

Provider contact details may be shown where appropriate. Some jobs or providers may remain Moveroo-mediated only.

If direct provider contact is not shown, the dashboard should clearly state that Moveroo remains the coordination contact for pickup or delivery updates.

For changes, unclear updates, damage, cancellation, payment questions, or cover questions, customers should contact Moveroo first so the support path stays documented and coordinated.

Provider reallocation is expected to be rare.

If a provider changes after details have activated but timing, pricing, and service expectations have not changed, updating the customer dashboard with the new provider details is sufficient.

If provider reallocation changes timing, pricing, service expectations, cover pathway, or cancellation implications, Moveroo should notify the customer with what changed and the reason in plain language.

## Customer Recommendation Template

Use this template before provider details have activated:

> We recommend this option because it best matches your `[route / timing / access / vehicle / inventory / service]` needs based on the information currently available. Key reasons:
>
> - `[reason 1]`
> - `[reason 2]`
> - `[reason 3]`
>
> Other options may be available if your priority is lower cost, earlier availability, or more flexible timing. Provider details are confirmed after allocation and deposit payment.

Use reasons that are concrete and relevant to the job. Avoid implying a guarantee or naming the provider before the activation conditions are met.

Allowed customer-facing recommendation reasons:

- Route experience
- Earlier availability
- Lower cost
- More flexible dates
- Better fit for access constraints
- Better fit for inventory volume
- Better fit for fragile or high-attention items
- Better fit for non-running vehicle
- Better fit for motorcycle, boat, caravan, or trailer
- Better communication history
- Better fit for business or fleet requirements
- Better fit for storage or staged handoff
- Fewer handoffs for combined household and vehicle move

Avoid vague claims such as "best quality" unless the evidence and meaning are documented.

## Recommendation Reason Evidence

Each customer-facing recommendation reason should map to lightweight internal evidence:

| Reason                                                 | Evidence To Record                                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Route experience                                       | Prior completed jobs on the route, corridor, or similar regional pattern              |
| Earlier availability                                   | Current availability confirmation or quoted pickup window                             |
| Lower cost                                             | Current quoted price compared with suitable alternatives                              |
| More flexible dates                                    | Provider can support a wider pickup or delivery window                                |
| Better fit for access constraints                      | Provider has suitable equipment, crew, truck size, depot option, or access experience |
| Better fit for inventory volume                        | Provider capacity matches the estimated cubic metres or item profile                  |
| Better fit for fragile or high-attention items         | Provider has relevant handling experience or service notes                            |
| Better fit for non-running vehicle                     | Provider has winch, loading process, or non-running vehicle experience                |
| Better fit for motorcycle, boat, caravan, or trailer   | Provider has suitable equipment or prior similar transport jobs                       |
| Better communication history                           | Past jobs show clear updates, responsive contact, or fewer unclear-update complaints  |
| Better fit for business or fleet requirements          | Provider can handle multiple assets, business timing, or contact requirements         |
| Better fit for storage or staged handoff               | Provider can coordinate storage timing, depot handoff, or staged pickup/delivery      |
| Fewer handoffs for combined household and vehicle move | Same provider or simpler service mix reduces operational handoffs                     |

Evidence does not need to be exposed to the customer in full, but the recommendation should be explainable if challenged.

## Initial Vetting Checks

Before a partner becomes active, Moveroo should confirm:

- The provider performs the service category they are being considered for.
- The provider services the relevant route, region, or corridor.
- The provider has appropriate equipment or operating capacity for the work type.
- The provider can explain pickup, delivery, access, and timing constraints clearly.
- The provider has a clear contact path for booking and support.
- The provider can state payment expectations before booking.
- The provider can explain any provider-supplied cover or liability limits.
- The provider can identify work they should not accept.
- There are no obvious unresolved reliability, communication, or conduct red flags.

## Fit-For-Job Allocation Checks

## Partner Allocation Workflow

Current allocation workflow:

1. Customer submits route, timing, inventory or vehicle, access, and service details.
2. Konrad reviews the job and identifies likely-fit providers.
3. Konrad requests quotes or availability from relevant providers.
4. Providers reply with a quote, availability, or a simple "no".
5. Konrad compares suitable options by price, timing, route/service fit, capacity, and prior performance.
6. Konrad selects the recommended option and any meaningful alternatives.
7. Customer receives the quote or recommendation without provider name disclosed.
8. Once the customer accepts, provider/date is allocated.
9. Customer pays the deposit.
10. Provider details activate on the customer dashboard.

This workflow is the basis for customer-facing recommendation language and provider-name disclosure rules.

The customer may receive one recommended quote or multiple optioned quotes. Multiple options should be shown where the trade-off is meaningful, such as lower cost, earlier availability, faster transit, more flexible timing, better access fit, or fewer handoffs.

Provider names remain hidden until allocation and deposit payment.

When multiple options are shown, one option should be marked `Recommended option` unless there is genuinely no clear best fit. Alternatives should be labelled by their primary trade-off, such as `Lower-cost option`, `Earlier availability`, or `More flexible dates`.

The recommended option should include 2-3 concrete reasons.

If there is no clear best fit, do not mark an option as recommended. Present the options neutrally by trade-off and explain that the best choice depends on the customer's priority, such as lowest price, earliest pickup, fastest delivery, or date flexibility.

Konrad may change the recommended option after it has been sent if new information materially changes fit, availability, price, timing, or risk.

If the customer has not accepted yet, the revised recommendation should explain what changed.

If the customer has accepted, changes should follow the allocation/reallocation rules and disclose any timing, pricing, or service impact.

Provider recommendation freshness mainly depends on availability, not price expiry. Pricing options generally do not expire by default, but a provider may no longer be available for the requested date if other bookings or changes occur.

Before allocation, Moveroo should recheck provider availability.

Customer-facing availability microcopy:

> Provider availability is confirmed before allocation. If your preferred date is no longer available, we'll confirm the closest suitable option before your booking is secured.

Before allocating a specific job, check whether the partner fits:

- Job type: household, vehicle, combined, specialty, storage, fleet, or urgent move.
- Route: origin, destination, interstate corridor, regional access, depot requirements.
- Timing: requested pickup date, delivery window, settlement deadlines, route frequency.
- Access: stairs, lifts, long carries, parking, shuttle needs, depot handoff, site constraints.
- Inventory or vehicle: volume, weight, fragile items, non-running status, dimensions, condition.
- Equipment: truck size, trailer type, winch, enclosed transport, crew, storage, packing.
- Communication needs: customer anxiety, complex handoffs, business/fleet coordination.
- Risk profile: fragile items, high-value goods, disputed access, tight deadlines, unclear inventory.
- Payment and policy fit: deposit, balance timing, cancellation terms, provider-specific constraints.

In many cases, a provider who is not a fit for a job will simply not quote it. This should not automatically be treated as a partner-quality issue. It is usually a useful fit signal.

Common no-quote or not-suitable-for-this-job signals include:

- Route is outside the provider's reliable service area.
- Timing window does not match the provider's route pattern.
- Access constraints exceed the provider's equipment or crew capability.
- Inventory volume or item type exceeds the provider's capacity.
- Vehicle condition requires equipment the provider does not have.
- Job involves service complexity the provider does not support.

Today, providers may simply respond with "no" or similar rather than giving a detailed reason. The current minimum signal to record is that the provider did not quote the job.

Only record a no-quote reason when the provider volunteers it or when the reason is safely obvious from existing information. Do not invent detailed reasons.

## Red Flags

Notify Konrad for review when these appear:

- Repeated missed pickup or delivery windows without clear communication.
- Repeated customer complaints about unclear updates.
- Unexplained price changes after quote acceptance.
- Damage reports without a clear response pathway.
- Refusal to clarify provider-supplied cover, limits, or exclusions.
- Frequent cancellations or capacity changes.
- Poor fit for access-constrained or high-complexity jobs.
- Unclear payment demands or inconsistent payment instructions.
- Unprofessional communication with customers or Moveroo.
- Claims that conflict with Moveroo's public role as a coordination team.

Red flags do not automatically pause allocations. When a threshold is reached, Konrad should be notified and given the option to pause, restrict, monitor, or continue allocation with conditions.

This is important because partners may already have active or upcoming jobs. Immediately cutting off access to work can create more operational risk if it disrupts existing customer commitments. The response should consider live jobs, customer impact, route coverage, available alternatives, and whether the issue affects all work or only a specific route, service type, or complexity level.

## Performance Scorecard

Provider scores should be based strictly on how the provider performed jobs they completed or materially handled. Scores should not be affected by whether the provider did or did not quote a job.

A provider materially handled a job if they were allocated and performed a meaningful operational step, such as pickup, depot handoff, storage handoff, transport leg, delivery attempt, or customer/provider coordination that affected the service outcome.

A provider who only quoted or declined did not materially handle the job.

A completed job is one where the provider fulfilled the allocated service through the expected endpoint, such as delivery, depot handoff, storage handoff, or completion of the agreed transport/removal leg.

A job can still be completed even if there were minor issues, as long as the service was fulfilled. Serious unresolved issues should be recorded separately in incident review.

Recent performance should carry more weight than old performance. Use the last 90 days for short-term review triggers, and the last 12 months for broader preferred/restricted status decisions where enough jobs exist. Older history can provide context but should not override recent patterns.

No-quote responses are fit, capacity, or availability signals. They may help Moveroo understand service boundaries, but they should not count against partner reliability or performance.

Quote participation and job performance should be separate measures.

Non-scored quote participation fields may include:

- Quoted or did not quote
- Quote amount
- Availability window
- Route or category quoted
- Date quote was requested
- Date quote was received
- Optional volunteered reason for no quote

If quote participation is scored in the future, it must be a separate score from job performance and should be labelled as an availability/participation signal, not a quality score.

Internal provider scores should not be customer-facing by default. Scores such as `87/100` do not give customers enough useful context and can create avoidable disputes.

Customer-facing recommendations should show quantified reasons and trade-offs where possible, such as:

- Earlier pickup window
- Lower quoted cost
- Fewer handoffs
- Relevant completed route experience
- Suitable equipment or capacity
- Better fit for access or vehicle requirements

Initial quantified reason examples:

- `$180 lower than the next suitable option`
- `Pickup available 3 days earlier`
- `One provider handles both vehicle and household items`
- `Has completed this corridor before`
- `Supports non-running vehicle loading`
- `Can handle estimated 32m3 inventory`
- `Can support apartment access with lift booking`
- `Can meet settlement-date timing`
- `Depot option available if door access is constrained`

This list should be reviewed and expanded as Moveroo learns which recommendation reasons are most useful to customers and easiest to substantiate.

Scores support Moveroo's recommendation logic but should remain internal unless a formal customer-facing rating policy is created.

Track each partner against these dimensions:

| Dimension           | What To Watch                                                      | Suggested Status    |
| ------------------- | ------------------------------------------------------------------ | ------------------- |
| Communication       | Response speed, clarity, proactive updates, escalation cooperation | Green / Watch / Red |
| Reliability         | Pickup windows, delivery windows, capacity consistency             | Green / Watch / Red |
| Damage and care     | Damage frequency, condition notes, claim pathway cooperation       | Green / Watch / Red |
| Cancellation rate   | Provider-initiated cancellations or major schedule changes         | Green / Watch / Red |
| Customer feedback   | Compliments, complaints, review themes, support tickets            | Green / Watch / Red |
| Route suitability   | Strong routes, weak routes, regional constraints                   | Green / Watch / Red |
| Service suitability | Household, vehicle, combined, specialty, business/fleet fit        | Green / Watch / Red |

Track positive signals as well as complaints or incidents. Positive signals may include:

- Clear proactive updates
- On-time pickup and delivery
- Customer compliments
- Smooth access handling
- Accurate quote assumptions
- Good handling of inventory changes
- Good issue recovery
- Reliable documentation or condition notes
- Strong route or category consistency

Positive signals support `Preferred` status and customer-facing recommendation reasons.

Customer compliments support `Preferred` status when they identify specific operational strengths, such as communication, timing, care, access handling, or issue recovery. Generic compliments are useful context but should not be the only evidence for `Preferred` status.

## Review Cadence

Recommended cadence:

- New/trial partner: review after first 3 completed jobs.
- Active partner: review quarterly or after any serious incident.
- Preferred partner: review quarterly and compare against similar providers.
- Restricted or paused partner: review before any future allocation.

## Incident Review

Trigger an incident review when:

- A customer reports damage.
- A pickup or delivery window materially changes without notice.
- A customer cannot get a clear update.
- Payment expectations differ from the quoted pathway.
- A partner cancels after booking confirmation.
- A provider-supplied cover or liability question is disputed.
- A complaint suggests repeated pattern risk.

Customer complaints should be recorded and reviewed before affecting partner status.

If responsibility is unclear, mark the complaint as `under review` and do not count it as a confirmed partner performance issue until the facts are clearer.

Track complaint themes separately from confirmed partner faults so patterns can still be seen without overstating blame.

Complaint statuses:

- Received
- Under review
- Confirmed partner issue
- Confirmed Moveroo coordination issue
- Customer/access/inventory issue
- External factor, such as weather, traffic, or settlement delay
- Mixed responsibility
- Resolved
- Unresolved

Confirmed Moveroo coordination issues should not reduce partner performance score. They should be tracked separately as Moveroo process issues and reviewed for quote clarity, handoff, communication, or expectation-setting improvements.

Mixed-responsibility complaints may inform partner review, but should not be counted as a confirmed partner issue unless the partner's contribution is clear. Record the partner-related component separately from Moveroo, customer/access, or external factors.

Use mixed-responsibility cases for pattern review rather than direct scoring unless evidence supports it.

Incident review should record:

- Job type and route
- Partner involved
- What changed
- Customer impact
- Communication timeline
- Moveroo action taken
- Provider response
- Outcome
- Whether future allocation status changes

## Allocation Review Thresholds

Allocation should be reviewed by Konrad, not automatically paused, when any of the following occur:

- A serious unresolved incident involving damage, unsafe conduct, abusive communication, unexplained payment demand, provider cancellation after booking, or a material cover/liability dispute.
- Two or more unclear-update complaints within a rolling 90-day period.
- Two or more missed pickup or delivery windows within a rolling 90-day period where communication was poor or avoidable.
- Two or more avoidable access, inventory, or planning failures within a rolling 90-day period.
- A pattern suggesting the partner is no longer suitable for a specific route, service category, or complexity level.

Konrad may respond by:

- Continuing allocation with monitoring.
- Restricting the partner to specific routes or job types.
- Avoiding new allocations while active jobs are completed.
- Pausing allocation for a defined review period.
- Removing the partner from future allocation.

Any response should record the reason, live-job risk, customer impact, and conditions for reinstatement or further review.

## Red-Flag Override

Konrad owns the allocation decision after a red-flag review.

An override should only happen when there is a clear operational reason, such as no suitable alternative provider for an active customer commitment.

Any override must be documented with:

- Reason for override
- Customer risk
- Mitigation plan
- Follow-up review date

Jason should be consulted if the override involves legal, payment, cover/liability, serious complaint, or public trust risk.

## Provider-Supplied Cover Information

Moveroo may explain factual provider-supplied cover information when it is part of the quoted service pathway, such as:

- Whether the provider says cover is included
- The event types named by the provider
- Stated limits or exclusions
- Who the customer must contact for a claim

Moveroo should not describe that information as Moveroo-provided insurance, should not advise whether the cover is sufficient, and should not compare insurance products.

Customers wanting broader protection should arrange third-party cover separately.

## Public Copy Rules

Allowed:

- "Vetted transport partners"
- "Matched to the job type, route, timing, access needs, and service expectations"
- "Fit-for-job checks"
- "Ongoing performance review"
- "Moveroo remains a support point if something changes"

Use carefully:

- "Trusted"
- "Verified"
- "Licensed"
- "Insured"
- "Guaranteed"

Current position:

- Moveroo does not currently have a formal verification or trust-claim program.
- `Preferred` providers currently exist operationally based on previous jobs and Konrad's allocation experience.
- Moveroo intends to build preferred/recommended option reasoning into the customer view so customers can understand which option Moveroo recommends as the best fit for their job and why.
- `Vetted transport partners` is the approved customer-facing term because it is tied to fit-for-job checks and ongoing performance review.
- Avoid `verified partners`, `trusted partners`, and `licensed partners` as blanket public claims until the relevant standard and evidence are documented.

Avoid unless legally substantiated:

- "Fully insured partners"
- "Guaranteed safe delivery"
- "Licensed partners" as a blanket claim
- "Moveroo provides insurance"
- "Moveroo arranges insurance"
- "All partners are verified and insured"

## Checklist Mapping

This draft supports these checklist items:

- Document the actual partner allocation process.
- Define partner vetting standards.
- Define partner performance scorecard.
- Track partner performance by job type and route.
- Confirm use of "verified," "vetted," "trusted," and similar trust claims.
