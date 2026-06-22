import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const catalog = {
		specVersion: "1.0",
		host: {
			displayName: "Moveroo Australia",
			identifier: "did:web:moveroo.com.au",
			url: "https://moveroo.com.au/",
		},
		entries: [
			{
				identifier: "urn:ai:moveroo.com.au:web:home",
				displayName: "Moveroo Australia Website",
				type: "text/html",
				url: "https://moveroo.com.au/",
			},
			{
				identifier: "urn:ai:moveroo.com.au:okf:index",
				displayName: "Moveroo Australia Open Knowledge Index",
				type: "text/markdown",
				url: "https://moveroo.com.au/okf/index.md",
			},
			{
				identifier: "urn:ai:moveroo.com.au:agent-skills:index",
				displayName: "Moveroo Australia Agent Skills Index",
				type: "application/json",
				url: "https://moveroo.com.au/.well-known/agent-skills/index.json",
			},
			{
				identifier: "urn:ai:moveroo.com.au:quote:household",
				displayName: "Household Quote",
				type: "text/html",
				url: "https://quotes.moveroo.com.au/quote/household",
			},
			{
				identifier: "urn:ai:moveroo.com.au:quote:vehicle",
				displayName: "Vehicle Quote",
				type: "text/html",
				url: "https://quotes.moveroo.com.au/quote/vehicle",
			},
		],
	};

	return new Response(JSON.stringify(catalog, null, 2), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Cache-Control": "public, max-age=300",
		},
	});
};
