// Google Analytics initialization
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

// Configure Google Analytics with proper cookie domain
// Use current hostname to avoid cookie domain mismatch warnings
const hostname = window.location.hostname;
const gaConfig = {
  cookie_domain: hostname === 'localhost' || hostname === '127.0.0.1' 
    ? hostname 
    : 'auto'
};

gtag("config", "G-4DN533CFGK", gaConfig);
