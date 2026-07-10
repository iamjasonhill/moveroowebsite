# IndexNow Pilot

Date: 2026-06-17

Legacy SEO Champion tracking:

- Parent decision: `iamjasonhill/seo-champion-data-hub#81`
- Site-repo standard: `iamjasonhill/seo-champion-data-hub#86`
- SEO Champion audit/proof follow-up: `iamjasonhill/seo-champion-data-hub#87`
- Pilot issue: `iamjasonhill/seo-champion-data-hub#88`

## Position

This repository started as the pilot for repo-owned IndexNow on `moveroo.com.au`.
It now follows the fleet standard owned by Bossman.

Bossman owns the readiness registry, site manifests, and streaming submission
queue. This repository hosts the key file and preserves bounded dry-run and
explicit manual proof paths.

Normal production builds do not submit IndexNow URLs. Preview and local builds
also do not submit. Live submission remains a provider write and must run
through an approved Bossman workflow or receive explicit human approval.

## Environment

`INDEXNOW_ENDPOINT` may be set in Vercel production, but the default endpoint is
the fleet standard:

```bash
INDEXNOW_ENDPOINT=https://api.indexnow.org/indexnow
```

The Bossman-approved key is committed as a public root file:

```text
public/indexnow-moveroo-com-au-6bbd81d738ab734655fcc158.txt
```

The build runs `astro build` only. Bossman owns routine streaming submissions;
the repo scripts remain available for dry-run proof and explicitly approved
manual submissions.

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

Manual live mode should only be used after:

1. the production key file is publicly reachable
2. the URL list has been reviewed
3. preview, staging, API, noindex, non-canonical, and private URLs have been
   excluded

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

The script also avoids:

- preview and staging URLs
- noindex pages
- private/admin URLs
- old historical URLs that have not changed since IndexNow was enabled
- non-HTTPS URLs
- other hosts

## Bossman Verification

Bossman records this host as `submissionApproved=true`. After deployment, verify
readiness through Bossman's IndexNow readiness check. A verified key file plus
approved submission status should surface as `submit_ready`; that readiness does
not re-enable repo-side batch submission during builds.
