import rss from "@astrojs/rss";

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
		title: "Household Removals",
		description:
			"Household removals guidance for local, regional and interstate moves coordinated by Moveroo.",
		link: "/household-removals/",
	},
	{
		title: "Moving Cars",
		description:
			"Vehicle transport guidance, quote flow, and delivery planning for moving cars with Moveroo.",
		link: "/moving-cars/",
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
