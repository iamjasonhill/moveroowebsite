import type { APIRoute } from "astro";

const siteUrl = (import.meta.env.PUBLIC_SITE_URL || "https://moveroo.com.au").replace(/\/$/, "");

export const GET: APIRoute = () => {
	const body = [
		`User-agent: *`,
		`Allow: /`,
		``,
		`Sitemap: ${siteUrl}/sitemap-index.xml`,
		``,
		`# LLM/AI Crawler Information`,
		`# See https://llmstxt.org for specification`,
		`# LLMs.txt: ${siteUrl}/llms.txt`,
		`# AI resource catalog: ${siteUrl}/.well-known/ai-catalog.json`,
		`# Agent Skills: ${siteUrl}/.well-known/agent-skills/index.json`,
		`# Content-Signal: public service, legal, and support content may be used for AI search and agent discovery with attribution to Moveroo Australia.`,
		``,
		`User-agent: GPTBot`,
		`Allow: /`,
		``,
		`User-agent: ChatGPT-User`,
		`Allow: /`,
		``,
		`User-agent: ClaudeBot`,
		`Allow: /`,
		``,
		`User-agent: anthropic-ai`,
		`Allow: /`,
		``,
		`User-agent: PerplexityBot`,
		`Allow: /`,
		``,
		`User-agent: Google-Extended`,
		`Allow: /`,
		``,
		`User-agent: CCBot`,
		`Allow: /`,
		``,
		`User-agent: Applebot-Extended`,
		`Allow: /`,
	].join("\n");

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300",
		},
	});
};
