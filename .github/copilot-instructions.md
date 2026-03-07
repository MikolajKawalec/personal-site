# Copilot Instructions

## Commands

- `pnpm dev` - start the Vite dev server.
- `pnpm build` - run `tsc -b` and then create the production bundle with Vite.
- `pnpm lint` - run ESLint across the repository.
- `pnpm preview` - serve the built app locally with Vite preview.
- `pnpm deploy` - publish `dist/` to GitHub Pages via `gh-pages`.
- Single-test command: none currently. There is no `test` script or test runner configured in `package.json`, and no test files are present under `src/` or `tests/`.

## High-level architecture

- This repository is a one-page personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS, and shadcn/Radix UI primitives. `README.md` describes it as a responsive interactive CV, and `vite.config.ts` sets `base: "/personal-site"` for GitHub Pages deployment.
- `src/main.tsx` is the only entrypoint. It mounts `<App />`, loads the global Tailwind/CSS variable theme from `src/index.css`, and initializes i18n through `src/i18n.ts`.
- `src/App.tsx` owns the page composition. It wraps the app in `ThemeProvider`, renders the sticky `Header` and `Footer`, and defines the major page sections (`skills`, `education`, `experience`, `contact`) that are navigated through hash links.
- `src/components/large_components` contains section-level or layout pieces such as the header, footer, and grouped skill content. `src/components/smaller_components` contains reusable display blocks used inside those sections, such as skill, heading, contact, and education cards. `src/components/ui` contains shadcn-style primitives.
- The theme system is split between `src/components/theme-provider.tsx` and `src/components/mode-toggle.tsx`. Theme selection is persisted in `localStorage` under `vite-ui-theme`, and the provider applies `light` or `dark` classes to `document.documentElement`.
- Tailwind design tokens are defined in `src/index.css` with CSS custom properties for both light and dark themes. `tailwind.config.js` extends those tokens with project-specific font, radius, and background image utilities.
- Shared app helpers live in `src/lib`. `src/lib/helpers.ts` defines the `SkillLevel` enum that drives progress percentages in the skills UI, and `src/lib/utils.ts` exports the `cn()` helper used to merge Tailwind class names.
- Localization is wired up in `src/i18n.ts` with `react-i18next` and `i18next-browser-languagedetector`. The current resources are only placeholders (`en` and `pl`), so any localization work should update that setup consistently.

## Key conventions

- Prefer the `@/` alias for imports from `src`. It is defined in both `vite.config.ts` and `tsconfig.app.json`, and shadcn aliases in `components.json` build on it.
- Keep the current component layering: page/section components in `large_components`, reusable presentation pieces in `smaller_components`, and low-level primitives in `ui`.
- Reuse semantic theme classes such as `bg-background`, `text-foreground`, `text-accent`, and `border-border` instead of hardcoding colors. The color system is driven from CSS variables in `src/index.css`.
- When adding or updating UI primitives, follow the existing shadcn pattern and use `cn()` from `src/lib/utils.ts` for class merging.
- Top-level content is expected to remain in the single-page flow in `App.tsx`. New sections should usually include a matching anchor target and header link so the sticky navigation keeps working.
- TypeScript is configured in bundler mode with `strict`, `noUnusedLocals`, and `noUnusedParameters` enabled in `tsconfig.app.json`, so unused symbols and loose typing will fail builds quickly.
- Keep GitHub Pages deployment in mind when changing routing or asset references because the production build is emitted with the `/personal-site` base path.
