# SaturnSide AI — Marketing Site

Next.js 14 (App Router) + Tailwind CSS. Animated backgrounds (grid pattern, particles,
number tickers, border beams, spotlight) are hand-built in `components/magicui/` using
Framer Motion and Canvas, matching the Magic UI / Aceternity UI patterns — these libraries
ship as copy-paste source, not npm packages, so the components are included directly.

## Pages

- `/` — Landing page (Hero, Stats, Services, Why SaturnSide, CTA)
- `/use-cases` — Home services use cases (HVAC, plumbing, electrical)

## Run locally

You need Node.js 18.17+ installed. If you don't have it:

```
brew install node
```

(or download an installer from nodejs.org if you don't use Homebrew)

Then from this folder:

```
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or push the whole `Website Builder` repo —
   Vercel lets you set this folder as the project root)
2. Go to vercel.com → Add New → Project → import the repo
3. If this folder isn't the repo root, set **Root Directory** to `saturnside-next`
   in the import settings
4. Vercel auto-detects Next.js — no other config needed
5. Click Deploy

No environment variables are required — this site has no backend/API calls.

## Editing copy

All copy lives directly in the section components under `components/sections/` and
`components/sections/uc-*.tsx` — no CMS, no placeholder text. Update the arrays at the
top of each file (e.g. `SERVICES`, `FEATURES`, `STEPS`, `SCENARIOS`) to change content.

## Editing the theme

Colors, fonts, and animation keyframes are defined in `tailwind.config.ts`. The accent
color is violet (`#8b5cf6` / `accent-light: #a78bfa`) — change the `accent` and
`violet.glow` values there to retheme the whole site.
