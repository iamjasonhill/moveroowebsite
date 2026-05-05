export interface TrackedLink {
	href: string;
	eventName: string;
	linkType?: string;
	params?: Record<string, string>;
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

	const params = {
		...(trackedLink.params ?? {}),
		link_url: href,
		tracked_inline: "true",
		...(trackedLink.linkType ? { link_type: trackedLink.linkType } : {}),
	};

	return `this.dataset.mmTracked = 'true'; if (window.mmTrack) { var mmTrackedParams = ${JSON.stringify(params)}; mmTrackedParams.link_text = ((this.getAttribute('aria-label') || this.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 120)); mmTrackedParams.page_path = window.location.pathname; window.mmTrack(${JSON.stringify(trackedLink.eventName)}, mmTrackedParams); }`;
}
