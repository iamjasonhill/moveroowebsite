# Admin Provider Vetting Requirements

Status: Draft v0.1.

Product requirements for adding partner vetting, provider status, and provider recommendation support to the admin provider section of the Moveroo quote/admin system.

This document turns the internal partner vetting standard into admin-product requirements. It does not define customer-facing copy and should not expose internal thresholds, restriction logic, incident handling, or removal/re-entry detail to customers or providers.

Source documents:

- `docs/PARTNER-VETTING-STANDARDS-DRAFT.md`
- `docs/PARTNER-MATCHING-EXPLAINER-DRAFT.md`

## Goal

The admin provider section should become the working place where Konrad can store, review, and update provider fit information.

The documentation remains the policy source of truth. The admin provider record becomes the operational source of truth for each provider.

## Primary Users

- Konrad: owns provider approval, provider status, allocation fit, recommendation reasoning, and operational review.
- Jason: reviews legal, policy, commercial, public-claim, payment, cancellation, and provider-supplied cover risk where needed.
- Support/admin users: may need read access to provider notes, contact paths, payment notes, and customer-safe service details.

## Admin Provider Record Fields

Each provider record should support these fields.

### Identity

- Legal/business name
- Trading name
- ABN or equivalent business identifier
- Provider type or category
- Date added
- Current status
- Status scope, such as route, service type, or complexity level
- Last reviewed date
- Next review date

### Contacts

- Primary operational contact
- Secondary operational contact
- Business/admin contact
- Accounts/payment contact, if different
- Preferred contact method
- Emergency or escalation contact, if available

Store operational and business-contact details only. Avoid unnecessary personal documents or sensitive personal information unless there is a clear legal, compliance, or operational reason.

### Service Fit

- Service categories supported
- Routes, regions, or corridors supported
- Strong routes or preferred lanes
- Weak routes or routes to avoid
- Equipment or capacity notes
- Access limitations
- Known exclusions or bad-fit work
- Non-running vehicle support
- Storage or staged handoff support
- Business/fleet support
- Packing or handling support

### Commercial And Operational Rules

- Payment handling rules
- Balance-payment expectations
- Cancellation or rescheduling constraints
- Availability notes
- Quote response notes
- Provider-specific booking constraints
- Provider-specific customer handoff notes

### Cover And Liability Notes

- Provider-supplied cover notes, if applicable
- What event types the provider says are covered
- Stated limits or exclusions
- Who the customer must contact for a claim
- Document type, expiry date, and review date where evidence is stored
- Jason review required: Yes / No

The admin should avoid language implying Moveroo provides, arranges, sells, bundles, or advises on insurance.

### Status And Review

Recommended statuses:

- Prospect
- Approved for trial
- Active
- Preferred
- Restricted
- Paused
- Removed

The record should show whether the provider may be:

- Allocated operationally
- Shown as a recommended option
- Used only under documented conditions
- Used only as a last-resort option
- Not used for new allocations

`Restricted`, `Paused`, and `Removed` providers should not be shown as recommended customer options.

## Provider Status Change Workflow

Admin users should be able to record a status change with:

- Date
- Owner
- Previous status
- New status
- Reason
- Evidence
- Customer impact
- Active or in-transit jobs checked: Yes / No / Not applicable
- Restrictions or conditions
- Follow-up review date
- Jason consultation needed: Yes / No
- Notes

When moving to `Restricted`, `Paused`, or `Removed`, the admin should prompt for:

- The issue or evidence that triggered the change
- Active-job check
- In-transit-job check
- Customer-impact notes
- Follow-up review date

Before a provider is formally marked `Removed`, the admin should remind the user to check active allocated jobs, recent pickups that may still be in transit, and any open customer support, delivery, payment, or cover questions.

## Recommendation Eligibility

The admin should clearly show whether a provider can be recommended to customers.

Default recommendation rules:

- `Active` and `Preferred` providers may appear as recommended options.
- `Approved for trial` providers may be allocated operationally where appropriate, but should not be recommended to customers unless Konrad approves the specific recommendation and records why it is suitable.
- `Restricted`, `Paused`, and `Removed` providers must not be recommended to customers.

The admin should allow Konrad to record why a provider is recommended for a specific job, using concrete job-fit reasons.

Allowed recommendation reasons include:

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
- Fewer handoffs for combined household and vehicle moves

Avoid customer-facing reasons such as `best quality`, `most trusted`, `verified`, `licensed`, `fully insured`, or `guaranteed safest` unless the evidence and approved wording are documented.

## Allocation Decision Record

When a provider is recommended, selected, changed, or used as an exception, the admin should support a lightweight allocation decision record.

Suggested fields:

- Job reference
- Job type
- Route
- Requested timing
- Access or service complexity
- Providers asked to quote
- Providers that quoted
- Providers that declined or did not quote
- Recommended option
- Recommendation reasons
- Alternatives shown to customer
- Primary trade-off for each alternative
- Provider name disclosed before deposit: Yes / No
- Availability rechecked before allocation: Yes / No
- Allocation date
- Deposit paid: Yes / No
- Provider details activated on customer dashboard: Yes / No
- Override or exception used: Yes / No
- Notes

Declining to quote should be recorded separately from job performance. A provider who replies "no" should normally be treated as not suitable or not available for that job, not as a performance issue.

## Performance Review

The admin should support provider performance review by completed or materially handled jobs only.

Performance should not be reduced because a provider did not quote a job.

Suggested review dimensions:

- Communication
- Reliability
- Damage and care
- Cancellation rate
- Customer feedback
- Route suitability
- Service suitability

Suggested dimension status:

- Green
- Watch
- Red

The review should track positive signals as well as complaints or incidents.

Positive signals may include:

- Clear proactive updates
- On-time pickup and delivery
- Customer compliments
- Smooth access handling
- Accurate quote assumptions
- Good handling of inventory changes
- Good issue recovery
- Reliable documentation or condition notes
- Strong route or category consistency

Complaint and incident records should distinguish:

- Received
- Under review
- Confirmed partner issue
- Confirmed Moveroo coordination issue
- Customer/access/inventory issue
- External factor
- Mixed responsibility
- Resolved
- Unresolved

Confirmed Moveroo coordination issues should not reduce the provider's performance record.

## Customer Dashboard Outputs

The admin provider record may later feed customer dashboard outputs, but only after filtering for customer-safe information.

Provider details should activate only after:

1. The job has been allocated.
2. The deposit has been paid.

Customer-safe provider details may include:

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

Internal notes, score details, thresholds, restriction logic, incident handling, and removal/re-entry records should not be exposed to customers.

## Admin UI Requirements

The provider section should include:

- Provider overview tab
- Contacts tab
- Service fit tab
- Commercial and payment tab
- Cover and documents tab
- Status and review tab
- Allocation history tab
- Incidents and complaints tab
- Internal notes tab

Useful admin controls:

- Status selector with required reason on change
- Review due date
- Recommendation eligibility indicator
- Route/service tags
- Access/equipment limitation tags
- Document expiry reminders
- Active-job warning before removal
- Last-resort allocation warning for paused providers
- Jason consultation flag
- Konrad approval field
- Audit history for status changes and sensitive notes

## Permissions And Audit Trail

Recommended permissions:

- Konrad can create and update provider fit, status, recommendation, and review records.
- Jason can review or approve sensitive fields involving public claims, cover, payment, cancellation, legal, or commercial risk.
- Support/admin users can view operational fields needed for customer support.
- Sensitive changes should be audit logged.

Audit log should capture:

- User
- Timestamp
- Field changed
- Previous value
- New value
- Reason, where required

## Reporting

The admin should eventually support reporting by:

- Provider status
- Review due date
- Service category
- Route or corridor
- Recommendation eligibility
- Preferred provider scope
- Restricted or paused providers
- Active jobs by provider
- Recent complaints or incidents
- Document expiry or review date

## Acceptance Criteria

The admin provider section is ready for operational use when:

- Konrad can complete a provider record without relying on a Markdown template.
- Provider status and status scope can be recorded.
- Restrictions, pauses, removals, and re-entry notes can be documented internally.
- Recommendation eligibility is visible before customer recommendations are created.
- No-quote behaviour is tracked separately from job performance.
- Cover and document notes can be stored without implying Moveroo provides or arranges insurance.
- Provider details can be marked as customer-dashboard eligible only after allocation and deposit payment.
- Sensitive changes are audit logged.
- Jason consultation can be flagged for public-claim, cover, payment, cancellation, legal, or commercial risk.

## Open Questions

- Which system owns the provider record today: quote app database, admin app, CRM, spreadsheet, or another source?
- Are providers already represented as structured records, or only as free-text contacts?
- Which users should be able to edit provider status?
- Should document storage live inside the admin app or link to a controlled external storage location?
- Can the quote app currently hide provider names until allocation and deposit payment?
- Can the customer dashboard read provider details from the same provider record?
- Which fields should be required before a provider can move to `Active`?
- Which fields should be required before a provider can be shown as `Preferred` or recommended?
- What audit trail exists today for admin changes?
