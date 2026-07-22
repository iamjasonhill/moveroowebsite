// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import { routeLastModified } from "./src/data/route-publication-dates.mjs";

/** @param {string} page */
const sitemapFilter = (page) =>
	!page.includes("/template-dark") &&
	!page.includes("/template-light") &&
	!page.includes("/design") &&
	!page.includes("/agents/examples") &&
	!page.includes("/contact") &&
	!page.includes("/contact-moveroo") &&
	!page.includes("/contact-au") &&
	!page.includes("/contact-page") &&
	!page.includes("/contact-us");

/** @type {Array<{ type: string, pathname?: string }>} */
let sitemapRoutes = [];

/** @type {import('astro').AstroIntegration} */
const serverSitemap = {
	name: "moveroo-server-sitemap",
	hooks: {
		"astro:routes:resolved": ({ routes }) => {
			sitemapRoutes = routes;
		},
		"astro:build:done": async ({ dir, logger }) => {
			const fs = await import("node:fs/promises");
			const path = await import("node:path");
			const { fileURLToPath } = await import("node:url");
			const outputDir = fileURLToPath(dir);
			const urls = sitemapRoutes
				.filter(({ type, pathname }) => type === "page" && pathname && pathname !== "/404")
				.map(({ pathname }) => {
					const normalizedPath = pathname === "/" ? "/" : `${pathname?.replace(/\/$/, "")}/`;
					return {
						url: new URL(normalizedPath, "https://moveroo.com.au").href,
						lastModified: routeLastModified[normalizedPath],
					};
				})
				.filter(({ url }) => sitemapFilter(url))
				.sort((left, right) => left.url.localeCompare(right.url));
			const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${urls.map(({ url, lastModified }) => `<url><loc>${url}</loc>${lastModified ? `<lastmod>${lastModified}</lastmod>` : ""}</url>`).join("")}</urlset>`;
			const index = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://moveroo.com.au/sitemap-0.xml</loc></sitemap></sitemapindex>`;

			await fs.writeFile(path.join(outputDir, "sitemap-0.xml"), sitemap);
			await fs.writeFile(path.join(outputDir, "sitemap-index.xml"), index);
			logger.info(`Generated sitemap with ${urls.length} URLs`);
		},
	},
};

/** @type {import('astro').AstroIntegration} */
const duplicateSitemap = {
	name: "duplicate-sitemap-index-underscore",
	hooks: {
		"astro:build:done": async ({ dir, logger }) => {
			const fs = await import("node:fs/promises");
			const path = await import("node:path");
			const { fileURLToPath } = await import("node:url");
			const outputDir = fileURLToPath(dir);
			const source = path.join(outputDir, "sitemap-index.xml");
			const target = path.join(outputDir, "sitemap_index.xml");

			try {
				await fs.copyFile(source, target);
				logger.info("Copied sitemap-index.xml to sitemap_index.xml");
			} catch (error) {
				logger.error(
					`Failed to copy sitemap-index.xml: ${error instanceof Error ? error.message : String(error)}`
				);
			}
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: "https://moveroo.com.au",
	output: "server",
	trailingSlash: "always",
	adapter: vercel(),
	build: {
		// Inline smaller stylesheets to reduce number of external CSS files
		// This improves performance by reducing HTTP requests
		// Using "always" to inline all CSS and reduce external stylesheet count
		inlineStylesheets: "always", // Inline all CSS to minimize external stylesheet requests
	},
	integrations: [serverSitemap, duplicateSitemap],
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Set high inline limit since we're using inlineStylesheets: "always"
			// This ensures all CSS is inlined regardless of size
			assetsInlineLimit: 0, // Not used when inlineStylesheets: "always", but set for clarity
		},
	},
});
