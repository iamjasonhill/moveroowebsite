// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

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
	integrations: [
		sitemap({
			filter: (page) =>
				!page.includes("/template-dark") &&
				!page.includes("/template-light") &&
				!page.includes("/design") &&
				!page.includes("/contact") &&
				!page.includes("/contact-moveroo") &&
				!page.includes("/contact-au") &&
				!page.includes("/contact-page") &&
				!page.includes("/contact-us"),
		}),
		duplicateSitemap,
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
