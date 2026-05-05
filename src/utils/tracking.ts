export interface TrackedLink {
	href: string;
	eventName: string;
	linkType?: string;
}

function normalizeHref(href: string) {
	return href.replace(/\/$/, "");
}

export function getTrackedEventName(href: string, trackedLinks: readonly TrackedLink[] = []) {
	const normalizedHref = normalizeHref(href);
	return trackedLinks.find((item) => normalizeHref(item.href) === normalizedHref)?.eventName;
}

export function getTrackedOnClick(href: string, trackedLinks: readonly TrackedLink[] = []) {
	const trackedLink = trackedLinks.find((item) => normalizeHref(item.href) === normalizeHref(href));
	if (!trackedLink) {
		return undefined;
	}

	return `this.dataset.mmTracked = 'true'; window.mmTrack && window.mmTrack('${trackedLink.eventName}', { link_url: '${href}', link_type: '${trackedLink.linkType || ""}', tracked_inline: 'true' });`;
}
