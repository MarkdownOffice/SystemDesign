# Typography

Fluent 2 Web uses **Segoe UI** as its primary typeface. The full type system consists of 10 font sizes, 10 matched line heights, 4 weights, and 16 named typography styles that combine them.

---

## 1. Font family

Three stacks are defined. Use `--fontFamilyBase` for everything except numeric displays and code.

```css
/* Body — Segoe UI with cross-platform fallback */
--fontFamilyBase: 'Segoe UI', 'Segoe UI Web (West European)',
                  -apple-system, BlinkMacSystemFont,
                  Roboto, 'Helvetica Neue', sans-serif;

/* Monospace — for code blocks, terminals */
--fontFamilyMonospace: Consolas, 'Courier New', Courier, monospace;

/* Numeric — tabular figures (dashboards, finance) */
--fontFamilyNumeric: Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)',
                     -apple-system, BlinkMacSystemFont,
                     Roboto, 'Helvetica Neue', sans-serif;
```

> **On non-Windows platforms.** Segoe UI is not installed on macOS, most Linux distros, iOS, or Android. The stack falls through to the platform's native UI font (`-apple-system` on Apple, `Roboto` on Android), preserving a clean, readable look even without the Microsoft typeface. If you need Segoe UI everywhere (e.g. pixel-perfect parity with Windows), self-host `Segoe UI Web` — note Microsoft's EULA only permits this for licensed M365 products.

---

## 2. The type ramp

Ten named sizes, grouped into `base` (for body copy and UI controls) and `hero` (for page titles and marketing). Line heights are pre-matched — use them together.

| Size token              | Size | Line-height token         | Line-height | Primary use                  |
| ----------------------- | ---- | ------------------------- | ----------- | ---------------------------- |
| `--fontSizeBase100`     | 10px | `--lineHeightBase100`     | 14px        | Smallest caption, legal      |
| `--fontSizeBase200`     | 12px | `--lineHeightBase200`     | 16px        | Caption, secondary metadata  |
| `--fontSizeBase300`     | 14px | `--lineHeightBase300`     | 20px        | **Default body** & controls  |
| `--fontSizeBase400`     | 16px | `--lineHeightBase400`     | 22px        | Emphasized body, subtitle    |
| `--fontSizeBase500`     | 20px | `--lineHeightBase500`     | 28px        | Subtitle 1                   |
| `--fontSizeBase600`     | 24px | `--lineHeightBase600`     | 32px        | Title 3                      |
| `--fontSizeHero700`     | 28px | `--lineHeightHero700`     | 36px        | Title 2                      |
| `--fontSizeHero800`     | 32px | `--lineHeightHero800`     | 40px        | Title 1                      |
| `--fontSizeHero900`     | 40px | `--lineHeightHero900`     | 52px        | Large title                  |
| `--fontSizeHero1000`    | 68px | `--lineHeightHero1000`    | 92px        | Display                      |

> **Always pair `size` with the matching `lineHeight`.** Mixing them (e.g. Base300 size + Base400 line height) breaks vertical rhythm. Fluent aligns to a 4px grid — the paired values preserve this.

---

## 3. Font weights

Only four weights. Stick to them.

| Token                  | Weight | Named      | Use                       |
| ---------------------- | ------ | ---------- | ------------------------- |
| `--fontWeightRegular`  | 400    | Regular    | Body copy, default text   |
| `--fontWeightMedium`   | 500    | Medium     | Emphasis in running text  |
| `--fontWeightSemibold` | 600    | Semibold   | Titles, primary buttons   |
| `--fontWeightBold`     | 700    | Bold       | Strong emphasis, warnings |

---

## 4. Named typography styles

The type ramp composes 16 ready-to-use styles. Each bundles `font-family`, `font-size`, `line-height`, and `font-weight`.

| Style name          | Size  | Weight    | Line-height | Typical use                     |
| ------------------- | ----- | --------- | ----------- | ------------------------------- |
| `display`           | 68px  | Semibold  | 92px        | Marketing hero                  |
| `largeTitle`        | 40px  | Semibold  | 52px        | Major section header            |
| `title1`            | 32px  | Semibold  | 40px        | Page title                      |
| `title2`            | 28px  | Semibold  | 36px        | Section title                   |
| `title3`            | 24px  | Semibold  | 32px        | Subsection title                |
| `subtitle1`         | 20px  | Semibold  | 28px        | Card / panel title              |
| `subtitle2`         | 16px  | Semibold  | 22px        | Dense list item title           |
| `subtitle2Stronger` | 16px  | Bold      | 22px        | Emphasized list item            |
| `body1`             | 14px  | Regular   | 20px        | **Default body**                |
| `body1Strong`       | 14px  | Semibold  | 20px        | Inline emphasis                 |
| `body1Stronger`     | 14px  | Bold      | 20px        | Heavier inline emphasis         |
| `body2`             | 16px  | Regular   | 22px        | Larger-density body             |
| `caption1`          | 12px  | Regular   | 16px        | Helper text, form hints         |
| `caption1Strong`    | 12px  | Semibold  | 16px        | Emphasized helper               |
| `caption1Stronger`  | 12px  | Bold      | 16px        | Badge label                     |
| `caption2`          | 10px  | Regular   | 14px        | Smallest legal / metadata       |
| `caption2Strong`    | 10px  | Semibold  | 14px        | Small emphasized tag            |

### 4.1 Ready-to-copy CSS utility classes

These map 1:1 to the Fluent styles above. Include them in your app once and reuse everywhere.

```css
/* Add to your global stylesheet after design-tokens.css */

.fui-display {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeHero1000);
  line-height: var(--lineHeightHero1000);
  font-weight: var(--fontWeightSemibold);
}
.fui-large-title {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeHero900);
  line-height: var(--lineHeightHero900);
  font-weight: var(--fontWeightSemibold);
}
.fui-title-1 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeHero800);
  line-height: var(--lineHeightHero800);
  font-weight: var(--fontWeightSemibold);
}
.fui-title-2 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeHero700);
  line-height: var(--lineHeightHero700);
  font-weight: var(--fontWeightSemibold);
}
.fui-title-3 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase600);
  line-height: var(--lineHeightBase600);
  font-weight: var(--fontWeightSemibold);
}
.fui-subtitle-1 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase500);
  line-height: var(--lineHeightBase500);
  font-weight: var(--fontWeightSemibold);
}
.fui-subtitle-2 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase400);
  line-height: var(--lineHeightBase400);
  font-weight: var(--fontWeightSemibold);
}
.fui-subtitle-2-stronger {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase400);
  line-height: var(--lineHeightBase400);
  font-weight: var(--fontWeightBold);
}
.fui-body-1 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase300);
  line-height: var(--lineHeightBase300);
  font-weight: var(--fontWeightRegular);
}
.fui-body-1-strong {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase300);
  line-height: var(--lineHeightBase300);
  font-weight: var(--fontWeightSemibold);
}
.fui-body-1-stronger {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase300);
  line-height: var(--lineHeightBase300);
  font-weight: var(--fontWeightBold);
}
.fui-body-2 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase400);
  line-height: var(--lineHeightBase400);
  font-weight: var(--fontWeightRegular);
}
.fui-caption-1 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase200);
  line-height: var(--lineHeightBase200);
  font-weight: var(--fontWeightRegular);
}
.fui-caption-1-strong {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase200);
  line-height: var(--lineHeightBase200);
  font-weight: var(--fontWeightSemibold);
}
.fui-caption-1-stronger {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase200);
  line-height: var(--lineHeightBase200);
  font-weight: var(--fontWeightBold);
}
.fui-caption-2 {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase100);
  line-height: var(--lineHeightBase100);
  font-weight: var(--fontWeightRegular);
}
.fui-caption-2-strong {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase100);
  line-height: var(--lineHeightBase100);
  font-weight: var(--fontWeightSemibold);
}
```

---

## 5. Page defaults

Set these on `<body>` so every element inherits the correct font stack and body size:

```css
body {
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase300);
  line-height: var(--lineHeightBase300);
  font-weight: var(--fontWeightRegular);
  color: var(--colorNeutralForeground1);
  background: var(--colorNeutralBackground1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

code, pre, kbd, samp {
  font-family: var(--fontFamilyMonospace);
  font-size: 0.9375em; /* 13.125px at body size — slight down-scale so monospace matches x-height */
}
```

---

## 6. Alignment rules

- **Left-align** (or start-align) for LTR long-form reading. This is the default.
- **Right-align** in RTL scripts (Arabic, Hebrew). Use CSS logical properties (`text-align: start`) and `dir="rtl"` on the root element.
- **Center** only for short, balanced copy — hero headlines, empty-state messages, modal titles.
- **Never right-align long paragraphs** in LTR content.

Fluent uses **baseline alignment** for vertical rhythm. When you mix styles, align the baselines of the text, not the bounding boxes — this is why size and line-height are paired.

---

## 7. Color for text

Pair type styles with the neutral foreground tokens for hierarchy:

| Hierarchy            | Recommended token              | Style              |
| -------------------- | ------------------------------ | ------------------ |
| Primary heading      | `--colorNeutralForeground1`    | `title1`–`title3`  |
| Body text            | `--colorNeutralForeground1`    | `body1`            |
| Secondary / helper   | `--colorNeutralForeground2`    | `body1`            |
| Tertiary / hint      | `--colorNeutralForeground3`    | `caption1`         |
| Disabled             | `--colorNeutralForegroundDisabled` | any            |
| Link (rest)          | `--colorBrandForegroundLink`   | inherits           |
| Error inline         | `--colorStatusDangerForeground1` | `caption1`       |

Do **not** use brand color as a general text color. It's reserved for links and strong CTAs — using it on body text floods the page with contrast.

---

## 8. Accessibility

- Minimum contrast for standard text: **4.5:1** (WCAG AA).
- Minimum contrast for large text (≥18.5px bold or ≥24px regular): **3:1**.
- Don't use color alone to convey meaning (e.g. error red).
- Use **sentence case** for most UI strings. Avoid ALL CAPS — it's less readable and can be read as shouting by screen readers that pronounce each letter.
- Respect `prefers-reduced-motion` for text that would animate.

---

## 9. Practical examples

```html
<!-- Page header -->
<h1 class="fui-title-1">Settings</h1>
<p class="fui-body-1" style="color: var(--colorNeutralForeground2)">
  Configure your workspace preferences.
</p>

<!-- Card -->
<div class="card">
  <h3 class="fui-subtitle-1">Recent files</h3>
  <p class="fui-body-1">You have 12 items from this week.</p>
  <p class="fui-caption-1" style="color: var(--colorNeutralForeground3)">
    Last synced 3 minutes ago
  </p>
</div>

<!-- Inline link -->
<p class="fui-body-1">
  Read the <a href="/docs" style="color: var(--colorBrandForegroundLink)">documentation</a>
  for more.
</p>
```
