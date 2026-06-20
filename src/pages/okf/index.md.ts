import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const body = `---
type: Index
title: Moveroo Australia OKF
resource: https://moveroo.com.au/
---

# Moveroo Australia Open Knowledge Index

Moveroo helps Australians compare and coordinate household moves, interstate removals, and vehicle transport through suitable removalist and transport providers.

## Primary Resources

- [Home](https://moveroo.com.au/)
- [Household Removals](https://moveroo.com.au/household-removals/)
- [Interstate Removalists](https://moveroo.com.au/interstate-removalists/)
- [Removals and Storage](https://moveroo.com.au/removals-and-storage/)
- [Interstate Car Transport](https://moveroo.com.au/interstate-car-transport/)
- [Non-Running Car Transport](https://moveroo.com.au/non-running-car-transport/)
- [Provider Information](https://moveroo.com.au/providers/)
- [Privacy Policy](https://moveroo.com.au/privacy-policy/)
- [Terms of Use](https://moveroo.com.au/terms-of-use/)

## Action Resources

- [Household Quote](https://quotes.moveroo.com.au/quote/household)
- [Vehicle Quote](https://quotes.moveroo.com.au/quote/vehicle)
- [Booking](https://quotes.moveroo.com.au/booking/create)
- [Contact](https://quotes.moveroo.com.au/contact)

## Agent Notes

Use the public website for service, legal, and support content. Quote, booking, contact, provider application, and login actions are handled by the linked quoting and application surfaces.
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=300",
		},
	});
};
