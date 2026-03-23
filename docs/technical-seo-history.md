# Moveroo Technical SEO History

Use this file as the append-only log of technical SEO checks over time.
Each entry should record the date, commit, environment checked, headline scores, key findings, and what changed.

## 2026-03-23 14:53:23 AEST

- Commit: `22dffe7`
- Environment: production
- Scope: Lighthouse rerun after switching GA from Partytown to the standard direct Google tag

### Lighthouse Scores

- Mobile: `Performance 88`, `Accessibility 95`, `Best Practices 100`, `SEO 100`
- Desktop: `Performance 100`, `Accessibility 95`, `Best Practices 100`, `SEO 100`

### Key Metrics

- Mobile: `FCP 1.2s`, `LCP 3.6s`, `Speed Index 4.0s`, `TBT 30ms`, `CLS 0`
- Desktop: `FCP 0.5s`, `LCP 0.5s`, `Speed Index 0.6s`, `TBT 0ms`, `CLS 0`

### Findings

- the Partytown deprecation warnings are gone
- Lighthouse `Best Practices` is now `100` on both mobile and desktop
- the GA implementation is now simpler and more standard
- mobile performance dipped versus the earlier Partytown run, even though SEO and Best Practices improved

### Fixes Landed In This Cycle

- removed the Partytown integration from Astro
- removed the Partytown package from the repo
- switched GA4 to the standard direct Google tag
- updated the repo analytics and SEO docs to match the new setup

### Follow-Up

- optional: monitor whether the lower mobile performance score is stable across repeated runs
- optional: review image and script loading if mobile Lighthouse performance becomes the next priority

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
