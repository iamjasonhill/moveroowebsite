import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), "..");
const DEFAULT_SITE_URL = process.env.PUBLIC_SITE_URL ?? "https://moveroo.com.au";
const DEFAULT_ENDPOINT = process.env.INDEXNOW_ENDPOINT ?? "https://api.indexnow.org/indexnow";
const SAFE_TRIGGERS = new Set([
	"deploy_changed_urls",
	"migration_cutover",
	"critical_url_fix",
	"manual_review",
]);

function parseArgs(argv) {
	const options = {
		mode: "dry_run",
		urls: [],
		files: [],
		changedSince: null,
		trigger: "manual_review",
		proofDir: "indexnow-proofs",
		writeProof: false,
		deploymentId: process.env.VERCEL_DEPLOYMENT_ID ?? process.env.VERCEL_URL ?? null,
		commit: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
	};

	for (let index = 0; index < argv.length; index += 1) {
		const arg = argv[index];
		const nextValue = () => {
			const value = argv[index + 1];
			if (!value || value.startsWith("--")) {
				throw new Error(`${arg} requires a value.`);
			}
			index += 1;
			return value;
		};

		if (arg === "--live") options.mode = "live";
		else if (arg === "--dry-run") options.mode = "dry_run";
		else if (arg === "--write-proof") options.writeProof = true;
		else if (arg === "--url") options.urls.push(nextValue());
		else if (arg.startsWith("--url=")) options.urls.push(arg.slice("--url=".length));
		else if (arg === "--file") options.files.push(nextValue());
		else if (arg.startsWith("--file=")) options.files.push(arg.slice("--file=".length));
		else if (arg === "--changed-since") options.changedSince = nextValue();
		else if (arg.startsWith("--changed-since=")) {
			options.changedSince = arg.slice("--changed-since=".length);
		} else if (arg === "--trigger") options.trigger = nextValue();
		else if (arg.startsWith("--trigger=")) options.trigger = arg.slice("--trigger=".length);
		else if (arg === "--proof-dir") options.proofDir = nextValue();
		else if (arg.startsWith("--proof-dir=")) options.proofDir = arg.slice("--proof-dir=".length);
		else {
			throw new Error(`Unknown argument: ${arg}`);
		}
	}

	return options;
}

function validateKey(key, mode) {
	if (!key && mode === "live") {
		throw new Error("INDEXNOW_KEY is required for live submissions.");
	}

	if (!key) {
		return "indexnow-dry-run-key";
	}

	if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
		throw new Error(
			"INDEXNOW_KEY must be 8-128 characters and contain only letters, numbers, or dashes."
		);
	}

	if (!key.startsWith("indexnow-")) {
		throw new Error("INDEXNOW_KEY must start with indexnow- for this repo.");
	}

	return key;
}

function canonicalSiteUrl() {
	const url = new URL(DEFAULT_SITE_URL);
	url.hash = "";
	url.search = "";
	return url.toString().replace(/\/$/, "");
}

function normalizeUrl(value) {
	const site = canonicalSiteUrl();
	const siteUrl = new URL(site);
	const parsed = new URL(value, `${site}/`);
	parsed.hash = "";
	parsed.search = "";

	if (parsed.protocol !== "https:") {
		throw new Error(`IndexNow URL must be https: ${value}`);
	}

	if (parsed.hostname !== siteUrl.hostname) {
		throw new Error(`IndexNow URL host must be ${siteUrl.hostname}: ${value}`);
	}

	if (parsed.pathname.includes("/template-") || parsed.pathname.startsWith("/api/")) {
		throw new Error(`IndexNow URL is excluded by repo policy: ${value}`);
	}

	if (!path.extname(parsed.pathname) && !parsed.pathname.endsWith("/")) {
		parsed.pathname = `${parsed.pathname}/`;
	}

	return parsed.toString();
}

function routeFromPagePath(filePath) {
	const normalized = filePath.replaceAll("\\", "/");

	if (!normalized.startsWith("src/pages/")) return null;
	if (normalized.startsWith("src/pages/api/")) return null;
	if (!/\.(astro|md|mdx)$/.test(normalized)) return null;
	if (normalized.includes("/template-") || normalized.endsWith("/404.astro")) return null;

	const relative = normalized.replace(/^src\/pages\//, "").replace(/\.(astro|md|mdx)$/, "");

	if (relative === "index") return "/";

	return `/${relative}/`;
}

async function urlsFromFiles(files) {
	const urls = [];

	for (const file of files) {
		const content = await fs.readFile(path.resolve(root, file), "utf8");
		urls.push(
			...content
				.split(/\r?\n/)
				.map((line) => line.trim())
				.filter(Boolean)
		);
	}

	return urls;
}

async function changedFilesSince(ref) {
	const { stdout } = await run("git", ["diff", "--name-only", `${ref}...HEAD`], { cwd: root });
	return stdout
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter(Boolean);
}

async function urlsFromChangedPages(ref) {
	const files = await changedFilesSince(ref);
	return files.map(routeFromPagePath).filter(Boolean);
}

function sha256(value) {
	return crypto.createHash("sha256").update(value).digest("hex");
}

function redactPayload(payload) {
	return {
		...payload,
		key: "[redacted]",
		keyLocation: "[redacted]",
	};
}

async function writeProof({ proofDir, proof }) {
	const outputDir = path.resolve(root, proofDir);
	await fs.mkdir(outputDir, { recursive: true });
	const fileName = `${new Date().toISOString().replace(/[:.]/g, "-")}-indexnow-proof.json`;
	const filePath = path.join(outputDir, fileName);
	await fs.writeFile(filePath, `${JSON.stringify(proof, null, 2)}\n`);
	return filePath;
}

async function submitPayload(endpoint, payload) {
	const response = await fetch(endpoint, {
		method: "POST",
		headers: { "content-type": "application/json; charset=utf-8" },
		body: JSON.stringify(payload),
	});

	return {
		httpStatus: response.status,
		body: await response.text().catch(() => ""),
	};
}

async function main() {
	const options = parseArgs(process.argv.slice(2));

	if (!SAFE_TRIGGERS.has(options.trigger)) {
		throw new Error(`Unsupported trigger "${options.trigger}".`);
	}

	const key = validateKey(process.env.INDEXNOW_KEY?.trim(), options.mode);
	const site = canonicalSiteUrl();
	const siteHost = new URL(site).hostname;
	const keyLocation = process.env.INDEXNOW_KEY_LOCATION ?? `${site}/${key}.txt`;
	const rawUrls = [
		...options.urls,
		...(await urlsFromFiles(options.files)),
		...(options.changedSince ? await urlsFromChangedPages(options.changedSince) : []),
	];
	const urlList = Array.from(new Set(rawUrls.map(normalizeUrl))).sort();

	if (urlList.length === 0) {
		throw new Error("No IndexNow URLs provided. Use --url, --file, or --changed-since.");
	}

	if (urlList.length > 10000) {
		throw new Error("IndexNow POST batches must not exceed 10,000 URLs.");
	}

	const payload = {
		host: siteHost,
		key,
		keyLocation,
		urlList,
	};
	const submittedAt = new Date().toISOString();
	const proof = {
		schema: "indexnow-submission-proof-v1",
		domain: siteHost,
		deploymentId: options.deploymentId,
		commit: options.commit,
		submittedAt,
		endpoint: DEFAULT_ENDPOINT,
		keyLocation: "[redacted]",
		mode: options.mode,
		trigger: options.trigger,
		urlCount: urlList.length,
		urlsSha256: sha256(urlList.join("\n")),
		status: "dry_run",
		httpStatus: null,
		failureReason: null,
	};

	if (options.mode === "live") {
		const result = await submitPayload(DEFAULT_ENDPOINT, payload);
		proof.httpStatus = result.httpStatus;

		if (result.httpStatus === 200) {
			proof.status = "submitted";
		} else if (result.httpStatus === 202) {
			proof.status = "accepted_pending_key_validation";
		} else {
			proof.status = "failed";
			proof.failureReason = `IndexNow returned HTTP ${result.httpStatus}`;
		}
	}

	let proofPath = null;
	if (options.writeProof) {
		proofPath = await writeProof({ proofDir: options.proofDir, proof });
	}

	console.log(
		JSON.stringify(
			{
				payload: redactPayload(payload),
				proof,
				proofPath,
			},
			null,
			2
		)
	);

	if (proof.status === "failed") {
		process.exitCode = 1;
	}
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exit(1);
});
