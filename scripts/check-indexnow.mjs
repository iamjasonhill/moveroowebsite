import fs from "node:fs";

const failures = [];

function assert(condition, message) {
	if (!condition) failures.push(message);
}

function read(relativePath) {
	return fs.readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

const packageJson = JSON.parse(read("package.json"));
const gitignore = read(".gitignore");
const envExample = read(".env.example");
const workflowDoc = read("docs/indexnow-pilot.md");
const submitScript = read("scripts/indexnow-submit.mjs");

assert(
	packageJson.scripts.build?.includes("astro build") &&
		packageJson.scripts.build?.includes("node ./scripts/indexnow-submit.mjs --auto"),
	"build script should run IndexNow auto-submit after Astro build"
);
assert(packageJson.scripts["indexnow:dry-run"], "missing indexnow:dry-run script");
assert(packageJson.scripts["indexnow:submit"], "missing indexnow:submit script");
assert(
	!gitignore.includes("public/indexnow-*.txt"),
	"IndexNow key files must be committed for Vercel deploys"
);
assert(gitignore.includes("indexnow-proofs/"), "generated IndexNow proof files must be ignored");
assert(envExample.includes("INDEXNOW_ENDPOINT="), ".env.example should document INDEXNOW_ENDPOINT");
assert(submitScript.includes('"dry_run"'), "submit script should support dry-run mode");
assert(submitScript.includes('"[redacted]"'), "submit proof should redact key material");
assert(
	submitScript.includes("failed.length > 0 && !auto"),
	"auto-submit must not fail production deploys"
);
assert(
	workflowDoc.includes("Routine production deploys are approved"),
	"workflow doc should document approved routine deploy submissions"
);

if (failures.length) {
	console.error("IndexNow pilot checks failed:\n");
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log("IndexNow pilot checks passed.");
