export interface FAQItem {
	question: string;
	answer: string;
}

export const faqs: FAQItem[] = [
	{
		question: "How do I get a moving quote from Moveroo?",
		answer:
			"Choose the quote path that matches the main job. Use the household quote for home moves and the vehicle quote for car or motorcycle transport. If the move is mixed, contact us and we will point you the right way.",
	},
	{
		question: "What areas does Moveroo service in Australia?",
		answer:
			"Moveroo works across Australia, including metro, regional and interstate routes. If your move starts in one part of the country and ends in another, we can help plan it.",
	},
	{
		question: "How does Moveroo handle partner fit and cover questions?",
		answer:
			"We work with moving and transport partners matched to the job type, route, timing and service needs. Cover details depend on the service pathway and provider, and we can explain the available information before booking.",
	},
	{
		question: "How much does it cost to move house in Australia?",
		answer:
			"It depends on the route, timing, volume and service mix. The best way to price it is with a quote built around the actual job rather than a rough estimate.",
	},
	{
		question: "Can Moveroo help with vehicle transport?",
		answer:
			"Yes. Moveroo can help with cars, motorcycles, non-running vehicles and broader vehicle moves through the Moving Cars lane.",
	},
	{
		question: "How far in advance should I book my move?",
		answer:
			"Two to four weeks is a good guide for most moves. If your timing is tighter, still ask, because some routes can be arranged faster.",
	},
];
