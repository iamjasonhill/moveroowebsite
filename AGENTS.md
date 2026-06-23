# AGENTS.md

## Bossman First

First step: ask Bossman for current site truth, standards, Fleet Guards, evidence, actions, and next safe actions. Do not rely on local repo assumptions.

Run this before touching controlled site files:

```sh
/Users/jasonhill/Projects/Systems/bossman-laravel-v2/scripts/bossman-site-context
```

If Bossman cannot resolve the site, evidence, standards, Fleet Guards, and repo mapping, stop and fix the Bossman record or manifest before editing this repo.

Before finishing controlled site work, answer Bossman's repo handoff checklist:

- Did this work add, update, or satisfy a Fleet Guard?
- Did this work change public site output?
- If public output changed for SEO, content, conversion, brand, trust, technical health, or agentic visibility, was a Site Improvement Experiment created or attached?
- Was baseline evidence captured or explicitly marked missing?

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
