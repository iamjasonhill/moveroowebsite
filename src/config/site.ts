export const site = {
	name: "Moveroo Australia",
	url: "https://moveroo.com.au",
	destinations: {
		householdQuote: "https://quotes.moveroo.com.au/quote/household",
		vehicleQuote: "https://quotes.moveroo.com.au/quote/vehicle",
		contactPage: "https://quotes.moveroo.com.au/contact",
		contactWorkspace: "https://quotes.moveroo.com.au/contact",
		cancellationRefundDetails: "https://removalist.net/cancellation/refund-details",
		bookingPage: "https://quotes.moveroo.com.au/booking/create",
		providerApply: "https://quotes.moveroo.com.au/providers/apply",
		providerPaymentTerms: "https://removalist.net/providers/payment-terms",
		providerLogin: "https://removalist.net/provider/login",
	},
	analytics: {
		siteKey: "moveroo",
		trackedLinks: [
			{
				href: "https://quotes.moveroo.com.au/quote/household",
				eventName: "quote_household_click",
				params: {
					interaction_type: "quote",
					lead_type: "household_quote",
					quote_type: "household",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "quote_household_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/quote/vehicle",
				eventName: "quote_vehicle_click",
				params: {
					interaction_type: "quote",
					lead_type: "vehicle_quote",
					quote_type: "vehicle",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "quote_vehicle_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/booking/create",
				eventName: "booking_household_click",
				params: {
					interaction_type: "booking",
					lead_type: "booking",
					quote_type: "household",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "booking_household_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/contact",
				eventName: "contact_intent_click",
				params: {
					interaction_type: "contact",
					lead_type: "contact",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "contact_intent_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/providers/apply",
				eventName: "provider_apply_click",
				params: {
					interaction_type: "provider_application_handoff",
					lead_type: "provider_application",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "provider_apply_click",
				},
			},
			{
				href: "https://removalist.net/providers/payment-terms",
				eventName: "provider_payment_terms_click",
				params: {
					interaction_type: "provider_terms_handoff",
					lead_type: "provider_application",
					quote_host: "removalist.net",
					handoff_event_name: "provider_payment_terms_click",
				},
			},
			{
				href: "https://removalist.net/provider/login",
				eventName: "provider_login_click",
				params: {
					interaction_type: "provider_login_handoff",
					lead_type: "provider_login",
					quote_host: "removalist.net",
					handoff_event_name: "provider_login_click",
				},
			},
		],
	},
} as const;
