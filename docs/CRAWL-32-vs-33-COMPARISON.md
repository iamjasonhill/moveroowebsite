# Crawl 32 vs Crawl 33 - Comparison

**Crawl 32 Date:** January 10, 2026, 10:22 AM  
**Crawl 33 Date:** January 10, 2026, 10:38 AM  
**Time Between Crawls:** ~16 minutes

---

## 📊 Overall Results Comparison

| Metric                   | Crawl 32 | Crawl 33 | Change  |
| ------------------------ | -------- | -------- | ------- |
| **Overall Health Score** | 93/100   | 93/100   | ➡️ Same |
| **Issues Found**         | 0 types  | 0 types  | ✅ Same |
| **Pages Processed**      | 9/9      | 9/9      | ✅ Same |

---

## 📄 Page-by-Page Score Comparison

| Page               | Crawl 32 | Crawl 33 | Change  | Status           |
| ------------------ | -------- | -------- | ------- | ---------------- |
| Homepage           | **98**   | **98**   | ➡️ Same | ✅ Maintained    |
| Contact            | **97**   | **97**   | ➡️ Same | ✅ Maintained    |
| Moving Cars        | **97**   | **97**   | ➡️ Same | ✅ Maintained    |
| Services           | **96**   | **97**   | **+1**  | ✅ **Improved**  |
| Terms of Use       | **96**   | **96**   | ➡️ Same | ✅ Maintained    |
| Terms & Conditions | **96**   | **96**   | ➡️ Same | ✅ Maintained    |
| Cancellation       | **96**   | **96**   | ➡️ Same | ✅ Maintained    |
| Privacy Policy     | **96**   | **95**   | **-1**  | ⚠️ Minor decline |
| Sitemap Index      | 62       | 62       | ➡️ Same | ✅ Maintained    |

**Average Score (excluding sitemap):** 96.9 → 96.9 (same) ✅

---

## 🎯 Improvements Detected

### Services Page: 96 → 97 (+1 point) ✅

**Possible improvements:**

- Question headings may have been detected (crawler update)
- FAQ/HowTo schema may have been recognized
- Content freshness may have been detected

---

## ⚠️ Changes Detected

### Privacy Policy: 96 → 95 (-1 point) ⚠️

**Issue Changes:**

- **Crawl 32:** "No question-based headings"
- **Crawl 33:** "Only 1 question heading(s)" ✅ (Actually an improvement - detected one!)

**Still showing:**

- Content Freshness warning (FALSE POSITIVE - we added it)
- FAQ & HowTo Schema warning (FALSE POSITIVE - we added FAQPage schema)

**Analysis:**

- The -1 point is likely due to category weighting changes
- Question headings detection improved (now detecting 1 instead of 0)
- Still showing false positives for implemented features

---

## 📊 Category Score Changes

### Privacy Policy:

| Category          | Crawl 32 | Crawl 33 | Change  |
| ----------------- | -------- | -------- | ------- |
| Meta Tags         | 94       | 94       | ➡️ Same |
| Content Quality   | 85       | 85       | ➡️ Same |
| Social Media      | 92       | 92       | ➡️ Same |
| Performance Hints | 95       | 95       | ➡️ Same |
| Structured Data   | 89       | 89       | ➡️ Same |
| **AI Readiness**  | 90       | 90       | ➡️ Same |

**Note:** Category scores are the same, but overall score decreased by 1 point. This suggests minor weighting changes in the crawler algorithm.

---

## 🔍 False Positives Still Present

### Privacy Policy (and other pages):

1. ⚠️ **Content Freshness** - Still showing as warning
   - **Reality:** We added `article:modified_time` meta tag and `dateModified` in structured data
   - **Status:** FALSE POSITIVE

2. ⚠️ **FAQ & HowTo Schema** - Still showing as warning
   - **Reality:** We added FAQPage schema with 2 Q&A pairs
   - **Status:** FALSE POSITIVE

3. ⚠️ **Question Headings** - Improved detection!
   - **Crawl 32:** "No question-based headings"
   - **Crawl 33:** "Only 1 question heading(s)" ✅
   - **Status:** Detection improved - now recognizing our question headings!

---

## ✅ Positive Changes

### Services Page:

- **Score improved:** 96 → 97 (+1 point)
- **Possible reasons:**
  - Question headings detected
  - FAQ/HowTo schema recognized
  - Content freshness detected
  - Or crawler algorithm adjustments

### Privacy Policy:

- **Question headings detection improved:**
  - Now detecting 1 question heading (was detecting 0)
  - This is actually progress, even though score went down slightly

---

## 📋 Remaining Issues (All Warnings, No Fails)

### All Pages:

1. ⚠️ **OG Image Dimensions** - Still can't verify
2. ⚠️ **Third-Party Scripts** - 2 detected (already optimized)
3. ⚠️ **Author Attribution** - Missing (optional)
4. ⚠️ **Reading Level** - Too difficult (optional for B2B)

### Privacy Policy (False Positives):

5. ⚠️ **Content Freshness** - FALSE POSITIVE (already implemented)
6. ⚠️ **FAQ & HowTo Schema** - FALSE POSITIVE (already implemented)

---

## 🎯 Summary

### ✅ Stable Performance:

- **Homepage:** Maintained 98/100 ✅
- **Most pages:** Maintained 96-97/100 ✅
- **Zero fails:** All content pages still have 0 fails ✅

### ✅ Improvements:

- **Services:** 96 → 97 (+1 point) ✅
- **Question headings detection:** Improved on Privacy Policy ✅

### ⚠️ Minor Changes:

- **Privacy Policy:** 96 → 95 (-1 point) - Likely due to algorithm weighting, not actual issues
- **False positives persist:** Content Freshness and FAQ schema still showing as warnings despite being implemented

---

## 📊 Overall Assessment

**Status:** ✅ **Stable and Excellent**

- Scores are very stable (96-98/100)
- Zero fails on all content pages
- Minor fluctuations are normal and likely due to:
  - Crawler algorithm adjustments
  - Category weighting changes
  - Detection improvements (question headings now being detected)

**The site is performing excellently!** The remaining warnings are mostly false positives or optional improvements.

---

**Last Updated:** January 10, 2026  
**Status:** ✅ Stable performance - Excellent scores maintained
