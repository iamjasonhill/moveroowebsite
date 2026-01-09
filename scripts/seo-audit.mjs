#!/usr/bin/env node
/* eslint-env node */
/**
 * SEO Audit Script for Moveroo
 *
 * A comprehensive SEO auditing tool using the technical.again.com.au API.
 * Supports both single-page audits and full site crawls.
 *
 * COMMANDS:
 *   npm run seo:audit page [url]     - Audit a single page (quick analysis)
 *   npm run seo:audit crawl [domain] - Full site crawl with Health Score
 *   npm run seo:audit status [id]    - Check status of a crawl by ID
 *   npm run seo:audit list           - List all previous crawls
 *   npm run seo:audit help           - Show this help message
 *
 * EXAMPLES:
 *   npm run seo:audit page https://moveroo.com.au/contact/
 *   npm run seo:audit crawl https://moveroo.com.au
 *   npm run seo:audit status 17
 *   npm run seo:audit list
 *
 * ISSUE TYPES DETECTED BY CRAWL:
 *   • orphan_page          - Pages with no incoming internal links
 *                            Fix: Add internal links from navigation, footer, or content
 *   • sitemap_orphan       - Pages in sitemap but not found by crawler
 *                            Fix: Remove from sitemap or ensure pages exist/are accessible
 *   • missing_from_sitemap - Crawled pages not in sitemap
 *                            Fix: Add important pages to sitemap
 *   • duplicate_title      - Multiple pages with same <title>
 *                            Fix: Make each page title unique and descriptive
 *   • duplicate_description- Multiple pages with same meta description
 *                            Fix: Write unique descriptions for each page
 *
 * HEALTH SCORE:
 *   🟢 80-100  Excellent - Minor improvements possible
 *   🟡 60-79   Good - Some issues to address
 *   🟠 40-59   Fair - Several issues need attention
 *   🔴 0-39    Poor - Significant SEO problems
 *
 * SETUP:
 *   1. Get your API token at: https://technical.again.com.au/api-access
 *   2. Add to .env file: SEO_AUDITOR_TOKEN=your_token_here
 */

import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env") });

const API_BASE = "https://technical.again.com.au/api";
const TOKEN = process.env.SEO_AUDITOR_TOKEN;
const DEFAULT_DOMAIN = "https://moveroo.com.au";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function checkToken() {
	if (!TOKEN) {
		console.error("❌ SEO_AUDITOR_TOKEN not found in .env file");
		console.error("   Get your token at: https://technical.again.com.au/api-access");
		process.exit(1);
	}
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

function getScoreEmoji(score) {
	if (score >= 80) return "🟢";
	if (score >= 60) return "🟡";
	if (score >= 40) return "🟠";
	return "🔴";
}

async function apiRequest(endpoint, options = {}) {
	const response = await fetch(`${API_BASE}${endpoint}`, {
		...options,
		headers: {
			Authorization: `Bearer ${TOKEN}`,
			"Content-Type": "application/json",
			...options.headers,
		},
	});

	if (!response.ok) {
		const error = await response.text();
		throw new Error(`API Error: ${response.status} - ${error}`);
	}

	return response.json();
}

// ─────────────────────────────────────────────────────────────────────────────
// Single Page Audit
// ─────────────────────────────────────────────────────────────────────────────

async function startPageAudit(url) {
	return apiRequest("/audit", {
		method: "POST",
		body: JSON.stringify({ url }),
	});
}

async function checkPageAuditStatus(auditId) {
	return apiRequest(`/audit/${auditId}`);
}

function displayPageResults(results) {
	console.log("");
	console.log("━".repeat(60));
	console.log("📊 SINGLE PAGE AUDIT RESULTS");
	console.log("━".repeat(60));
	console.log("");

	const score = results.overall_score;
	console.log(`${getScoreEmoji(score)} Overall Score: ${score}/100`);
	console.log("");

	if (results.summary) {
		console.log("📝 Summary:");
		console.log(`   ${results.summary}`);
		console.log("");
	}

	if (results.action_items && results.action_items.length > 0) {
		console.log("🎯 ACTION ITEMS:");
		console.log("─".repeat(60));

		results.action_items.forEach((item) => {
			console.log("");
			if (item.category) {
				console.log(`📂 ${item.category.toUpperCase()}`);
			}

			if (item.issues && Array.isArray(item.issues)) {
				item.issues.forEach((issue) => {
					const priorityEmoji =
						issue.priority === "high" ? "🔴" : issue.priority === "medium" ? "🟡" : "🟢";
					console.log(`   ${priorityEmoji} ${issue.title || issue.description || issue}`);
					if (issue.remediation) {
						console.log(`      💡 Fix: ${issue.remediation}`);
					}
				});
			} else if (typeof item === "string") {
				console.log(`   • ${item}`);
			} else {
				console.log(`   • ${JSON.stringify(item)}`);
			}
		});
	}

	console.log("");
	console.log("━".repeat(60));
}

async function runPageAudit(url) {
	console.log("🔍 Moveroo SEO Auditor - Single Page");
	console.log("━".repeat(60));
	console.log(`📍 Target: ${url}`);
	console.log("");

	console.log("🚀 Starting page audit...");
	const { audit_id } = await startPageAudit(url);
	console.log(`   Audit ID: ${audit_id}`);
	console.log("");

	console.log("⏳ Waiting for results...");
	let attempts = 0;
	const maxAttempts = 60;

	while (attempts < maxAttempts) {
		const status = await checkPageAuditStatus(audit_id);

		if (status.status === "pending" || status.status === "running") {
			const progress = status.progress || "Processing...";
			process.stdout.write(`\r   ${progress}                    `);
			await sleep(5000);
			attempts++;
		} else {
			process.stdout.write("\r   Done!                              \n");
			displayPageResults(status);
			return;
		}
	}

	console.error("");
	console.error("⏰ Audit timed out. Check manually at:");
	console.error(`   ${API_BASE}/audit/${audit_id}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Full Site Crawl
// ─────────────────────────────────────────────────────────────────────────────

async function startCrawl(domain, depth = 5, limit = 100) {
	return apiRequest("/crawls", {
		method: "POST",
		body: JSON.stringify({ domain, depth, limit }),
	});
}

async function getCrawlStatus(crawlId) {
	const response = await apiRequest(`/crawls/${crawlId}`);
	return response.data || response;
}

async function listCrawls() {
	return apiRequest("/crawls");
}

const ISSUE_EXPLANATIONS = {
	orphan_page: {
		icon: "🔗",
		title: "Orphan Pages",
		description: "Pages with no incoming internal links - hard for search engines to discover",
		fix: "Add internal links from navigation, footer, or relevant content pages",
	},
	sitemap_orphan: {
		icon: "🗺️",
		title: "Sitemap Orphans",
		description: "Pages listed in sitemap but not found by the crawler",
		fix: "Remove non-existent pages from sitemap, or ensure they exist and are accessible",
	},
	missing_from_sitemap: {
		icon: "📄",
		title: "Missing from Sitemap",
		description: "Crawled pages that are not included in the sitemap",
		fix: "Add important pages to your sitemap for better indexing",
	},
	duplicate_title: {
		icon: "📑",
		title: "Duplicate Titles",
		description: "Multiple pages share the same <title> tag",
		fix: "Write unique, descriptive titles for each page",
	},
	duplicate_description: {
		icon: "📝",
		title: "Duplicate Descriptions",
		description: "Multiple pages share the same meta description",
		fix: "Write unique meta descriptions for each page",
	},
};

function displayCrawlResults(crawl) {
	console.log("");
	console.log("━".repeat(60));
	console.log("📊 FULL SITE CRAWL RESULTS");
	console.log("━".repeat(60));
	console.log("");

	console.log(`🌐 Domain: ${crawl.domain}`);
	console.log(`📋 Status: ${crawl.status}`);

	if (crawl.progress) {
		console.log(`📈 Progress: ${crawl.progress.processed}/${crawl.progress.total} pages processed`);
		if (crawl.progress.failed) {
			console.log(`   ⚠️  Failed: ${crawl.progress.failed} pages`);
		}
	}

	if (crawl.score !== null && crawl.score !== undefined) {
		console.log("");
		console.log(`${getScoreEmoji(crawl.score)} Health Score: ${crawl.score}/100`);
	}

	console.log(`🔍 Issues Found: ${crawl.issues_count || 0} types`);
	console.log("");

	if (crawl.issues && crawl.issues.length > 0) {
		console.log("🎯 ISSUES TO ADDRESS:");
		console.log("─".repeat(60));

		crawl.issues.forEach((issue) => {
			const info = ISSUE_EXPLANATIONS[issue.type] || {
				icon: "⚠️",
				title: issue.type,
				description: "",
				fix: "",
			};

			console.log("");
			console.log(`${info.icon} ${info.title} (${issue.count} found)`);
			console.log(`   ${issue.message}`);

			if (info.fix) {
				console.log(`   💡 Fix: ${info.fix}`);
			}

			if (issue.data && issue.data.length > 0) {
				console.log("   📍 Affected URLs:");
				issue.data.slice(0, 10).forEach((url) => {
					console.log(`      • ${url}`);
				});
				if (issue.data.length > 10) {
					console.log(`      ... and ${issue.data.length - 10} more`);
				}
			}
		});
	} else {
		console.log("✅ No issues detected! Your site looks great.");
	}

	if (crawl.timestamps) {
		console.log("");
		console.log("─".repeat(60));
		console.log(`⏱️  Started: ${new Date(crawl.timestamps.created_at).toLocaleString()}`);
		if (crawl.timestamps.completed_at) {
			console.log(`✅ Completed: ${new Date(crawl.timestamps.completed_at).toLocaleString()}`);
		}
	}

	console.log("");
	console.log("━".repeat(60));
}

async function runCrawl(domain) {
	console.log("🔍 Moveroo SEO Auditor - Full Site Crawl");
	console.log("━".repeat(60));
	console.log(`🌐 Domain: ${domain}`);
	console.log("");

	console.log("🚀 Starting site crawl...");
	const response = await startCrawl(domain);
	const crawlId = response.data?.id || response.id;
	console.log(`   Crawl ID: ${crawlId}`);
	console.log("");

	console.log("⏳ Crawling site (this may take a few minutes)...");
	let attempts = 0;
	const maxAttempts = 120; // 10 minutes max

	while (attempts < maxAttempts) {
		const crawl = await getCrawlStatus(crawlId);

		if (crawl.status === "pending" || crawl.status === "running") {
			const progress = crawl.progress
				? `${crawl.progress.processed}/${crawl.progress.total} pages`
				: "Starting...";
			process.stdout.write(`\r   ${progress}                    `);
			await sleep(5000);
			attempts++;
		} else {
			process.stdout.write("\r   Done!                              \n");
			displayCrawlResults(crawl);
			return;
		}
	}

	console.error("");
	console.error("⏰ Crawl timed out. Check status with:");
	console.error(`   npm run seo:audit status ${crawlId}`);
}

async function checkCrawlStatus(crawlId) {
	console.log("🔍 Moveroo SEO Auditor - Crawl Status");
	console.log("━".repeat(60));
	console.log(`📋 Crawl ID: ${crawlId}`);
	console.log("");

	const crawl = await getCrawlStatus(crawlId);
	displayCrawlResults(crawl);
}

async function showCrawlList() {
	console.log("🔍 Moveroo SEO Auditor - Crawl History");
	console.log("━".repeat(60));
	console.log("");

	const response = await listCrawls();
	const crawls = response.data || response;

	if (!crawls || crawls.length === 0) {
		console.log("📭 No crawls found. Start one with:");
		console.log("   npm run seo:audit crawl https://moveroo.com.au");
		return;
	}

	console.log("ID    │ Score │ Status     │ Domain");
	console.log("──────┼───────┼────────────┼" + "─".repeat(40));

	crawls.forEach((crawl) => {
		const id = String(crawl.id).padEnd(5);
		const score =
			crawl.score !== null
				? `${getScoreEmoji(crawl.score)} ${String(crawl.score).padStart(3)}`
				: "  -  ";
		const status = crawl.status.padEnd(10);
		console.log(`${id} │ ${score} │ ${status} │ ${crawl.domain}`);
	});

	console.log("");
	console.log("💡 View details: npm run seo:audit status [ID]");
}

// ─────────────────────────────────────────────────────────────────────────────
// Help
// ─────────────────────────────────────────────────────────────────────────────

function showHelp() {
	console.log(`
🔍 Moveroo SEO Auditor
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMMANDS:
  page [url]      Audit a single page (quick analysis)
  crawl [domain]  Full site crawl with Health Score
  status [id]     Check status of a crawl by ID
  list            List all previous crawls
  help            Show this help message

EXAMPLES:
  npm run seo:audit page https://moveroo.com.au/contact/
  npm run seo:audit crawl https://moveroo.com.au
  npm run seo:audit status 17
  npm run seo:audit list

ISSUE TYPES DETECTED:
  🔗 orphan_page           Pages with no incoming internal links
  🗺️  sitemap_orphan        Pages in sitemap but not found by crawler
  📄 missing_from_sitemap  Crawled pages not in sitemap
  📑 duplicate_title       Multiple pages with same <title>
  📝 duplicate_description Multiple pages with same meta description

HEALTH SCORE:
  🟢 80-100  Excellent
  🟡 60-79   Good
  🟠 40-59   Fair
  🔴 0-39    Poor

SETUP:
  1. Get token at: https://technical.again.com.au/api-access
  2. Add to .env: SEO_AUDITOR_TOKEN=your_token_here
`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
	const command = process.argv[2] || "help";
	const arg = process.argv[3];

	try {
		switch (command) {
			case "page":
				checkToken();
				await runPageAudit(arg || DEFAULT_DOMAIN);
				break;

			case "crawl":
				checkToken();
				await runCrawl(arg || DEFAULT_DOMAIN);
				break;

			case "status":
				if (!arg) {
					console.error("❌ Please provide a crawl ID");
					console.error("   Usage: npm run seo:audit status [ID]");
					process.exit(1);
				}
				checkToken();
				await checkCrawlStatus(arg);
				break;

			case "list":
				checkToken();
				await showCrawlList();
				break;

			case "help":
			case "--help":
			case "-h":
				showHelp();
				break;

			default:
				// Legacy: if command looks like a URL, treat as page audit
				if (command.startsWith("http")) {
					checkToken();
					await runPageAudit(command);
				} else {
					console.error(`❌ Unknown command: ${command}`);
					showHelp();
					process.exit(1);
				}
		}
	} catch (error) {
		console.error("");
		console.error("❌ Error:", error.message);
		process.exit(1);
	}
}

main();
