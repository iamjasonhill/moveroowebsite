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
		}
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
