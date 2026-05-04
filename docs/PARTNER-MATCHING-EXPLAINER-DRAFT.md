# Partner Matching Explainer Draft

Status: Draft v0.1.

Plain-language source copy for explaining how Moveroo matches jobs with transport partners.

This document is intended to support future customer-facing and partner-facing copy. It should not be treated as published policy until reviewed by Konrad for operational accuracy and Jason for public-claim, cover, payment, and legal/commercial risk.

This explainer is based on `docs/PARTNER-VETTING-STANDARDS-DRAFT.md`, but deliberately avoids internal thresholds, restriction logic, incident handling, removal/re-entry rules, and provider score details.

## Purpose

Customers should understand that Moveroo is not simply sending every job to a random provider or listing every available carrier. Moveroo reviews the job details, checks fit, compares suitable options, and recommends a path based on the information available at the time.

Partners should understand that Moveroo asks for quotes and availability because provider fit depends on route, timing, access, capacity, service type, and previous job outcomes.

## Customer-Facing Core Explanation

Suggested wording:

> Moveroo is a moving and transport coordination team. We collect the details that affect your move, check which transport partners are likely to fit the job, and help confirm the quote path before booking.
>
> A suitable partner depends on the route, timing, access, inventory or vehicle details, service type, equipment needs, provider availability, and past job outcomes. If there is a clear best option, we may recommend it and explain why. Where useful, we may also show other options with clear trade-offs, such as lower cost, earlier availability, faster timing, more flexible dates, or better fit for access or vehicle needs.
>
> Provider details are confirmed after the job has been allocated and the deposit has been paid.

## Short Customer Version

Use where space is limited:

> We match your job to suitable transport partners based on route, timing, access, service needs, availability, and previous job outcomes. If one option is the best fit, we explain why. Provider details are confirmed after allocation and deposit payment.

## Partner-Facing Core Explanation

Suggested wording:

> Moveroo matches customer jobs with transport partners based on job fit. When we ask for a quote or availability, we are checking whether the route, timing, access, inventory or vehicle details, equipment needs, and service expectations match your operating lane.
>
> A simple "no" is acceptable if the job is not a fit. Declining a job is treated as a fit, capacity, or availability signal, not as a service-quality issue. Job performance is reviewed separately from quote participation.
>
> When a partner is allocated, Moveroo expects clear communication, reliable pickup and delivery behaviour, clear payment handling, and cooperation if something changes.

## Recommended Option Explanation

Use when one option is clearly the best fit:

> Recommended option: best fit for this job based on your route, timing, access, and service needs.
>
> Why we recommend it:
>
> - `[reason 1]`
> - `[reason 2]`
> - `[reason 3]`
>
> Provider details are confirmed after allocation and deposit payment.

Reasons should be specific and explainable. Good reasons include:

- Earlier pickup availability
- Lower quoted cost
- More flexible dates
- Relevant route experience
- Suitable equipment or capacity
- Better fit for stairs, lifts, parking, or access constraints
- Better fit for inventory volume or item type
- Better fit for a non-running vehicle
- Fewer handoffs for combined household and vehicle moves

Avoid vague claims such as "best quality", "most trusted", or "guaranteed safest" unless the evidence and approved wording are documented.

## Neutral Options Explanation

Use when there is no single clear best option:

> These options are suitable for different priorities. The best choice depends on whether your priority is lower cost, earlier pickup, faster delivery, more flexible timing, or a better fit for specific access or service needs.

Suggested option labels:

- Lower-cost option
- Earlier availability
- Faster timing
- More flexible dates
- Better access fit
- Better vehicle fit
- Fewer handoffs

Do not mark an option as recommended if the trade-off genuinely depends on the customer's priority.

## Provider-Name Disclosure

Before allocation and deposit payment, use option labels rather than provider names.

Recommended pre-allocation wording:

> Provider details are confirmed after allocation and deposit payment.

Recommended post-allocation wording:

> Your provider details are now available because your job has been allocated and your deposit has been paid.

Provider details may include:

- Provider name
- Provider role
- Service covered by the provider
- Pickup or contact expectations
- Collection window or confirmed collection date
- Delivery window, if available
- Moveroo support contact
- What to do if something changes
- Provider-specific payment or balance note, if applicable
- Provider-supplied cover note, if applicable and carefully worded

For changes, unclear updates, damage, cancellation, payment questions, or cover questions, customers should contact Moveroo first so the support path stays documented and coordinated.

## Availability And Freshness

Provider availability can change because of other bookings or operational changes.

Recommended wording:

> Provider availability is confirmed before allocation. If your preferred date is no longer available, we'll confirm the closest suitable option before your booking is secured.

Do not imply that a provider remains available indefinitely after a quote is shown.

## Cover And Insurance Boundary

Use careful factual wording only.

Allowed:

- "Provider-supplied cover, if applicable"
- "Cover pathway"
- "Cover details depend on the quoted service pathway"
- "Customers who want broader protection should arrange third-party cover separately"

Avoid:

- "Moveroo provides insurance"
- "Moveroo arranges insurance"
- "Fully insured partners"
- "Guaranteed safe delivery"
- "All partners are verified and insured"

Suggested customer-facing wording:

> Cover details can differ by service type and provider. Moveroo can explain what information is available for the quoted service pathway, but this is not insurance advice. Customers who want broader protection should arrange third-party cover separately before moving.

## Customer Dashboard Microcopy

Before allocation:

> We are checking suitable provider options for your route, timing, access, and service needs.

After recommendation, before provider details activate:

> Provider details are confirmed after allocation and deposit payment.

After allocation and deposit payment:

> Your provider details are active. Contact Moveroo first if timing, payment, cover, cancellation, or service details need to be clarified.

If the provider changes and nothing material changes:

> Your provider details have been updated in your dashboard.

If the provider change affects timing, pricing, service expectations, cover pathway, or cancellation implications:

> Your provider details have changed. We will explain what changed and why before the revised path is confirmed.

## Partner-Facing Microcopy

When asking for a quote or availability:

> Can you quote or confirm availability for this job? If it is not a fit for your route, timing, access, capacity, or service lane, a simple "no" is fine.

When a provider declines:

> Thanks for confirming. We'll record this as not suitable or not available for this job.

When confirming allocation expectations:

> Once allocated, please keep pickup, delivery, payment, and change updates clear so Moveroo can keep the customer pathway documented.

## Review Notes

Before publishing or using this copy in product flows, confirm:

- Konrad agrees the customer explanation matches the actual allocation workflow.
- Jason agrees the public wording does not overclaim vetting, verification, cover, licensing, or insurance.
- The quote app can support option labels without exposing provider names too early.
- The customer dashboard can activate provider details only after allocation and deposit payment.
- Support processes are ready for customers to contact Moveroo first for changes, unclear updates, cancellation, payment questions, or cover questions.
