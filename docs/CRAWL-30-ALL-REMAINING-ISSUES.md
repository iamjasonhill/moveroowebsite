# Crawl 30 - All Remaining Issues (Including Small Ones)

**Date:** January 10, 2026  
**Crawl ID:** 30  
**Status:** Comprehensive list of all issues not yet discussed

---

## ✅ Already Discussed (False Positives or Ignored)

1. ✅ **External Stylesheets (7 → 8)** - FALSE POSITIVE (CSS is fully inlined)
2. ✅ **Marketing & Analytics / Google Tag Manager** - User said to ignore (crawler suggestion)
3. ✅ **Sitemap Inclusion** - FALSE POSITIVE (all pages are in sitemap)

---

## 🔍 All Other Issues Found

### 1. OG Image Dimensions - ALL PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Low - Social Media  
**Affected:** All pages

**Issue:**

- OG image found but dimensions could not be verified
- We added explicit `og:image:width`, `og:image:height`, `og:image:type` tags
- Crawler still can't verify dimensions

**Possible Causes:**

- Image file may not be accessible for verification
- Image may not actually be 1200x630px
- Crawler may need to fetch image to verify

**Action:**

- [ ] Verify OG image file exists at `/og-image.png`
- [ ] Check actual image dimensions (should be 1200x630px)
- [ ] Verify image is publicly accessible
- [ ] Test image URL directly

---

### 2. Third-Party Scripts (2 detected) - ALL PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Low-Medium - Performance  
**Affected:** All pages

**Issue:**

- 2 third-party script sources detected
- Likely: Google Analytics (via Partytown) and Again Analytics

**Current Setup:**

- Google Analytics via Partytown (already optimized)
- Again Analytics script

**Action:**

- [ ] Verify scripts are properly deferred/async
- [ ] Consider if both analytics are needed
- [ ] Already using Partytown for GA4 (good optimization)

**Note:** This is likely acceptable - analytics scripts are necessary and already optimized.

---

### 3. Author Attribution (E-E-A-T) - MOST PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Medium - E-E-A-T signals  
**Affected:** Homepage, Contact, Services, Terms pages, Privacy Policy, Cancellation

**Issue:**

- No author attribution found
- Missing on most pages (except moving-cars which has it)

**Already Fixed:**

- ✅ moving-cars page has author attribution

**Action:**

- [ ] For homepage: May not be applicable (corporate page)
- [ ] For content pages: Consider adding "Moveroo Editorial Team" or similar
- [ ] Add `schema.org/Person` markup for authors where appropriate

**Priority:** Low (homepage may not need author, content pages could benefit)

---

### 4. Reading Level - ALL PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Low-Medium - Accessibility  
**Affected:** All pages

**Reading Scores:**

- Homepage: 33 (College level)
- Moving Cars: 31 (College level)
- Services: 22 (Graduate level) ⚠️ Most difficult
- Terms of Use: 37 (College level)
- Privacy Policy: 35 (College level)
- Contact: Not specified in data

**Issue:**

- Reading level too difficult (recommended: 60+)
- Services page is particularly difficult (Graduate level)

**Action:**

- [ ] Review if simplification is needed for target audience
- [ ] For B2B: May be acceptable, but can still improve
- [ ] Consider simplifying Services page (most difficult)
- [ ] Break up complex sentences
- [ ] Use shorter, simpler words where possible

**Priority:** Low (B2B audience may handle higher reading levels)

---

### 5. Heading Structure - MOST PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Low - SEO structure  
**Affected:** Moving Cars, Contact, Services, Terms pages, Privacy Policy

**Issue:**

- Heading structure could be improved
- May be skipping levels (H1 → H2 → H3)
- Or not using proper hierarchy

**Action:**

- [ ] Review heading hierarchy on affected pages
- [ ] Ensure proper order: H1 → H2 → H3 (no skipping)
- [ ] Verify H1 is unique and descriptive
- [ ] Check for proper nesting

**Priority:** Low-Medium

---

### 6. Content Freshness - MOST PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Low - SEO freshness signals  
**Affected:** Contact, Services, Terms pages, Privacy Policy, Cancellation

**Issue:**

- No content date detected
- Missing `article:modified_time` meta tag or `dateModified` in Schema.org

**Action:**

- [ ] Add `article:modified_time` meta tag to pages
- [ ] Or add `dateModified` to Schema.org markup
- [ ] Update dates when content changes

**Implementation:**

```html
<meta property="article:modified_time" content="2026-01-10T00:00:00.000Z" />
```

**Priority:** Low

---

### 7. Review/Rating Markup - MOST PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Low-Medium - Rich snippets  
**Affected:** Homepage, Moving Cars, Contact, Services, Terms pages

**Issue:**

- No review/rating markup
- Missing `aggregateRating` schema

**Note:**

- Homepage already has `aggregateRating` in LocalBusiness schema (4.8/5, 150 reviews)
- But crawler may not be detecting it on other pages

**Action:**

- [ ] Verify homepage rating schema is correct
- [ ] Consider if other pages need rating schema
- [ ] Moving Cars page may benefit from service ratings

**Priority:** Low (homepage already has ratings)

---

### 8. FAQ & HowTo Schema Opportunities - SOME PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Medium - Rich snippets  
**Affected:** Services, Terms of Use, Privacy Policy

**Services Page:**

- FAQ content detected (2 Q&A pairs) - add FAQPage schema
- Step-by-step content detected (10 steps) - add HowTo schema

**Terms of Use & Privacy Policy:**

- FAQ content detected (2 Q&A pairs) - add FAQPage schema

**Action:**

- [ ] Add FAQPage schema to Services page (2 Q&A pairs)
- [ ] Add HowTo schema to Services page (10 steps)
- [ ] Add FAQPage schema to Terms of Use (2 Q&A pairs)
- [ ] Add FAQPage schema to Privacy Policy (2 Q&A pairs)

**Priority:** Medium (good for rich snippets)

---

### 9. Question Headings - MOST PAGES ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Low - AI Readiness  
**Affected:** Contact (1 question), Services (0), Terms pages (0), Privacy Policy (0)

**Issue:**

- Not enough question-based headings
- Contact has only 1 question heading
- Other pages have none

**Already Fixed:**

- ✅ moving-cars has 4 question headings

**Action:**

- [ ] Review current headings on affected pages
- [ ] Rephrase some headings as questions:
  - "How can we help?" instead of "Contact Us"
  - "What services do we offer?" instead of "Our Services"
  - "How do I cancel?" instead of "Cancellation Policy"

**Priority:** Low (AI readiness, nice to have)

---

### 10. Meta Description Length - ONE PAGE ⚠️

**Status:** ⚠️ WARNING  
**Impact:** Very Low - SEO  
**Affected:** Terms & Conditions (Transport) only

**Issue:**

- Meta description: 149 characters
- Ideal: 150-160 characters
- Just 1 character short!

**Action:**

- [ ] Add 1-2 words to meta description to reach 150+ characters
- [ ] Very minor fix

**Priority:** Very Low (just 1 character short)

---

## 📊 Summary by Priority

### High Priority (Should Fix):

- None (all false positives or low impact)

### Medium Priority (Good to Fix):

1. **FAQ & HowTo Schema** - Services, Terms, Privacy Policy (rich snippets)
2. **OG Image Dimensions** - Verify image accessibility and dimensions

### Low Priority (Nice to Have):

3. **Content Freshness** - Add dateModified to pages
4. **Heading Structure** - Review and fix hierarchy
5. **Author Attribution** - Add where appropriate (not homepage)
6. **Question Headings** - Rephrase some headings as questions
7. **Review/Rating Markup** - Verify homepage schema is detected

### Very Low Priority (Minor):

8. **Meta Description Length** - Terms & Conditions (149 chars, need 1 more)
9. **Reading Level** - Simplify if desired (B2B may be fine)
10. **Third-Party Scripts** - Already optimized, likely acceptable

---

## 🎯 Recommended Action Plan

### Quick Wins (15-30 minutes):

1. Fix meta description length (Terms & Conditions) - 1 character
2. Verify OG image dimensions and accessibility

### Medium Effort (1-2 hours):

3. Add FAQPage schema to Services, Terms, Privacy Policy
4. Add HowTo schema to Services page
5. Add content freshness dates to pages

### Lower Priority (2-4 hours):

6. Review and fix heading structure
7. Add question headings where appropriate
8. Add author attribution to content pages (not homepage)

### Optional (Low Impact):

9. Simplify reading level (if desired)
10. Review third-party scripts (already optimized)

---

## 📝 Notes

- **Sitemap Index:** Low score (56/100) is expected - it's an XML file, not a content page
- **Most issues are warnings**, not fails
- **Current scores are already very good** (92-94/100)
- **Many issues are "nice to have"** rather than critical

---

**Last Updated:** January 10, 2026  
**Status:** Comprehensive list of all remaining issues, prioritized by impact
