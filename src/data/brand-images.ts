export type BrandImageLane = "household" | "vehicle" | "specialty";

export const brandImages: Record<BrandImageLane, { src: string; alt: string }> = {
	household: {
		src: "/brand/routes/household.webp",
		alt: "Moveroo household move planning visual with route grid and moving service details.",
	},
	vehicle: {
		src: "/brand/routes/vehicle.webp",
		alt: "Moveroo vehicle transport planning visual with route grid and car transport details.",
	},
	specialty: {
		src: "/brand/routes/specialty.webp",
		alt: "Moveroo combined move planning visual for household, vehicle and freight coordination.",
	},
};

export function brandImageLaneForServiceLane(lane: string): BrandImageLane {
	if (lane === "vehicle") {
		return "vehicle";
	}

	if (lane === "combined") {
		return "specialty";
	}

	return "household";
}
