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
	].join("\n");

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300",
		},
	});
};
