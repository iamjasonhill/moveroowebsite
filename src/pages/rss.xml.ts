import rss from "@astrojs/rss";
import { site } from "../config/site";

const items = [
	{
		title: "Moveroo Australia",
		description: "Nationwide moving, vehicle transport, and quote guidance from Moveroo.",
		link: "/",
	},
	{
		title: "Services",
		description:
			"Explore household moving, vehicle transport, and specialist coordination services.",
		link: "/services/",
	},
	{
		title: "Moving Cars",
		description:
			"Vehicle transport guidance, quote flow, and delivery planning for moving cars with Moveroo.",
		link: "/moving-cars/",
	},
	{
		title: "Contact",
		description: "Contact pathways for Moveroo quote support and planning help.",
		link: site.destinations.contactPage,
	},
];

export function GET(context: { site?: string | URL }) {
	return rss({
		title: "Moveroo Australia Updates",
		description: "Moveroo service guides, quote pathways, and transport planning content.",
		site: context.site ?? "https://moveroo.com.au",
		items,
	});
}
