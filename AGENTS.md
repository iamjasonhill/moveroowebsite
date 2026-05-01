# AGENTS.md

This repository allows external contribution drafts from Konrad and his agent,
but all changes must flow through pull requests.

## Core Rule

Do not push directly to `main`.

Every non-trivial change must:

1. be made on a branch
2. be pushed to that branch
3. be opened as a pull request
4. wait for review before merge

## Allowed Contribution Style

Konrad and his agent may:

- inspect the repository
- edit files on a branch
- run relevant local checks
- push a branch
- open a pull request

Konrad and his agent may not:

- merge their own pull requests
- push directly to `main`
- bypass review
- change production credentials or secrets

## Pull Request Expectations

Each pull request should:

- explain the problem being solved
- summarize the change clearly
- call out any risk areas
- include relevant verification steps

## Review Gate

Jason reviews pull requests before merge.

If the intended change is uncertain, prefer a smaller PR over a broad rewrite.
