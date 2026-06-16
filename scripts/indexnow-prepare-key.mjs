import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), "..");
const publicDir = path.join(root, "public");
const key = process.env.INDEXNOW_KEY?.trim();

function validateKey(value) {
	if (!/^[A-Za-z0-9-]{8,128}$/.test(value)) {
		throw new Error(
			"INDEXNOW_KEY must be 8-128 characters and contain only letters, numbers, or dashes."
		);
	}

	if (!value.startsWith("indexnow-")) {
		throw new Error(
			"INDEXNOW_KEY must start with indexnow- so generated key files match the repo ignore rule."
		);
	}
}

async function removeStaleGeneratedKeys(targetFile) {
	const entries = await fs.readdir(publicDir, { withFileTypes: true });

	await Promise.all(
		entries
			.filter((entry) => entry.isFile() && /^indexnow-[A-Za-z0-9-]+\.txt$/.test(entry.name))
			.map(async (entry) => {
				const filePath = path.join(publicDir, entry.name);

				if (filePath !== targetFile) {
					await fs.rm(filePath, { force: true });
				}
			})
	);
}

async function main() {
	if (!key) {
		console.log("IndexNow key not configured; skipping public key file generation.");
		return;
	}

	validateKey(key);

	await fs.mkdir(publicDir, { recursive: true });
	const targetFile = path.join(publicDir, `${key}.txt`);
	await removeStaleGeneratedKeys(targetFile);
	await fs.writeFile(targetFile, `${key}\n`, { encoding: "utf8", mode: 0o600 });
	console.log(`Prepared IndexNow key file at public/${key}.txt`);
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exit(1);
});
