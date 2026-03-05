// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

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
	adapter: vercel(),
	build: {
		// Inline smaller stylesheets to reduce number of external CSS files
		// This improves performance by reducing HTTP requests
		// Using "always" to inline all CSS and reduce external stylesheet count
		inlineStylesheets: "always", // Inline all CSS to minimize external stylesheet requests
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/template-dark") && !page.includes("/template-light"),
			serialize: (item) => {
				// Map URLs to their lastmod dates
				const dateMap = {
					"https://moveroo.com.au/": new Date("2024-01-22T03:43:43+10:00"),
					"https://moveroo.com.au/contact/": new Date("2026-01-10T00:00:00.000Z"),
					"https://moveroo.com.au/privacy-policy/": new Date("2026-01-10T00:00:00.000Z"),
					"https://moveroo.com.au/services/": new Date("2026-01-10T00:00:00.000Z"),
					"https://moveroo.com.au/terms-and-conditions-transport/": new Date("2026-01-10T00:00:00.000Z"),
					"https://moveroo.com.au/terms-of-use/": new Date("2026-01-10T00:00:00.000Z"),
					"https://moveroo.com.au/cancellation/": new Date("2026-01-10T00:00:00.000Z"),
					"https://moveroo.com.au/moving-cars/": new Date("2024-10-01T03:00:00+10:00"),
				};

				const lastmod = dateMap[item.url];
				if (lastmod) {
					item.lastmod = lastmod;
				}
				return item;
			},
		}),
		duplicateSitemap,
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Set high inline limit since we're using inlineStylesheets: "always"
			// This ensures all CSS is inlined regardless of size
			assetsInlineLimit: 0, // Not used when inlineStylesheets: "always", but set for clarity
		},
	},
});
