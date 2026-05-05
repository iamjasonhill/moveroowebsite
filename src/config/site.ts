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
			},
			{
				href: "https://quotes.moveroo.com.au/quote/vehicle",
				eventName: "quote_vehicle_click",
				linkType: "quote",
			},
			{
				href: "https://quotes.moveroo.com.au/contact",
				eventName: "callback_request_click",
				linkType: "callback",
			},
			{
				href: "https://quotes.moveroo.com.au/booking/create",
				eventName: "booking_click",
				linkType: "booking",
			},
			{
				href: "tel:+61721432557",
				eventName: "phone_click",
				linkType: "phone",
			},
			{
				href: "mailto:removals@moveroo.com.au",
				eventName: "email_click",
				linkType: "email",
			},
		],
	},
} as const;
