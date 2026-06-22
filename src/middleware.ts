import type { MiddlewareHandler } from "astro";

const agentDiscoveryLinkHeader = [
	'<https://moveroo.com.au/llms.txt>; rel="llms"; type="text/plain"',
	'<https://moveroo.com.au/okf/index.md>; rel="alternate"; type="text/markdown"',
	'<https://moveroo.com.au/.well-known/ai-catalog.json>; rel="service-desc"; type="application/json"',
	'<https://moveroo.com.au/.well-known/agent-skills/index.json>; rel="agent"; type="application/json"',
].join(", ");

const homepageMarkdown = `# Moveroo Australia

> Moveroo helps Australians compare and coordinate household moves, interstate removals and vehicle transport through suitable removalist and transport providers.

## Primary Actions

- [Start a household quote](https://quotes.moveroo.com.au/quote/household): Share route, timing, inventory and access details for a household move.
- [Start a vehicle transport quote](https://quotes.moveroo.com.au/quote/vehicle): Share pickup and delivery suburbs, vehicle details, running condition and timing.
- [Request a callback](https://moveroo.com.au/contact/): Ask the Moveroo team to follow up.
- [Book your move](https://quotes.moveroo.com.au/booking/create): Continue a booking through the quoting system.

## Key Public Pages

- [Services](https://moveroo.com.au/services/): Overview of household removals, vehicle transport and combined relocation support.
- [Household removals](https://moveroo.com.au/household-removals/): Main household moving service page.
- [Interstate removalists](https://moveroo.com.au/interstate-removalists/): Interstate move coordination and option comparison.
- [Backloading removals](https://moveroo.com.au/backloading-removals/): Flexible backload option guidance for household moves.
- [Interstate car transport](https://moveroo.com.au/interstate-car-transport/): Vehicle transport hub for interstate car moves.
- [Non-running car transport](https://moveroo.com.au/non-running-car-transport/): Support page for vehicles that do not run, roll or steer.
- [How Moveroo protects your move](https://moveroo.com.au/how-moveroo-protects-your-move/): Quote clarity, responsibility and process guidance.

## Agent Resources

- [llms.txt](https://moveroo.com.au/llms.txt): Curated site map for LLM and agent consumers.
- [Open Knowledge Format index](https://moveroo.com.au/okf/index.md): Markdown knowledge index.
- [AI resource catalog](https://moveroo.com.au/.well-known/ai-catalog.json): Machine-readable resource catalog.
- [Agent Skills index](https://moveroo.com.au/.well-known/agent-skills/index.json): Well-known skill discovery index.
- [Public agent manifest](https://moveroo.com.au/api/v1/agent/manifest/): Public site manifest and safe exposure boundaries.
- [XML sitemap](https://moveroo.com.au/sitemap-index.xml): Crawlable public URL inventory.

## Ownership Notes

This is a static Astro public website deployed on Vercel. Bossman owns fleet standards and current evidence. The website repository owns public content, metadata, agent-readable files and quote-handoff links.
`;

const acceptsMarkdown = (request: Request): boolean => {
	const accept = request.headers.get("accept")?.toLowerCase() ?? "";

	return accept.includes("text/markdown") || accept.includes("text/plain");
};

const addAgentHeaders = (response: Response): Response => {
	response.headers.append("Link", agentDiscoveryLinkHeader);
	response.headers.append("Vary", "Accept");

	return response;
};

export const onRequest: MiddlewareHandler = async (context, next) => {
	if (context.url.pathname === "/" && acceptsMarkdown(context.request)) {
		return new Response(homepageMarkdown, {
			headers: {
				"Cache-Control": "public, max-age=300",
				"Content-Type": "text/markdown; charset=utf-8",
				Link: agentDiscoveryLinkHeader,
				Vary: "Accept",
			},
		});
	}

	return addAgentHeaders(await next());
};
