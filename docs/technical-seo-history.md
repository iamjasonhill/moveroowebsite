# Moveroo Technical SEO History

Use this file as the append-only log of technical SEO checks over time.
Each entry should record the date, commit, environment checked, headline scores, key findings, and what changed.

## 2026-03-23 14:35:22 AEST

- Commit: recorded in VCS history for the GA-only analytics cleanup pass
- Environment: local code review and config cleanup
- Scope: analytics stack review after the technical SEO sweep

### Findings

- the site was loading both GA4 and a second page analytics script from `againanalytics.vercel.app`
- GA4 was the preferred tracking platform to keep
- the extra script and its CSP allowances were no longer needed

### Fixes Landed In This Cycle

- removed the sitewide `againanalytics.vercel.app` script from the shared layout
- removed the matching `preconnect` hint
- tightened CSP so it no longer allows the removed analytics host
- updated the repo SEO baseline to record a GA4-only analytics stack

### Follow-Up

- optional: review GA4 consent mode if privacy requirements change
- optional: rerun Lighthouse on production after the next deploy if you want a fresh Best Practices baseline

## 2026-03-23 11:36:53 AEST

- Commit: `3bf292b`
- Environment: production
- Scope: homepage Lighthouse rerun after canonical, `robots.txt`, and CLS fixes

### Lighthouse Scores

- Mobile: `Performance 100`, `Accessibility 95`, `Best Practices 81`, `SEO 100`
- Desktop: `Performance 100`, `Accessibility 95`, `Best Practices 81`, `SEO 100`

### Key Metrics

- Mobile: `FCP 1.0s`, `LCP 1.0s`, `Speed Index 2.7s`, `TBT 0ms`, `CLS 0`
- Desktop: `FCP 0.4s`, `LCP 0.4s`, `Speed Index 1.1s`, `TBT 0ms`, `CLS 0`

### Findings

- trailing slash canonicals are now backed by redirect behavior
- `robots.txt` is now valid to Lighthouse
- homepage mobile CLS issue is resolved
- `Best Practices 81` remains because of Partytown-related deprecation warnings rather than a core crawl or metadata problem

### Fixes Landed In This Cycle

- enforced trailing slash handling in Astro and Vercel
- replaced the non-standard `LLMs.txt:` robots directive with a comment
- hid the lower-left homepage hero blur shape on small screens to remove the main CLS culprit

### Follow-Up

- optional: review Partytown and analytics overhead if performance optimisation becomes a product priority
- optional: run structured-data validation page by page
- optional: improve page-specific OG/share image coverage later
