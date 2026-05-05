# Motion

Fluent 2 motion is built from two axes: **curves** (the shape of the easing) and **durations** (how long the motion takes). Pairing them correctly is what makes transitions feel Fluent — snappy for entrances, lingering for exits, always honest about what just changed.

---

## 1. Curves

Nine named cubic-bezier curves across three families. Pick the family based on the motion's direction:

- **Accelerate** — starts slow, ends fast. Use for **exits** (things leaving the screen).
- **Decelerate** — starts fast, ends slow. Use for **entrances** (things arriving).
- **EasyEase** — symmetric, gentle in and out. Use for **state changes** that stay on screen (hover, focus, value changes).
- **Linear** — constant velocity. Use only for **looping** motions (spinners) or value updates.

| Token                     | Cubic-bezier              | Use                                                |
| ------------------------- | ------------------------- | -------------------------------------------------- |
| `--curveAccelerateMax`    | `cubic-bezier(0.9,0.1,1,0.2)`   | Aggressive exit (dismissing a toast)         |
| `--curveAccelerateMid`    | `cubic-bezier(1,0,1,1)`         | Standard exit (closing a menu)               |
| `--curveAccelerateMin`    | `cubic-bezier(0.8,0,0.78,1)`    | Subtle exit (fading out tooltip)             |
| `--curveDecelerateMax`    | `cubic-bezier(0.1,0.9,0.2,1)`   | Aggressive entrance (modal arriving)         |
| `--curveDecelerateMid`    | `cubic-bezier(0,0,0,1)`         | Standard entrance (menu opening)             |
| `--curveDecelerateMin`    | `cubic-bezier(0.33,0,0.1,1)`    | Subtle entrance (tooltip appearing)          |
| `--curveEasyEaseMax`      | `cubic-bezier(0.8,0,0.2,1)`     | Punchy state change (toggle flipping)        |
| `--curveEasyEase`         | `cubic-bezier(0.33,0,0.67,1)`   | **Default** — most transitions               |
| `--curveLinear`           | `cubic-bezier(0,0,1,1)`         | Loops (progress bars, spinners)              |

> **Default.** If you're not sure which curve to use, reach for `--curveEasyEase`. It's the right answer for hover states, focus rings, value changes, and most color transitions.

---

## 2. Durations

Eight named durations. Shorter = more responsive; longer = more cinematic. Most UI transitions should feel *fast* — users register micro-motions best under 200ms.

| Token                   | Value    | Use                                                |
| ----------------------- | -------- | -------------------------------------------------- |
| `--durationUltraFast`   | `50ms`   | Instant feedback (pressed state, ripple start)     |
| `--durationFaster`      | `100ms`  | **Most hover/focus state changes**                 |
| `--durationFast`        | `150ms`  | Small component transitions (button color shift)   |
| `--durationNormal`      | `200ms`  | **Default** — medium transitions (menu open)       |
| `--durationGentle`      | `250ms`  | Slightly cinematic (card lift, drawer slide)       |
| `--durationSlow`        | `300ms`  | Modal open, large surface entry                    |
| `--durationSlower`      | `400ms`  | Full-screen transition, hero animation             |
| `--durationUltraSlow`   | `500ms`  | Rare — intentionally dramatic                      |

> **Rule of thumb.** Your default transition is `var(--durationFaster) var(--curveEasyEase)` — 100ms + ease. Reach for `durationNormal` (200ms) for anything that slides, grows, or translates more than a few pixels.

---

## 3. Curve × duration pairing

Some combinations are natural; others feel broken. Use this matrix:

| Motion type              | Curve                    | Duration             |
| ------------------------ | ------------------------ | -------------------- |
| Hover color change       | `curveEasyEase`          | `durationFaster`     |
| Button press feedback    | `curveAccelerateMid`     | `durationUltraFast`  |
| Tooltip appear           | `curveDecelerateMin`     | `durationFast`       |
| Tooltip disappear        | `curveAccelerateMin`     | `durationFast`       |
| Menu open                | `curveDecelerateMid`     | `durationNormal`     |
| Menu close               | `curveAccelerateMid`     | `durationFaster`     |
| Modal enter              | `curveDecelerateMax`     | `durationSlow`       |
| Modal exit               | `curveAccelerateMax`     | `durationGentle`     |
| Card hover lift          | `curveEasyEase`          | `durationFaster`     |
| Accordion expand         | `curveEasyEaseMax`       | `durationNormal`     |
| Tab indicator slide      | `curveEasyEase`          | `durationFast`       |
| Progress bar (indet.)    | `curveLinear`            | (loops, 1–2s)        |

Pattern: entrances are slightly slower than exits, and exits use accelerate while entrances use decelerate. This mirrors the real-world physics of objects settling and departing.

---

## 4. Practical CSS recipes

### Hover and focus

```css
.interactive {
  background: var(--colorNeutralBackground1);
  transition:
    background-color var(--durationFaster) var(--curveEasyEase),
    box-shadow       var(--durationFaster) var(--curveEasyEase),
    color            var(--durationFaster) var(--curveEasyEase);
}
.interactive:hover {
  background: var(--colorNeutralBackground1Hover);
}
.interactive:active {
  background: var(--colorNeutralBackground1Pressed);
  transition-duration: var(--durationUltraFast); /* press feels instant */
}
```

### Menu open / close

```css
.menu {
  opacity: 0;
  transform: translateY(-4px);
  transition:
    opacity   var(--durationFaster) var(--curveAccelerateMid),
    transform var(--durationFaster) var(--curveAccelerateMid);
}
.menu[data-state="open"] {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity   var(--durationNormal) var(--curveDecelerateMid),
    transform var(--durationNormal) var(--curveDecelerateMid);
}
```

Note the asymmetry — the open transition uses a decelerate curve over 200ms; the close uses accelerate over 100ms. The menu arrives gently but leaves quickly.

### Modal enter / exit

```css
.modal-backdrop {
  opacity: 0;
  transition: opacity var(--durationGentle) var(--curveEasyEase);
}
.modal-backdrop[data-state="open"] {
  opacity: 1;
}

.modal {
  opacity: 0;
  transform: scale(0.96) translateY(8px);
  transition:
    opacity   var(--durationSlow) var(--curveDecelerateMax),
    transform var(--durationSlow) var(--curveDecelerateMax);
}
.modal[data-state="open"] {
  opacity: 1;
  transform: scale(1) translateY(0);
}
```

### Spinner (loop)

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1200ms var(--curveLinear) infinite;
}
```

### Card lift on hover

```css
.card {
  box-shadow: var(--shadow4);
  transform: translateY(0);
  transition:
    box-shadow var(--durationFaster) var(--curveEasyEase),
    transform  var(--durationFaster) var(--curveEasyEase);
}
.card:hover {
  box-shadow: var(--shadow8);
  transform: translateY(-2px);
}
```

---

## 5. Respecting user preferences

Always wrap non-essential motion in `prefers-reduced-motion`. Users who have this preference set get vestibular triggers from large movements, so **collapse transforms to opacity-only or zero-duration**:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

For individual components you can be less aggressive:

```css
.modal {
  transition: opacity var(--durationSlow) var(--curveDecelerateMax),
              transform var(--durationSlow) var(--curveDecelerateMax);
}

@media (prefers-reduced-motion: reduce) {
  .modal {
    /* drop the transform — fade only */
    transition: opacity var(--durationFast) var(--curveEasyEase);
    transform: none !important;
  }
}
```

---

## 6. Anti-patterns

- **Don't animate layout properties** (`width`, `height`, `top`, `left`, `margin`). They trigger layout recalc on every frame. Use `transform` and `opacity` instead — they're GPU-accelerated.
- **Don't use `ease-in-out` globally.** It's a CSS default, not a Fluent value. Use `--curveEasyEase` — the shape is different and designed for UI.
- **Don't transition everything.** `transition: all` is a performance trap. List the properties you actually want.
- **Don't exceed 500ms for UI transitions.** Anything longer reads as a loading state or a mistake.
- **Don't pair decelerate curves with exits** (or accelerate with entrances). It feels wrong even if you can't articulate why.
