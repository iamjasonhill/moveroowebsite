import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

async function read(relativePath) {
	return fs.readFile(path.join(root, relativePath), "utf8");
}

async function exists(relativePath) {
	try {
		await fs.access(path.join(root, relativePath));
		return true;
	} catch {
		return false;
	}
}

async function main() {
	const checks = [];
	const packageJson = JSON.parse(await read("package.json"));
	const layout = await read("src/layouts/Layout.astro");
	const envExample = await read(".env.example");
	const analyticsWrapper = await read("src/components/analytics/Analytics.astro");

	for (const scriptName of ["check", "check:contract", "check:seo"]) {
		checks.push([
			`package.json includes ${scriptName}`,
			Boolean(packageJson.scripts?.[scriptName]),
		]);
	}

	checks.push([
		"analytics wrapper exists",
		await exists("src/components/analytics/Analytics.astro"),
	]);
	checks.push(["ga4 wrapper exists", await exists("src/components/analytics/Ga4.astro")]);
	checks.push(["matomo wrapper exists", await exists("src/components/analytics/Matomo.astro")]);
	checks.push([
		"Layout imports analytics wrapper",
		layout.includes('import Analytics from "../components/analytics/Analytics.astro";'),
	]);
	checks.push(["Layout renders analytics wrapper", layout.includes("<Analytics />")]);
	checks.push([
		"analytics wrapper includes Matomo",
		analyticsWrapper.includes('import Matomo from "./Matomo.astro";'),
	]);
	for (const relativePath of [
		"src/pages/rss.xml.ts",
		"src/pages/sitemap.astro",
		"src/pages/robots.txt.ts",
		"src/pages/privacy-policy.astro",
		"src/pages/terms-of-use.astro",
		"docs/migration-ledger.md",
		"docs/redirect-map.md",
		"docs/live-cutover-status.md",
		"docs/homepage-audit.md",
		"docs/indexed-valid-inventory.md",
		"docs/nonindexed-redirect-strategy.md",
		"docs/nonindexed-redirect-report.md",
	]) {
		checks.push([`${relativePath} exists`, await exists(relativePath)]);
	}
	checks.push(["Layout links RSS feed", layout.includes("application/rss+xml")]);
	checks.push(["Layout links sitemap", layout.includes('rel="sitemap"')]);
	checks.push([
		".env.example includes PUBLIC_ANALYTICS_ENABLED=",
		envExample.includes("PUBLIC_ANALYTICS_ENABLED="),
	]);
	checks.push([
		".env.example includes PUBLIC_ANALYTICS_PROVIDER=",
		envExample.includes("PUBLIC_ANALYTICS_PROVIDER="),
	]);
	checks.push([
		".env.example includes PUBLIC_ANALYTICS_CONFIG=",
		envExample.includes("PUBLIC_ANALYTICS_CONFIG="),
	]);
	checks.push([
		".env.example includes PUBLIC_GA_MEASUREMENT_ID=",
		envExample.includes("PUBLIC_GA_MEASUREMENT_ID="),
	]);
	checks.push([
		".env.example includes PUBLIC_GA_TAG_URL=",
		envExample.includes("PUBLIC_GA_TAG_URL="),
	]);
	checks.push([
		".env.example includes PUBLIC_GA_SEND_PAGE_VIEW=",
		envExample.includes("PUBLIC_GA_SEND_PAGE_VIEW="),
	]);
	checks.push([
		".env.example includes PUBLIC_GA_ANONYMIZE_IP=",
		envExample.includes("PUBLIC_GA_ANONYMIZE_IP="),
	]);
	checks.push([
		".env.example includes PUBLIC_MATOMO_BASE_URL=",
		envExample.includes("PUBLIC_MATOMO_BASE_URL="),
	]);
	checks.push([
		".env.example includes PUBLIC_MATOMO_SITE_ID=",
		envExample.includes("PUBLIC_MATOMO_SITE_ID="),
	]);

	const failures = checks.filter(([, passed]) => !passed);
	for (const [label, passed] of checks) console.log(`${passed ? "PASS" : "FAIL"}: ${label}`);
	if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
