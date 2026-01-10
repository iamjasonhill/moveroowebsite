# Crawl 35 - Fixes Applied

**Date:** January 10, 2026  
**Status:** ✅ Real issues fixed, ready for testing

---

## ✅ Fixes Applied

### 1. Author Attribution - ADDED ✅

**Files:**

- `src/pages/services.astro` - Added visible author byline and Person schema
- `src/pages/contact.astro` - Added visible author byline and Person schema

**Implementation:**

- ✅ Added visible byline: "Published by Moveroo Editorial Team on [date]"
- ✅ Added `author` property to WebPage structured data with Person schema
- ✅ Matches the pattern used on moving-cars page

**Status:** ✅ Complete

---

### 2. OG Image Issue - IDENTIFIED ⚠️

**Issue:** OG image returns 404 (image doesn't exist at `/og-image.png`)

**Analysis:**

- Image file doesn't exist in `public/` folder
- Image URL in meta tags points to `https://moveroo.com.au/og-image.png`
- This explains why crawler can't verify dimensions

**Action Required:**

- [ ] Create or add OG image file to `public/og-image.png`
- [ ] Ensure image is 1200x630px
- [ ] Verify image is accessible after deployment

**Status:** ⚠️ Identified - Needs image file (can't fix without actual image)

---

### 3. Heading Structure - REVIEWED ✅

**File:** `src/pages/services.astro`

**Analysis:**

- Heading structure appears correct: H1 → H2 (no skipping)
- Structure: H1 (main title) → H2 (section headings) → H2 (article cards)
- This is semantically correct

**Status:** ✅ Reviewed - Structure is correct (may be false positive)

---

## 📋 Summary of Changes

### ✅ Completed:

1. **Author Attribution** - Added to Services and Contact pages
   - Visible byline with date
   - Person schema in structured data

### ⚠️ Identified (Can't Fix Without Resources):

2. **OG Image** - Image file missing (404 error)
   - Need to add actual image file to `public/og-image.png`
   - Image should be 1200x630px

### ✅ Reviewed:

3. **Heading Structure** - Appears correct
   - May be a false positive from crawler

---

## 🧪 Testing

**Build Status:** ✅ Successful  
**Next Steps:**

1. Deploy changes
2. Run new crawl (crawl 36)
3. Verify author attribution is detected
4. Check for any new false positives

---

## 📝 Notes

- Author attribution now matches moving-cars page pattern
- OG image issue requires actual image file (not a code fix)
- Heading structure appears semantically correct

---

**Last Updated:** January 10, 2026  
**Status:** ✅ Fixes applied - Ready for deployment and testing
