# Spacing

Fluent 2 Web uses an **11-step spacing scale** — the same numeric values for both horizontal and vertical spacing, exposed under two token namespaces so intent stays explicit in code.

The scale is built on a **4px grid** with two off-grid "nudge" stops (6px and 10px) for dense UI where 4px increments are too coarse.

---

## 1. The scale

| Step       | Value  | On 4-grid | Horizontal token                | Vertical token                |
| ---------- | ------ | --------- | ------------------------------- | ----------------------------- |
| None       | `0`    | ✓         | `--spacingHorizontalNone`       | `--spacingVerticalNone`       |
| XXS        | `2px`  | —         | `--spacingHorizontalXXS`        | `--spacingVerticalXXS`        |
| XS         | `4px`  | ✓         | `--spacingHorizontalXS`         | `--spacingVerticalXS`         |
| S Nudge    | `6px`  | —         | `--spacingHorizontalSNudge`     | `--spacingVerticalSNudge`     |
| **S**      | `8px`  | ✓         | `--spacingHorizontalS`          | `--spacingVerticalS`          |
| M Nudge    | `10px` | —         | `--spacingHorizontalMNudge`     | `--spacingVerticalMNudge`     |
| **M**      | `12px` | ✓         | `--spacingHorizontalM`          | `--spacingVerticalM`          |
| **L**      | `16px` | ✓         | `--spacingHorizontalL`          | `--spacingVerticalL`          |
| XL         | `20px` | ✓         | `--spacingHorizontalXL`         | `--spacingVerticalXL`         |
| XXL        | `24px` | ✓         | `--spacingHorizontalXXL`        | `--spacingVerticalXXL`        |
| XXXL       | `32px` | ✓         | `--spacingHorizontalXXXL`       | `--spacingVerticalXXXL`       |

**The workhorses** are `S` (8px), `M` (12px), and `L` (16px). Most layouts will use these three for 80% of their spacing decisions.

---

## 2. Horizontal vs. vertical — why two namespaces?

The values are identical (`--spacingHorizontalM` and `--spacingVerticalM` both equal 12px), but **always reach for the one that matches your intent**:

```css
/* ✓ correct */
.card {
  padding: var(--spacingVerticalL) var(--spacingHorizontalXL);  /* 16px top/bottom, 20px left/right */
  margin-bottom: var(--spacingVerticalM);
}

/* ✗ wrong — works today but leaks intent */
.card {
  padding: var(--spacingHorizontalL) var(--spacingHorizontalXL);
}
```

Why it matters: design reviews sometimes change only the vertical rhythm (e.g. "compress list padding top/bottom but keep side padding"). If you've used the axis-correct token, that review is a one-line change. If you haven't, you have to audit every property.

---

## 3. Use-case guide

### Padding (inside a container)

| Container density        | Padding recommendation                |
| ------------------------ | ------------------------------------- |
| Dense toolbar item       | `VerticalXS` + `HorizontalS` (4/8)    |
| Input field              | `VerticalSNudge` + `HorizontalMNudge` (6/10) |
| Button (default)         | `VerticalS` + `HorizontalM` (8/12)    |
| Button (large)           | `VerticalM` + `HorizontalL` (12/16)   |
| Card (compact)           | `VerticalM` + `HorizontalM` (12/12)   |
| Card (default)           | `VerticalL` + `HorizontalL` (16/16)   |
| Card (spacious)          | `VerticalXL` + `HorizontalXL` (20/20) |
| Modal / dialog           | `VerticalXXL` + `HorizontalXXL` (24/24) |
| Page gutters (mobile)    | `HorizontalL` (16)                    |
| Page gutters (desktop)   | `HorizontalXXL` or `XXXL` (24–32)     |

### Gap (between siblings)

| Layout                          | Gap recommendation                        |
| ------------------------------- | ----------------------------------------- |
| Icon + label in a button        | `HorizontalXS` (4)                        |
| Checkbox + label                | `HorizontalS` (8)                         |
| Form fields, stacked            | `VerticalM` (12)                          |
| Form field groups               | `VerticalL` or `XL` (16–20)               |
| Card grid, same row             | `HorizontalL` (16)                        |
| Card grid, between rows         | `VerticalL` (16)                          |
| Major page sections             | `VerticalXXL` or `XXXL` (24–32)           |

### Margin (outside a container)

Use margin sparingly — prefer `gap` on a flex/grid parent when laying out siblings. Reserve margin for breaks in vertical rhythm (e.g. a heading followed by a paragraph).

---

## 4. Practical recipes

### Flexbox row with icon + text

```css
.row-with-icon {
  display: flex;
  align-items: center;
  gap: var(--spacingHorizontalS);        /* 8px between icon and text */
  padding: var(--spacingVerticalS) var(--spacingHorizontalM); /* 8/12 */
}
```

### Stack of form fields

```css
.form-stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacingVerticalM);          /* 12px between fields */
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacingVerticalXS);         /* 4px between label and input */
}
```

### Card grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacingVerticalL) var(--spacingHorizontalL); /* 16px row & col */
  padding: var(--spacingVerticalXL) var(--spacingHorizontalXXL); /* 20 / 24 */
}
```

### Section break

```css
.section + .section {
  margin-top: var(--spacingVerticalXXXL); /* 32px between major sections */
}
```

---

## 5. When to use the nudge tokens

`SNudge` (6px) and `MNudge` (10px) exist because the visually-correct padding for certain controls lands between grid stops.

| Control             | Why a nudge?                                       |
| ------------------- | -------------------------------------------------- |
| Input field         | 10px horizontal padding gives text room; 8 is tight, 12 feels spacious |
| Dense menu item     | 6px vertical padding = readable but doesn't waste space |
| Sub-text in a tag   | Nudges keep vertical centering looking right       |

If you're laying out a major container (page, card, section), stick to the even grid values. Nudges are for controls and dense UI only.

---

## 6. Responsive spacing

Fluent doesn't define explicit breakpoints for spacing, but a common pattern is to step the scale up by one on wider viewports:

```css
.page-gutter {
  padding-inline: var(--spacingHorizontalL);   /* 16px mobile */
}

@media (min-width: 768px) {
  .page-gutter {
    padding-inline: var(--spacingHorizontalXXL); /* 24px tablet+ */
  }
}

@media (min-width: 1280px) {
  .page-gutter {
    padding-inline: var(--spacingHorizontalXXXL); /* 32px desktop */
  }
}
```

---

## 7. Anti-patterns

- **Don't use raw pixel values.** `padding: 14px;` is an instant drift from the system. If 14px feels right, you either want `M` (12) or the next step up — pick one.
- **Don't invent half-steps.** No `--spacingHorizontalSHalf`. If two adjacent tokens don't give you what you need, something else in the layout is off.
- **Don't mix spacing namespaces on one axis.** `margin-top: var(--spacingHorizontalM)` compiles, but it's wrong.
- **Don't use spacing tokens for width/height.** They're rhythm, not sizing. For component sizes (icon 16px, avatar 32px), just use pixel values or your component-specific tokens.
