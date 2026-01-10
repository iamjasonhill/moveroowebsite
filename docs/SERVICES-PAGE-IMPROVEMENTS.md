# Services Page - Improvement Analysis & Recommendations

**Current Score:** 98/100 (Excellent!)  
**Crawl 38 Date:** January 10, 2026  
**Remaining Issues:** 4 warnings (all optional/low priority)

---

## 📊 Current Issues from Crawl 38

### 1. ⚠️ Question Headings (AI Readiness)

**Status:** Warning  
**Issue:** Only 1 question heading detected  
**Current:** "How does the Moveroo moving process work?"  
**Impact:** Low - but easy to fix

### 2. ⚠️ Reading Level (Content Quality)

**Status:** Warning  
**Issue:** Reading score: 23 (Graduate level) - too difficult  
**Target:** 60+ (8th-9th grade level)  
**Impact:** Medium - may affect accessibility

### 3. ⚠️ Review/Rating Markup (Structured Data)

**Status:** Warning  
**Issue:** No review/rating markup  
**Impact:** Low - optional enhancement

### 4. ⚠️ Third-Party Scripts (Performance)

**Status:** Warning  
**Issue:** 2 third-party script sources  
**Impact:** Low - already optimized with Partytown

---

## 🎯 Recommended Improvements

### Priority 1: Add More Question Headings ✅

**Current Question Headings:** 1

- "How does the Moveroo moving process work?"

**Opportunities to Convert:**

1. **"Comprehensive solutions for every move"** (H1)
   - Could stay as is (H1 should be descriptive)
   - ✅ Keep as statement

2. **"Moving Cars merges with Moveroo"** (H2)
   - ❌ Keep as statement (brand announcement)

3. **"Car & Motorcycle Transport"** (H2)
   - ✅ Convert to: "What vehicle transport services do you offer?"

4. **"Furniture Removalists"** (H2)
   - ✅ Convert to: "How do your furniture removal services work?"

5. **"Specialty Transport"** (H2)
   - ✅ Convert to: "What specialty transport options are available?"

6. **"Ready to plan your move?"** (H2)
   - ✅ Already a question! (but may not be detected as content heading)

**Recommended Changes:**

- Convert 3 service card headings to questions
- This will increase from 1 to 4+ question headings
- Improves AI readiness and search visibility

---

### Priority 2: Simplify Reading Level ✅

**Current Score:** 23 (Graduate level)  
**Target:** 60+ (8th-9th grade)

**Complex Sentences to Simplify:**

1. **Line 99-101:**
   - Current: "Moveroo coordinates trusted carriers, removalists and logistics specialists across Australia. Whether you're relocating a family home, moving vehicles, or need a customised transport plan, we tailor the service mix, schedule and communications around your needs."
   - Simplified: "Moveroo works with trusted carriers, removalists and logistics experts across Australia. We help with home moves, vehicle transport, and custom transport plans. We create a plan that fits your schedule and needs."

2. **Line 159-162:**
   - Current: "Our vehicle transport partners now operate directly under the Moveroo brand, combining expert logistics with coordinated household relocations so every asset arrives together."
   - Simplified: "Our vehicle transport partners now work under the Moveroo brand. We combine expert logistics with home moves so everything arrives together."

3. **Line 239-241:**
   - Current: "Door-to-door vehicle transport for cars, motorbikes, project builds and classic collections. Running or non-drivable options supported."
   - Simplified: "We transport vehicles from door to door. We handle cars, motorbikes, project builds and classic cars. We can move vehicles that run or don't run."

4. **Line 292-294:**
   - Current: "Full-service home moves managed end-to-end. Backloading routes help optimise schedules and budgets for flexible dates."
   - Simplified: "We manage home moves from start to finish. Backloading routes help save money and offer flexible dates."

5. **Line 342-344:**
   - Current: "Boats, caravans, trailers, industrial machinery and unique items that require bespoke handling and permits."
   - Simplified: "We transport boats, caravans, trailers, industrial machinery and unique items. We handle special requirements and permits."

6. **Line 384-386:**
   - Current: "Every move is different. We apply industry experience and regional knowledge to build a plan that stays in sync with your schedule."
   - Simplified: "Every move is different. We use our experience and local knowledge to create a plan that fits your schedule."

**Impact:** Should improve reading score from 23 to 40-50+ (still may not reach 60, but significant improvement)

---

### Priority 3: Expand FAQ Schema ✅

**Current:** 2 FAQ items  
**Recommended:** 5-6 FAQ items

**Additional FAQs to Add:**

1. **"How much does moving cost?"**
   - Answer: "Moving costs vary based on distance, volume, and service type. We provide free quotes tailored to your specific needs. Contact us for a detailed estimate."

2. **"How far in advance should I book?"**
   - Answer: "We recommend booking 2-4 weeks in advance for best availability. However, we can often accommodate shorter timelines depending on your route and dates."

3. **"Do you provide insurance coverage?"**
   - Answer: "Yes, we coordinate insurance coverage for all moves. Our partners provide comprehensive insurance options to protect your belongings during transport."

4. **"What areas do you service?"**
   - Answer: "We service all of Australia, including major cities and regional areas. Our network of trusted carriers covers the entire country."

**Impact:** Better FAQ rich snippets, improved search visibility

---

### Priority 4: Add Review/Rating Schema (Optional) ✅

**Current:** No review/rating markup  
**Recommendation:** Add aggregateRating schema if you have reviews

**Implementation:**

- Add to WebPage structured data
- Only if you have actual reviews/ratings
- Can link to review sources (Google, Trustpilot, etc.)

**Impact:** Low - optional enhancement for star snippets

---

## 📝 Detailed Improvement Plan

### Step 1: Convert Headings to Questions

**Files to Modify:** `src/pages/services.astro`

**Changes:**

1. Line 236: "Car & Motorcycle Transport" → "What vehicle transport services do you offer?"
2. Line 291: "Furniture Removalists" → "How do your furniture removal services work?"
3. Line 341: "Specialty Transport" → "What specialty transport options are available?"

**Expected Impact:**

- Question headings: 1 → 4+ ✅
- AI Readiness score: 90 → 95+ ✅

---

### Step 2: Simplify Reading Level

**Files to Modify:** `src/pages/services.astro`

**Changes:**

- Simplify complex sentences throughout
- Break up long paragraphs
- Use simpler vocabulary where possible
- Maintain professional tone

**Expected Impact:**

- Reading score: 23 → 40-50+ ✅
- Content Quality score: 95 → 98+ ✅

---

### Step 3: Expand FAQ Schema

**Files to Modify:** `src/pages/services.astro`

**Changes:**

- Add 3-4 more FAQ items to `faqItems` array
- Update FAQPage schema automatically

**Expected Impact:**

- FAQ items: 2 → 5-6 ✅
- Better rich snippet eligibility ✅

---

### Step 4: Add Review/Rating Schema (Optional)

**Files to Modify:** `src/pages/services.astro`

**Changes:**

- Add `aggregateRating` to WebPage schema (if reviews exist)
- Link to review sources

**Expected Impact:**

- Structured Data score: 94 → 98+ ✅
- Star snippet eligibility ✅

---

## 🎯 Expected Results After Improvements

### Score Improvements:

- **Overall Score:** 98 → 99-100 ✅
- **AI Readiness:** 90 → 95+ ✅
- **Content Quality:** 95 → 98+ ✅
- **Structured Data:** 94 → 98+ ✅

### Issue Resolution:

- ✅ Question Headings: 1 → 4+ (warning resolved)
- ✅ Reading Level: 23 → 40-50+ (warning may remain but improved)
- ✅ FAQ Schema: 2 → 5-6 items (better rich snippets)
- ⚠️ Review/Rating: Optional (low priority)
- ⚠️ Third-Party Scripts: Already optimized (can't fix)

---

## 📋 Implementation Priority

### High Priority (Quick Wins):

1. ✅ **Add Question Headings** (5 minutes)
   - Convert 3 service headings to questions
   - Immediate impact on AI Readiness

2. ✅ **Expand FAQ Schema** (10 minutes)
   - Add 3-4 more FAQ items
   - Better rich snippets

### Medium Priority (Content Improvement):

3. ✅ **Simplify Reading Level** (20-30 minutes)
   - Rewrite complex sentences
   - Break up paragraphs
   - Significant improvement in accessibility

### Low Priority (Optional):

4. ⚠️ **Add Review/Rating Schema** (10 minutes)
   - Only if reviews exist
   - Optional enhancement

---

## 🎉 Summary

**Current Status:** 98/100 - Excellent!  
**Potential After Improvements:** 99-100/100 - Near Perfect!

**Quick Wins Available:**

- ✅ Question headings (5 min)
- ✅ FAQ expansion (10 min)
- ✅ Reading level simplification (30 min)

**Total Time Investment:** ~45 minutes for significant improvements

**Expected Outcome:**

- Score: 98 → 99-100 ✅
- Warnings: 4 → 1-2 ✅
- Better search visibility ✅
- Improved accessibility ✅

---

**Last Updated:** January 10, 2026  
**Status:** Ready for implementation ✅
