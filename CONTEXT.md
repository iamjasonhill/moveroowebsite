# Moveroo Website Context

## Glossary

### Service Lane

A service lane is a customer-facing category of move or transport work that Moveroo can coordinate.

Current commercial priority order:

1. Household moves
2. Vehicle transport
3. Combined household + vehicle relocation

The services page should present household moves as the primary lane, vehicle transport as the secondary lane, and combined household + vehicle relocation as the differentiating lane that shows why Moveroo is useful when a move has multiple moving parts.

When creating a new public page, treat internal linking as part of the page creation work, not a follow-up cleanup. After a page is created, establish links to and from existing relevant pages as though the page has always belonged in the site architecture. Incoming links from other pages should feel organic and editorial, placed where the reader would naturally need that next page, not added as a footer-style link block. Also think ahead to likely future pages from the improvement checklist, so the new page can leave natural conceptual space for them without linking to pages that do not exist yet.

Before beginning a new public page, review SEO Champion for the relevant domain and topic so page planning uses the latest available data and capabilities. Check current source freshness, relevant GSC/GA4/Bing summaries, opportunity candidates, and any newly available SEO Champion endpoints or saved investigation checks before committing to the page brief.

Every new public page needs a full prelaunch review before it is treated as ready. The review must cover copy, SEO, schema, internal links, compliance wording, CTA flow, local route status, `llms.txt`/AI discoverability where relevant, footer or sitemap discovery where relevant, build checks, and mobile compatibility. Mobile compatibility is not optional: check small-screen layout, sticky mobile CTA behaviour, text wrapping, button fit, section spacing, horizontal overflow, and whether the page still makes sense when read on a phone.

Before sending a new page draft to the human reviewer, take a dedicated customer-language pass over the whole page. Replace internal planning language, SEO scaffolding, vague service jargon, and machine-written phrasing with plain customer-facing wording. This pass should happen before asking for human copy review, so the reviewer is not forced to catch obvious "AI written" language.

After every new public page is published, log an SEO Champion analysis note for `moveroo.com.au` using the request token if available, and request that SEO Champion/Jason creates a proper change-history annotation for the launch. The note should include the new page URL, its role in the site architecture, whether sitemap/`llms.txt`/internal links were updated, the repo/commit if available, expected impact, and a request to monitor indexing, GSC query mapping, GA4 landing-page data, Bing pickup, cannibalisation, and future opportunity routing.

### Household Moves

Household moves are Moveroo's primary commercial service lane.

Moveroo can safely describe household move support as coordination for local, regional, and interstate household moves, including apartment moves, home moves, backload options, dedicated move options, packing and unpacking coordination, storage coordination, and fragile or specialty item handling where the provider fit supports it.

Use language such as "coordinates", "can help with", and "can line up" rather than implying Moveroo directly performs every physical service.

### Removals And Storage

The `/removals-and-storage/` page should sit under household moves as the main public page for moving and storage timing support. It should not imply Moveroo owns or operates storage facilities. Use language such as Moveroo can help coordinate storage through removalists or storage partners where provider fit supports it.

Public copy may mention short-term storage, longer storage, and storage between pickup and redelivery as possibilities, but should avoid promising containerised storage, climate control, customer access, or a specific storage type unless those details have been checked for the job.

Initial household move pricing usually does not include storage costs. The quote form lets customers indicate that they may need storage, but storage needs extra follow-up information that would make the form too bloated for customers who do not need it. Storage and redelivery are specific to each provider and usually depend on storage duration and the overall size of the moved items. Public copy should explain that storage is usually quoted as a monthly amount plus a redelivery fee once those details are checked.

Storage quote follow-up should ask about expected storage duration, pickup and final delivery timing, final redelivery suburb or address, inventory size, bulky or fragile items, and any settlement, lease, key handback, or other fixed dates Moveroo needs to work around.

If a customer needs access to stored items, recommend arranging a self-storage unit instead of promising access through move storage. Moveroo can help them find a self-storage option where practical, then arrange delivery when they are ready. If goods only need to be held between pickup and redelivery, Moveroo can check storage options as part of the move.

The page should speak to real storage situations: property settlement dates not lining up, rental key handback before the new place is ready, downsizing, renovation or building delays, staged delivery, and furniture that needs collecting now but delivered later.

Storage should be positioned as worth mentioning early, especially when settlement, lease, or redelivery dates matter. If plans change after the first quote, customers can still tell Moveroo and the team can check what storage options are available.

Backloading can be mentioned lightly on the storage page because storage can sometimes make a flexible move easier when pickup and delivery do not need to happen back-to-back. Do not imply storage automatically makes backloading cheaper or available.

The storage page may mention household + vehicle relocation as a secondary situation when household goods need storage and a car or motorcycle is also moving. Ask customers to tell Moveroo early so the jobs can be planned around the same dates where possible.

Storage cover and responsibility should be handled carefully. Say cover and responsibility can depend on the provider, storage arrangement, and terms of the move. Link to the protection/trust page for quote clarity and cover questions. Avoid "fully insured storage", "secure storage" without qualification, "instant storage quote", "access your items any time", "same provider handles everything", "we store your goods", or any claim that storage is always available in every location.

### Interstate Removalists

The interstate removalists page should use "interstate removalists" publicly because customers search that way, while explaining that Moveroo helps compare and coordinate suitable removalist options rather than presenting Moveroo as the physical truck crew. Preferred plain H1 direction uses singular "interstate removalist": "Find an interstate removalist that fits your dates, access and move details."

The page should focus on helping customers choose the right interstate removalist option for the job, not on generic interstate removals sales copy. It should explain when a backload option, dedicated move, storage/timing support, or household + vehicle relocation may make sense. It should link naturally to household removals, backloading removals, household + vehicle relocation, and the protection/trust page. Future pages such as dedicated moves, storage coordination, interstate cost guides, and route pages should be anticipated in the information architecture but not linked until they exist.

The interstate removalists page should include storage, settlement, and key handback timing as a major section, but not as the main headline. Recommended section direction: "Dates that need to line up." Cover rental key handback, property settlement, storage access, building/loading dock rules, pickup and delivery windows, and dates the customer cannot make work. Rentals and settlements are real customer pain points, and the page should explain that the right move option can be chosen around those constraints. Link to the protection/trust page now, and leave natural space for a future storage coordination page without linking to it before it exists.

The interstate removalists page should avoid specifically discussing pricing or using price examples in the first version. It can explain what affects a quote, such as route, inventory, access, timing, backload vs dedicated option, storage or extra stops, packing/fragile items, and whether a vehicle is also involved, but should not turn the page into a pricing promise.

The interstate removalists page should include a short backload vs dedicated comparison, then link to the full backloading removals page. Do not duplicate the full backloading table. The short version should explain that a backload option works when the customer's dates can fit the truck's schedule, while a dedicated move is better when timing, access, or service needs require a more structured plan.

The interstate removalists page should mention household + vehicle relocation as a small but visible supporting card or section, not as a major page theme. It should prompt customers to let Moveroo know early if they also need a car or motorcycle moved, and link to the combined household + vehicle relocation page. Do not promise same-day delivery for both services or one provider for the whole job.

The preferred primary CTA for the interstate removalists page is "Start an interstate moving quote", pointing to the existing household quote flow. Supporting CTA copy should ask customers to share the route, inventory, access notes, and dates Moveroo needs to work around. The preferred secondary CTA is "Request a callback".

The interstate removalists page should not include live city or route link blocks until those pages exist. It may mention example routes in plain copy where helpful, but should leave room for a future popular interstate routes section once route pages are created.

The interstate removalists page should only use proof that is already available and substantiated. Do not add review ratings, volume claims, or broad trust claims without source data. Until public proof inventory is available, use process proof instead: multiple provider options, date and access checks, quote clarity, and links to the protection/trust page.

Interstate removalists copy should preserve human English and avoid machine-written phrasing. Avoid "path" in customer-facing copy for this page, along with phrases such as "route capacity", "seamless", or "tailored solution" unless there is a specific reason and the wording sounds natural in context.

### Backloading

Backloading should not be explained as simply "sharing truck space" because most removalist moves share truck space unless a customer books the whole truck.

The practical distinction is that backloading uses available space on a truck already heading the right way, plus flexible timing, to reduce wasted truck space and often reduce cost. It suits customers who have some flexibility around collection and delivery windows.

Avoid implying that backloading is always the cheapest option, always available, or a fixed-date service. Move volume is not the practical divider between backloading and dedicated moves.

The practical divider is schedule control. Backloading means the customer fits the truck's schedule and may receive a discount for that flexibility. Dedicated moves operate on a set schedule the customer is happy with, or use a more tailored solution around the customer's timing and service needs.

Use "dedicated move" as the public counterpart to "backload option". Explain dedicated moves as a more structured option where the schedule is chosen around what the customer needs.

Public backloading copy may calmly explain that most removalist trucks are planned around shared capacity unless a customer books the whole truck. This should be used to educate customers, not to criticise removalists or make backloading sound unusual.

The preferred primary CTA for public backloading pages or sections is "Check backload availability". Moveroo typically provides quotes from multiple providers to incoming household customers, so there is usually a backload-style price on offer. The deciding factor is often whether the customer can make the truck's schedule work.

Public copy near the CTA should explain that "availability" mostly means schedule fit: Moveroo usually checks more than one provider pathway, so a backload-style price is often available, but the customer needs to decide whether the collection and delivery schedule works for them.

When discussing backload timing, customers should be prompted to tell Moveroo what dates they are working around, such as rental key handback, property settlement, storage access, or other fixed deadlines.

Backload options typically do not move around much once booked. The key difference is that they are usually less structured than dedicated options before booking, so it is important for customers to tell Moveroo what the team needs to work around when booking.

Preferred timing wording: "Once a backload option is booked, the agreed timing is not something to casually move around. The important part is telling Moveroo about fixed dates before booking, so the team can help you choose an option that works around them."

The backloading page should explain that Moveroo usually checks more than one provider pathway. Public copy should use "backload option" rather than "backload-style option". Customers may see a lower-cost backload option and a more structured option depending on route, dates, access, inventory, and move details.

Backloading examples should be concrete and plain. Approved example style: "You are moving from Brisbane to Melbourne and can work with a wider collection window. Moveroo can check which truck schedules line up with your dates, then show you the backload option and any dedicated move option that makes sense."

The primary audience for the backloading page is household movers planning an interstate or regional move who are price-conscious and have some date flexibility. Apartment moves and partial-load moves can be used as supporting examples. Do not lead the backloading page with business, fleet, or vehicle transport use cases.

Small moves, apartment moves, and partial loads may be mentioned as examples of moves that can suit backloading, but they should not define the service. The main question is whether the customer's timing and route fit the truck's schedule.

Backloading copy should use the term "backloading removals" in important SEO locations such as the page title, H1, metadata, and a small number of natural headings, but should not stuff the phrase through the page. Explain the idea in plain language as a flexible move matched to available space on a truck already heading the right way.

Use "lower cost", "cost-conscious", "reduce wasted truck space", and "more flexible timing" for the price benefit. Avoid leading public copy with "cheap", "budget", or "discount" because it can weaken trust and create poor expectations.

When discussing a backloading discount, make clear that any flexibility-based discount is already factored into the quoted price. Do not write copy that encourages customers to call and ask for an additional discount after receiving a quote.

Preferred public wording: "When a backload is available, the lower-cost setup is already reflected in the quote."

The backloading page should be a full explanatory landing page, not a short service card. Recommended flow: hero, what backloading means, when it fits, when it may not fit, how Moveroo checks availability, backloading vs dedicated move, what to confirm before booking, FAQ, and final CTA.

Backloading should sit as a child pathway under household removals in the public service architecture. It should not be presented as a top-level commercial lane equal to household moves or vehicle transport. Internal links should connect backloading to household removals as the broader parent, the protection/trust page for quote clarity and cover questions, and combined household + vehicle relocation only where the customer's household move may also include a vehicle.

Backloading page interlinking should use a restrained pattern: natural contextual links in the body where they answer the next likely question, plus a small related-services section near the lower part of the page. Do not use a large SEO-style link block.

Internal link anchor text should be plain and descriptive rather than keyword-heavy. Preferred anchors include "household removals", "household and vehicle move", "how Moveroo protects your move", and "quote clarity and cover questions". Avoid anchors that sound like SEO stuffing, such as long exact-match phrases around cheap or best backloading removals.

Backloading interlinking should include both outgoing links from the backloading page and incoming links from existing parent/support pages. Outgoing links should point to household removals, household + vehicle relocation, and the protection/trust page where useful. Incoming links should come from services, household removals, and the protection/trust page where contextually natural. Avoid forcing a homepage link unless there is a natural editorial place for it.

Pickup and delivery windows are a normal feature of removalist work, not something unique to backloading. Public copy should not imply that only backloads use windows. The backloading distinction is that it usually requires more timing flexibility because the job is matched to available space on the right route.

The backloading vs dedicated comparison should use schedule fit as the main difference. Recommended framing: backloading means "fit the truck's schedule"; dedicated moves mean "choose a schedule that fits you". Compare timing, cost, availability, best fit, and less-suited cases without implying that either pathway is universally better.

### Vehicle Transport

Vehicle transport is Moveroo's secondary commercial service lane.

The `/moving-cars/` page should lead with consumer car and motorcycle transport because it is the clearest and broadest customer intent. It can also openly cover non-running vehicles, auction or dealer purchases, fleet or multi-vehicle work, and vehicle transport that sits alongside a household move.

Consumer vehicle moves should remain the entry point, while business, dealer, fleet, and complex vehicle scenarios provide depth and credibility.

The `/interstate-car-transport/` page should be vehicle-only first. It should lead with customers moving a car interstate, then cover motorcycle, running/non-running condition, pickup and delivery access, timing, and door/depot options. Household + vehicle relocation should appear as a secondary scenario only, for customers whose car move is part of a larger household move.

The preferred H1 direction for `/interstate-car-transport/` is: "Move your car interstate with the right transport option." Use "interstate car transport" in SEO-critical places such as the title, metadata, early copy, and selected headings, but avoid repeating it unnaturally through the page. Body copy should use normal industry language such as car transport, vehicle transport, carrier, pickup, delivery, depot, handover, running condition, and access.

For interstate car transport, Moveroo should explain that the quote depends on pickup and delivery suburbs, whether the vehicle runs, rolls and steers, vehicle type and size, clearance or modifications, access, timing, whether door-to-door or depot handoff is realistic, whether the car is part of a household move, carrier fit for the route, and whether the customer wants to move the vehicle with or without personal items. Do not imply every carrier accepts personal items or that belongings are always covered; present personal items as something to choose and confirm before booking.

Preferred personal-items wording style for car transport pages: "If you want to leave items in the car, mention it in the quote request. Not every carrier allows it, so it is something to check before booking." Avoid legalistic or overpromising phrasing such as "personal items are included" or "pack your car with belongings".

Door-to-door and depot-to-depot should be explained as practical car transport choices. Door-to-door is always available. Depot-to-depot is always cheaper than door-to-door within the same carrier's quote options, but the overall cheapest option can still differ between carriers. For example, Carrier 1's depot-to-depot option may be cheaper than Carrier 1's door-to-door option, while Carrier 2's depot-to-depot price may also be cheaper than Carrier 1's door-to-door price. Explain this plainly without making the comparison sound like a negotiable discount.

The `/door-to-door-vs-depot-car-transport/` page should sit under vehicle transport as a support/comparison page. Preferred SEO title direction: "Door-to-door vs depot car transport | Moveroo". Preferred H1 direction: "Door-to-door or depot car transport: which option makes sense?" The page should help customers choose between service types before selecting a quote option; it should not replace `/interstate-car-transport/` as the broader vehicle transport hub.

Door-to-door car transport means the carrier collects and delivers the vehicle as close as practical to the requested pickup and delivery addresses. It may be a home, workplace, or nearby safe meeting point if the truck cannot safely access the exact address. In some regional areas, door-to-door may mean meeting the carrier at a practical nearby location rather than the truck coming to the exact driveway. Public copy should explain that the quote should make the service type clear before booking.

Depot-to-depot car transport means the customer drops the vehicle at the carrier's nominated depot and collects it from the destination depot. The quote should show the specific depot suburbs because depot locations are carrier-specific and may not be close to the pickup or delivery suburb the customer entered.

The door-to-door vs depot page should explain that door-to-door usually suits customers who cannot easily get to a depot, are short on time, need a simpler handover, have regional depot access issues, are working around flights, work, family, settlement, or other timing, or are moving a car as part of a bigger household move. Avoid calling it "premium" or "best"; it is the easier option when the extra cost makes sense.

The door-to-door vs depot page should explain that depot-to-depot usually suits customers who can comfortably get the vehicle to and from the depot, want the lower-cost option from that carrier, have someone available at both ends, are not relying on address pickup or delivery, and are happy to work around the depot suburbs shown in the quote. Also explain that depot-to-depot is not automatically better if the depot trip creates extra cost, time, rideshare or taxi hassle, or another person's help is needed.

For door-to-door access, keep public copy light. Do not imply Moveroo collects a detailed street-access checklist during the quote request. The exact handover point is sometimes worked out between the driver and customer, especially if the truck cannot safely stop at the exact address. Moveroo can explain the service type in the quote, but small access details may be confirmed closer to pickup or delivery.

Before the door-to-door vs depot-to-depot example table, include a brief plain-English explanation that depot-to-depot is cheaper within the same carrier's quote options, but the cheapest overall quote can still depend on which carrier is available for the route.

The `/interstate-car-transport/` page should include a "Compare the carrier options before you choose" section. Explain that Moveroo can show more than one carrier option where available, and those options can differ by price, pickup/delivery type, transit time, and carrier requirements. A lower price is not always the better choice if the transit time is much longer. The customer's quote details need to be accurate before comparing options.

Multiple carrier options are available for the vast majority of interstate car transport quotes, but not 100% of quotes. Use "where available" when describing multiple carrier-option comparisons.

Avoid using "instant quote" as a blanket promise for vehicle transport. Two carriers have near-instant response times, usually around 30-60 seconds, but they do not quote 100% of requests. Public copy may refer to quick quote responses where available, but should not promise every customer will receive instant carrier prices.

Preferred quote-speed wording for vehicle transport pages: "Where carrier pricing is available automatically, quote options can come back quickly. If the vehicle or route needs a manual check, Moveroo will reply when the pricing is available."

The `/interstate-car-transport/` page should stay focused on cars first and motorcycles second. Caravan, trailer, boat, and other vehicle types may be referenced lightly and interlinked later when dedicated pages exist, but they should not become a major part of this page.

The preferred title tag for `/interstate-car-transport/` is "Interstate Car Transport Australia | Moveroo". Use the human H1 "Move your car interstate with the right transport option." so the visible page does not read like SEO copy.

Preferred meta description for `/interstate-car-transport/`: "Moving a car interstate? Moveroo helps you compare door-to-door and depot options, transit times, personal-item rules and carrier requirements before you book."

The `/interstate-car-transport/` page should include a near-top section headed "Details that change the quote". Preferred wording direction: "A drivable sedan between two metro depots is not the same job as a non-running ute collected from a narrow street. The quote needs the right details so the carrier can price the actual job." Cover pickup/delivery suburbs, vehicle type, whether it runs/rolls/steers, door-to-door or depot-to-depot, personal items, timing and transit time, access notes, and enclosed transport by post-quote email where relevant.

The `/interstate-car-transport/` page may include real anonymised quote examples, but only for door-to-door vs depot-to-depot comparisons. Frame them as examples of how the transport option can change the price, not as guaranteed discounts or negotiable savings. Do not mix in running vs non-running, personal-items, enclosed, or vehicle-size comparisons in the first table.

Door-to-door and depot-to-depot quote examples should be taken only from clearly labelled quote options in the admin system. Do not infer door/depot status from address fields if the labels are missing or ambiguous.

Each door-to-door vs depot-to-depot table row should compare options from the same quote, same customer, and same carrier. The point is to show the price difference within the same carrier's options, not differences between carriers or loosely similar routes.

Use three door-to-door vs depot-to-depot examples where suitable data exists. Show an anonymised route, including suburbs when useful or relevant, broad vehicle type such as sedan/SUV/ute where available, door-to-door price, depot-to-depot price, and difference. Do not show customer-identifying details, and do not show carrier names unless explicitly approved.

Carrier names should be hidden in public door-to-door vs depot-to-depot examples. Use carrier identity internally only to confirm the comparison is within the same carrier's quote options.

The door-to-door vs depot page should use fresh door-to-door vs depot-to-depot examples, not the same three examples already used on `/interstate-car-transport/`. Choose a realistic spread of differences rather than only the largest price gaps, so the table feels credible and does not create unrealistic savings expectations.

Door-to-door vs depot copy should avoid "guaranteed cheapest", "always cheaper" without the same-carrier qualifier, "door-to-door means your driveway", "instant quote", "all carriers offer depot-to-depot", "every route has multiple options", and "save $X" framing. Safer wording includes "within the same carrier's quote options", "where available", "as close as practical", "the depot suburbs shown in the quote", "examples only", and "compare price, transit time and the work involved".

The `/interstate-car-transport/` page should become the main public SEO/service hub for interstate car transport. The existing `/moving-cars/` page remains a broader or legacy vehicle service page and should support the new hub through natural internal linking. Any public wording that explains the relationship between Moving Cars and Moveroo should be reviewed carefully for human tone before publishing.

When creating `/interstate-car-transport/`, also make a light editorial update to `/moving-cars/` so it links naturally to the new hub from body copy. Do not rely on footer-only discovery and do not rewrite `/moving-cars/` unless the new page exposes a specific conflict.

Incoming links for `/interstate-car-transport/` should be added where natural from `/moving-cars/`, `/household-vehicle-relocation/`, `/interstate-removalists/`, and `/services/`, plus footer, sitemap, and `llms.txt` discovery. Consider `/how-moveroo-protects-your-move/` only if the vehicle-service context is natural. Do not add a link from `/backloading-removals/` unless the page context clearly calls for vehicle transport.

Do not tell customers there is a required order between household and vehicle quote forms. The form itself does not allow customers to include vehicle details inside a household move quote, so there is no reason to say "start with household quote first" or "start with vehicle quote first" for combined moves. Instead, explain the intent distinction: use the car transport page when the vehicle transport details are the focus; use the household + vehicle relocation page when the customer needs to understand how a household move and vehicle move can be coordinated.

Preferred combined-move wording on the car transport page: "If the car move is part of a larger household move, let us know when you speak with Moveroo. The household move and vehicle transport may need different carriers, but the timing can still be planned together."

On `/interstate-car-transport/`, frame operational details such as running condition, personal items, door/depot preference, access, and enclosed transport as quote-request details. Use "before you book" mainly for comparing final options and confirming expectations.

Vehicle transport pages should use "pickup and delivery" rather than "collection and delivery". Use "handover" where discussing depot or address handoff.

Preferred heading for the car transport example table: "Recent door-to-door and depot-to-depot examples". Supporting copy should say: "These anonymised quote examples show how the pickup and delivery option can change the price. They are examples only, not a promise that the same difference will apply to every car move." Avoid "save up to", "discounts", "cheapest", or "guaranteed savings" framing.

Future supporting page topics for interstate car transport should be worked into the copy naturally: door/depot, non-running cars, motorcycle transport, personal items, and cost factors. Do not create fake links before those pages exist. Locations may be mentioned in plain examples where useful, but route phrases should not be a major part of this page and should not read like route-page SEO, e.g. avoid heading or repeated copy such as "interstate car transport from Sydney to Brisbane".

The preferred primary CTA for `/interstate-car-transport/` is "Start a vehicle transport quote", pointing to the vehicle quote flow. The secondary CTA should be "Request a callback". CTA support copy should ask for pickup and delivery suburbs, vehicle details, running condition, timing, and whether the customer wants door-to-door or depot options checked. Do not promise "best provider" or instant carrier comparison unless the quote flow substantiates that.

Vehicle transport copy should prefer "carrier" over "provider" when referring to the vehicle transport operator, because that is the normal industry term. Use "provider" only when discussing broader Moveroo service coordination across household moves and vehicle transport.

For non-running vehicle copy, make clear that the drivable vs non-drivable separation happens during the quote process, not later at booking. Customers should state whether the vehicle runs, rolls and steers when requesting the quote so the loading requirements and carrier suitability can be checked early.

Use both "non-running" and "does not run, roll or steer" in public vehicle copy. "Non-running car transport" is useful for SEO and future page planning, while "does not run, roll or steer" is the operational detail customers understand. Before finalising a dedicated non-running page title, check current traffic/query patterns.

The dedicated non-running vehicle page should use `/non-running-car-transport/` as the URL and "Non-Running Car Transport | Moveroo" as the SEO title direction. The visible H1 should be "Moving a car that can't be driven". Preferred hero subheadline: "Moveroo can help check carrier options for non-running, damaged, unsafe or project cars, as long as the loading details are clear before pricing." Body copy may also use "non-drivable" where it sounds natural.

The non-running car transport page should stay focused on planned vehicle transport, not towing, roadside recovery, or emergency breakdown assistance. Relevant customer scenarios include auction cars, repair jobs, project cars, damaged vehicles, long-sitting cars, and cars that start but cannot be driven safely. Unregistered vehicles are fine for standard car transport when they can be driven normally; do not treat "unregistered" alone as a non-running/non-drivable condition. Public copy should make clear that Moveroo helps check carrier options for transport when the loading requirements are known early.

For non-running transport, the key operational distinction is whether the vehicle can be rolled, steered, and safely loaded. A car that will not start is different from a car with locked wheels, no keys, no brakes, flat tyres, low clearance, or visible damage. Public copy should ask customers to share these details in the quote request so Moveroo can check suitable carrier options early.

Non-running car transport copy should be cautious about availability. Some carriers can move non-running vehicles, but not every carrier can take every non-running car. Avoid "we can move any non-running car", "non-running cars are no problem", or similar blanket claims. Preferred framing: accurate details make it easier to check the right carrier option.

When explaining the quote process for non-running vehicles, say customers should include the details in the vehicle quote request so Moveroo can check carrier options before presenting the price. Avoid wording that implies customers first choose a quote and only then disclose whether the vehicle runs, rolls, or steers.

The non-running page should include a practical checklist of details that may affect carrier fit and loading: whether the car starts, rolls, steers, has working brakes, has keys available, has flat tyres or locked wheels, has low clearance, has visible damage, or has access constraints that could affect loading.

The first version of the non-running car transport page should not include a real price example table. Non-running price differences can come from carrier capability, loading requirements, access, vehicle condition, keys, tyres, route, and manual review, so a table could create a false expectation of a standard non-running surcharge. Explain that non-running transport can cost more than standard car transport because the carrier may need different equipment, more time, or a different loading plan.

Non-drivable car transport should be described as door-to-door for Moveroo because the customer cannot drive the car to or from a depot. Do not present depot-to-depot as a normal option for a non-drivable vehicle. If linking to the door-to-door vs depot page, do so only as a contrast for drivable vehicle transport, not as an option the customer should expect for non-drivable transport.

The non-running page should include pickup and delivery access as a major section. Ask customers to tell Moveroo if the vehicle is in a basement, car park, narrow driveway, steep driveway, workshop, auction yard, rural property, or anywhere a larger carrier may struggle to load safely. The tone should not make the customer responsible for solving the logistics; it should simply explain that early access details help Moveroo check suitable options.

Internal linking for `/non-running-car-transport/` should connect it to `/interstate-car-transport/` as the broader car transport hub, `/moving-cars/` as the broader vehicle transport page, `/door-to-door-vs-depot-car-transport/` only where contrasting drivable vehicle depot options with non-drivable door-to-door transport, and `/household-vehicle-relocation/` where a non-drivable car is part of a household move. Incoming links should be added naturally from interstate car transport, Moving Cars, door-to-door vs depot where relevant, services, footer service discovery, sitemap, and `llms.txt`.

The preferred primary CTA for `/non-running-car-transport/` is "Start a vehicle transport quote", with "Request a callback" as the secondary CTA. CTA support copy should ask customers to include whether the car starts, rolls, steers and brakes, plus where it is parked now, so Moveroo can check suitable carrier options before pricing.

The first FAQ set for `/non-running-car-transport/` should answer whether Moveroo can help move a car that does not run, whether this is towing or roadside assistance, what details to include in the quote request, whether a non-drivable car can go depot-to-depot, whether non-running transport costs more, what happens when there are no keys/flat tyres/locked wheels, and whether auction, damaged or project cars are relevant. If mentioning unregistered cars, explain that an unregistered car that can be driven normally is usually standard car transport rather than non-running transport.

Motorcycle transport should be visible but secondary on `/interstate-car-transport/`. Mention motorcycles in the vehicle-type checklist and a short supporting card or section, but do not let motorcycle copy compete with cars in the hero. Preferred wording direction: "Moving a motorcycle instead of a car? Include the make, model, pickup and delivery access, and any timing limits in the quote request so the right carrier options can be checked."

Enclosed transport should be mentioned lightly on `/interstate-car-transport/` and should not be presented as a standard quote-flow option. Preferred wording: "Enclosed transport may be available on some routes, email us after submitting a standard quote to discuss." This should be tied to classic, prestige, modified, or higher-care vehicles without overpromising availability.

The `/interstate-car-transport/` page should include a practical vehicle preparation section. Cover pickup and delivery suburbs, whether the vehicle runs/rolls/steers, low clearance/modifications/roof racks, whether personal items need to stay in the car, safe pickup access, and carrier inspection at pickup and delivery. Keep the copy practical and operational, not generic trust copy.

Do not tell vehicle transport customers they need to take their own condition photos in advance. Carriers complete a vehicle inspection at pickup and delivery.

Do not include fuel-level requirements on vehicle transport pages unless a specific carrier requirement is being communicated after booking.

Vehicle transport tracking and updates vary by carrier. Public copy may say that, at minimum, customers receive a phone number and tracking code. Some carriers provide a tracking link that updates when the vehicle enters a new depot location or is scheduled onto a trip. Customers can also contact Moveroo to request a tracking update if they would prefer. Do not promise live tracking for every carrier or every move.

Vehicle transport quotes should explain that pricing options include the most up-to-date transit time information available to Moveroo at the time the quote is provided. Transit time can be a deciding factor between carrier options, especially when prices are close but one option is much slower. Avoid vague wording such as "depot movements" in customer-facing copy.

Avoid promising the "fastest" interstate car transport option. Use practical comparative language such as "shorter transit time", "slower option", or "one option may take noticeably longer than another" where accurate.

The first version of `/interstate-car-transport/` should use process proof rather than review/testimonial proof. Use real anonymised door-to-door vs depot examples, quote-detail checks, transit time information, carrier contact/tracking expectations, and practical preparation guidance. Vehicle-specific reviews should be incorporated later once there are usable verified reviews from SMS/review workflows.

### Combined Household + Vehicle Relocation

Combined household + vehicle relocation is Moveroo's differentiating service lane.

The core value is fewer customer-managed handoffs, one move brief, coordinated pickup timing, and clearer support when household goods and vehicle transport need to be planned together.

Moveroo can coordinate household and vehicle pickup for the same day when provider availability and job details support it. Moveroo should not promise same-day delivery for both services.

Do not promise lower cost per service, because each service has its own pricing factors. Do not promise one provider for the whole combined move, because household removal and vehicle transport are handled by different provider types.

### Trust and Protection Language

Moveroo can use strong process-based trust language.

Safe claims include that Moveroo helps reduce move risk through fit checks, clearer quote assumptions, documented support paths, change handling, and escalation support.

Avoid guarantee-based claims. Do not say Moveroo guarantees partner performance, guarantees cover, provides insurance, arranges insurance, eliminates move risk, or makes every partner suitable for every job.

Use "vetted transport partners" as the preferred public term. Avoid blanket claims such as "verified partners", "licensed partners", "fully insured partners", or "trusted partners" unless the relevant evidence and standard are documented.

### Provider Signup Program

The `/providers/` page is the canonical public signup page for providers who want to receive Moveroo work. It should speak to removalists, vehicle carriers, motorcycle and specialty transport providers, non-running vehicle carriers, and storage and/or packing partners. The page can also invite adjacent providers to apply if they move, store, or pack something that does not fit those categories neatly.

Provider-facing copy can state that leads are free, there is no cost per quote, no minimum quote target, and no weekly or monthly quote quota.

Provider-facing copy can state that if a provider quotes `$1,000` for a job, they receive `$1,000`; Moveroo does not take a cut from that quote. Keep payment timing and handling linked to provider payment terms rather than overexplaining it in benefit cards.

Providers can set guards so work they do not want, such as high-rise jobs, small jobs, certain regions, job sizes, or access types, does not keep landing in their inbox. This can be supported manually or through provider tooling, but public copy should treat it as a real provider preference.

Provider signup copy can say that once a provider is approved, leads start coming through automatically and the provider can reply via inbox or use the provider dashboard.

Moveroo can describe its customer sales support as included at no cost to providers. Preferred framing: Moveroo helps customers understand their options and choose a service that makes sense for the job; providers do not pay extra for that sales support.

Moveroo can state that job details are checked with the customer when a quote is sent to the provider and checked again before the work is booked.

### Deposit Model

Once a collection date is confirmed and a suitable provider is allocated, the customer pays a 25% deposit to Moveroo to secure the booking.

After the deposit is paid, Moveroo books the job with the allocated provider. Provider details should generally be confirmed after allocation and deposit payment.

A 48-hour cooling-off period applies after the deposit is paid. During that period, a deposit may be refunded if the customer chooses to cancel their move. After the 48-hour cooling-off period, the deposit is generally non-refundable if the customer cancels for reasons unrelated to Moveroo or provider fault.

The remaining balance is due no later than collection. The payment path for the balance may vary by provider or service pathway, so customer-facing copy should say that Moveroo confirms the applicable balance-payment path before the booking is finalised.
