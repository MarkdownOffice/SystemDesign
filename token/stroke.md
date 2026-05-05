# Stroke Widths

Fluent 2 Web defines **four stroke weights** for borders, dividers, focus rings, and outlined icons. Keep them few — consistency matters more than nuance here.

---

## 1. The scale

| Token                    | Value   | Use                                             |
| ------------------------ | ------- | ----------------------------------------------- |
| `--strokeWidthThin`      | `1px`   | **Default** — most borders and dividers         |
| `--strokeWidthThick`     | `2px`   | Focus rings, emphasized borders                 |
| `--strokeWidthThicker`   | `3px`   | Decorative emphasis (tabs active indicator)     |
| `--strokeWidthThickest`  | `4px`   | Hero elements, large selection indicators       |

---

## 2. Use-case guide

| Surface / element              | Stroke           |
| ------------------------------ | ---------------- |
| Input field border (rest)      | `Thin` (1px)     |
| Input field border (focus)     | `Thick` (2px) with brand color |
| Button outline (secondary)     | `Thin` (1px)     |
| Card border                    | `Thin` (1px)     |
| Divider between list items     | `Thin` (1px)     |
| Focus ring (keyboard)          | `Thick` (2px)    |
| Tab active underline           | `Thicker` (3px)  |
| Progress bar (linear)          | `Thicker` (3px) or `Thickest` (4px) |
| Radio / checkbox border        | `Thin` (1px) rest, `Thick` (2px) checked |
| Avatar ring (online badge)     | `Thick` (2px)    |

---

## 3. Focus ring recipe

Fluent focus rings use **two strokes**: an inner ring contrasting with the control and an outer ring contrasting with the page. This is what makes focus visible on any background.

```css
.focusable {
  outline: none;
  position: relative;
}

.focusable:focus-visible {
  outline: var(--strokeWidthThick) solid var(--colorStrokeFocus1);
  outline-offset: -2px;                      /* inset the inner stroke */
  box-shadow: 0 0 0 var(--strokeWidthThick) var(--colorStrokeFocus2);
}
```

- `--colorStrokeFocus1` is white (light) / black (dark) — contrasts with the control fill.
- `--colorStrokeFocus2` is black (light) / white (dark) — contrasts with the page.
- The `:focus-visible` pseudo-class fires only for keyboard focus (not pointer) — this is correct Fluent behavior.

---

## 4. Border + color pairing

Strokes in Fluent combine a width token with a color token. Match the width token to the *role*, not the pixel value:

```css
/* Default input — 1px neutral stroke */
.input {
  border: var(--strokeWidthThin) solid var(--colorNeutralStroke1);
}

/* Error input — still 1px, but danger color */
.input--error {
  border-color: var(--colorStatusDangerBorder2);
}

/* Active / focused input — bump to 2px, brand color */
.input:focus-within {
  border-width: var(--strokeWidthThick);
  border-color: var(--colorBrandStroke1);
  /* Note: changing border-width can shift layout by 1px — see "avoiding layout shift" below */
}
```

---

## 5. Avoiding layout shift on focus

Changing `border-width` on focus pushes the content inside by a pixel. Two fixes:

**Option A — reserve space with a transparent border:**
```css
.input {
  border: var(--strokeWidthThick) solid transparent;
  outline: var(--strokeWidthThin) solid var(--colorNeutralStroke1);
  outline-offset: -1px;
}
.input:focus-visible {
  outline: none;
  border-color: var(--colorBrandStroke1);
}
```

**Option B — use `box-shadow` instead of width change:**
```css
.input {
  border: var(--strokeWidthThin) solid var(--colorNeutralStroke1);
}
.input:focus-visible {
  box-shadow: inset 0 0 0 var(--strokeWidthThick) var(--colorBrandStroke1);
  /* border stays 1px, shadow adds the second pixel inside */
}
```

Option B is simpler; Option A gives cleaner hover states.

---

## 6. SVG icons

For outline icons, match the icon's stroke-width token to the icon size:

| Icon size | Stroke           |
| --------- | ---------------- |
| 12–16px   | `Thin` (1px)     |
| 20–24px   | `Thin` to `Thick` (1–2px) |
| 32px+     | `Thick` (2px)    |

Fluent System Icons ship as **Regular** (1.5px stroke) and **Filled** (no stroke) variants. Use Filled for active/selected state, Regular for rest.
