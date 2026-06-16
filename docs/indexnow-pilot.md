# IndexNow Pilot

Date: 2026-06-17

SEO Champion tracking:

- Parent decision: `iamjasonhill/seo-champion-data-hub#81`
- Site-repo standard: `iamjasonhill/seo-champion-data-hub#86`
- SEO Champion audit/proof follow-up: `iamjasonhill/seo-champion-data-hub#87`
- Pilot issue: `iamjasonhill/seo-champion-data-hub#88`

## Position

This repository is the pilot for repo-owned IndexNow on `moveroo.com.au`.

Routine IndexNow belongs here, in the owning website repository and deployment
pipeline. SEO Champion should audit readiness/proof and recommend submissions;
it should not own routine submissions for this site.

No live submission should run without explicit approval.

## Environment

Set these in Vercel production only after the key has been generated and
approved:

```bash
INDEXNOW_KEY=indexnow-moveroo-<approved-random-value>
INDEXNOW_ENDPOINT=https://api.indexnow.org/indexnow
```

The key must:

- start with `indexnow-`
- be 8-128 characters
- contain only letters, numbers, and dashes
- never be committed to the repo

The build runs `scripts/indexnow-prepare-key.mjs` before `astro build`. When
`INDEXNOW_KEY` is present, it writes a public root key file:

```text
public/{INDEXNOW_KEY}.txt
```

Generated key files are ignored by git.

## Dry Run

Dry-run mode is the default and redacts key material in output.

Manual URL list:

```bash
npm run indexnow:dry-run -- --url=https://moveroo.com.au/
```

Reviewed URL file:

```bash
npm run indexnow:dry-run -- --file=/tmp/moveroo-indexnow-urls.txt
```

Changed Astro routes since a git ref:

```bash
npm run indexnow:dry-run -- --changed-since=origin/main
```

Write a local proof artifact:

```bash
npm run indexnow:dry-run -- \
  --url=https://moveroo.com.au/ \
  --trigger=manual_review \
  --write-proof
```

Generated proof files go under `indexnow-proofs/` and are ignored by git.

## Live Run

Live mode posts to the configured IndexNow endpoint.

Use live mode only after:

1. the production key file is publicly reachable
2. the URL list has been reviewed
3. preview, staging, API, noindex, non-canonical, and private URLs have been
   excluded
4. Jason has explicitly approved the live submission

Example, after approval:

```bash
npm run indexnow:submit -- \
  --url=https://moveroo.com.au/ \
  --trigger=manual_review \
  --write-proof
```

The live proof records:

- schema
- domain
- deployment ID when available
- commit when available
- submitted timestamp
- endpoint
- redacted key location
- dry-run/live mode
- trigger
- URL count
- SHA-256 hash of the normalized URL list
- HTTP status
- failure reason, if any

It does not store the raw key.

## Allowed Triggers

- `deploy_changed_urls`
- `migration_cutover`
- `critical_url_fix`
- `manual_review`

## URL Rules

URLs must:

- be `https`
- be on `moveroo.com.au`
- be canonical public URLs
- use trailing slash for normal page routes

The script blocks:

- other hosts
- non-HTTPS URLs
- `/api/` routes
- template routes

Operators must also avoid:

- preview and staging URLs
- noindex pages
- private/admin URLs
- old historical URLs that have not changed since IndexNow was enabled
- whole-site resubmission on every deploy

## First Pilot Plan

1. Keep this setup dry-run only until the Vercel production key is configured.
2. Pick a tiny URL set after the next real public content change.
3. Run dry-run mode and inspect the redacted payload.
4. Confirm the generated key file is reachable in production.
5. Ask for explicit approval before the first live submission.
6. Run live mode for the reviewed URL set only.
7. Attach or summarize the proof back to SEO Champion issue `#88`.
