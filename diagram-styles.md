# Diagram styles (from the WAAB UX slide template)

Recorded from template slides 20–25 (timeline, overlaps, 2×2 matrix, Venn,
funnel) so new diagrams can be drawn in the same general style. Values are on
the template's 1920 × 1080 canvas. The right-hand column is how each maps onto
this page's color templates.

## Page arrangement

| Element | Template | On this page |
|---|---|---|
| Diagram position | Right half, roughly x 50%–94%, vertically centered | Same |
| Text block | Left, x 128, about 600 wide, vertically centered | Same |
| Heading | Header 2 (48, bold) | `.t-h2` |
| Description | Body 2 (30); funnel uses it at 50% opacity | `.t-b2`, `.t-meta` for the dimmed version |

## Lines

| Use | Template | On this page |
|---|---|---|
| Primary lines: matrix axes, nested-circle outlines, timeline spine | 4 px, Schneider green `#0fb542` | 4 px, `--accent` |
| Secondary ticks: timeline milestone markers | 2 px, `#0fb542` | 2 px, `--accent` |
| Venn outlines | 3–4 px, white on dark / dark on white, to separate overlapping shapes | 4 px, `--ink` / `--canvas` |

## Fills

| Use | Template | On this page |
|---|---|---|
| Neutral nodes: matrix bubbles, funnel bands, Venn intersection | Mid gray `#424242` | `color-mix(--ink 18%, --canvas)`, the same fill as the Principles cards |
| Focal node: the one element being called out (overlaps slide) | Blue `#0079a7` with the green outline | `--accent` fill or `--accent-wash`, keeping the `--accent` outline |
| Venn sets | One solid white circle, one outlined circle | `--ink` solid, plus an `--ink` outline |

## Labels

| Use | Template | On this page |
|---|---|---|
| Node labels | Body 3 (24, regular), white; dark text on white fills | `.t-b3`, `--ink`, flipped to `--canvas` on light fills |
| Funnel band labels | Inter Semi Bold 24, white | `.t-b3` at weight 600 |
| Axis end labels (matrix) | Body 3 (24) at each axis end | `.t-b3`, `--muted` |
| Timeline milestones | A bold title (about 29) over Body 3 text, staggered above and below the spine | `.t-h3`, scaled down, over `.t-b3` |

## Shapes

- Circles are true circles. Nested circles share a common top tangent point.
- Funnel bands are equal-height trapezoids that narrow downward, with small gaps between them.
- Corners on boxes follow the page's radius (`--r`).
