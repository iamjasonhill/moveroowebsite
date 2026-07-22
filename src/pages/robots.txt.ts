export function GET() {
	const siteUrl = (import.meta.env.PUBLIC_SITE_URL || "https://moveroo.com.au").replace(/\/$/, "");
	const body = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
Sitemap: ${siteUrl}/sitemap-index.xml

# AI crawlers and search agents may use these resources for customer-authorised quote discovery.
# API execution is documented at /agents/ and /openapi.json.
Allow: /agents/
Allow: /agents/examples/
Allow: /llms.txt
Allow: /.well-known/llms.txt
Allow: /index.md
Allow: /openapi.json
Allow: /quote-capability.json
Allow: /.well-known/ai-catalog.json
Allow: /.well-known/agent-skills/index.json
Allow: /.well-known/ai-plugin.json
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=0, must-revalidate",
		},
	});
}
