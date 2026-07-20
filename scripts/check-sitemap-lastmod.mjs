import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { routeLastModified } from "../src/data/route-publication-dates.mjs";

const sitemapPath = resolve("dist/client/sitemap-0.xml");
const sitemap = await readFile(sitemapPath, "utf8");
const siteUrl = "https://moveroo.com.au";

const entryFor = (pathname) => {
	const url = new URL(pathname, siteUrl).href;
	return sitemap.match(new RegExp(`<url><loc>${url}</loc>(.*?)</url>`))?.[1] ?? null;
};

const treatmentPath = "/household-vehicle-relocation/";
const treatmentEntry = entryFor(treatmentPath);
const treatmentLastmod = routeLastModified[treatmentPath];
const controlEntry = entryFor("/door-to-door-vs-depot-car-transport/");

if (treatmentEntry === null || treatmentLastmod === undefined) {
	throw new Error("Treatment route is missing from the sitemap-lastmod contract.");
}

if (Number.isNaN(new Date(treatmentLastmod).valueOf()) || new Date(treatmentLastmod) > new Date()) {
	throw new Error("Treatment route must use a valid, non-future public modification timestamp.");
}

if (!treatmentEntry.includes(`<lastmod>${treatmentLastmod}</lastmod>`)) {
	throw new Error("Treatment route must publish its explicit public modification timestamp.");
}

if (controlEntry === null) {
	throw new Error("The unchanged control route must remain in the sitemap.");
}

if (controlEntry.includes("<lastmod>")) {
	throw new Error("The unchanged control route must not receive an invented sitemap lastmod.");
}

console.log("Sitemap lastmod contract passed.");
