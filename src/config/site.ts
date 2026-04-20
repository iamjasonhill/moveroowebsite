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
			},
			{
				href: "https://quotes.moveroo.com.au/quote/vehicle",
				eventName: "quote_vehicle_click",
			},
		],
	},
} as const;
