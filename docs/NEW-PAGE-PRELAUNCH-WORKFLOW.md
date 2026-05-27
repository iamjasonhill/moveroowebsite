# New Page Pre-Launch Workflow

Use this workflow whenever Moveroo is preparing a new public website page.

## Required Rule

Before a new page goes live, run a review against all installed Codex skills.

The review does not mean every skill must produce a change. It means every installed skill must be accounted for as one of:

- applicable and directly checked
- tangentially relevant and checked for launch implications
- not applicable to this page, with no action needed

## Required Audit Record

Create a pre-launch audit document in `docs/` for each new page.

Recommended filename:

`docs/{PAGE-SLUG}-PRELAUNCH-SKILL-AUDIT.md`

The audit should include:

- page URL or planned slug
- draft file path
- launch recommendation
- changes made during the audit
- direct findings from applicable skills
- list of installed skills accounted for
- remaining cautions or approval gates
- final verification commands

## Minimum Pre-Live Checks

For every new page, check:

- human-sounding, customer-facing language before human review
- brand voice and copy quality
- factual/domain model accuracy
- claim and compliance risk
- SEO title, description, H1, canonical and indexability
- rendered schema where schema exists
- internal linking from relevant existing pages
- footer or sitemap inclusion where appropriate
- CTA clarity and analytics destination coverage
- mobile layout and horizontal overflow
- build, content and SEO checks

## Default Verification Commands

Run these unless the page type clearly requires more:

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run check:seo
npm.cmd run check:content
git diff --check
```

## Human Approval

Before asking for human approval, complete a customer-language pass across the page. Remove internal terms, robotic section labels, SEO-stuffed phrasing, vague business jargon, and copy that sounds like it was written for an operator rather than a customer.

Do not treat the skills sweep as deploy approval. Public pages still need final human review for tone, commercial fit, and any sensitive claims.
