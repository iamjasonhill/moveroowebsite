import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const payload = {
		specVersion: "1.0",
		host: {
			displayName: "Moveroo Australia",
			identifier: "did:web:moveroo.com.au",
			url: "https://moveroo.com.au/",
		},
		canonicalQuoteHost: "https://quotes.moveroo.com.au",
		entries: [
			{
				identifier: "urn:ai:moveroo.com.au:web:home",
				displayName: "Moveroo Australia Website",
				type: "text/html",
				url: "https://moveroo.com.au/",
			},
			{
				identifier: "urn:ai:moveroo.com.au:llms",
				displayName: "Moveroo Australia LLM guidance",
				type: "text/plain",
				url: "https://moveroo.com.au/llms.txt",
			},
			{
				identifier: "urn:ai:moveroo.com.au:markdown:index",
				displayName: "Moveroo Australia Markdown summary",
				type: "text/markdown",
				url: "https://moveroo.com.au/index.md",
			},
			{
				identifier: "urn:ai:moveroo.com.au:agent-skills:index",
				displayName: "Moveroo Australia Agent Skills Index",
				type: "application/json",
				url: "https://moveroo.com.au/.well-known/agent-skills/index.json",
			},
			{
				identifier: "urn:ai:moveroo.com.au:agents:guide",
				displayName: "Moveroo Australia Agent/API Guide",
				type: "text/html",
				url: "https://moveroo.com.au/agents/",
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
			{
				identifier: "urn:ai:moveroo.com.au:contact",
				displayName: "Contact",
				type: "text/html",
				url: "https://quotes.moveroo.com.au/contact",
			},
			{
				identifier: "urn:ai:moveroo.com.au:quote:capability",
				displayName: "Quote Capability Manifest",
				type: "application/json",
				url: "https://quotes.moveroo.com.au/quote-capability.json",
			},
			{
				identifier: "urn:ai:moveroo.com.au:quote:openapi",
				displayName: "Quote OpenAPI Schema",
				type: "application/vnd.oai.openapi+json",
				url: "https://quotes.moveroo.com.au/openapi.json",
			},
			{
				identifier: "urn:ai:moveroo.com.au:quote:household-public-agent-api",
				displayName: "Household Quote Public Agent API",
				type: "application/json",
				url: "https://quotes.moveroo.com.au/api/v1/household-quotes/assistant/submit",
			},
			{
				identifier: "urn:ai:moveroo.com.au:quote:vehicle-public-agent-api",
				displayName: "Vehicle Quote Public Agent API",
				type: "application/json",
				url: "https://quotes.moveroo.com.au/api/v1/vehicle-quotes/assistant/submit",
			},
			{
				identifier: "urn:ai:moveroo.com.au:quote:callback-public-agent-api",
				displayName: "Callback Public Agent API",
				type: "application/json",
				url: "https://quotes.moveroo.com.au/api/v1/callbacks/assistant/request",
			},
		],
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Cache-Control": "public, max-age=300",
		},
	});
};
