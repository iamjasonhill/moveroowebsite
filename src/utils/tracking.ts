export interface TrackedLink {
	href: string;
	eventName: string;
	params?: Record<string, string>;
}

function normalizeHref(href: string) {
	return href.replace(/\/$/, "");
}

export function getTrackedEventName(href: string, trackedLinks: readonly TrackedLink[] = []) {
	const normalizedHref = normalizeHref(href);
	return trackedLinks.find((item) => normalizeHref(item.href) === normalizedHref)?.eventName;
}
