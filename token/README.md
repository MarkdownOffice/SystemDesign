# Colors

Fluent 2 Web organizes color into two layers: **global palettes** (raw hex values, numbered by lightness) and **alias tokens** (semantic names that reference the palettes). **Always use alias tokens in components.** Global values are only for building new aliases.

This file is the reference for both. Every hex code here is extracted directly from `@fluentui/tokens` — the same source that feeds `Microsoft_Fluent_2_Web.fig`.

---

## 1. The brand palette — `brandWeb` (blue)

The default Microsoft Fluent blue, 16 stops from dark (`10`) to light (`160`). `brand[80]` is primary; the ramp rotates around it.

| Stop  | Hex        | Typical use                              |
| ----- | ---------- | ---------------------------------------- |
| 10    | `#061724`  | Rarely used — darkest shade              |
| 20    | `#082338`  | Dark-theme brand subtle background       |
| 30    | `#0A2E4A`  | Dark-theme subtle fill                   |
| 40    | `#0C3B5E`  | Dark-theme hover states                  |
| 50    | `#0E4775`  | Dark-theme brand border                  |
| 60    | `#0F548C`  | Light-theme pressed, dark brand stroke   |
| 70    | `#115EA3`  | Light-theme hover, dark brand background |
| **80**| **`#0F6CBD`** | **Light-theme primary brand**         |
| 90    | `#2886DE`  | Compound-brand pressed (dark)            |
| 100   | `#479EF5`  | **Dark-theme primary brand**             |
| 110   | `#62ABF5`  | Dark-theme brand foreground hover        |
| 120   | `#77B7F7`  | Light-theme decorative                   |
| 130   | `#96C6FA`  | Light-theme decorative (lighter)         |
| 140   | `#B4D6FA`  | Light-theme brand stroke 2               |
| 150   | `#CFE4FA`  | Light-theme brand fill (subtle)          |
| 160   | `#EBF3FC`  | Light-theme brand background 2           |

> **Interaction rule.** In light mode, the control darkens as a user interacts with it (rest 80 → hover 70 → pressed 60). In dark mode the behavior reverses (rest 100 → hover 110 → pressed 90). You never need to reason about this directly — the alias tokens already encode it.

---

## 2. The neutral palette — `grey`

A 50-step grey ramp from `grey[2]` (`#050505`) to `grey[99]` (`#FCFCFC`), plus pure `white` (`#FFFFFF`) and `black` (`#000000`). Alias tokens reference specific stops per context.

Key stops used in web aliases:

```
grey[8]  #141414     grey[38] #616161     grey[82] #D1D1D1
grey[14] #242424     grey[40] #666666     grey[88] #E0E0E0
grey[16] #292929     grey[44] #707070     grey[94] #F0F0F0
grey[20] #333333     grey[68] #ADADAD     grey[96] #F5F5F5
grey[24] #3D3D3D     grey[70] #B3B3B3     grey[98] #FAFAFA
grey[26] #424242     grey[74] #BDBDBD
```

Alpha variants also exist (`whiteAlpha`, `blackAlpha`, `grey10Alpha`, `grey12Alpha`, `grey14Alpha`) in opacity steps of `5, 10, 20, …, 90` — used for glass surfaces, overlays, and inverted subtle backgrounds.

---

## 3. Neutral alias tokens

These cover roughly 95% of ordinary UI: surfaces, text, and dividers.

### 3.1 Neutral backgrounds

`Background1` is the most prominent surface (white page); numbers increase with subtlety (`2`, `3`, `4`, …) as the surface recedes. In dark mode the relationship inverts — `Background1` is slightly lighter than the black page so cards feel "lifted."

| Token                          | Light      | Dark       |
| ------------------------------ | ---------- | ---------- |
| `--colorNeutralBackground1`    | `#FFFFFF`  | `#292929`  |
| `--colorNeutralBackground2`    | `#FAFAFA`  | `#1F1F1F`  |
| `--colorNeutralBackground3`    | `#F5F5F5`  | `#141414`  |
| `--colorNeutralBackground4`    | `#F0F0F0`  | `#0A0A0A`  |
| `--colorNeutralBackground5`    | `#EBEBEB`  | `#000000`  |
| `--colorNeutralBackground6`    | `#E6E6E6`  | `#333333`  |

Each `BackgroundN` token has matching `Hover`, `Pressed`, and `Selected` variants (e.g. `--colorNeutralBackground1Hover`, `--colorNeutralBackground1Pressed`). Use them for anything that responds to pointer state — list items, menu items, tabs.

Use-case guide:

| Token                        | Best for                                              |
| ---------------------------- | ----------------------------------------------------- |
| `colorNeutralBackground1`    | Page canvas (light), primary card surface (dark)      |
| `colorNeutralBackground2`    | Raised card / panel                                   |
| `colorNeutralBackground3`    | Secondary nested surface                              |
| `colorNeutralBackground4–6`  | Deep nesting, sidebars, toolbars                      |
| `colorSubtleBackground`      | Transparent button fill that shows hover/pressed only |

### 3.2 Neutral foregrounds (text)

Descending prominence — `Foreground1` is the primary text color, `Foreground4` is the most muted.

| Token                         | Light      | Dark       | Use                                 |
| ----------------------------- | ---------- | ---------- | ----------------------------------- |
| `--colorNeutralForeground1`   | `#242424`  | `#FFFFFF`  | Primary text                        |
| `--colorNeutralForeground2`   | `#424242`  | `#D6D6D6`  | Secondary text                      |
| `--colorNeutralForeground3`   | `#616161`  | `#ADADAD`  | Tertiary text (placeholder, hint)   |
| `--colorNeutralForeground4`   | `#707070`  | `#999999`  | Disabled-leaning, timestamps        |
| `--colorNeutralForegroundDisabled`    | `#BDBDBD` | `#5C5C5C` | Disabled text                 |
| `--colorNeutralForegroundOnBrand`     | `#FFFFFF` | `#FFFFFF` | Text on top of brand fill    |
| `--colorNeutralForegroundInverted`    | `#FFFFFF` | `#242424` | Text on inverted surfaces    |

### 3.3 Neutral strokes (borders & dividers)

| Token                    | Light      | Dark       | Use                                     |
| ------------------------ | ---------- | ---------- | --------------------------------------- |
| `--colorNeutralStroke1`  | `#D1D1D1`  | `#666666`  | Default control border (input, button) |
| `--colorNeutralStroke2`  | `#E0E0E0`  | `#525252`  | Subtle divider                          |
| `--colorNeutralStroke3`  | `#F0F0F0`  | `#3D3D3D`  | Faintest divider                        |
| `--colorNeutralStrokeAccessible` | `#616161` | `#ADADAD` | AA-contrast stroke for icons   |

`Stroke1` has `Hover`, `Pressed`, and `Selected` variants for interactive borders.

---

## 4. Brand alias tokens

For CTAs, links, focus indicators, and anywhere you want brand recognition.

### 4.1 Brand backgrounds

| Token                             | Light      | Dark       | Use                                |
| --------------------------------- | ---------- | ---------- | ---------------------------------- |
| `--colorBrandBackground`          | `#0F6CBD`  | `#115EA3`  | Primary button fill                |
| `--colorBrandBackgroundHover`     | `#115EA3`  | `#0F6CBD`  | Primary button hover               |
| `--colorBrandBackgroundPressed`   | `#0C3B5E`  | `#0C3B5E`  | Primary button pressed             |
| `--colorBrandBackgroundSelected`  | `#0F548C`  | `#0F548C`  | Primary button selected            |
| `--colorBrandBackground2`         | `#EBF3FC`  | `#082338`  | Subtle brand fill (banners, callouts) |

### 4.2 Brand foregrounds (text & icons)

| Token                                | Light      | Dark       | Use                           |
| ------------------------------------ | ---------- | ---------- | ----------------------------- |
| `--colorBrandForeground1`            | `#0F6CBD`  | `#479EF5`  | Link text, brand icons        |
| `--colorBrandForeground2`            | `#115EA3`  | `#62ABF5`  | Link text (secondary density) |
| `--colorBrandForegroundLink`         | `#115EA3`  | `#479EF5`  | Inline hyperlinks             |
| `--colorBrandForegroundLinkHover`    | `#0F548C`  | `#62ABF5`  | Link hover                    |
| `--colorBrandForegroundLinkPressed`  | `#0C3B5E`  | `#2886DE`  | Link pressed                  |

### 4.3 Brand strokes

| Token                  | Light      | Dark       | Use                           |
| ---------------------- | ---------- | ---------- | ----------------------------- |
| `--colorBrandStroke1`  | `#0F6CBD`  | `#479EF5`  | Focus ring, active outline    |
| `--colorBrandStroke2`  | `#B4D6FA`  | `#0E4775`  | Subtle brand border           |

### 4.4 Compound brand (for split-state controls)

Used for Checkbox, Radio, Switch, and Slider — where the control background and the fill both need brand color but at slightly different shades.

| Token                                     | Light      | Dark       |
| ----------------------------------------- | ---------- | ---------- |
| `--colorCompoundBrandBackground`          | `#0F6CBD`  | `#479EF5`  |
| `--colorCompoundBrandBackgroundHover`     | `#115EA3`  | `#62ABF5`  |
| `--colorCompoundBrandBackgroundPressed`   | `#0F548C`  | `#2886DE`  |
| `--colorCompoundBrandForeground1`         | `#0F6CBD`  | `#479EF5`  |
| `--colorCompoundBrandStroke`              | `#0F6CBD`  | `#479EF5`  |

---

## 5. Status colors

Three status families: **Danger** (red for errors), **Success** (green), **Warning** (orange). Each has three background intensities (`1` = subtlest, `3` = full saturation) plus matching foregrounds and borders.

### 5.1 Danger (error) — built from the `cranberry` palette

| Token                                 | Light      | Dark       | Use                    |
| ------------------------------------- | ---------- | ---------- | ---------------------- |
| `--colorStatusDangerBackground1`      | `#FDF3F4`  | `#3B0509`  | Inline error panel     |
| `--colorStatusDangerBackground2`      | `#EEACB2`  | `#6E0811`  | Emphasized error tag   |
| `--colorStatusDangerBackground3`      | `#C50F1F`  | `#C50F1F`  | Destructive button     |
| `--colorStatusDangerBackground3Hover` | `#B10E1C`  | `#B10E1C`  | Destructive hover      |
| `--colorStatusDangerForeground1`      | `#B10E1C`  | `#DC626D`  | Error text             |
| `--colorStatusDangerForeground3`      | `#C50F1F`  | `#EEACB2`  | Error icon             |
| `--colorStatusDangerBorder1`          | `#EEACB2`  | `#C50F1F`  | Subtle error border    |
| `--colorStatusDangerBorderActive`     | `#C50F1F`  | `#DC626D`  | Focus / active border  |

### 5.2 Success — built from the `green` palette

| Token                             | Light      | Dark       | Use                        |
| --------------------------------- | ---------- | ---------- | -------------------------- |
| `--colorStatusSuccessBackground1` | `#F1FAF1`  | `#052505`  | Success panel / banner     |
| `--colorStatusSuccessBackground2` | `#9FD89F`  | `#094509`  | Success tag                |
| `--colorStatusSuccessBackground3` | `#107C10`  | `#107C10`  | Success chip / confirm btn |
| `--colorStatusSuccessForeground1` | `#0E700E`  | `#54B054`  | Success text               |
| `--colorStatusSuccessForeground3` | `#107C10`  | `#9FD89F`  | Success icon               |
| `--colorStatusSuccessBorder1`     | `#9FD89F`  | `#107C10`  | Subtle success border      |

### 5.3 Warning — built from `marigold` / `pumpkin` family

| Token                             | Light      | Dark       | Use                 |
| --------------------------------- | ---------- | ---------- | ------------------- |
| `--colorStatusWarningBackground1` | `#FFF9F5`  | `#4A1E04`  | Warning banner      |
| `--colorStatusWarningBackground2` | `#FDCFB4`  | `#8A3707`  | Warning tag         |
| `--colorStatusWarningBackground3` | `#F7630C`  | `#F7630C`  | Warning chip        |
| `--colorStatusWarningForeground1` | `#BC4B09`  | `#FAA06B`  | Warning text        |
| `--colorStatusWarningForeground3` | `#BC4B09`  | `#F98845`  | Warning icon        |
| `--colorStatusWarningBorder1`     | `#FDCFB4`  | `#F7630C`  | Subtle warning border |

---

## 6. Subtle backgrounds (transparent controls)

For ghost buttons, toolbar items, and any control whose rest state has no fill — only the hover/pressed states show color.

| Token                                  | Light         | Dark          | Use               |
| -------------------------------------- | ------------- | ------------- | ----------------- |
| `--colorSubtleBackground`              | `transparent` | `transparent` | Ghost button rest |
| `--colorSubtleBackgroundHover`         | `#F5F5F5`     | `#383838`     | Ghost button hover |
| `--colorSubtleBackgroundPressed`       | `#E0E0E0`     | `#2E2E2E`     | Ghost button pressed |
| `--colorSubtleBackgroundSelected`      | `#EBEBEB`     | `#333333`     | Toolbar toggle on |

---

## 7. Focus indicators

Fluent uses a **two-color focus ring** — an inner stroke that contrasts with the control and an outer stroke that contrasts with the page. This guarantees visibility on any background.

| Token                 | Light      | Dark       | Use                |
| --------------------- | ---------- | ---------- | ------------------ |
| `--colorStrokeFocus1` | `#FFFFFF`  | `#000000`  | Inner focus stroke |
| `--colorStrokeFocus2` | `#000000`  | `#FFFFFF`  | Outer focus stroke |

A correct focus-ring implementation:

```css
.my-button:focus-visible {
  outline: var(--strokeWidthThick) solid var(--colorStrokeFocus1);
  outline-offset: -2px;
  box-shadow: 0 0 0 var(--strokeWidthThick) var(--colorStrokeFocus2);
}
```

---

## 8. Generic palette tokens (categorical color)

Fluent ships 24 additional palettes — `Red`, `DarkRed`, `Cranberry`, `Pumpkin`, `Peach`, `Marigold`, `Gold`, `Brass`, `Brown`, `DarkOrange`, `Forest`, `Seafoam`, `LightGreen`, `Green`, `DarkGreen`, `LightTeal`, `Teal`, `Steel`, `Blue`, `RoyalBlue`, `Cornflower`, `Navy`, `Lavender`, `Purple`, `Grape`, `Lilac`, `Pink`, `Magenta`, `Plum`, `Beige`, `Mink`, `Platinum`, `Anchor`.

Use these for **categorical UI**: avatar initials, calendar events, badge/tag collections, multi-series charts. Each has three levels:

```
--colorPaletteBlueBackground1   (subtlest)
--colorPaletteBlueBackground2   (medium)
--colorPaletteBlueBackground3   (full saturation)
--colorPaletteBlueForeground1
--colorPaletteBlueForeground2
--colorPaletteBlueForeground3
--colorPaletteBlueBorder1
--colorPaletteBlueBorder2
--colorPaletteBlueBorderActive
```

Swap `Blue` for any palette name. Don't use these for status communication — they're decorative, and misusing them for "success green" or "error red" breaks the semantic promise of the status tokens.

---

## 9. Rules of thumb

1. **Default to neutral.** Most UI should be in neutral tokens. Brand and status are accents.
2. **Avoid re-coloring on hover manually.** Each alias has `Hover`, `Pressed`, `Selected` siblings — use them.
3. **Use `transparent` for layout.** If two surfaces should blend, use `--colorTransparentBackground`, not matching hex codes — this ensures dark mode stays correct.
4. **Never change color on focus.** Add a stroke instead. Color-only focus fails keyboard users.
5. **Test both themes.** The alias names are identical in both themes; swap `data-theme="dark"` on `<html>` to verify.

---

## 10. Finding the right token

Ask yourself in order:

1. Is this a **surface**? → `colorNeutralBackgroundN` (or `colorSubtleBackground` for ghost).
2. Is this **text on that surface**? → `colorNeutralForegroundN`.
3. Does it need **brand identity** (primary CTA, link)? → `colorBrandBackground` / `colorBrandForeground1`.
4. Does it communicate **status**? → `colorStatusDanger|Success|Warning...`.
5. Is it **categorical / decorative**? → `colorPalette...`.
6. Is it an **interactive state**? → append `Hover`, `Pressed`, `Selected`, or `Disabled`.
7. Is it a **border**? → `colorNeutralStrokeN` / `colorBrandStroke1`.

If none of those fit, you're likely re-inventing a Fluent concept — check `design-tokens.css` for a token whose name matches your intent before falling back to hex.
