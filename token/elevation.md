# Elevation (Shadows)

Fluent 2 uses **six shadow depths** to communicate surface elevation, each with a neutral and a brand-tinted variant. Every shadow is a **double layer**: a tight ambient shadow (close to the surface, for crisp edges) plus a softer key shadow (the larger, offset drop shadow).

This double-layer approach keeps surfaces readable on any background — neither layer alone gives enough contrast on both light and dark themes.

---

## 1. The elevation scale

| Token          | Ambient     | Key (offset)       | Use                                      |
| -------------- | ----------- | ------------------ | ---------------------------------------- |
| `--shadow2`    | `0 0 2px`   | `0 1px 2px`        | Pressed / static card (barely lifted)    |
| `--shadow4`    | `0 0 2px`   | `0 2px 4px`        | Resting card, tooltip                    |
| `--shadow8`    | `0 0 2px`   | `0 4px 8px`        | Hover over card, popover                 |
| `--shadow16`   | `0 0 2px`   | `0 8px 16px`       | Menu, dropdown, date picker              |
| `--shadow28`   | `0 0 8px`   | `0 14px 28px`      | Dialog, side panel, flyout               |
| `--shadow64`   | `0 0 8px`   | `0 32px 64px`      | Modal, full-screen drawer                |

Each has a `Brand` variant (e.g. `--shadow16Brand`) that uses a slightly denser shadow — for primary surfaces where you want the lift to feel more pronounced. Don't default to brand shadows; use them only for "hero" moments like a featured card on a marketing page.

---

## 2. Light vs. dark

Shadows are automatically stronger in dark mode — a 12% ambient in light becomes 24% in dark, and the key shadow doubles in opacity. You get this for free by using the alias tokens; don't try to override.

| Depth | Light (ambient / key)    | Dark (ambient / key)    |
| ----- | ------------------------ | ----------------------- |
| 2     | 0.12 / 0.14              | 0.24 / 0.28             |
| 4     | 0.12 / 0.14              | 0.24 / 0.28             |
| 8     | 0.12 / 0.14              | 0.24 / 0.28             |
| 16    | 0.12 / 0.14              | 0.24 / 0.28             |
| 28    | 0.12 / 0.14              | 0.24 / 0.28             |
| 64    | 0.12 / 0.14              | 0.24 / 0.28             |

Brand variants use fixed opacities (0.30 ambient, 0.25 key) in both themes.

---

## 3. Component mapping

| Surface                      | Token          |
| ---------------------------- | -------------- |
| Card (resting)               | `--shadow4`    |
| Card (hover)                 | `--shadow8`    |
| Card (pressed / active)      | `--shadow2`    |
| Tooltip                      | `--shadow4`    |
| Popover / flyout             | `--shadow8`    |
| Menu / select dropdown       | `--shadow16`   |
| Date picker / color picker   | `--shadow16`   |
| Dialog / non-modal drawer    | `--shadow28`   |
| Modal overlay / sheet        | `--shadow64`   |
| Floating action button       | `--shadow8`    |

---

## 4. Surface + shadow recipe

A Fluent card:

```css
.card {
  background: var(--colorNeutralBackground1);
  border: var(--strokeWidthThin) solid var(--colorNeutralStroke2);
  border-radius: var(--borderRadiusXLarge);
  box-shadow: var(--shadow4);
  padding: var(--spacingVerticalL) var(--spacingHorizontalL);
  transition: box-shadow var(--durationFaster) var(--curveEasyEase);
}

.card:hover {
  box-shadow: var(--shadow8);
}

.card:active {
  box-shadow: var(--shadow2);
}
```

A modal:

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--colorBackgroundOverlay);  /* resolves to rgba(0,0,0,0.4) light / similar dark */
  z-index: 1000;
}

.modal {
  background: var(--colorNeutralBackground1);
  border-radius: var(--borderRadiusXLarge);
  box-shadow: var(--shadow64);
  padding: var(--spacingVerticalXXL) var(--spacingHorizontalXXL);
  max-width: 560px;
  margin: 10vh auto;
}
```

---

## 5. Interaction transitions

Shadows are expressive — use transitions so the elevation change *feels* like the surface moved. Keep the duration short:

```css
.elevated {
  transition: box-shadow var(--durationFaster) var(--curveEasyEase);
}
```

`durationFaster` (100ms) + `curveEasyEase` gives a snappy, responsive feel. Longer durations make the UI feel sluggish.

---

## 6. When to not use shadow

- **Inside a card.** Nested elevation competes with the card's shadow and looks noisy. Use backgrounds (`Background2`, `Background3`) to create nested hierarchy instead.
- **On text.** Text shadows are rarely a Fluent pattern. If you need separation between text and a busy background, use a semi-transparent background layer.
- **On borders / dividers.** A border *is* the separation. Adding a shadow to it looks amateurish.
- **High-contrast mode.** Users with `prefers-contrast: more` may have shadows disabled. Always pair a shadow with a border so the surface remains bounded without it.

---

## 7. High-contrast consideration

```css
.card {
  box-shadow: var(--shadow4);
}

@media (prefers-contrast: more), (forced-colors: active) {
  .card {
    box-shadow: none;
    border: var(--strokeWidthThick) solid var(--colorNeutralStroke1);
  }
}
```

In Windows High Contrast mode (forced colors), shadows are dropped entirely by the OS. The fallback border guarantees the card is still distinguishable.
