import fs from "node:fs";

const failures = [];

function assert(condition, message) {
	if (!condition) {
		failures.push(message);
	}
}

const packageJson = JSON.parse(
	fs.readFileSync(new URL("../package.json", import.meta.url), "utf8")
);
const robotsRoute = fs.readFileSync(new URL("../src/pages/robots.txt.ts", import.meta.url), "utf8");
const vercelConfig = JSON.parse(
	fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8")
);
const llmsTextRoute = fs.readFileSync(new URL("../src/pages/llms.txt.ts", import.meta.url), "utf8");

assert(packageJson.scripts.check, "package.json is missing the check script");
assert(packageJson.scripts["check:seo"], "package.json is missing the check:seo script");
assert(
	robotsRoute.includes("PUBLIC_SITE_URL"),
	"robots.txt route should use PUBLIC_SITE_URL as the canonical site source"
);
assert(
	Array.isArray(vercelConfig.redirects) && vercelConfig.redirects.length >= 5,
	"vercel.json redirect inventory looks unexpectedly small"
);
assert(
	llmsTextRoute.includes("Moveroo Australia"),
	"llms.txt route no longer identifies the Moveroo brand clearly"
);

if (failures.length > 0) {
	console.error("Moveroo SEO checks failed:\n");
	for (const failure of failures) {
		console.error(`- ${failure}`);
	}
	process.exit(1);
}

console.log("Moveroo SEO checks passed.");
