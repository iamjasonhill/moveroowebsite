import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://moveroo.com.au';

export const GET: APIRoute = () => {
	const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${SITE_URL}/sitemap-index.xml`].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=300'
		}
	});
};
