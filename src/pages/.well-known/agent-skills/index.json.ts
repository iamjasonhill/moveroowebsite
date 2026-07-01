import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const payload = {
		$schema: "https://moveroo.com.au/.well-known/agent-skills/schema.json",
		version: "2026-07-01",
		publisher: {
			name: "Moveroo Australia",
			url: "https://moveroo.com.au/",
			agentGuide: "https://moveroo.com.au/agents/",
			openApi: "https://moveroo.com.au/openapi.json",
		},
		canonicalQuoteHost: "https://quotes.moveroo.com.au",
		skills: [
			{
				id: "moveroo-com-au.household_quote",
				name: "Household removal quote",
				type: "quote_request",
				description:
					"Collect a customer-authorised household removal quote request through the official Moveroo Australia quote API.",
				url: "https://moveroo.com.au/agents/",
				openApi: "https://moveroo.com.au/openapi.json",
				capabilityManifest: "https://moveroo.com.au/quote-capability.json",
				examples: "https://moveroo.com.au/agents/examples/",
				executionHost: "https://quotes.moveroo.com.au",
				endpoint: "https://quotes.moveroo.com.au/api/v1/household-quotes/assistant/submit",
				consentRequired: true,
			},
			{
				id: "moveroo-com-au.vehicle_quote",
				name: "Vehicle transport quote",
				type: "quote_request",
				description:
					"Collect a customer-authorised vehicle transport quote request through the official Moveroo Australia quote API.",
				url: "https://moveroo.com.au/agents/",
				openApi: "https://moveroo.com.au/openapi.json",
				capabilityManifest: "https://moveroo.com.au/quote-capability.json",
				examples: "https://moveroo.com.au/agents/examples/",
				executionHost: "https://quotes.moveroo.com.au",
				endpoint: "https://quotes.moveroo.com.au/api/v1/vehicle-quotes/assistant/submit",
				consentRequired: true,
			},
			{
				id: "moveroo-com-au.callback_request",
				name: "Callback request",
				type: "contact_request",
				description:
					"Request a customer-authorised Moveroo Australia callback through the official quote host contact API.",
				url: "https://moveroo.com.au/agents/",
				openApi: "https://moveroo.com.au/openapi.json",
				capabilityManifest: "https://moveroo.com.au/quote-capability.json",
				examples: "https://moveroo.com.au/agents/examples/",
				executionHost: "https://quotes.moveroo.com.au",
				endpoint: "https://quotes.moveroo.com.au/api/v1/callbacks/assistant/request",
				consentRequired: true,
			},
			{
				id: "moveroo-com-au.agent_discovery",
				name: "Agent/API documentation discovery",
				type: "documentation",
				description:
					"Read public Moveroo Australia agent guidance, capability metadata, OpenAPI aliases, and integration examples.",
				url: "https://moveroo.com.au/agents/",
				openApi: "https://moveroo.com.au/openapi.json",
				capabilityManifest: "https://moveroo.com.au/quote-capability.json",
				examples: "https://moveroo.com.au/agents/examples/",
				consentRequired: false,
			},
		],
		operatingRules: {
			customerConsentRequired:
				"Quote and callback submissions require the customer to ask for the action and include customer_consent.confirmed=true.",
			tenant:
				"Public submissions are host-aware. Omit tenant unless Moveroo has supplied an agreed tenant slug.",
			canonicalContract:
				"Use the quote host OpenAPI schema, capability manifest, agent guide, and examples as the source of truth.",
		},
	};

	return new Response(JSON.stringify(payload, null, 2), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Cache-Control": "public, max-age=300",
		},
	});
};
