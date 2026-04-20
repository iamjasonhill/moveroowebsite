export interface TrackedLink {
	href: string;
	eventName: string;
}

function normalizeHref(href: string) {
	return href.replace(/\/$/, "");
}

export function getTrackedEventName(href: string, trackedLinks: readonly TrackedLink[] = []) {
	const normalizedHref = normalizeHref(href);
	return trackedLinks.find((item) => normalizeHref(item.href) === normalizedHref)?.eventName;
}

export function getTrackedOnClick(href: string, trackedLinks: readonly TrackedLink[] = []) {
	const eventName = getTrackedEventName(href, trackedLinks);
	if (!eventName) {
		return undefined;
	}

	return `window.mmTrack && window.mmTrack('${eventName}');`;
}
