

---

```markdown
# Brand Style Guide & Design Tokens

This document contains the strict architectural styling tokens and UI guidelines for the project. All AI agents and developers must strictly follow these Tailwind CSS configurations, typography structures, and component rules to ensure brand consistency across all pages.

---

## 1. Design Philosophy & Market Strategy
*   **Target Market:** Premium real estate, corporate leasing, land trading, and asset solutions.
*   **Visual Direction:** High-end corporate layout that communicates trust, authority, structure, and high-value execution. 
*   **Theme Anchor:** Deep, sophisticated corporate blue and sharp geometric structure.

---

## 2. The Color Palette Tokens

Always utilize these precise Tailwind utility combinations to maintain consistency across light, dark, and interactive layers.

| Token Type | Tailwind Class | Hex Value | Core Intent & Use Case |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | `bg-blue-600` | `#2563eb` | Main action color, primary buttons, accents, active states. |
| **Primary Hover** | `hover:bg-blue-700` | `#1d4ed8` | Interactive hover transition states for primary elements. |
| **Deep Base (Dark)** | `bg-slate-900` | `#0f172a` | Main footers, dark backgrounds, hero image container backdrops. |
| **Text Primary** | `text-slate-900` | `#0f172a` | Pure authority slate. Used for all main page headings and titles. |
| **Text Secondary** | `text-slate-600` | `#475569` | Muted slate gray for body copy, paragraphs, and sub-labels. |
| **App Canvas** | `bg-slate-50` | `#f8fafc` | The main body background layer of the app canvas. |
| **Borders & Dividers**| `border-slate-200` | `#e2e8f0` | Clean structural dividing rules and section boundaries. |

---

## 3. Typography & Text Hierarchy

*   **Font Pairing:** Sans-serif (Inter, Plus Jakarta Sans, or Geist Sans).
*   **Headings (`h1`, `h2`, `h3`):** Must always include `tracking-tight` and `font-bold` (or `font-extrabold` for main hero sections) to maintain a locked-in, professional structural aesthetic.
*   **Body Text (`p`):** Must always utilize `leading-relaxed text-slate-600` to guarantee optical accessibility across all display types.

---

## 4. Standard UI Component Blueprint

When writing new features, cards, or sections, mirror these exact class layouts:

### A. Primary Call-to-Action Buttons
```tsx
<button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
  Get Started
</button>

```

### B. Secondary / Ghost Buttons

```tsx
<button className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900">
  Learn More
</button>

```

### C. Standard Layout Cards & Content Blocks

```tsx
<div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
  {/* Content Layers Go Here */}
</div>

```

---

## 5. Global Section Constraints

* **Hero Layout Margin Rule:** Desktop heroes must maintain `md:mt-16` or `md:mt-24` to cleanly clear the structural floating navbar. Mobile heroes must maintain `mt-0` as mobile navigation handles overlay patterns differently.
* **Image Components:** Every static asset image must use the Next.js standard `next/image` component wrapper with optimized `sizes` properties and explicit performance `priority` flags for above-the-fold content to avoid structural layout shifts (CLS).

```

```