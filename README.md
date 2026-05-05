# MarkdownOffice Design System

![MarkdownOffice Logo](./MarkdownOffice-Logo.png)
> **Universal Design System** for MarkdownOffice — built on Microsoft Fluent 2 Web.
> Primary brand: `#0F6CBD`. Typeface: **Segoe UI**. Architecture: token-first, AI-compatible.

This design system is the single source of visual truth for **MarkdownOffice Docs, Slide, and Excel**. It is a production-ready adaptation of Microsoft Fluent 2 Web, extended with MarkdownOffice-specific tokens, component patterns, and layout conventions.

---

## 1. Philosophy

MarkdownOffice inherits Fluent 2's two-layer token architecture and adds a third layer: **product-specific semantic tokens** that encode the unique needs of a Markdown-native document OS.

```
Global tokens  →  Fluent alias tokens  →  MarkdownOffice product tokens
(raw hex)          (colorBrandBg)          (--mo-editor-surface)
```

- **Global tokens**: Never use directly in components. Internal palette only.
- **Fluent alias tokens**: Use for all standard UI chrome (buttons, inputs, menus, dialogs).
- **MarkdownOffice tokens**: Use for editor canvas, ribbon, block system, agent surfaces, and split-pane layout. Defined in `mo-tokens.css`.

---

## 2. File structure

```
markdownoffice-design-system/
├── README.md                      ← this file
├── design-tokens.css              ← all 459 Fluent 2 tokens (do not edit)
├── mo-tokens.css                  ← MarkdownOffice product tokens (extends Fluent)
├── components-starter.css         ← Fluent component patterns (buttons, inputs, etc.)
├── mo-components.css              ← MarkdownOffice-specific components
│                                    (ribbon, editor pane, block, sidebar, status bar)
├── tailwind.config.js             ← Tailwind mapped to Fluent + MO tokens
└── tokens/
    ├── colors.md                  ← color palette & alias reference
    ├── typography.md              ← type ramp (display → caption2)
    ├── spacing.md                 ← spacing scale
    ├── radius.md                  ← border-radius scale
    ├── elevation.md               ← shadow elevation system
    ├── stroke.md                  ← stroke widths
    └── motion.md                  ← curves & durations
```

---

## 3. Quick start

### 3.1 Import order (critical)

```html
<head>
  <!-- 1. Fluent 2 global + alias tokens -->
  <link rel="stylesheet" href="/design-system/design-tokens.css" />

  <!-- 2. MarkdownOffice product tokens -->
  <link rel="stylesheet" href="/design-system/mo-tokens.css" />

  <!-- 3. Fluent component patterns -->
  <link rel="stylesheet" href="/design-system/components-starter.css" />

  <!-- 4. MarkdownOffice component patterns -->
  <link rel="stylesheet" href="/design-system/mo-components.css" />

  <!-- 5. Your app stylesheet -->
  <link rel="stylesheet" href="/app.css" />
</head>
```

### 3.2 Theme switching

```html
<!-- Light (default — no attribute needed) -->
<html>

<!-- Dark -->
<html data-theme="dark">

<!-- Follows OS -->
<!-- (handled automatically via prefers-color-scheme in design-tokens.css) -->
```

### 3.3 Basic usage

```css
/* A primary action button */
.my-action {
  background: var(--colorBrandBackground);
  color: var(--colorNeutralForegroundOnBrand);
  font-family: var(--fontFamilyBase);
  font-size: var(--fontSizeBase300);
  font-weight: var(--fontWeightSemibold);
  padding: var(--spacingVerticalS) var(--spacingHorizontalM);
  border-radius: var(--borderRadiusMedium);
  border: none;
  transition: background var(--durationFaster) var(--curveEasyEase);
}
.my-action:hover  { background: var(--colorBrandBackgroundHover); }
.my-action:active { background: var(--colorBrandBackgroundPressed); }

/* The editor canvas */
.editor-surface {
  background: var(--mo-editor-canvas-bg);
  border-right: var(--strokeWidthThin) solid var(--mo-editor-split-border);
}
```

---

## 4. Token categories

### 4.1 Fluent alias tokens (459 total)

| Category      | Count | Example                        | Use                        |
| ------------- | ----- | ------------------------------ | -------------------------- |
| Neutral color | ~80   | `--colorNeutralBackground1`    | Page and surface fills     |
| Brand color   | ~30   | `--colorBrandBackground`       | Primary buttons, CTAs      |
| Status color  | ~50   | `--colorStatusDangerBackground3` | Error, warning, success   |
| Palette color | ~150  | `--colorPaletteBlueBackground2` | Avatars, badges, tags     |
| Shadow        | 12    | `--shadow16`                   | Cards, flyouts, dialogs    |
| Typography    | 23    | `--fontSizeBase300`            | Type scale                 |
| Spacing       | 22    | `--spacingHorizontalM`         | Padding, margin, gap       |
| Radius        | 11    | `--borderRadiusMedium`         | Rounded corners            |
| Stroke        | 4     | `--strokeWidthThin`            | Borders, dividers          |
| Motion        | 17    | `--durationNormal`             | Transitions, animations    |

Full value tables: `tokens/*.md`

### 4.2 MarkdownOffice product tokens

Defined in `mo-tokens.css`. Categories:

| Category          | Prefix           | Examples                                      |
| ----------------- | ---------------- | --------------------------------------------- |
| App shell         | `--mo-shell-`    | `--mo-shell-header-height`                    |
| Ribbon / toolbar  | `--mo-ribbon-`   | `--mo-ribbon-bg`, `--mo-ribbon-tab-active`    |
| Editor canvas     | `--mo-editor-`   | `--mo-editor-canvas-bg`, `--mo-editor-gutter` |
| Block system      | `--mo-block-`    | `--mo-block-focus-ring`, `--mo-block-hover`   |
| Sidebar / panels  | `--mo-sidebar-`  | `--mo-sidebar-width`, `--mo-sidebar-bg`       |
| Status bar        | `--mo-status-`   | `--mo-status-bar-height`, `--mo-status-bar-bg`|
| Agent surface     | `--mo-agent-`    | `--mo-agent-propose-bg`, `--mo-agent-badge`   |
| Collaboration     | `--mo-collab-`   | `--mo-collab-cursor-`, `--mo-collab-comment`  |

---

## 5. Typography

System: **Segoe UI** (Windows-native, falls through to platform font elsewhere).

Default body: `--fontSizeBase300` (14px) / `--lineHeightBase300` (20px) / `--fontWeightRegular`.

Named styles available via `.fui-*` classes from `components-starter.css`:
`.fui-display`, `.fui-title-1`, `.fui-body-1`, `.fui-caption-1`, etc.

See `tokens/typography.md` for the full ramp.

---

## 6. Layout architecture (MarkdownOffice-specific)

The Docs editor follows a strict five-zone layout:

```
┌─────────────────────────────────────────────────────────┐
│  Header (app title + tab bar + share/collab)            │  --mo-shell-header-height: 48px
├─────────────────────────────────────────────────────────┤
│  Ribbon (toolbar tabs + command groups)                 │  --mo-ribbon-height: 88px
├────────────┬────────────────────────────┬───────────────┤
│  Sidebar   │  Editor Canvas             │  Right Panel  │
│  (Files /  │  ┌──────────┬──────────┐  │  (Outline /   │
│  Outline)  │  │  Source  │ Preview  │  │  Comments)    │
│            │  │  (Md)    │ (HTML)   │  │               │
│  --mo-     │  └──────────┴──────────┘  │               │
│  sidebar-  │                            │               │
│  width     │  Split / Source / Preview  │               │
├────────────┴────────────────────────────┴───────────────┤
│  Status bar (word count, cursor, theme, zoom)           │  --mo-status-bar-height: 24px
└─────────────────────────────────────────────────────────┘
```

---

## 7. Dark mode

All tokens are theme-aware. Switch with `data-theme="dark"` on `<html>`. MarkdownOffice tokens inherit the correct Fluent alias at each theme automatically.

No component code changes required.

---

## 8. Accessibility

- All Fluent alias tokens meet WCAG 2.1 AA contrast (4.5:1 for body text, 3:1 for large text).
- Focus rings use the two-layer Fluent pattern (inner + outer stroke) — never color alone.
- MarkdownOffice tokens do not override contrast guarantees.
- High-contrast mode: always pair shadow with a fallback border. See `tokens/elevation.md §7`.
- Reduced motion: wrap transform-based transitions in `prefers-reduced-motion`. See `tokens/motion.md §5`.

---

## 9. Using with Tailwind

Map is complete in `tailwind.config.js`. All Fluent + MarkdownOffice tokens are available as utility classes:

```html
<!-- Fluent tokens -->
<div class="bg-neutral-bg-1 text-neutral-fg-1 shadow-4 rounded-xl">

<!-- MarkdownOffice tokens (via CSS variables in Tailwind arbitrary values) -->
<div class="bg-[var(--mo-editor-canvas-bg)] h-[var(--mo-shell-header-height)]">
```

---

## 10. Versioning

This design system follows the MarkdownOffice product version. Breaking changes to token names will be announced in the changelog. Always use token names — never raw hex values — to ensure forward compatibility.

---

## 11. References

- Fluent 2 spec: https://fluent2.microsoft.design
- Fluent 2 alias tokens: https://fluent2.microsoft.design/color-tokens
- Fluent UI React v9: https://github.com/microsoft/fluentui
- MarkdownOffice product spec: `MarkdownOffice_Master_Document.md`
- MarkdownOffice Docs spec: `MarkdownOffice_Docs_Master_Document.md`
