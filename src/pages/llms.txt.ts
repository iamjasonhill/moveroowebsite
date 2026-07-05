import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const body = `# Moveroo Australia

> Moveroo Australia publishes agent-readable discovery resources for customer-authorised household moving quotes, vehicle transport quotes, callbacks, and quote API documentation.

## Contact
Website: https://moveroo.com.au
Contact: https://quotes.moveroo.com.au/contact
Quote system: https://quotes.moveroo.com.au/

## Key Pages
- [Homepage](https://moveroo.com.au/): Main site entry point for Moveroo Australia services.
- [Agent/API documentation](https://moveroo.com.au/agents/): Human-readable guide for approved AI assistants and developers.
- [Agent/API examples](https://moveroo.com.au/agents/examples/): Example quote, vehicle, and callback payloads.
- [XML sitemap](https://moveroo.com.au/sitemap.xml): Crawlable page inventory for search engines and agents.
- [Privacy policy](https://moveroo.com.au/privacy-policy/): Privacy and data-handling policy.
- [Terms and conditions](https://moveroo.com.au/terms-and-conditions-transport/): Site and service terms.

## Human Quote Flows
- [Household quote form](https://quotes.moveroo.com.au/quote/household): Customer-facing household removal quote workflow.
- [Vehicle quote form](https://quotes.moveroo.com.au/quote/vehicle): Customer-facing vehicle transport quote workflow.
- [Contact page](https://quotes.moveroo.com.au/contact): Contact and callback entry point.

## Agent/API Resources
- [Markdown summary](https://moveroo.com.au/index.md): Agent-readable markdown summary of the marketing site and quote actions.
- [AI catalog](https://moveroo.com.au/.well-known/ai-catalog.json): Machine-readable catalog of public agent resources.
- [Agent skills index](https://moveroo.com.au/.well-known/agent-skills/index.json): Machine-readable skill discovery index.
- [OpenAPI alias](https://moveroo.com.au/openapi.json): Marketing-domain alias for the canonical quote OpenAPI schema.
- [Quote capability alias](https://moveroo.com.au/quote-capability.json): Marketing-domain alias for the quote capability manifest.
- [AI plugin alias](https://moveroo.com.au/.well-known/ai-plugin.json): Marketing-domain alias for AI plugin compatibility metadata.
- [Canonical Agent/API guide](https://quotes.moveroo.com.au/agents): Quote-host source of truth for API usage.
- [Canonical OpenAPI schema](https://quotes.moveroo.com.au/openapi.json): Canonical public quote API schema.
- [Canonical quote capability manifest](https://quotes.moveroo.com.au/quote-capability.json): Canonical supported operations and quote capabilities.
- [Quote host LLM guidance](https://quotes.moveroo.com.au/llms.txt): Quote-host LLM guidance.

## Public Agent API Endpoints
- [Household quote API](https://quotes.moveroo.com.au/api/v1/household-quotes/assistant/submit): Submit a customer-authorised household quote request.
- [Vehicle quote API](https://quotes.moveroo.com.au/api/v1/vehicle-quotes/assistant/submit): Submit a customer-authorised vehicle transport quote request.
- [Callback request API](https://quotes.moveroo.com.au/api/v1/callbacks/assistant/request): Request a customer-authorised callback.

## Ownership Notes
- This marketing site is owned by the Moveroo Australia Astro repository.
- The quote host is the source of truth for API execution, OpenAPI schemas, and capability manifests.
- Agents may read these resources for customer-authorised quote discovery and may only submit quote or callback requests when the customer has asked for that action.
- Public host-aware API submissions should omit tenant unless Moveroo has supplied an agreed tenant slug.
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300",
		},
	});
};
