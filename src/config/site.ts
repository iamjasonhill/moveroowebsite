export const site = {
	name: "Moveroo Australia",
	url: "https://moveroo.com.au",
	destinations: {
		householdQuote: "https://quotes.moveroo.com.au/quote/household",
		vehicleQuote: "https://quotes.moveroo.com.au/quote/vehicle",
		contactPage: "https://quotes.moveroo.com.au/contact",
		bookingPage: "https://quotes.moveroo.com.au/booking/create",
	},
	analytics: {
		siteKey: "moveroo",
		trackedLinks: [
			{
				href: "https://quotes.moveroo.com.au/quote/household",
				eventName: "quote_household_click",
				linkType: "quote",
				params: {
					lead_type: "quote",
					quote_type: "household",
					quote_host: "quotes.moveroo.com.au",
					handoff_path: "/quote/household",
					handoff_event_name: "quote_household_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/quote/vehicle",
				eventName: "quote_vehicle_click",
				linkType: "quote",
				params: {
					lead_type: "quote",
					quote_type: "vehicle",
					quote_host: "quotes.moveroo.com.au",
					handoff_path: "/quote/vehicle",
					handoff_event_name: "quote_vehicle_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/contact",
				eventName: "callback_request_click",
				linkType: "callback",
				params: {
					lead_type: "contact",
					quote_host: "quotes.moveroo.com.au",
					handoff_path: "/contact",
					handoff_event_name: "callback_request_click",
				},
			},
			{
				href: "https://quotes.moveroo.com.au/booking/create",
				eventName: "booking_click",
				linkType: "booking",
				params: {
					lead_type: "booking",
					quote_host: "quotes.moveroo.com.au",
					handoff_path: "/booking/create",
					handoff_event_name: "booking_click",
				},
			},
			{
				href: "tel:+61721432557",
				eventName: "phone_click",
				linkType: "phone",
				params: {
					lead_type: "phone",
					handoff_event_name: "phone_click",
				},
			},
			{
				href: "mailto:removals@moveroo.com.au",
				eventName: "email_click",
				linkType: "email",
				params: {
					lead_type: "email",
					handoff_event_name: "email_click",
				},
			},
		],
	},
} as const;
