/* eslint-env browser */
/* global window, dataLayer */

// Google Analytics initialization
window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());

// Configure Google Analytics with proper cookie domain
// Use current hostname to avoid cookie domain mismatch warnings
// Measurement ID: set window.__GA_MEASUREMENT_ID__ from layout, or use PUBLIC_GA_MEASUREMENT_ID at build
const gaId = (typeof window !== "undefined" && window.__GA_MEASUREMENT_ID__) || "G-4DN533CFGK";
const hostname = window.location.hostname;
const gaConfig = {
	cookie_domain: hostname === "localhost" || hostname === "127.0.0.1" ? hostname : "auto",
};

gtag("config", gaId, gaConfig);
