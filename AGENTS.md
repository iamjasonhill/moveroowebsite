# AGENTS.md

This repository allows trusted direct contributions from Jason, Konrad, and
their agents.

Konrad and agent-specific operating guidance lives in
`docs/KONRAD-CODEX-INSTRUCTIONS.md`.

## Core Rule

Direct pushes to `main` are allowed when the change is clear, scoped, and
verified.

Use a pull request when the intended change is uncertain, high risk, or benefits
from review before it lands.

Every direct-to-main change should:

1. inspect the current worktree before editing
2. keep the change scoped to the requested work
3. run relevant local checks where practical
4. commit with a clear message
5. push to `main`

## New Page Rule

Whenever a new public website page is being prepared, follow
`docs/NEW-PAGE-PRELAUNCH-WORKFLOW.md`.

In short: before launch, account for every installed Codex skill in a
pre-launch audit doc, then run the relevant local verification commands.

## Allowed Contribution Style

Konrad and his agent may:

- inspect the repository
- edit files on `main` or on a branch
- run relevant local checks
- commit and push directly to `main` when appropriate
- push a branch and open a pull request when review is useful

Konrad and his agent may not:

- change production credentials or secrets
- bypass review when Jason specifically requests a PR or approval gate
- force push or rewrite shared branch history without explicit approval

## Pull Request Expectations

When a pull request is used, it should:

- explain the problem being solved
- summarize the change clearly
- call out any risk areas
- include relevant verification steps

## Review Guidance

Jason may still request review for broad, sensitive, production-risk, or unclear
changes.

If the intended change is uncertain, prefer a smaller PR over a broad rewrite.
