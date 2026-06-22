export const moverooPublicWebsiteSkill = `---
name: moveroo-public-website
description: Read-only guidance for agents inspecting Moveroo Australia public website content, quote handoffs, legal pages, and agent-readable resources.
---

# Moveroo Public Website

Use this skill when an agent needs to understand the public Moveroo website at https://moveroo.com.au.

## Boundaries

- This site is the public marketing and customer guidance surface for Moveroo Australia.
- Quote, booking, contact, provider application, and provider login actions live on linked quote and application systems.
- Do not infer customer records, quote prices, provider suitability, or operational decisions from this public site.
- Treat the owning repository and Bossman as the editable source-of-truth surfaces.

## Primary Discovery

- Read /llms.txt for the curated page map.
- Read /okf/index.md for the open knowledge summary.
- Read /.well-known/ai-catalog.json for the agent-readable resource catalog.
- Read /api/v1/agent/manifest/ for the public agent manifest.
- Read /sitemap-index.xml for crawlable public pages.

## Safe Actions

- Use public pages for service, legal, and support context.
- Use quote links only as handoff URLs.
- File a focused repo or Bossman issue when another data surface is needed.
`;

export const agentSkillEntries = [
	{
		name: "moveroo-public-website",
		type: "codex-skill",
		description:
			"Read-only guidance for agents inspecting Moveroo public website pages, quote handoffs, legal pages, and agent-readable resources.",
		url: "https://moveroo.com.au/.well-known/agent-skills/moveroo-public-website/SKILL.md",
		content: moverooPublicWebsiteSkill,
	},
] as const;
