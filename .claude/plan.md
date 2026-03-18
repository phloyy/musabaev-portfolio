# 🔧 Portfolio Improvement Plan — G.UX Brutalist Site

> **Stack:** React 19 + TypeScript + Vite 7 + Tailwind CSS 4
> **Design:** Brutalist — `#101010` dark, `#F4F4F2` light, `#EB4123` accent
> **Fonts:** Helvetica Neue (display), SF Mono (mono), Inter (body)
> **Current:** 2127 lines CSS, 6 routes, i18n (RU/UZ/EN), custom cursor

---

## Phase 1 — Scroll Animations & Micro-interactions
**Skill:** `/frontend-design`
**Files:** `portfolio.css`, `Homepage.tsx`, `hooks/useScrollReveal.ts` (new)

### Tasks:
1. **Create `useScrollReveal` hook** — reusable IntersectionObserver hook
   - Accepts: `threshold`, `rootMargin`, `once` params
   - Returns: `ref`, `isVisible`
   - Replace existing IntersectionObserver in Homepage.tsx (lines 21-28) and CaseStudy.tsx (lines 10-24)

2. **Add scroll-reveal CSS classes:**
   ```css
   .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease, transform 0.6s ease; }
   .reveal.visible { opacity: 1; transform: translateY(0); }
   .reveal-left { transform: translateX(-40px); }
   .reveal-right { transform: translateX(40px); }
   .reveal-scale { transform: scale(0.95); }
   ```

3. **Apply to Homepage sections:**
   - Hero content → fade-in on load (delay 0.2s)
   - Section titles → reveal from bottom
   - Service cards → staggered reveal (delay per card: 0.1s × index)
   - Process steps → sequential reveal left-to-right
   - Pricing cards → staggered scale reveal
   - Skills grid → reveal per category

4. **Parallax effect on hero video overlay:**
   - Subtle `translateY` on scroll (CSS-only via `background-attachment: fixed` or JS scroll listener)

5. **Counter animation for pricing section:**
   - Animate numbers from 0 to target on scroll into view

### Verification:
- [ ] All sections animate on first scroll into view
- [ ] No layout shift during animations
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Old IntersectionObserver code removed, hook reused everywhere

---

## Phase 2 — Mobile Menu & Responsive Polish
**Skill:** `/frontend-design`
**Files:** `Nav.tsx`, `Homepage.tsx`, `portfolio.css`

### Tasks:
1. **Hamburger menu component:**
   - Three-line animated icon (transforms to X on open)
   - Full-screen overlay menu on mobile
   - Menu items animate in sequentially
   - Language switcher inside mobile menu
   - Close on route change and outside click

2. **Fix Nav for mobile (< 640px):**
   - Currently: `display: none` on nav links (line 2095) — no alternative
   - New: hamburger icon, slide-in fullscreen menu
   - Apply to both `.site-nav` (inner pages) and `.landing-header` (homepage)

3. **Responsive grid improvements:**
   - Services grid: 2-col → 1-col transition with better spacing
   - Process steps: horizontal scroll on tablet instead of wrapping
   - Pricing cards: horizontal scroll or accordion on mobile
   - About split: stack with proper visual hierarchy

4. **Touch interactions:**
   - Hide custom cursor on touch devices (`@media (hover: none)`)
   - Larger tap targets (min 44px)

### Verification:
- [ ] Hamburger menu works on both Nav and landing-header
- [ ] Menu opens/closes with animation
- [ ] All links accessible on mobile
- [ ] Custom cursor hidden on touch devices
- [ ] No horizontal overflow on any viewport

---

## Phase 3 — UI Polish & Hover Effects
**Skill:** `/frontend-design`
**Files:** `portfolio.css`, page components

### Tasks:
1. **Enhanced project cards (WorkIndex):**
   - Image color reveal on hover (grayscale → full color with smooth transition)
   - Card lift effect with subtle shadow
   - Category tag styling
   - Stagger animation on filter change

2. **Magnetic hover on CTA buttons:**
   - Slight follow-cursor movement on hover (CSS or JS)
   - Glow/shadow effect on accent buttons

3. **Underline animation on nav links:**
   - Animated underline that slides in from left on hover
   - Active state: persistent underline with accent color

4. **Section dividers:**
   - Subtle horizontal line between sections with fade gradient
   - Or brutalist-style thick accent bar

5. **Loading skeleton:**
   - Shimmer animation for project images while loading
   - CSS-only skeleton screens

6. **Improved form focus states:**
   - Animated label (float label pattern)
   - Input border animation from left to right
   - Success/error state animations

### Verification:
- [ ] All interactive elements have visible hover/focus states
- [ ] Transitions are smooth (no jank)
- [ ] Focus states are keyboard accessible
- [ ] No CSS specificity conflicts

---

## Phase 4 — Loading Screen & Page Transitions
**Skill:** `/frontend-design`
**Files:** `App.tsx`, `components/Loader.tsx` (new), `portfolio.css`

### Tasks:
1. **Initial loading screen:**
   - Full-screen dark bg with "G.UX" logo animation
   - Logo draws in or fades with accent line
   - 1-2 second duration, then reveals page
   - Only on first visit (sessionStorage flag)

2. **Improved page transitions:**
   - Current: simple 150ms fade (App.tsx lines 13-46)
   - New: slide + fade with clip-path or wipe effect
   - Different transition per direction (forward/back)

3. **Route change scroll reset:**
   - Scroll to top on route change
   - Smooth scroll for anchor links

### Verification:
- [ ] Loader appears on first visit only
- [ ] Page transitions don't flash white
- [ ] Scroll position resets on navigation
- [ ] No content jump after loader

---

## Phase 5 — Content & Copywriting
**Skill:** `/copywriting`, `/copy-editing`
**Files:** `i18n/translations.ts`, page components

### Tasks:
1. **Audit all copy across 3 languages:**
   - Hero: stronger value proposition
   - Services: clearer benefit-driven descriptions
   - Process: action-oriented step names
   - CTA: urgency and social proof

2. **Add missing content:**
   - Testimonials/social proof section
   - Client logos or "worked with" strip
   - Project metrics (before/after results)
   - FAQ section (optional)

3. **SEO meta tags:**
   - Title, description, OG tags per page
   - Structured data (Person schema)

### Verification:
- [ ] All 3 languages have consistent quality
- [ ] No placeholder or lorem ipsum text
- [ ] CTAs are action-oriented
- [ ] Meta tags present on all pages

---

## Phase 6 — Performance & Polish
**Skill:** `/smart-explore` for code audit
**Files:** various

### Tasks:
1. **Image optimization:**
   - Lazy loading with blur placeholder
   - WebP format with fallback
   - Responsive srcset

2. **Code splitting:**
   - Lazy load inner pages (React.lazy + Suspense)
   - Dynamic import for heavy components

3. **CSS cleanup:**
   - Remove unused UI components (60+ shadcn components, most unused)
   - Audit portfolio.css for dead selectors
   - Consider CSS modules or scoped styles

4. **Font loading:**
   - `font-display: swap` for all fonts
   - Preload critical fonts
   - Subset fonts for Cyrillic + Latin

5. **Accessibility:**
   - ARIA labels on interactive elements
   - Skip-to-content link
   - Keyboard navigation for all interactive elements
   - Color contrast verification (accent on dark bg)

### Verification:
- [ ] Lighthouse score > 90 on all metrics
- [ ] No unused CSS > 50% reduction
- [ ] All images lazy-loaded
- [ ] Keyboard navigation works throughout
- [ ] Zero console errors

---

## Execution Order

| Priority | Phase | Estimated Impact | Skill |
|----------|-------|-----------------|-------|
| 🔴 1 | Phase 2 — Mobile Menu | Critical (site broken on mobile) | `/frontend-design` |
| 🔴 2 | Phase 1 — Scroll Animations | High (visual wow factor) | `/frontend-design` |
| 🟡 3 | Phase 3 — UI Polish | High (professional feel) | `/frontend-design` |
| 🟡 4 | Phase 4 — Loading & Transitions | Medium (first impression) | `/frontend-design` |
| 🟢 5 | Phase 5 — Content | Medium (conversion) | `/copywriting` |
| 🟢 6 | Phase 6 — Performance | Medium (technical debt) | `/smart-explore` |

---

## Anti-Patterns to Avoid
- ❌ Don't use framer-motion (was removed intentionally)
- ❌ Don't add new npm dependencies unless absolutely necessary
- ❌ Don't change the 3-color design system
- ❌ Don't override cursor: none (it's global by design)
- ❌ Don't use inline styles (centralized CSS architecture)
- ❌ Don't break i18n — all new text must go through `t()` function

## Existing Patterns to Follow
- ✅ CSS in `portfolio.css` (single file architecture)
- ✅ `data-cursor-hover="true"` on all interactive elements
- ✅ `useLang()` hook for all displayed text
- ✅ IntersectionObserver for scroll-triggered effects
- ✅ BEM-lite class naming (.section-name, .element-name)
- ✅ CSS custom properties for design tokens
