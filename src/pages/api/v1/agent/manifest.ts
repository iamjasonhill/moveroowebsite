import type { APIRoute } from "astro";
import { site } from "../../../../config/site";

export const prerender = false;

const issuedAt = "2026-05-29";
const issueTracker = "https://github.com/moveroo/moveroocombined-analysis/issues/new";

const manifest = {
	schemaVersion: "1.0",
	name: "Moveroo public agent manifest",
	description:
		"Read-only discovery document for agents inspecting the public Moveroo website surface.",
	issuedAt,
	site: {
		name: site.name,
		url: site.url,
		framework: "Astro",
		deployTarget: "Vercel",
	},
	ownership: {
		websiteRepository: "iamjasonhill/moveroowebsite",
		requestRepository: "moveroo/moveroocombined-analysis",
	},
	exposedSurfaces: {
		publicContent: [
			{
				path: "/",
				purpose: "Main Moveroo website homepage.",
			},
			{
				path: "/services/",
				purpose: "Service overview and quote handoff routes.",
			},
			{
				path: "/moving-cars/",
				purpose: "Vehicle transport service page.",
			},
			{
				path: "/interstate-car-transport/",
				purpose: "Interstate vehicle transport hub.",
			},
			{
				path: "/door-to-door-vs-depot-car-transport/",
				purpose: "Vehicle transport handover comparison page.",
			},
			{
				path: "/non-running-car-transport/",
				purpose: "Non-running and non-drivable car transport support page.",
			},
			{
				path: "/household-removals/",
				purpose: "Household removals service page.",
			},
			{
				path: "/interstate-removalists/",
				purpose: "Interstate removals service hub.",
			},
			{
				path: "/backloading-removals/",
				purpose: "Backloading removals service page.",
			},
			{
				path: "/removals-and-storage/",
				purpose: "Removals and storage service page.",
			},
			{
				path: "/household-vehicle-relocation/",
				purpose: "Combined household and vehicle relocation page.",
			},
			{
				path: "/how-moveroo-protects-your-move/",
				purpose: "Trust, process and move-protection explainer.",
			},
			{
				path: "https://quotes.moveroo.com.au/contact",
				purpose: "Canonical customer contact workspace.",
			},
			{
				path: "/cancellation/",
				purpose: "Cancellation policy and approved contact-workspace handoff.",
			},
			{
				path: "/terms-of-use/",
				purpose: "Website terms.",
			},
			{
				path: "/terms-and-conditions-transport/",
				purpose: "Transport service terms.",
			},
			{
				path: "/privacy-policy/",
				purpose: "Privacy policy.",
			},
		],
		discoveryFiles: [
			{
				path: "/sitemap-index.xml",
				purpose: "Canonical XML sitemap index.",
			},
			{
				path: "/sitemap.xml",
				purpose: "Permanent redirect to /sitemap-index.xml.",
			},
			{
				path: "/robots.txt",
				purpose: "Crawler access policy.",
			},
			{
				path: "/llms.txt",
				purpose: "LLM-oriented site summary.",
			},
			{
				path: "/.well-known/agent-skills/index.json",
				purpose: "Well-known Agent Skills discovery index.",
			},
			{
				path: "/.well-known/ai-catalog.json",
				purpose: "Agent-readable resource catalog.",
			},
			{
				path: "/okf/index.md",
				purpose: "Open Knowledge Format markdown index.",
			},
			{
				path: "/rss.xml",
				purpose: "RSS feed.",
			},
			{
				path: "/manifest.json",
				purpose: "Web app manifest.",
			},
		],
		apis: [
			{
				method: "GET",
				path: "/api/v1/agent/manifest",
				purpose: "Agent-readable manifest for discovering exposed surfaces.",
				authentication: "none",
				canonicalPath: "/api/v1/agent/manifest/",
			},
		],
		externalHandoffs: [
			{
				label: "Household quote",
				url: site.destinations.householdQuote,
				quoteType: "household",
				publicAgentApi: {
					method: "POST",
					url: "https://quotes.moveroo.com.au/api/v1/household-quotes/assistant/submit",
					hostAware: true,
					requiresTenant: false,
					requiresCustomerConsent: true,
					capabilityManifest: "https://quotes.moveroo.com.au/quote-capability.json",
					humanGuide: "https://quotes.moveroo.com.au/agents",
				},
			},
			{
				label: "Vehicle quote",
				url: site.destinations.vehicleQuote,
				quoteType: "vehicle",
				publicAgentApi: null,
				capabilityManifest: "https://quotes.moveroo.com.au/quote-capability.json",
				humanGuide: "https://quotes.moveroo.com.au/agents",
			},
			{
				label: "Contact workspace",
				url: site.destinations.contactWorkspace,
				humanGuide: "https://quotes.moveroo.com.au/agents",
			},
		],
	},
	notExposed: [
		"Production credentials or secrets.",
		"Internal provider-vetting thresholds, restriction logic or incident records.",
		"Admin dashboards, quote-system internals or customer records.",
		"Write APIs other than documented customer-facing form submissions.",
	],
	requestAdditionalExposure: {
		instruction:
			"If an agent needs another endpoint, data field or operational surface exposed, file a focused GitHub issue before assuming it exists.",
		issueTracker,
		issueTemplate: {
			titlePrefix: "Agent exposure request: ",
			requiredSections: [
				"Requested surface or data",
				"Use case",
				"Read/write level needed",
				"Customer or operational risk",
				"Suggested safe response shape",
			],
		},
	},
};

const headers = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
	"Cache-Control": "public, max-age=300, must-revalidate",
	"Content-Type": "application/json; charset=utf-8",
};

export const GET: APIRoute = () =>
	new Response(JSON.stringify(manifest, null, 2), {
		headers,
	});

export const OPTIONS: APIRoute = () =>
	new Response(null, {
		status: 204,
		headers,
	});
