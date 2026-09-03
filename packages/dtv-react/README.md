# @dtv/react

React component library for the **DTV Design System**, imported into Prism System
from `github.com/Lbcz98/dtv-design-system`. A dark-first, 10-foot television UI
(D-pad navigation, focus scaling, live sport chrome).

Components: `Text`, `Icon` (Lucide), `Button`, `Input`, `RoundButton`,
`MainButton`, `InsertButton`, `Menu` (+ `MenuItem`, `HomeLogo`), `ContentTrail`,
`Overlay`. Each is styled with CSS Modules bound to `@dtv/tokens` CSS variables,
and covered by unit tests (`*.test.tsx`) plus Figma Code Connect templates
(`*.figma.ts`).

- Consumed **from source** (`main`/`exports` point at `src/`); Storybook's Vite
  compiles the TSX and CSS Modules directly, so no separate build step is needed.
- Tests: `npm test` (Vitest + Testing Library, jsdom).

Documented in Storybook under `DTV/Components/*`, with foundations, templates and
pages under the other `DTV/*` sections.
