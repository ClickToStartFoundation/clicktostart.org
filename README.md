# ClickToStart Foundation

The website for **ClickToStart Foundation** — a volunteer-run nonprofit teaching
Trinidad & Tobago to master the digital world through free training, donated
computers, and community drives.

Built from the Claude Design handoff (`_handoff/`) as a production Next.js app:
a faithful, token-for-token recreation of the prototype with real routes, dark
mode, animations, and wired-up forms.

## Stack

- **Next.js 15** (App Router, React 19 Server Components + Server Actions)
- **TypeScript** (strict, `noUncheckedIndexedAccess`)
- **Tailwind CSS v4** (CSS-first theme, semantic design tokens)
- **Zod** for shared form validation
- **next/font** self-hosting Bricolage Grotesque, Space Grotesk & IBM Plex Mono

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (static-generates all 27 routes)
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals + typescript)
npm run typecheck  # tsc --noEmit
```

## Architecture

```
app/                     Routes (App Router) + server actions + SEO
  layout.tsx             Root shell: fonts, theme, chrome, metadata
  globals.css            Design tokens (light/dark), keyframes, base layer
  actions.ts             "use server" form handlers (validate → deliver)
  page.tsx               Home
  programs/[slug]/       Program detail (generateStaticParams)
  stories/[slug]/        Story detail (generateStaticParams)
  donate|volunteer|contact|sponsors|camps|impact|team|about/
  sitemap.ts, robots.ts, not-found.tsx, icon.svg
components/
  layout/                Topbar, Footer, Newsletter, RippleEffect
  theme/                 ThemeProvider, ThemeToggle, no-flash script
  ui/                    Primitives (Button, Card, Container, Logo, …)
  home/                  Hero, Ticker, FeaturedCamp, MissionBand
  shared/                ProgramCard, TestimonialCard, StatsGrid
  forms/                 Field, ChipGroup, SubmitButton, *Section, FaqList
lib/
  site.ts                Brand / contact / social config
  content/               Typed content — the single source of truth
  validation.ts          Zod schemas + shared form-state types
  notify.ts              Single delivery seam for submissions
```

### Theming

Colors are semantic CSS variables defined in `app/globals.css` for `:root`
(light) and `[data-theme="dark"]`, mapped into Tailwind via `@theme inline`.
Components use tokens (`bg-surface`, `text-ink`, `border-line`), so dark mode
works with **no `dark:` variants** — flipping `data-theme` flips everything. A
tiny pre-paint script applies the saved theme to avoid a flash.

### Forms

Every form (donate, volunteer, contact, sponsor, newsletter) is a progressive
Server Action using `useActionState`. Validation lives in `lib/validation.ts`
and runs on the server; field errors clear as the user edits. All submissions
funnel through **`lib/notify.ts` → `deliver()`** — swap that one function's body
for Resend/Postmark/a database and every form is wired up at once.

### Content

All copy lives in `lib/content/*` as typed data (`lib/content/types.ts`). Add a
program or story by appending to `programs.ts` / `stories.ts`; routes, the
sitemap, and static params update automatically. Names/photos shown as
`[ … ]` are intentional placeholders from the handoff.

## Accessibility & performance

- Semantic landmarks, skip link, `aria-current`, labelled controls, focus rings
- Full `prefers-reduced-motion` support (animations and the click ripple disable)
- Static-generated pages; ~102 kB First Load JS shared baseline

---

Design handoff by Claude Design · site by [Santius](https://santiuslabs.com).
