#!/usr/bin/env node
/* eslint-env node */
/**
 * Check individual pages from a crawl
 * Usage: node scripts/check-crawl-pages.mjs [crawlId]
 */

import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync, mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env") });

const API_BASE = "https://technical.again.com.au/api";
const TOKEN = process.env.SEO_AUDITOR_TOKEN;

if (!TOKEN) {
	console.error("❌ SEO_AUDITOR_TOKEN not found in .env file");
	process.exit(1);
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

async function getCrawlStatus(crawlId) {
	const response = await apiRequest(`/crawls/${crawlId}`);
	return response.data || response;
}

async function getAuditDetails(auditId) {
	const response = await apiRequest(`/audit/${auditId}`);
	return response.data || response;
}

function getScoreEmoji(score) {
	if (score >= 80) return "🟢";
	if (score >= 60) return "🟡";
	if (score >= 40) return "🟠";
	return "🔴";
}

async function main() {
	const crawlId = process.argv[2] || "27";

	console.log("🔍 Fetching crawl details...");
	const crawl = await getCrawlStatus(crawlId);

	if (!crawl.audits || crawl.audits.length === 0) {
		console.log("❌ No audits found in crawl");
		return;
	}

	console.log(`\n📊 Found ${crawl.audits.length} pages in crawl ${crawlId}\n`);
	console.log("━".repeat(80));

	// Create output directory
	const outputDir = resolve(__dirname, `../crawl-${crawlId}-details`);
	mkdirSync(outputDir, { recursive: true });

	const summary = [];

	// Fetch details for each audit
	for (let i = 0; i < crawl.audits.length; i++) {
		const audit = crawl.audits[i];
		const auditId = audit.id || audit.audit_id;
		const url = audit.url;

		if (!auditId) {
			console.log(`\n⚠️  Skipping ${url} - no audit ID found`);
			continue;
		}

		console.log(`\n[${i + 1}/${crawl.audits.length}] 📄 ${url}`);
		console.log(`   Audit ID: ${auditId}`);

		try {
			const details = await getAuditDetails(auditId);

			const score = details.overall_score || details.score || 0;
			const emoji = getScoreEmoji(score);

			console.log(`   ${emoji} Score: ${score}/100`);

			// Count issues by severity
			let failCount = 0;
			let warningCount = 0;

			if (details.action_items) {
				details.action_items.forEach((item) => {
					if (item.issues) {
						item.issues.forEach((issue) => {
							if (issue.status === "fail") failCount++;
							if (issue.status === "warning") warningCount++;
						});
					}
				});
			}

			console.log(`   Issues: ${failCount} fails, ${warningCount} warnings`);

			// Show category scores if available
			if (details.category_scores) {
				const categories = Object.entries(details.category_scores)
					.map(([cat, score]) => `${getScoreEmoji(score)} ${cat}: ${score}`)
					.join(", ");
				console.log(`   Categories: ${categories}`);
			}

			// Save full details to file
			const filename = url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]/gi, "-") + `.json`;
			const filepath = resolve(outputDir, filename);
			writeFileSync(filepath, JSON.stringify(details, null, 2));
			console.log(`   💾 Saved to: crawl-${crawlId}-details/${filename}`);

			summary.push({
				url,
				auditId,
				score,
				failCount,
				warningCount,
				categoryScores: details.category_scores || {},
			});
		} catch (error) {
			console.error(`   ❌ Error: ${error.message}`);
			summary.push({
				url,
				auditId,
				error: error.message,
			});
		}

		console.log("─".repeat(80));
	}

	// Save summary
	const summaryPath = resolve(outputDir, "summary.json");
	writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

	// Display summary
	console.log("\n" + "=".repeat(80));
	console.log("📊 SUMMARY");
	console.log("=".repeat(80));
	console.log("\nScore │ Fails │ Warnings │ URL");
	console.log("──────┼───────┼──────────┼" + "─".repeat(50));

	summary
		.sort((a, b) => (a.score || 0) - (b.score || 0))
		.forEach((item) => {
			if (item.error) {
				console.log(`ERROR │       │          │ ${item.url}`);
			} else {
				const scoreStr = String(item.score || 0).padStart(3);
				const failStr = String(item.failCount || 0).padStart(5);
				const warnStr = String(item.warningCount || 0).padStart(8);
				const emoji = getScoreEmoji(item.score || 0);
				const url = item.url.replace(/^https?:\/\/(www\.)?/, "");
				console.log(`${emoji} ${scoreStr} │ ${failStr} │ ${warnStr} │ ${url}`);
			}
		});

	console.log(`\n💾 Full details saved to: crawl-${crawlId}-details/`);
	console.log(`📄 Summary saved to: crawl-${crawlId}-details/summary.json`);
}

main().catch(console.error);
