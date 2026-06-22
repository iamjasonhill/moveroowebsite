import { createHash } from "node:crypto";
import type { APIRoute } from "astro";
import { agentSkillEntries } from "../../../data/agentSkills";

export const GET: APIRoute = () => {
	const entries = agentSkillEntries.map(({ content: _content, ...entry }) => ({
		...entry,
		sha256: createHash("sha256").update(_content).digest("hex"),
	}));

	return new Response(
		JSON.stringify(
			{
				$schema: "https://specification.website/schemas/agent-skills-index.json",
				schemaVersion: "1.0",
				site: "https://moveroo.com.au/",
				entries,
			},
			null,
			2
		),
		{
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Cache-Control": "public, max-age=300",
				"Content-Type": "application/json; charset=utf-8",
			},
		}
	);
};
