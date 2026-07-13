import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const routes = [
	{ lane: "household", source: "og-services.png", label: "Household moves" },
	{ lane: "vehicle", source: "og-moving-cars.png", label: "Vehicle transport" },
	{ lane: "specialty", source: "og-home.png", label: "Moves with more moving parts" },
];
const socialFormats = [
	{ name: "landscape", width: 1200, height: 630 },
	{ name: "square", width: 1080, height: 1080 },
	{ name: "portrait", width: 1080, height: 1350 },
];

const routeDirectory = join(root, "public", "brand", "routes");
const socialDirectory = join(root, "brand", "social");
await mkdir(routeDirectory, { recursive: true });
await mkdir(socialDirectory, { recursive: true });

for (const route of routes) {
	await sharp(join(root, "public", route.source))
		.resize(1200, 630, { fit: "cover" })
		.webp({ quality: 82 })
		.toFile(join(routeDirectory, `${route.lane}.webp`));
}

for (const format of socialFormats) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${format.width}" height="${format.height}" viewBox="0 0 ${format.width} ${format.height}">
  <rect width="100%" height="100%" fill="#081b2a"/>
  <path d="M0 0H${format.width}V${format.height}" fill="none" stroke="#10b981" stroke-opacity=".18" stroke-width="2"/>
  <circle cx="${format.width * 0.83}" cy="${format.height * 0.22}" r="${Math.round(format.width * 0.18)}" fill="#10b981" fill-opacity=".14"/>
  <rect x="${Math.round(format.width * 0.1)}" y="${Math.round(format.height * 0.14)}" width="${Math.round(format.width * 0.15)}" height="${Math.round(format.width * 0.15)}" rx="${Math.round(format.width * 0.03)}" fill="#10b981"/>
  <path d="M${Math.round(format.width * 0.13)} ${Math.round(format.height * 0.25)}l${Math.round(format.width * 0.045)} ${Math.round(format.height * 0.07)} ${Math.round(format.width * 0.045)}-${Math.round(format.height * 0.07)}v${Math.round(format.height * 0.13)}h-${Math.round(format.width * 0.032)}v-${Math.round(format.height * 0.08)}l-${Math.round(format.width * 0.013)} ${Math.round(format.height * 0.02)}v${Math.round(format.height * 0.06)}h-${Math.round(format.width * 0.032)}z" fill="white"/>
  <text x="${Math.round(format.width * 0.1)}" y="${Math.round(format.height * 0.46)}" fill="white" font-family="Arial, sans-serif" font-size="${Math.round(format.width * 0.075)}" font-weight="700">Moveroo</text>
  <text x="${Math.round(format.width * 0.1)}" y="${Math.round(format.height * 0.56)}" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="${Math.round(format.width * 0.032)}">Homes, vehicles and freight.</text>
  <text x="${Math.round(format.width * 0.1)}" y="${Math.round(format.height * 0.66)}" fill="#10b981" font-family="Arial, sans-serif" font-size="${Math.round(format.width * 0.022)}" letter-spacing="6">CAMPAIGN TEMPLATE</text>
</svg>`;

	await writeFile(join(socialDirectory, `moveroo-${format.name}-template.svg`), svg);
}

console.log("Generated Moveroo Brand Kit route and social template assets.");
