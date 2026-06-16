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
const prepareScript = read("scripts/indexnow-prepare-key.mjs");
const submitScript = read("scripts/indexnow-submit.mjs");

assert(
	packageJson.scripts.build?.startsWith("node scripts/indexnow-prepare-key.mjs && astro build"),
	"build script should prepare the IndexNow key file before Astro build"
);
assert(packageJson.scripts["indexnow:prepare-key"], "missing indexnow:prepare-key script");
assert(packageJson.scripts["indexnow:dry-run"], "missing indexnow:dry-run script");
assert(packageJson.scripts["indexnow:submit"], "missing indexnow:submit script");
assert(gitignore.includes("public/indexnow-*.txt"), "generated IndexNow key files must be ignored");
assert(gitignore.includes("indexnow-proofs/"), "generated IndexNow proof files must be ignored");
assert(envExample.includes("INDEXNOW_KEY="), ".env.example should document INDEXNOW_KEY");
assert(envExample.includes("INDEXNOW_ENDPOINT="), ".env.example should document INDEXNOW_ENDPOINT");
assert(
	prepareScript.includes('value.startsWith("indexnow-")'),
	"key preparer should enforce the indexnow- prefix"
);
assert(submitScript.includes('"dry_run"'), "submit script should support dry-run mode");
assert(submitScript.includes("redactPayload"), "submit script should redact key material");
assert(
	workflowDoc.includes("No live submission should run without explicit approval"),
	"workflow doc should preserve the approval gate"
);

if (failures.length) {
	console.error("IndexNow pilot checks failed:\n");
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log("IndexNow pilot checks passed.");
