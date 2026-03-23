import type { APIRoute } from "astro";

const SITE_URL = "https://moveroo.com.au";

export const GET: APIRoute = () => {
	const body = [
		`User-agent: *`,
		`Allow: /`,
		``,
		`Sitemap: ${SITE_URL}/sitemap-index.xml`,
		``,
		`# LLM/AI Crawler Information`,
		`# See https://llmstxt.org for specification`,
		`# LLMs.txt: ${SITE_URL}/llms.txt`,
	].join("\n");

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300",
		},
	});
};
