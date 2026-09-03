# DTV Design System — Brand Guidelines

Imported from the DTV Design System (`github.com/Lbcz98/dtv-design-system`). DTV
is a **dark-first, 10-foot television experience** — a Globo-style live sports and
streaming interface (World Cup / "Copa do Mundo"). Everything is tuned for a
screen viewed from across the room and driven by a remote-control D-pad rather
than a pointer.

## Identity

- **Product:** DTV — a television UI for live sport, EPG (electronic program
  guide), and on-demand content.
- **Voice:** Portuguese-first, broadcast tone. Confident, present-tense, event-led
  ("Copa do Mundo: Equador x Argentina", "A seguir Central da Copa").
- **Feel:** Cinematic and immersive. Content (the live match) fills the frame;
  chrome is a translucent layer that sits over it.

## Colour

DTV is organised around **three time-of-day primaries**, each a two-stop gradient,
plus a dedicated live-broadcast red:

- **Dia** (day) — `#414ffd → #35c7f3` (indigo to cyan).
- **Tarde** (afternoon) — `#00e879 → #00e1c0` (green to teal).
- **Noite** (night) — `#ed6001 → #e7c300` (orange to amber).
- **Live** — `#fd4142 → #de2c2c` (the "AO VIVO" red).

Rules:

- Lead with the active time-of-day gradient for hero focus and progress; never
  mix two time-of-day families in the same surface.
- Reserve the live red exclusively for live/broadcast state ("AO VIVO"). It is a
  status colour, not a decoration.
- Neutrals are a dedicated TV ramp (`#eeeeee` white → `#000000` black, plus
  `#888` light, `#454545` medium, `#191919` dark). Surfaces trend to near-black
  so video reads as the brightest thing on screen.
- Semantic roles resolve per theme (`light.json` / `dark.json`): text, surface,
  border and action all reference the primitive ramps by intent, never by hex.

## Focus & motion (10-foot)

- Focus is the primary interaction. The focused element **scales up** and wears a
  **cyan focus glow** (`0 0 20px 2px rgba(53,199,243,0.5)`); unfocused siblings
  recede. Focus must always be unambiguous from across the room.
- Navigation is Cartesian D-pad (up/down/left/right), not free pointer movement.
  Layouts are built as rails and trails that a directional pad can traverse.
- Labels never reflow when a control gains focus — scale the container, keep the
  text metrics stable.

## Surface & shape

- Chrome (menus, overlays, content trails) is a translucent dark layer stacked
  over full-bleed video, using the `opacity.dark.*` / `opacity.light.*` scrims.
- Radius scale: `sm 4 · md 8 · lg 12 · xl 16 · full`. Cards use `lg`/`xl`; pills
  and avatars use `full`.
- Spacing follows the 4px base scale (`space.1..16`, with `sm/md/lg/xl` aliases);
  never hand-pick spacing values.

## Typography

- **Sans:** Inter (system-ui fallback). **Mono:** JetBrains Mono.
- Sizes run `3xs 10 → 5xl 48`; weights `regular 400 → extrabold 800`.
- On a TV, prefer larger sizes and heavier weights than a desktop web app would
  use; body copy sits at `md (16)` minimum, titles at `2xl`+.

## Writing rules

- Portuguese, sentence case, broadcast-led phrasing.
- Short, scannable labels ("Lances da partida", "Vote no Craque do Jogo").
- Refer to live content by event name; keep secondary lines to a single clause.
