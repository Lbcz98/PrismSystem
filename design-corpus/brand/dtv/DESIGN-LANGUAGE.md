# DTV — Design language

Signature layout patterns, component recipes and "moves" of the DTV television
experience, captured from the imported DTV Design System so generation agents can
compose on-brand TV screens. Source of truth for values is `@dtv/tokens`; the
components live in `@dtv/react` and are documented under Storybook `DTV/*`.

## The frame

- **Full-bleed content, floating chrome.** The live match (or artwork) fills the
  entire 16:9 frame. All UI is a translucent dark layer placed on top — a bottom
  menu bar, an optional content trail, and overlays. The video is never boxed
  inside a card.
- **Safe-area aware.** Chrome hugs the edges with generous TV safe-area padding;
  nothing critical sits in the outer margin.
- **Bottom-weighted.** Primary navigation and context (score bug, weather, "up
  next") anchor to the bottom and corners, keeping the centre clear for content.

## Components (recipes)

- **Menu + MenuItem + HomeLogo** — the persistent bottom bar: left cluster
  (avatar, clock, weather), centre/right context (now-playing, program logo,
  Globo bug). Items are icon-first and reveal a label when focused.
- **MainButton** — the hero content card. Carries an optional live badge
  ("AO VIVO"), an overline, a title and a subtitle, and scales with the cyan glow
  on focus. Used for the primary call to action on a screen.
- **RoundButton** (Menu / Back / Close) — circular icon actions for global nav.
- **InsertButton** — inline secondary action chips within a trail.
- **ContentTrail** — a horizontal rail of cards ("Minha conta", "Perfis",
  "Configurações", "Ajuda"; or "Opções de áudio", "Lances da partida", …) that
  slides in from a side and is traversed with left/right on the D-pad.
- **Overlay** — stacked translucent layers (see `overlayLayers`) that dim the
  content behind a focused panel, using the dark opacity scrims.
- **Text / Icon / Input / Button** — foundational primitives; Icon is
  Lucide-based (`sm/md/lg`).

## Signature moves

- **Focus scaling + cyan halo.** The single most recognisable DTV move: the
  focused card grows and gains `shadow.focus-ring` (cyan glow) while neighbours
  stay at rest. Depth communicates selection.
- **Time-of-day theming.** The accent gradient (dia / tarde / noite) shifts with
  context so the whole interface feels tied to when you are watching.
- **Live-first status.** Anything live wears the red "AO VIVO" pill and the live
  gradient; it is the highest-priority signal on screen.
- **Score/context bug.** A compact top-corner bug (e.g. `EQU 0 / ARG 0 · 1º
02:30`) overlays live sport without covering the action.

## Templates & pages

- **Templates/Home, Templates/FocusedRail, Templates/SingleInteractivity** — the
  TV chrome shells with Cartesian D-pad navigation between rails.
- **Pages/Home** — the assembled Level-1 home: full-bleed match, bottom menu,
  weather + now-playing context, and a focusable content trail.
- **Playground** — About / Starter prototypes that show how screens are entered
  from a focused trail card and navigated deeper (EPG levels).

## When composing DTV screens

1. Start from a full-bleed content layer; add chrome as a translucent overlay.
2. Lay out actions as rails/trails a D-pad can traverse; make focus scale + glow.
3. Use the active time-of-day gradient for focus/hero; reserve red for live.
4. Bind every colour, space and radius to `@dtv/tokens` — no literals.
