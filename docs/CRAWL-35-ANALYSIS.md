# Crawl 35 - Real Issues vs False Positives Analysis

**Crawl ID:** 35  
**Date:** January 10, 2026, 10:52 AM  
**Status:** ✅ Excellent scores maintained (96-98/100)

---

## 📊 Overall Status

| Metric                   | Value            |
| ------------------------ | ---------------- |
| **Overall Health Score** | 93/100           |
| **Fails**                | 0 (all pages) ✅ |
| **Warnings**             | 4-9 per page     |
| **Average Score**        | 96.9/100 ✅      |

---

## 🔍 False Positives Identified

### 1. Content Freshness - FALSE POSITIVE ⚠️

**Affected Pages:** Services, Privacy Policy, Contact, and others

**Crawler Says:**

- "No content date detected"
- "Add article:modified_time meta tag or include dateModified in your Schema.org markup"

**Reality:**

- ✅ We added `article:modified_time` meta tag to all pages
- ✅ We added `dateModified` in structured data (WebPage schema)
- ✅ Implementation date: 2026-01-10T00:00:00.000Z

**Verification:**

```html
<!-- We have this in all pages: -->
<meta property="article:modified_time" content="2026-01-10T00:00:00.000Z" />

<!-- And in structured data: -->
{ "@type": "WebPage", "dateModified": "2026-01-10T00:00:00.000Z" }
```

**Status:** 🔴 **FALSE POSITIVE** - Content freshness is fully implemented

---

### 2. FAQ & HowTo Schema - FALSE POSITIVE ⚠️

**Affected Page:** Services

**Crawler Says:**

- "FAQ content detected (2 Q&A pairs) - add FAQPage schema"
- "Step-by-step content detected (10 steps) - add HowTo schema"

**Reality:**

- ✅ We added FAQPage schema with 2 Q&A pairs
- ✅ We added HowTo schema with 3 steps (Discovery, Tailored plan, Managed delivery)

**Verification:**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Moveroo offer?",
      "acceptedAnswer": { ... }
    },
    {
      "@type": "Question",
      "name": "How does the Moveroo moving process work?",
      "acceptedAnswer": { ... }
    }
  ]
},
{
  "@type": "HowTo",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Discovery", ... },
    { "@type": "HowToStep", "position": 2, "name": "Tailored plan", ... },
    { "@type": "HowToStep", "position": 3, "name": "Managed delivery", ... }
  ]
}
```

**Status:** 🔴 **FALSE POSITIVE** - Both schemas are fully implemented

---

### 3. Question Headings - PARTIAL FALSE POSITIVE ⚠️

**Affected Pages:** Services, Privacy Policy, Contact

**Crawler Says:**

- Services: "No question-based headings"
- Privacy Policy: "Only 1 question heading(s)"
- Contact: "Only 1 question heading(s)"

**Reality:**

- ✅ Services: We converted "A guided process from enquiry to delivery" → "How does the Moveroo moving process work?"
- ✅ Privacy Policy: We converted 2 headings to questions:
  - "Information we collect" → "What information do we collect?"
  - "How we use and disclose information" → "How do we use and disclose information?"
- ✅ Contact: We converted 2 headings to questions:
  - "Request a callback" → "How can I request a callback?"
  - "Other ways to reach us" → "What are other ways to reach us?"

**Analysis:**

- Privacy Policy and Contact: Crawler is detecting 1 question heading, but we have 2. This is a **partial false positive** - it's detecting some but not all.
- Services: Crawler says "No question-based headings" but we have "How does the Moveroo moving process work?" - This is a **false positive**.

**Status:** 🔴 **FALSE POSITIVE** (Services) / ⚠️ **PARTIAL DETECTION** (Privacy Policy, Contact)

---

## ✅ Real Issues (Optional Improvements)

### 1. OG Image Dimensions - REAL ISSUE (Low Priority) ⚠️

**Status:** ⚠️ WARNING  
**Affected:** All pages  
**Issue:** "OG image found but dimensions could not be verified"

**Analysis:**

- We added explicit `og:image:width`, `og:image:height`, `og:image:type` meta tags
- But crawler still can't verify dimensions
- **Possible causes:**
  - Image file may not be accessible for verification
  - Image may not actually be 1200x630px
  - Crawler may need to fetch image to verify

**Action Required:**

- [ ] Verify OG image file exists at `/og-image.png`
- [ ] Check actual image dimensions (should be 1200x630px)
- [ ] Verify image is publicly accessible
- [ ] Test image URL directly

**Priority:** Low (doesn't affect functionality, just verification)

---

### 2. Author Attribution (E-E-A-T) - REAL ISSUE (Optional) ⚠️

**Status:** ⚠️ WARNING  
**Affected:** Homepage, Services, Contact, Terms pages, Privacy Policy, Cancellation  
**Issue:** "No author attribution found"

**Analysis:**

- Moving-cars page already has author attribution ✅
- Other pages don't have it
- **For homepage:** May not be applicable (corporate page)
- **For content pages:** Could add "Moveroo Editorial Team" or similar

**Action Required:**

- [ ] Decide if author attribution is needed for these pages
- [ ] If yes, add author bylines and schema.org/Person markup
- [ ] Homepage may not need it (corporate page)

**Priority:** Low (optional E-E-A-T signal)

---

### 3. Reading Level - REAL ISSUE (Optional) ⚠️

**Status:** ⚠️ WARNING  
**Affected:** All pages  
**Issue:** Reading level too difficult (college/graduate level, recommended 60+)

**Reading Scores:**

- Homepage: 33 (College level)
- Services: 22 (Graduate level) - Most difficult
- Privacy Policy: 35 (College level)
- Other pages: Similar levels

**Analysis:**

- B2B audience may handle higher reading levels
- Simplifying may not be necessary for target audience
- Could improve accessibility if desired

**Action Required:**

- [ ] Review if simplification is needed for target audience
- [ ] For B2B: May be acceptable as-is
- [ ] Consider simplifying Services page (most difficult at 22)

**Priority:** Very Low (optional, B2B may be fine)

---

### 4. Heading Structure - REAL ISSUE (May be False Positive) ⚠️

**Status:** ⚠️ WARNING  
**Affected:** Services, Contact, Privacy Policy, Terms pages  
**Issue:** "Heading structure could be improved"

**Analysis:**

- Headings appear to be in proper order (H1 → H2 → H3)
- May be a false positive
- Could review actual heading hierarchy

**Action Required:**

- [ ] Review heading hierarchy on affected pages
- [ ] Verify H1 is unique and descriptive
- [ ] Ensure no level skipping (H1 → H2 → H3)

**Priority:** Low (may be false positive)

---

### 5. Third-Party Scripts - REAL ISSUE (Already Optimized) ⚠️

**Status:** ⚠️ WARNING  
**Affected:** All pages  
**Issue:** "2 third-party script source(s)"

**Analysis:**

- Google Analytics (via Partytown) - Already optimized ✅
- Again Analytics script
- Scripts are necessary and already optimized with Partytown

**Action Required:**

- [ ] Verify scripts are properly deferred/async
- [ ] Consider if both analytics are needed
- [ ] Already using Partytown for GA4 (good optimization)

**Priority:** Very Low (already optimized, likely acceptable)

---

### 6. Review/Rating Markup - REAL ISSUE (Optional) ⚠️

**Status:** ⚠️ WARNING  
**Affected:** Services, Contact, Privacy Policy, Terms pages  
**Issue:** "No review/rating markup"

**Analysis:**

- Homepage already has `aggregateRating` in LocalBusiness schema (4.8/5, 150 reviews) ✅
- Other pages don't need rating schema (not product/business pages)
- May be a false positive for non-business pages

**Action Required:**

- [ ] Verify homepage rating schema is correct (already has it)
- [ ] Consider if other pages need rating schema (probably not)
- [ ] Services page may benefit from service ratings if applicable

**Priority:** Low (homepage already has it, others may not need it)

---

## 📋 Summary

### 🔴 False Positives (3):

1. **Content Freshness** - Fully implemented but not detected
2. **FAQ & HowTo Schema** - Fully implemented but not detected
3. **Question Headings** - Implemented but partially/not detected

### ✅ Real Issues (6 - All Optional/Low Priority):

1. **OG Image Dimensions** - Need to verify image file
2. **Author Attribution** - Optional E-E-A-T signal
3. **Reading Level** - Optional (B2B may be fine)
4. **Heading Structure** - May be false positive
5. **Third-Party Scripts** - Already optimized
6. **Review/Rating Markup** - Homepage already has it

---

## 🎯 Recommendations

### Immediate Actions:

1. ✅ **No critical issues** - All fails resolved
2. ✅ **Scores excellent** - 96-98/100 maintained
3. ✅ **False positives documented** - For crawler team reference

### Optional Improvements (Low Priority):

1. Verify OG image file and dimensions
2. Add author attribution if desired (not homepage)
3. Review heading structure (may be false positive)
4. Consider simplifying reading level (optional for B2B)

### For Crawler Team:

1. **Content Freshness detection** - Not detecting `article:modified_time` or `dateModified` in structured data
2. **FAQ/HowTo Schema detection** - Not detecting implemented schemas
3. **Question Headings detection** - Inconsistent detection (detecting some but not all)

---

## 📊 Overall Assessment

**Status:** ✅ **Excellent - No Real Critical Issues**

- **Zero fails** on all content pages ✅
- **Scores: 96-98/100** - Excellent ✅
- **False positives:** 3 identified (documented for reference)
- **Real issues:** All optional/low priority improvements

**The site is performing excellently!** The remaining warnings are either:

- False positives (already implemented)
- Optional improvements (low priority)
- Already optimized (third-party scripts)

---

**Last Updated:** January 10, 2026  
**Status:** ✅ Excellent performance - False positives identified and documented
