import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const routeAssets = ["household", "vehicle", "specialty"];
const socialTemplates = [
	{ name: "landscape", width: 1200, height: 630 },
	{ name: "square", width: 1080, height: 1080 },
	{ name: "portrait", width: 1080, height: 1350 },
];

for (const lane of routeAssets) {
	const filePath = join(root, "public", "brand", "routes", `${lane}.webp`);
	assert.ok(existsSync(filePath), `${lane} page image should exist`);
	assert.ok(statSync(filePath).size > 10_000, `${lane} page image should not be empty`);
	assert.ok(statSync(filePath).size < 150_000, `${lane} page image should stay below 150KB`);

	const metadata = await sharp(filePath).metadata();
	assert.equal(metadata.format, "webp", `${lane} page image should be WebP`);
	assert.equal(metadata.width, 1200, `${lane} page image should be 1200px wide`);
	assert.equal(metadata.height, 630, `${lane} page image should be 630px high`);
}

for (const template of socialTemplates) {
	const filePath = join(root, "brand", "social", `moveroo-${template.name}-template.svg`);
	assert.ok(existsSync(filePath), `${template.name} social template should exist`);
	const metadata = await sharp(filePath).metadata();
	assert.equal(metadata.width, template.width, `${template.name} template width should be stable`);
	assert.equal(
		metadata.height,
		template.height,
		`${template.name} template height should be stable`
	);
}

console.log("Moveroo Brand Kit content-scale contract passed.");
