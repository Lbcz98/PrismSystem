# @dtv/tokens

Design tokens for the **DTV Design System**, imported into Prism System from
`github.com/Lbcz98/dtv-design-system`.

- `src/primitives/tokens.json` — primitive ramps (colour, gradients, opacity,
  space, radius, font, shadow), including the time-of-day primaries
  (`dia`/`tarde`/`noite`) and the live-broadcast red.
- `src/semantic/light.json`, `src/semantic/dark.json` — semantic roles (text,
  surface, border, action) that reference the primitives per theme.
- `scripts/build-tokens.mjs` — Style Dictionary build that emits CSS variables
  (`dist/css/variables.css` at `:root`, `dist/css/variables-dark.css` at
  `[data-theme="dark"]`) and JS/TS token exports (`dist/js`).

Build: `npm run build` (also runs as part of the repo-wide `npm run build`).

The brand these tokens encode is documented in
`design-corpus/brand/dtv/GUIDELINES.md` and `.../DESIGN-LANGUAGE.md`.
