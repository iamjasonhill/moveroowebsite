# Roadmap to 100/100 - Comprehensive SEO Optimization Plan

**Goal:** Achieve as close to 100/100 as possible to establish best practices for all future sites  
**Current Status:** Homepage at 96/100, Moving Cars at 94/100  
**Approach:** Address every issue, no matter how small, to test crawler accuracy and establish standards

---

## 🎯 Current State Analysis (Crawl 29)

### Homepage: 96/100

- **Fails:** 1 (External Stylesheets)
- **Warnings:** 6
- **Categories Needing Work:** Performance Hints (80), Content Quality (90)

### Moving Cars: 94/100

- **Fails:** 2 (External Stylesheets, Content Depth)
- **Warnings:** 9
- **Categories Needing Work:** Content Quality (75), Performance Hints (80)

---

## 📋 Issue-by-Issue Action Plan

### 🔴 Critical Issues (Fails)

#### 1. External Stylesheets (7 detected) - ALL PAGES

**Status:** 🔴 FAIL  
**Impact:** High - Performance  
**Current:** 7 external stylesheets  
**Target:** 1-2 external stylesheets

**Action Plan:**

- [x] Configure Astro to inline smaller stylesheets (already done in `astro.config.mjs`)
- [ ] Verify deployment includes new config
- [ ] Test build output to confirm CSS bundling
- [ ] If still 7, investigate:
  - Check if Tailwind is generating multiple chunks
  - Consider using `@astrojs/tailwind` integration for better bundling
  - Manually combine CSS if needed
- [ ] Re-run crawl after deployment

**Expected Result:** Reduce to 2-3 external stylesheets (or fewer)

---

#### 2. Content Depth (Moving Cars) - 449 words

**Status:** 🔴 FAIL  
**Impact:** Medium - Content Quality  
**Current:** 449 words (recommended 1000+ for article)  
**Target:** Either expand to 1000+ words OR reclassify page type

**Action Plan:**

- [x] Reclassified to NewsArticle (already done)
- [ ] Test if NewsArticle still requires 1000+ words
- [ ] If yes, choose one:
  - **Option A:** Expand content to 1000+ words
    - Add more details about the merger
    - Include customer testimonials
    - Add timeline of the merger
    - Include FAQs (already have schema, add visible content)
    - Add benefits section
  - **Option B:** Reclassify to WebPage
    - Change from NewsArticle to WebPage
    - WebPage has lower content requirements
- [ ] Re-run crawl to verify

**Expected Result:** Content depth warning resolved

---

### ⚠️ Warning Issues (Smaller but Important)

#### 3. Author Attribution (E-E-A-T) - ALL PAGES

**Status:** ⚠️ WARNING  
**Impact:** Medium - E-E-A-T signals  
**Current:** No author attribution found

**Action Plan:**

- [ ] For blog/news pages: Add author bylines
- [ ] Add `schema.org/Person` markup for authors
- [ ] Create author bio pages
- [ ] Link to author pages from content
- [ ] For service pages: Consider organization attribution instead

**Implementation:**

```json
{
	"@type": "Person",
	"name": "Author Name",
	"url": "https://moveroo.com.au/authors/author-name",
	"jobTitle": "Content Manager"
}
```

**Expected Result:** E-E-A-T score improvement

---

#### 4. Reading Level (33 - College level) - Homepage, Moving Cars

**Status:** ⚠️ WARNING  
**Impact:** Low-Medium - Accessibility  
**Current:** Reading score 30-33 (College level)  
**Target:** 60+ (High school level)

**Action Plan:**

- [ ] Review if simplification is needed for target audience
- [ ] For B2B: May be acceptable, but can still improve
- [ ] Simplify complex sentences:
  - Break up long sentences
  - Use shorter, more common words
  - Replace jargon with plain language where possible
- [ ] Test readability with tools:
  - Hemingway Editor
  - Readable.io
  - Grammarly readability score

**Expected Result:** Reading level score improvement (60+)

---

#### 5. OG Image Dimensions - ALL PAGES

**Status:** ⚠️ WARNING  
**Impact:** Low - Social Media  
**Current:** OG image found but dimensions couldn't be verified

**Action Plan:**

- [ ] Verify OG image is accessible
- [ ] Ensure image is exactly 1200x630px (recommended)
- [ ] Test with Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Test with Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] Add explicit dimensions in meta tags if needed:
  ```html
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  ```

**Expected Result:** OG image dimensions verified

---

#### 6. Critical CSS Not Inlined - ALL PAGES

**Status:** ⚠️ WARNING  
**Impact:** Medium - Performance (First Contentful Paint)  
**Current:** No inline critical CSS detected

**Action Plan:**

- [ ] Identify above-the-fold CSS
- [ ] Extract critical CSS (styles needed for initial render)
- [ ] Inline critical CSS in `<head>`:
  ```html
  <style>
  	/* Critical CSS here */
  </style>
  ```
- [ ] Load remaining CSS asynchronously
- [ ] Consider using tools:
  - `critical` npm package
  - `purgecss` for unused CSS
  - Astro's built-in CSS optimization

**Expected Result:** Improved First Contentful Paint, performance score improvement

---

#### 7. Third-Party Scripts (2 detected) - ALL PAGES

**Status:** ⚠️ WARNING  
**Impact:** Low-Medium - Performance  
**Current:** 2 third-party scripts (Google Analytics, Again Analytics)

**Action Plan:**

- [ ] Audit scripts:
  - Google Analytics (via Partytown) - Keep, already optimized
  - Again Analytics (via Partytown) - Keep, already optimized
- [ ] Verify scripts are properly deferred/async
- [ ] Consider:
  - Loading analytics only after page load
  - Using `requestIdleCallback` for non-critical scripts
  - Further optimization of Partytown config

**Expected Result:** Scripts properly optimized (may still show as warning but optimized)

---

#### 8. Hreflang Tags Missing - ALL PAGES

**Status:** ⚠️ WARNING  
**Impact:** Low - Only needed for multi-language sites  
**Current:** No hreflang tags detected

**Action Plan:**

- [ ] Determine if multi-language/regional versions exist
- [ ] If single-language (English-AU only):
  - This warning can be ignored (not applicable)
  - Or add `hreflang="en-AU"` and `x-default` for clarity
- [ ] If multi-language:
  - Add proper hreflang tags for each language/region
  - Include `x-default` for default version

**Implementation:**

```html
<link rel="alternate" hreflang="en-AU" href="https://moveroo.com.au/" />
<link rel="alternate" hreflang="x-default" href="https://moveroo.com.au/" />
```

**Expected Result:** Hreflang tags added (if applicable) or documented as not needed

---

#### 9. Heading Structure - Moving Cars

**Status:** ⚠️ WARNING  
**Impact:** Low - SEO structure  
**Current:** Heading structure could be improved

**Action Plan:**

- [ ] Review heading hierarchy on moving-cars page
- [ ] Ensure proper order: H1 → H2 → H3 (no skipping)
- [ ] Verify only one H1 per page
- [ ] Check for semantic structure

**Expected Result:** Proper heading hierarchy

---

#### 10. Review/Rating Markup - Moving Cars

**Status:** ⚠️ WARNING  
**Impact:** Low-Medium - Rich snippets  
**Current:** No review/rating markup

**Action Plan:**

- [ ] Determine if reviews exist for Moving Cars service
- [ ] If reviews exist:
  - Add `aggregateRating` schema
  - Include rating value and review count
  - Link to review sources
- [ ] If no reviews:
  - This warning can be ignored (not applicable)
  - Or add placeholder schema for future reviews

**Expected Result:** Review schema added (if applicable)

---

#### 11. Question Headings - Moving Cars

**Status:** ⚠️ WARNING  
**Impact:** Low - AI Readiness  
**Current:** Only 2 question headings

**Action Plan:**

- [ ] Review current headings
- [ ] Rephrase some headings as questions:
  - "Why this merger matters" → "Why does this merger matter?"
  - "What's in it for you?" → Already a question ✅
  - "Better tech, better visibility" → "How does better tech improve visibility?"
- [ ] Aim for 4-5 question-based headings

**Expected Result:** More question headings, AI readiness score improvement

---

## 🎯 Priority Ranking

### Phase 1: High Impact, Easy Wins (1-2 hours)

1. ✅ External Stylesheets - Verify CSS optimization deployment
2. ⚠️ OG Image Dimensions - Verify and fix image dimensions
3. ⚠️ Heading Structure - Fix hierarchy on moving-cars

### Phase 2: Medium Impact (2-4 hours)

4. ⚠️ Critical CSS - Inline above-the-fold CSS
5. ⚠️ Content Depth - Expand content OR reclassify to WebPage
6. ⚠️ Author Attribution - Add E-E-A-T signals

### Phase 3: Lower Impact, Polish (4+ hours)

7. ⚠️ Reading Level - Simplify content (if needed)
8. ⚠️ Question Headings - Rephrase headings as questions
9. ⚠️ Review/Rating Markup - Add if applicable
10. ⚠️ Hreflang Tags - Add if multi-language
11. ⚠️ Third-Party Scripts - Further optimize (already good)

---

## 📊 Expected Score Improvements

### Homepage (Current: 96/100)

- Fix External Stylesheets: +1-2 points → **97-98/100**
- Add Critical CSS: +1 point → **98-99/100**
- Fix OG Image: +0.5 points → **98.5-99.5/100**
- Add Author Attribution: +0.5 points → **99-100/100**
- Fix Reading Level: +0.5 points → **99.5-100/100**

**Target: 99-100/100** ✅

### Moving Cars (Current: 94/100)

- Fix External Stylesheets: +1 point → **95/100**
- Fix Content Depth: +1-2 points → **96-97/100**
- Add Critical CSS: +1 point → **97-98/100**
- Fix Heading Structure: +0.5 points → **97.5-98.5/100**
- Add Question Headings: +0.5 points → **98-99/100**
- Add Author Attribution: +0.5 points → **98.5-99.5/100**

**Target: 98-99/100** ✅

---

## 🧪 Testing Strategy

### After Each Fix:

1. [ ] Deploy changes
2. [ ] Wait for deployment to complete
3. [ ] Run new crawl
4. [ ] Compare scores
5. [ ] Document improvements
6. [ ] Verify crawler accuracy

### Final Validation:

1. [ ] Run full site crawl
2. [ ] Verify all fixes are detected
3. [ ] Document final scores
4. [ ] Create best practices guide for future sites

---

## 📝 Implementation Checklist

### Immediate (Today):

- [ ] Verify CSS optimization is deployed
- [ ] Check OG image dimensions
- [ ] Fix heading structure on moving-cars

### This Week:

- [ ] Implement critical CSS inlining
- [ ] Resolve content depth issue (expand or reclassify)
- [ ] Add author attribution

### This Month:

- [ ] Improve reading level (if needed)
- [ ] Add question headings
- [ ] Add review/rating schema (if applicable)
- [ ] Add hreflang tags (if applicable)

---

## 🎉 Success Criteria

### Minimum Target:

- Homepage: **98/100**
- Moving Cars: **97/100**
- Average: **97/100**

### Stretch Goal:

- Homepage: **100/100**
- Moving Cars: **99/100**
- Average: **99/100**

---

## 📚 Best Practices Documentation

As we fix each issue, document:

1. What the issue was
2. How we fixed it
3. Why it matters
4. How to prevent it in future sites
5. Crawler detection accuracy

This will create a **SEO Best Practices Guide** for all future Moveroo sites.

---

**Last Updated:** January 10, 2026  
**Status:** In Progress  
**Next Review:** After Phase 1 fixes
