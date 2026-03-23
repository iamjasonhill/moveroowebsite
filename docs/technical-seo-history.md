# Moveroo Technical SEO History

Use this file as the append-only log of technical SEO checks over time.
Each entry should record the date, commit, environment checked, headline scores, key findings, and what changed.

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
