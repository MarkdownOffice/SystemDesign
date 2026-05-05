# DESIGN.md — MarkdownOffice

> **Product:** MarkdownOffice — AI-native, Markdown-based document operating system
> **Aesthetic:** Microsoft Office 365 meets modern SaaS — clean, structured, enterprise-grade, flat surfaces, minimal elevation
> **Foundation:** Microsoft Fluent 2 Web design system
> **Primary brand:** `#0F6CBD` (Fluent brand blue)
> **Typeface:** Segoe UI (system fallback stack)

---

## 1. Identity & Aesthetic Direction

MarkdownOffice is a **structured document OS**, not a simple editor. The visual language reflects this:

- **Clean, flat SaaS chrome** — no heavy shadows, no gradients, no decorative noise
- **Subtle borders over elevation** — surfaces are separated by `1px` neutral strokes, not shadows
- **Dense information hierarchy** — like VS Code + Word, not Notion
- **Brand blue used sparingly** — only for primary actions, active states, links, and focus rings
- **Neutral-first palette** — whites and light grays dominate; color carries meaning, not decoration

**Aesthetic keywords:** structured, precise, enterprise, flat, functional, Office 365, Fluent, developer-friendly, markdown-native, dual-pane editor

**What to avoid:**

- Purple gradients, dark glassmorphism, rounded-everything consumer aesthetics
- Floating elements with heavy shadows
- High-saturation accent overuse
- Comic/playful iconography

---

## 2. Color Tokens

All colors are CSS custom properties from the Fluent 2 token system. Claude Design must use these variable names, not raw hex values.

### Brand (Blue)

| Role                            | Token                             | Light value | Dark value |
| ------------------------------- | --------------------------------- | ----------- | ---------- |
| Primary action fill             | `--colorBrandBackground`          | `#0F6CBD`   | `#115EA3`  |
| Primary hover                   | `--colorBrandBackgroundHover`     | `#115EA3`   | `#0F6CBD`  |
| Primary pressed                 | `--colorBrandBackgroundPressed`   | `#0C3B5E`   | `#0C3B5E`  |
| Brand text / links              | `--colorBrandForeground1`         | `#0F6CBD`   | `#479EF5`  |
| Link text                       | `--colorBrandForegroundLink`      | `#115EA3`   | `#479EF5`  |
| Active indicator / focus border | `--colorBrandStroke1`             | `#0F6CBD`   | `#479EF5`  |
| Subtle brand fill               | `--colorBrandBackground2`         | `#EBF3FC`   | `#082338`  |
| Text on brand fill              | `--colorNeutralForegroundOnBrand` | `#FFFFFF`   | `#FFFFFF`  |

### Neutral Surfaces (page & chrome)

| Role                   | Token                             | Light     | Dark      |
| ---------------------- | --------------------------------- | --------- | --------- |
| Page canvas / cards    | `--colorNeutralBackground1`       | `#FFFFFF` | `#292929` |
| Raised panel / sidebar | `--colorNeutralBackground2`       | `#FAFAFA` | `#1F1F1F` |
| Toolbar / gutter       | `--colorNeutralBackground3`       | `#F5F5F5` | `#141414` |
| Dense toolbar          | `--colorNeutralBackground4`       | `#F0F0F0` | `#0A0A0A` |
| Ghost button hover     | `--colorSubtleBackgroundHover`    | `#F5F5F5` | `#383838` |
| Ghost button pressed   | `--colorSubtleBackgroundPressed`  | `#E0E0E0` | `#2E2E2E` |
| Ghost button selected  | `--colorSubtleBackgroundSelected` | `#EBEBEB` | `#333333` |

### Neutral Text

| Role                   | Token                              | Light     | Dark      |
| ---------------------- | ---------------------------------- | --------- | --------- |
| Primary text           | `--colorNeutralForeground1`        | `#242424` | `#FFFFFF` |
| Secondary text         | `--colorNeutralForeground2`        | `#424242` | `#D6D6D6` |
| Tertiary / placeholder | `--colorNeutralForeground3`        | `#616161` | `#ADADAD` |
| Disabled               | `--colorNeutralForegroundDisabled` | `#BDBDBD` | `#5C5C5C` |

### Borders

| Role                   | Token                   | Light     | Dark      |
| ---------------------- | ----------------------- | --------- | --------- |
| Default control border | `--colorNeutralStroke1` | `#D1D1D1` | `#666666` |
| Subtle divider         | `--colorNeutralStroke2` | `#E0E0E0` | `#525252` |
| Faintest divider       | `--colorNeutralStroke3` | `#F0F0F0` | `#3D3D3D` |

### Status

| Role             | Token                             | Light     |
| ---------------- | --------------------------------- | --------- |
| Error text       | `--colorStatusDangerForeground1`  | `#B10E1C` |
| Error border     | `--colorStatusDangerBorder1`      | `#EEACB2` |
| Error background | `--colorStatusDangerBackground1`  | `#FDF3F4` |
| Success text     | `--colorStatusSuccessForeground1` | `#0E700E` |
| Warning text     | `--colorStatusWarningForeground1` | `#BC4B09` |

### Focus Ring (two-layer — always apply to interactive elements)

```css
:focus-visible {
  outline: 2px solid var(--colorStrokeFocus1); /* white inner */
  outline-offset: -2px;
  box-shadow: 0 0 0 2px var(--colorStrokeFocus2); /* black outer */
}
```

### MarkdownOffice Product Tokens (zone-specific)

```
--mo-shell-header-height: 48px
--mo-ribbon-height: 88px
--mo-ribbon-tab-height: 40px
--mo-ribbon-cmd-height: 48px
--mo-sidebar-width: 220px
--mo-right-panel-width: 280px
--mo-status-bar-height: 24px
--mo-editor-content-max-width: 680px
--mo-editor-gutter-width: 40px

/* Editor surfaces */
--mo-editor-canvas-bg: var(--colorNeutralBackground1)
--mo-editor-source-bg: var(--colorNeutralBackground3)
--mo-editor-preview-bg: var(--colorNeutralBackground1)
--mo-editor-split-border: var(--colorNeutralStroke2)
--mo-editor-gutter-bg: var(--colorNeutralBackground3)
--mo-editor-gutter-fg: var(--colorNeutralForeground3)

/* Ribbon */
--mo-ribbon-bg: var(--colorNeutralBackground1)
--mo-ribbon-border: var(--colorNeutralStroke2)
--mo-ribbon-tab-active-indicator: var(--colorBrandStroke1)
--mo-ribbon-tab-active-fg: var(--colorBrandForeground1)
--mo-ribbon-cmd-hover-bg: var(--colorSubtleBackgroundHover)

/* Sidebar */
--mo-sidebar-bg: var(--colorNeutralBackground2)
--mo-sidebar-border: var(--colorNeutralStroke2)
--mo-sidebar-item-hover: var(--colorSubtleBackgroundHover)
--mo-sidebar-item-active-bg: var(--colorNeutralBackground1Selected)

/* Block system */
--mo-block-selected-bg: var(--colorBrandBackground2)
--mo-block-selected-border: var(--colorBrandStroke1)
--mo-block-locked-bg: var(--colorStatusWarningBackground1)
--mo-block-error-bg: var(--colorStatusDangerBackground1)

/* Agent surfaces */
--mo-agent-propose-bg: var(--colorBrandBackground2)
--mo-agent-propose-border: var(--colorBrandStroke2)

/* Diff / suggestion mode */
--mo-diff-added-bg: rgba(16, 124, 16, 0.12)
--mo-diff-removed-bg: rgba(197, 15, 31, 0.08)

/* Status bar */
--mo-status-bar-bg: var(--colorNeutralBackground3)
--mo-status-bar-fg: var(--colorNeutralForeground3)
```

---

## 3. Typography

**Primary typeface:** Segoe UI with system fallback stack.

```
'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif
```

**Monospace (source editor, code blocks):**

```
Consolas, 'Courier New', Courier, monospace
```

### Type Scale (Fluent 2 ramp)

| Style         | Token                | Size / Line-height | Weight | Use                               |
| ------------- | -------------------- | ------------------ | ------ | --------------------------------- |
| `display`     | `--fontSizeHero1000` | 68px / 92px        | 600    | Marketing hero only               |
| `title1`      | `--fontSizeHero800`  | 32px / 40px        | 600    | Page title                        |
| `title2`      | `--fontSizeHero700`  | 28px / 36px        | 600    | Section title                     |
| `title3`      | `--fontSizeBase600`  | 24px / 32px        | 600    | Subsection                        |
| `subtitle1`   | `--fontSizeBase500`  | 20px / 28px        | 600    | Card / panel title                |
| `subtitle2`   | `--fontSizeBase400`  | 16px / 22px        | 600    | List item title                   |
| `body1` ★     | `--fontSizeBase300`  | **14px / 20px**    | 400    | **Default body, all UI chrome**   |
| `body1Strong` | `--fontSizeBase300`  | 14px / 20px        | 600    | Inline emphasis                   |
| `caption1`    | `--fontSizeBase200`  | 12px / 16px        | 400    | Helper text, status bar, metadata |
| `caption2`    | `--fontSizeBase100`  | 10px / 14px        | 400    | Smallest label, gutter numbers    |

★ Default for all interface text.

### Font Weights

| Token                  | Value | Use                                  |
| ---------------------- | ----- | ------------------------------------ |
| `--fontWeightRegular`  | 400   | Body copy                            |
| `--fontWeightMedium`   | 500   | Mild emphasis                        |
| `--fontWeightSemibold` | 600   | Titles, active tabs, primary buttons |
| `--fontWeightBold`     | 700   | Strong emphasis only                 |

### Preview Markdown Typography (rendered content)

Rendered Markdown in the preview pane uses the same font stack but with document-appropriate sizing:

- `h1` → 32px / semibold
- `h2` → 28px / semibold
- `h3` → 24px / semibold
- `body` → 14px / 20px / regular
- `code inline` → Consolas, 0.9375em, background `--colorNeutralBackground4`
- `blockquote` → left border 3px `--colorBrandStroke1`, italic, `--colorNeutralForeground2`

---

## 4. Spacing Scale

Based on a **4px grid**. Always use token names, not raw pixel values.

| Token                                               | Value    | Common use                               |
| --------------------------------------------------- | -------- | ---------------------------------------- |
| `--spacingHorizontalXXS` / `--spacingVerticalXXS`   | 2px      | Tight badge padding                      |
| `--spacingHorizontalXS` / `--spacingVerticalXS`     | 4px      | Icon gap, dense toolbar                  |
| `--spacingHorizontalS` / `--spacingVerticalS`       | **8px**  | Button padding, list item                |
| `--spacingHorizontalM` / `--spacingVerticalM`       | **12px** | Card padding compact, ribbon btn         |
| `--spacingHorizontalL` / `--spacingVerticalL`       | **16px** | Card default padding, section gap        |
| `--spacingHorizontalXL` / `--spacingVerticalXL`     | 20px     | Large card padding                       |
| `--spacingHorizontalXXL` / `--spacingVerticalXXL`   | 24px     | Dialog padding, page gutter tablet       |
| `--spacingHorizontalXXXL` / `--spacingVerticalXXXL` | 32px     | Major section break, page gutter desktop |

**Nudges** (off-grid, for controls only): `SNudge = 6px`, `MNudge = 10px`

---

## 5. Border Radius

| Token                    | Value   | Use                                                |
| ------------------------ | ------- | -------------------------------------------------- |
| `--borderRadiusNone`     | 0       | Tables, sharp dividers                             |
| `--borderRadiusSmall`    | 2px     | Badges, chips                                      |
| `--borderRadiusMedium`   | **4px** | **Default — buttons, inputs, menus, ribbon items** |
| `--borderRadiusLarge`    | 6px     | Tooltips, popovers                                 |
| `--borderRadiusXLarge`   | **8px** | **Cards, panels, dialogs, modals**                 |
| `--borderRadius2XLarge`  | 12px    | Large cards, feature tiles                         |
| `--borderRadiusCircular` | 10000px | Pill buttons, avatars                              |

---

## 6. Elevation (Shadows)

Fluent uses **double-layer shadows** (ambient + key). In MarkdownOffice, shadows are used sparingly — most chrome uses borders, not elevation.

| Token        | Use in MarkdownOffice                     |
| ------------ | ----------------------------------------- |
| `--shadow2`  | Pressed/active card                       |
| `--shadow4`  | Resting card, tooltip                     |
| `--shadow8`  | Hover card, popover                       |
| `--shadow16` | **Slash command palette, dropdown menus** |
| `--shadow28` | **Dialogs, side drawer**                  |
| `--shadow64` | Modal overlay                             |

**Key rule for MarkdownOffice:** The ribbon, sidebar, header, and status bar use **border separation only** (`--colorNeutralStroke2`), not shadows. Shadows appear only for floating UI (dropdowns, dialogs, command palette).

---

## 7. Component Patterns

### App Shell — Five-Zone Layout

```
┌────────────────────────────────────────────────┐  h: 48px   Header
├────────────────────────────────────────────────┤  h: 88px   Ribbon (40px tabs + 48px commands)
├─────────┬──────────────────────────┬───────────┤
│ Sidebar │  Editor Canvas           │ Right     │
│ 220px   │  ┌──────────┬─────────┐  │ Panel     │
│         │  │  Source  │Preview  │  │ 280px     │
│         │  │  (.md)   │(render) │  │           │
│         │  └──────────┴─────────┘  │           │
├─────────┴──────────────────────────┴───────────┤  h: 24px   Status Bar
└────────────────────────────────────────────────┘
```

### Header (48px)

- Background: `--colorNeutralBackground1`
- Border-bottom: `1px --colorNeutralStroke2`
- Left: hashtag logo + app name (brand blue, semibold) + document title (regular, clickable)
- Right: avatar stack → Share button (primary) → icon buttons (comment, bell, settings, user)
- Share button: `--colorBrandBackground` fill, white text, `--borderRadiusMedium`

### Ribbon (88px = 40px tab row + 48px command row)

**Tab strip (40px):**

- Tab labels: `--colorNeutralForeground2`, semibold on active → `--colorBrandForeground1`
- Active tab indicator: `3px` bottom border in `--colorBrandStroke1`
- Tab hover: `--colorSubtleBackgroundHover` background

**Command row (48px):**

- Background: `--colorNeutralBackground1`
- Groups separated by `1px --colorNeutralStroke2` vertical dividers
- Command buttons: ghost by default (transparent bg), `--colorNeutralForeground1`
  - Hover: `--colorSubtleBackgroundHover`
  - Active/pressed toggle: `--colorNeutralBackground1Selected`, text → `--colorBrandForeground1`
  - Min-width 36px, height 40px, `--borderRadiusMedium`
- Ribbon dropdowns (font, size): height 28px, `1px --colorNeutralStroke1` border, `--borderRadiusMedium`

### Sidebar (220px)

- Background: `--colorNeutralBackground2`
- Border-right: `1px --colorNeutralStroke2`
- Header label: `--fontSizeBase200`, uppercase, `--colorNeutralForeground3`
- Search bar: `--colorNeutralBackground3` fill, `--borderRadiusMedium`, 12px padding
- Tree items: 32px height, `--fontSizeBase300`, `--borderRadiusMedium`
  - Hover: `--colorSubtleBackgroundHover`
  - Active: `--colorNeutralBackground1Selected` + semibold text
  - Indent: 12px per level
- Folder names: semibold, `--colorNeutralForeground1`
- File names: regular, `--colorNeutralForeground2`
- File icon: `--colorBrandForeground1`

### Editor Canvas

**Source pane (left):**

- Background: `--colorNeutralBackground3` (slightly recessed = "code feel")
- Font: Consolas, `--fontSizeBase300`, line-height `--lineHeightBase300`
- Gutter (40px): `--colorNeutralBackground3`, `1px --colorNeutralStroke3` right border, line numbers in `--colorNeutralForeground3`, `--fontSizeBase200`
- Split border: `1px --colorNeutralStroke2`

**Markdown syntax highlighting in source pane:**

- `#` headings → `--colorBrandForeground1`
- `**bold**`, `*italic*` markers → `--colorNeutralForeground3`
- `` `code` `` → red fg `--colorStatusDangerForeground1`, bg `--colorNeutralBackground4`
- `[links]()` → `--colorBrandForegroundLink`
- `>` blockquote bar → `--colorNeutralStroke1`

**Preview pane (right):**

- Background: `--colorNeutralBackground1` (white)
- Max content width: 680px, centered
- Padding: 24px vertical, 32px horizontal
- Content uses document typography (see section 3)

### Block System (editor layer)

Each block is a semantically identified unit with stable ID:

- Hover state: `--colorNeutralBackground1Hover` subtle background
- Selected: `--colorBrandBackground2` fill + `2px --colorBrandStroke1` outline
- Locked (requires approval): `--colorStatusWarningBackground1` bg + `3px --colorStatusWarningBorder1` left border
- Error: `--colorStatusDangerBackground1` bg + `3px --colorStatusDangerBorder1` left border
- Drag handle: appears on hover, `--colorNeutralForeground3`, left of block at `-20px`

### Right Panel (280px)

- Background: `--colorNeutralBackground2`
- Border-left: `1px --colorNeutralStroke2`
- Tabs: "Outline" and "Comments" (same pattern as ribbon tabs, smaller)
- **Outline items:** `--fontSizeBase300`, indent 12px per heading level, active → `--colorBrandForeground1`
- **Comments:** card with `3px --colorBrandStroke1` left border, avatar 28px, timestamp `--colorNeutralForeground3`, body `--colorNeutralForeground1`

### Status Bar (24px)

- Background: `--colorNeutralBackground3`
- Border-top: `1px --colorNeutralStroke2`
- Font: `--fontSizeBase200`, `--colorNeutralForeground3`
- Items: "✓ Saved" (green fg), word count, cursor position, encoding, view mode
- Right: theme toggle, zoom slider

### Buttons

| Variant             | bg                               | text                              | border                      |
| ------------------- | -------------------------------- | --------------------------------- | --------------------------- |
| Primary             | `--colorBrandBackground`         | `--colorNeutralForegroundOnBrand` | none                        |
| Secondary (default) | `--colorNeutralBackground1`      | `--colorNeutralForeground1`       | `1px --colorNeutralStroke1` |
| Subtle / ghost      | transparent                      | `--colorNeutralForeground1`       | none                        |
| Danger              | `--colorStatusDangerBackground3` | white                             | none                        |

All buttons: `--borderRadiusMedium`, `8px/12px` padding, semibold, `--fontSizeBase300`.

### Agent Proposal Surface

When an AI agent proposes a block edit:

- `--colorBrandBackground2` background panel
- `1px --colorBrandStroke2` border
- Top-left badge: `--colorBrandBackground` pill, white text, agent role label (Generator / Validator / Refiner / Sync)
- Accept / Reject buttons inline
- Diff view: added lines `rgba(16,124,16,0.12)` bg + green left border; removed lines `rgba(197,15,31,0.08)` + red left border + strikethrough

### Slash Command Palette

- Floats above editor, anchored to cursor
- `--shadow16` elevation, `--borderRadiusLarge`
- Width: 280px, max-height 320px
- Items: 36px height, icon (28px square, `--colorNeutralBackground3` bg) + label + keyboard shortcut
- Background: `--colorNeutralBackground1`
- Entrance animation: `translateY(-4px)` → `0` over `200ms --curveDecelerateMid`

---

## 8. Motion

All transitions use Fluent 2 motion tokens.

| Scenario              | Duration                     | Curve                  |
| --------------------- | ---------------------------- | ---------------------- |
| Hover color change    | `--durationFaster` (100ms)   | `--curveEasyEase`      |
| Button press          | `--durationUltraFast` (50ms) | `--curveAccelerateMid` |
| Menu / palette open   | `--durationNormal` (200ms)   | `--curveDecelerateMid` |
| Menu / palette close  | `--durationFaster` (100ms)   | `--curveAccelerateMid` |
| Modal open            | `--durationSlow` (300ms)     | `--curveDecelerateMax` |
| Panel slide (sidebar) | `--durationNormal` (200ms)   | `--curveEasyEase`      |
| Card hover lift       | `--durationFaster` (100ms)   | `--curveEasyEase`      |
| Ribbon tab indicator  | `--durationFast` (150ms)     | `--curveEasyEase`      |

**Always animate:** `background-color`, `box-shadow`, `opacity`, `transform`.
**Never animate:** `width`, `height`, `margin`, `padding` (causes layout reflow).
**Reduced motion:** wrap transforms in `@media (prefers-reduced-motion: reduce)` → fade only.

---

## 9. Usage Rules for Claude Design

### When generating any MarkdownOffice screen:

1. **Start from the five-zone shell.** Every screen has Header + Ribbon + Workspace (Sidebar + Editor + Panel) + Status Bar.

2. **Token priority:**
   - `--mo-*` product tokens first (zone-specific)
   - `--color*`, `--font*`, `--spacing*` Fluent alias tokens second
   - Never use raw hex values

3. **Ribbon active state** — the active tab always has a `3px --colorBrandStroke1` bottom underline and `--colorBrandForeground1` text. One tab active at a time.

4. **Split view is the default** — show both Source and Preview panes unless the prompt specifies Source-only or Preview-only.

5. **No heavy shadows on chrome** — ribbon, header, sidebar, status bar use border separation only. Shadows appear only on floating elements (dropdowns, dialogs, palette).

6. **Dark mode is always supported** — use CSS custom properties only. Never hardcode light or dark hex values.

7. **Reading width** — preview content is max 680px, centered. Source editor fills its pane width.

8. **Agent surfaces** are overlaid on blocks, not in a separate panel. They use `--colorBrandBackground2` with brand stroke.

9. **Collaboration cursors** — four named color slots: `#0F6CBD` (blue), `#107C10` (green), `#C50F1F` (red), `#8764B8` (purple). Each user gets one slot.

10. **Accessibility** — every interactive element must have a `:focus-visible` two-layer focus ring. Contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text and UI elements).

### Reference CSS files (already uploaded):

- `design-tokens.css` — 459 Fluent 2 tokens
- `mo-tokens.css` — MarkdownOffice product tokens
- `components-starter.css` — Fluent component patterns
- `mo-components.css` — MarkdownOffice layout + component CSS

### Prompt starters for Claude Design:

- _"Build the MarkdownOffice Docs editor in split-view mode showing the five-zone shell"_
- _"Design the Ribbon Home tab with all formatting command groups"_
- _"Create the slash command palette triggered by `/` in the source pane"_
- _"Show the agent proposal overlay on a paragraph block with diff view"_
- _"Design the sidebar file tree with Documents, Projects, Writing folders"_
- _"Build the right-panel Comments view with two sample comments"_
- _"Generate a dark mode version of the full editor shell"_
