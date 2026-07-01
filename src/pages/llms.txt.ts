import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const body =
		"# Moveroo Australia\n\nMoveroo Australia publishes agent-readable discovery resources for customer-authorised household moving quotes, vehicle transport quotes, callbacks, and quote API documentation.\n\n## Contact\nWebsite: https://moveroo.com.au\nContact: https://quotes.moveroo.com.au/contact\nQuote system: https://quotes.moveroo.com.au/\n\n## Human quote flows\n- Household quote: https://quotes.moveroo.com.au/quote/household\n- Vehicle quote: https://quotes.moveroo.com.au/quote/vehicle\n- Contact page: https://quotes.moveroo.com.au/contact\n\n## Agent/API resources\n- Agent guide: https://moveroo.com.au/agents/\n- Agent examples: https://moveroo.com.au/agents/examples/\n- Markdown summary: https://moveroo.com.au/index.md\n- AI catalog: https://moveroo.com.au/.well-known/ai-catalog.json\n- Agent skills index: https://moveroo.com.au/.well-known/agent-skills/index.json\n- Quote host agent guide: https://quotes.moveroo.com.au/agents\n- Quote host examples: https://quotes.moveroo.com.au/agents/examples\n- OpenAPI alias: https://moveroo.com.au/openapi.json\n- Canonical OpenAPI: https://quotes.moveroo.com.au/openapi.json\n- Quote capability alias: https://moveroo.com.au/quote-capability.json\n- Canonical quote capability: https://quotes.moveroo.com.au/quote-capability.json\n- AI plugin alias: https://moveroo.com.au/.well-known/ai-plugin.json\n- Quote host AI catalog: https://quotes.moveroo.com.au/.well-known/ai-catalog.json\n- Quote host LLM guidance: https://quotes.moveroo.com.au/llms.txt\n\n## Public agent API endpoints\n- Household quote API: https://quotes.moveroo.com.au/api/v1/household-quotes/assistant/submit\n- Vehicle quote API: https://quotes.moveroo.com.au/api/v1/vehicle-quotes/assistant/submit\n- Callback request API: https://quotes.moveroo.com.au/api/v1/callbacks/assistant/request\n\n## Agent rules\n- Customer consent is required before submitting quote or callback requests.\n- Use the quote host OpenAPI schema and capability manifest as the canonical contract.\n- Public host-aware API submissions should omit tenant unless Moveroo has supplied an agreed tenant slug.\n";

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300",
		},
	});
};
