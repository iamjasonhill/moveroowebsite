export const site = {
	name: "Moveroo Australia",
	url: "https://moveroo.com.au",
	destinations: {
		householdQuote: "https://quotes.moveroo.com.au/quote/household",
		vehicleQuote: "https://quotes.moveroo.com.au/quote/vehicle",
		contactPage: "https://quotes.moveroo.com.au/contact",
		contactWorkspace: "https://quotes.moveroo.com.au/contact",
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
					interaction_type: "quote_handoff",
					lead_type: "quote",
					quote_type: "household",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "quote_household_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/quote/vehicle",
				eventName: "quote_vehicle_click",
				params: {
					interaction_type: "quote_handoff",
					lead_type: "quote",
					quote_type: "vehicle",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "quote_vehicle_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/contact",
				eventName: "callback_request_click",
				params: {
					interaction_type: "callback",
					lead_type: "callback",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "callback_request_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/contact",
				eventName: "callback_page_click",
				params: {
					interaction_type: "callback",
					lead_type: "callback",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/booking/create",
				eventName: "booking_click",
				params: {
					interaction_type: "booking",
					lead_type: "booking",
					quote_host: "quotes.moveroo.com.au",
					handoff_event_name: "booking_click",
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
			{
				href: "tel:+61721432557",
				eventName: "phone_click",
				params: {
					interaction_type: "phone",
					lead_type: "call",
				},
			},
			{
				href: "mailto:removals@moveroo.com.au",
				eventName: "email_click",
				params: {
					interaction_type: "email",
					lead_type: "email",
				},
			},
		],
	},
} as const;
