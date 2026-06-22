import type { APIRoute } from "astro";
import { moverooPublicWebsiteSkill } from "../../../../data/agentSkills";

export const GET: APIRoute = () =>
	new Response(moverooPublicWebsiteSkill, {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Cache-Control": "public, max-age=300",
			"Content-Type": "text/markdown; charset=utf-8",
		},
	});
