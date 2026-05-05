# Border Radius

Fluent 2 uses a subtle rounding language — most controls are lightly rounded (`Small` = 2px or `Medium` = 4px), with progressively rounder corners reserved for larger surfaces and pill-shaped controls.

---

## 1. The scale

| Token                       | Value       | Use                                        |
| --------------------------- | ----------- | ------------------------------------------ |
| `--borderRadiusNone`        | `0`         | Sharp corners (tables, dividers)           |
| `--borderRadiusSmall`       | `2px`       | Small chips, badges                        |
| `--borderRadiusMedium`      | `4px`       | **Default** — buttons, inputs, tabs        |
| `--borderRadiusLarge`       | `6px`       | Menus, tooltips, popovers                  |
| `--borderRadiusXLarge`      | `8px`       | Cards, panels, dialogs                     |
| `--borderRadius2XLarge`     | `12px`      | Large cards, hero images                   |
| `--borderRadius3XLarge`     | `16px`      | Feature tiles, marketing surfaces          |
| `--borderRadius4XLarge`     | `24px`      | Large marketing surfaces                   |
| `--borderRadius5XLarge`     | `32px`      | Very large decorative surfaces             |
| `--borderRadius6XLarge`     | `40px`      | Rare — full-bleed marketing                |
| `--borderRadiusCircular`    | `10000px`   | Pills and circular avatars                 |

> `Circular` is set to `10000px` (not `50%`) so the rounding is always extreme enough to form a pill regardless of element dimensions. At any realistic size, a 10000px radius clips to a perfect half-pill.

---

## 2. Component mapping

| Component            | Radius token          | Rationale                                 |
| -------------------- | --------------------- | ----------------------------------------- |
| Primary button       | `Medium` (4px)        | Fluent default                            |
| Icon-only button     | `Medium` (4px)        | Matches other buttons                     |
| Pill button          | `Circular`            | When the shape is the signal              |
| Input / textarea     | `Medium` (4px)        | Matches buttons for alignment             |
| Checkbox             | `Small` (2px)         | Crisp, tight control                      |
| Radio                | `Circular`            | Required by convention                    |
| Badge / chip         | `Small` (2px) or `Circular` (pill) | Small for data; pill for status |
| Avatar               | `Circular`            | Fluent default                            |
| Avatar (square)      | `Medium` (4px)        | When alignment in a grid matters          |
| Tooltip              | `Medium` (4px)        | Small surface                             |
| Menu                 | `Medium` (4px)        | Matches its trigger button                |
| Dialog / modal       | `XLarge` (8px)        | Larger surface, softer feel               |
| Card                 | `XLarge` (8px)        | **Fluent standard**                       |
| Sheet / drawer       | `XLarge` (8px) on exposed edges only | Others flush to viewport   |
| Code block           | `Medium` (4px)        | Match inline code styling                 |

---

## 3. Mixing radii

Nested containers should round *more gently* on the inside — a card with `XLarge` (8px) radius should contain buttons with `Medium` (4px), not more.

```css
.card {
  border-radius: var(--borderRadiusXLarge);   /* 8px */
  padding: var(--spacingVerticalL) var(--spacingHorizontalL);
}
.card .btn {
  border-radius: var(--borderRadiusMedium);   /* 4px */
}
```

Avoid matching inner and outer radius — it creates a "coloring-book" effect.

---

## 4. Asymmetric radius

For sheets, drawers, and accordions pinned to an edge, round only the exposed corners:

```css
/* Bottom sheet — only top corners rounded */
.bottom-sheet {
  border-top-left-radius: var(--borderRadiusXLarge);
  border-top-right-radius: var(--borderRadiusXLarge);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

/* Left drawer — only right corners rounded */
.left-drawer {
  border-start-end-radius: var(--borderRadiusXLarge);
  border-end-end-radius: var(--borderRadiusXLarge);
}
```

Logical properties (`border-start-*`, `border-end-*`) are preferred — they handle RTL correctly.

---

## 5. Clipping content

When rounding a container whose children might overflow (e.g. an image in a card), add `overflow: hidden`:

```css
.card-with-image {
  border-radius: var(--borderRadiusXLarge);
  overflow: hidden;
}
```

Without it, the image corners will protrude past the card edge.

---

## 6. Pill buttons

Use `Circular` for chips and tag-like UI:

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: var(--spacingHorizontalXS);
  padding: var(--spacingVerticalXXS) var(--spacingHorizontalS);
  border-radius: var(--borderRadiusCircular);
  background: var(--colorNeutralBackground3);
  color: var(--colorNeutralForeground2);
  font-size: var(--fontSizeBase200);
}
```

Don't use `Circular` on rectangular containers — it forces the aspect into a horizontal capsule, which can crop content in unexpected ways.

---

## 7. Quick reference for Tailwind

If you're using Tailwind with the config in `/design-system/tailwind.config.js`:

```html
<button class="rounded">...</button>        <!-- 4px, default -->
<button class="rounded-sm">...</button>     <!-- 2px -->
<button class="rounded-lg">...</button>     <!-- 6px -->
<button class="rounded-xl">...</button>     <!-- 8px, cards -->
<button class="rounded-full">...</button>   <!-- pill/circular -->
```
