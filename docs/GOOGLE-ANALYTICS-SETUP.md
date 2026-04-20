# Google Analytics (GA4) Setup

This project now loads **Google Analytics 4** through the shared analytics wrapper, using the same provider contract the fleet starter expects.

## Adding or changing the GA measurement ID

### Option 1: Environment variable (recommended)

1. Get your GA4 **Measurement ID** from [Google Analytics](https://analytics.google.com/) (Admin → Data Streams → your web stream). It looks like `G-XXXXXXXXXX`.

2. In the project root, create or edit `.env` and set:

   ```env
   PUBLIC_ANALYTICS_ENABLED=true
   PUBLIC_ANALYTICS_PROVIDER=ga4
   PUBLIC_ANALYTICS_CONFIG={"measurement_id":"G-XXXXXXXXXX"}
   ```

   Optional GA-specific overrides still exist for compatibility:

   ```env
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   PUBLIC_GA_TAG_URL=https://www.googletagmanager.com/gtag/js
   PUBLIC_GA_SEND_PAGE_VIEW=true
   PUBLIC_GA_ANONYMIZE_IP=false
   ```

3. For production (e.g. Vercel), set the same values in your hosting dashboard so they’re available at build time.

4. Rebuild and deploy. The layout will load the gtag script with your ID and the config script will use it.

- **To disable GA** (e.g. for a staging site), set:
  ```env
  PUBLIC_ANALYTICS_ENABLED=false
  ```
  The analytics wrapper will not render GA.

### Option 2: Default in code

If you do not set the generic analytics contract, the wrapper falls back to the built-in Moveroo GA4 measurement ID `G-4DN533CFGK`.

To change the default for this repo:

1. **Analytics wrapper** – In `src/components/analytics/Analytics.astro`, update the fallback:

   ```ts
   measurement_id: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "G-4DN533CFGK";
   ```

   Replace `"G-4DN533CFGK"` with your ID.

## Where it’s wired

- **Analytics wrapper:** `src/components/analytics/Analytics.astro`
  - Reads the generic analytics contract first.
  - Falls back to `PUBLIC_GA_*` values if needed.
  - Falls back again to the built-in Moveroo GA4 measurement ID.
- **GA component:** `src/components/analytics/Ga4.astro`
  - Loads `https://www.googletagmanager.com/gtag/js?id=<ID>` directly.
  - Inlines the GA config script with the matching measurement ID.
  - Calls `gtag("config", gaId, gaConfig)` so data is sent for your measurement ID.

## Preconnect / DNS prefetch

The layout already includes:

- `preconnect` to `https://www.googletagmanager.com`
- `dns-prefetch` to `https://www.google-analytics.com` and `https://analytics.google.com`

No extra changes are needed for these when you add or change GA via the env or default ID.
