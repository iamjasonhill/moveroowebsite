# Moveroo Redirect Map

## Source Of Truth

- machine-readable redirect inventory: `vercel.json`

## Current Redirect Estate

Current redirect groups include:

1. sitemap alias normalization
2. legacy contact and quote aliases into the active Moveroo quote system
3. legacy terms URL cleanup
4. merger/announcement cleanup for `moving-cars` related routes
5. host and protocol normalization to the canonical apex HTTPS domain

## Operational Note

Moveroo keeps redirect logic in `vercel.json` alongside security headers and cache policy. Treat that file as the live deployment contract, not a disposable hosting artifact.

## Verification Rule

When redirect work changes:

1. update `vercel.json`
2. verify the destination still reflects the intended Moveroo quote/contact system
3. run `npm run check:seo`
