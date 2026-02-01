# Google Analytics (GA4) Setup

This project loads **Google Analytics 4** via [Partytown](https://partytown.builder.io/) so analytics run off the main thread and don’t block the page.

## Adding or changing the GA measurement ID

### Option 1: Environment variable (recommended)

1. Get your GA4 **Measurement ID** from [Google Analytics](https://analytics.google.com/) (Admin → Data Streams → your web stream). It looks like `G-XXXXXXXXXX`.

2. In the project root, create or edit `.env` and set:

   ```env
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. For production (e.g. Vercel), set the same variable in your hosting dashboard so it’s available at build time.

4. Rebuild and deploy. The layout will load the gtag script with your ID and the config script will use it.

- **To disable GA** (e.g. for a staging site), set:
  ```env
  PUBLIC_GA_MEASUREMENT_ID=
  ```
  Leave the value empty. The GA scripts will not be included.

### Option 2: Default in code

If you don’t set `PUBLIC_GA_MEASUREMENT_ID`, the layout uses the built-in default `G-4DN533CFGK` (Moveroo). So the current site works without any env.

To change the default for this repo:

1. **Layout** – In `src/layouts/Layout.astro`, update the fallback:

   ```ts
   const gaMeasurementId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "G-4DN533CFGK";
   ```

   Replace `"G-4DN533CFGK"` with your ID.

2. **Config script** – In `public/scripts/analytics.js`, update the fallback used when `window.__GA_MEASUREMENT_ID__` isn’t set:
   ```js
   const gaId = (typeof window !== "undefined" && window.__GA_MEASUREMENT_ID__) || "G-4DN533CFGK";
   ```
   Replace `"G-4DN533CFGK"` with the same ID.

## Where it’s wired

- **Layout:** `src/layouts/Layout.astro`
  - Reads `PUBLIC_GA_MEASUREMENT_ID` (or default).
  - Loads `https://www.googletagmanager.com/gtag/js?id=<ID>` via Partytown.
  - Inlines the GA config script (also Partytown) with `define:vars={{ gaId: gaMeasurementId }}` so the **worker** gets the correct ID (Partytown runs in a web worker; `window.__GA_MEASUREMENT_ID__` from the main page is not visible there).
  - That inline script does `gtag("config", gaId, gaConfig)` so data is sent for your measurement ID.
- **Legacy:** `public/scripts/analytics.js` is no longer loaded; the config lives in the layout so the Partytown worker receives the build-time ID.

## Preconnect / DNS prefetch

The layout already includes:

- `preconnect` to `https://www.googletagmanager.com`
- `dns-prefetch` to `https://www.google-analytics.com` and `https://analytics.google.com`

No extra changes are needed for these when you add or change GA via the env or default ID.
