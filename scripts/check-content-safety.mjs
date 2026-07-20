import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const ignoredDirectories = new Set([".astro", ".git", ".vercel", "dist", "node_modules"]);

const ignoredDirectoryPrefixes = [/^crawl-\d+-details$/];

const scannedExtensions = new Set([
	".astro",
	".css",
	".html",
	".js",
	".json",
	".md",
	".mjs",
	".ts",
	".txt",
]);

const publicSurfaceRoots = new Set(["src", "public", "vercel.json"]);
const staleDomainSurfaceRoots = new Set(["src", "public", "vercel.json"]);

const staleDomainPatterns = [
	{
		label: "old quote domain",
		pattern: new RegExp(["removalists", "moveroo", "com", "au"].join("\\."), "i"),
	},
];

const riskyPublicCopyPatterns = [
	{
		label: "insurance options",
		pattern: /\binsurance options\b/i,
	},
	{
		label: "coordinate insurance coverage options",
		pattern: /\bcoordinate insurance coverage options\b/i,
	},
	{
		label: "Moveroo provides insurance",
		pattern: /\bMoveroo provides insurance\b/i,
	},
	{
		label: "Moveroo arranges insurance",
		pattern: /\bMoveroo arranges insurance\b/i,
	},
	{
		label: "fully insured partners",
		pattern: /\bfully insured partners\b/i,
	},
	{
		label: "guaranteed safe delivery",
		pattern: /\bguaranteed safe delivery\b/i,
	},
	{
		label: "all partners are verified and insured",
		pattern: /\ball partners are verified and insured\b/i,
	},
	{
		label: "licensed partners",
		pattern: /\blicensed partners\b/i,
	},
	{
		label: "verified partners",
		pattern: /\bverified partners\b/i,
	},
	{
		label: "trusted partners",
		pattern: /\btrusted partners\b/i,
	},
];

const directBusinessContactPatterns = [
	{ label: "direct telephone link", pattern: /href=["']tel:/i },
	{ label: "direct email link", pattern: /href=["']mailto:/i },
	{ label: "Moveroo public phone number", pattern: /(?:\+61\s*7|07)\s*2143\s*2557/i },
	{ label: "Moveroo public email address", pattern: /removals@moveroo\.com\.au/i },
];

async function collectFiles(directory) {
	const entries = await fs.readdir(directory, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		if (entry.isDirectory()) {
			if (ignoredDirectories.has(entry.name)) continue;
			if (ignoredDirectoryPrefixes.some((pattern) => pattern.test(entry.name))) continue;
			files.push(...(await collectFiles(path.join(directory, entry.name))));
			continue;
		}

		if (!entry.isFile()) continue;

		const filePath = path.join(directory, entry.name);
		if (scannedExtensions.has(path.extname(entry.name))) files.push(filePath);
	}

	return files;
}

function relative(filePath) {
	return path.relative(root, filePath).replaceAll(path.sep, "/");
}

function isSurface(filePath, surfaceRoots) {
	const relativePath = relative(filePath);
	const [topLevel] = relativePath.split("/");
	return surfaceRoots.has(topLevel) || surfaceRoots.has(relativePath);
}

function findMatches({ filePath, content, patterns }) {
	const matches = [];
	const lines = content.split(/\r?\n/);

	for (const [index, line] of lines.entries()) {
		for (const { label, pattern } of patterns) {
			if (pattern.test(line)) {
				matches.push({
					file: relative(filePath),
					line: index + 1,
					label,
					text: line.trim(),
				});
			}
		}
	}

	return matches;
}

async function main() {
	const files = await collectFiles(root);
	const failures = [];
	const approvedContactUrl = "https://quotes.moveroo.com.au/contact";

	for (const filePath of files) {
		const content = await fs.readFile(filePath, "utf8");

		if (isSurface(filePath, staleDomainSurfaceRoots)) {
			failures.push(
				...findMatches({
					filePath,
					content,
					patterns: staleDomainPatterns,
				})
			);
		}

		if (isSurface(filePath, publicSurfaceRoots)) {
			failures.push(
				...findMatches({
					filePath,
					content,
					patterns: riskyPublicCopyPatterns,
				})
			);

			failures.push(
				...findMatches({
					filePath,
					content,
					patterns: directBusinessContactPatterns,
				})
			);
		}
	}

	const contactAliases = ["contact", "contact-us", "contact-moveroo", "contact-au", "contact-page"];
	for (const alias of contactAliases) {
		const aliasFile = `src/pages/${alias}.astro`;
		const content = await fs.readFile(path.join(root, aliasFile), "utf8");
		if (!content.includes(`Astro.redirect("${approvedContactUrl}", 301)`)) {
			failures.push({
				file: aliasFile,
				line: 1,
				label: "approved contact redirect",
				text: `Expected a permanent redirect to ${approvedContactUrl}`,
			});
		}
	}

	const vercel = JSON.parse(await fs.readFile(path.join(root, "vercel.json"), "utf8"));
	for (const source of contactAliases.map((alias) => `/${alias}/`)) {
		const redirect = vercel.redirects?.find((candidate) => candidate.source === source);
		if (redirect?.destination !== approvedContactUrl || redirect?.permanent !== true) {
			failures.push({
				file: "vercel.json",
				line: 1,
				label: "approved contact redirect",
				text: `${source} must permanently redirect to ${approvedContactUrl}`,
			});
		}
	}

	const cancellationPage = await fs.readFile(
		path.join(root, "src/pages/cancellation.astro"),
		"utf8"
	);
	if (/\b<form\b|\/api\/cancellation/i.test(cancellationPage)) {
		failures.push({
			file: "src/pages/cancellation.astro",
			line: 1,
			label: "portal-only cancellation contact",
			text: "Cancellation support must hand off to the approved contact workspace.",
		});
	}
	try {
		await fs.access(path.join(root, "src/pages/api/cancellation.ts"));
		failures.push({
			file: "src/pages/api/cancellation.ts",
			line: 1,
			label: "retired local contact endpoint",
			text: "The marketing site must not expose a local cancellation contact API.",
		});
	} catch (error) {
		if (error?.code !== "ENOENT") throw error;
	}
	const agentManifest = await fs.readFile(
		path.join(root, "src/pages/api/v1/agent/manifest.ts"),
		"utf8"
	);
	if (agentManifest.includes("/api/cancellation")) {
		failures.push({
			file: "src/pages/api/v1/agent/manifest.ts",
			line: 1,
			label: "retired local contact endpoint",
			text: "Agent discovery must not advertise the retired cancellation contact API.",
		});
	}
	try {
		await fs.access(path.join(root, "public/og-contact.png"));
		failures.push({
			file: "public/og-contact.png",
			line: 1,
			label: "retired direct-contact artwork",
			text: "The former phone-number artwork must not be publicly deployable.",
		});
	} catch (error) {
		if (error?.code !== "ENOENT") throw error;
	}

	if (failures.length > 0) {
		console.error("Content safety checks failed:\n");
		for (const failure of failures) {
			console.error(`- ${failure.file}:${failure.line} contains ${failure.label}: ${failure.text}`);
		}
		process.exit(1);
	}

	console.log("Content safety checks passed.");
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
