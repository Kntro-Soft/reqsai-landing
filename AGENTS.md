# AGENTS.md — ReqsAI Landing Page

AI coding agent guide for this repository. Read before making changes.

---

## Project overview

Marketing landing page for **ReqsAI**, an AI-powered requirements elicitation SaaS by Kntro-Soft (Lima, Peru). Full product context is in [`docs/project.md`](docs/project.md).

---

## Stack & critical constraints

- **React 19** + **Vite 8**. The React Compiler is active via `@rolldown/plugin-babel` + `babel-plugin-react-compiler`. Do not introduce manual `useMemo`/`useCallback` — the compiler handles it.
- **Tailwind CSS v4** — CSS-first config. There is **no `tailwind.config.js`**. The theme lives in `src/index.css` under `@theme { ... }`. Custom tokens: `--color-navy-950/900/800/700`, `--font-sans`. Extend the theme there, not in a config file.
- **No TypeScript.** Keep it `.jsx` / `.js`.
- Package manager is **pnpm**.

---

## Dev workflow

```bash
pnpm dev       # Vite dev server
pnpm build     # Production build
pnpm preview   # Preview build output
```

---

## Architecture

All page sections are self-contained components in `src/components/sections/`. One file per section. `src/App.jsx` simply composes them in order — no routing, no state sharing between sections.

```
src/
├── components/
│   ├── layout/       # Navbar.jsx, Footer.jsx
│   └── sections/     # Hero, Stats, Features, Solutions, Pricing,
│                     # Testimonials, FAQ, Contact
├── hooks/            # useScrolled.js (scroll threshold for navbar glass)
├── i18n/
│   ├── index.js      # i18next setup — reads localStorage('reqsai_lang')
│   └── locales/      # es.json, en.json  ← every UI string lives here
├── App.jsx
├── main.jsx          # imports i18n BEFORE index.css
└── index.css         # Tailwind entry + @theme + keyframes + utility classes
```

**Import order in `main.jsx` is intentional:** `i18n` is imported before `index.css` to guarantee translations are available before first render.

---

## i18n rules

Every user-visible string must be in both `src/i18n/locales/es.json` and `src/i18n/locales/en.json`. Never hardcode display text in components.

```jsx
// Correct
const { t } = useTranslation()
<h2>{t('section.title')}</h2>

// For arrays (e.g. list of features, FAQ items):
const items = t('faq.items', { returnObjects: true })
```

Language is persisted to `localStorage` under the key `reqsai_lang`. When toggling language, always write both `i18n.changeLanguage(lang)` and `localStorage.setItem('reqsai_lang', lang)`. See `Navbar.jsx` → `LangToggle`.

---

## Styling conventions

- Dark theme only. Background: `bg-navy-900` (`#050d1a`).
- Decorative glow blobs use `blur-3xl` on absolute-positioned divs. **Always wrap them in a container with `overflow-hidden`** — CSS blur filters are not clipped by ancestor `overflow: hidden` in mobile Safari, causing horizontal scroll.

  ```jsx
  // Correct pattern used in every section:
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/8 rounded-full blur-3xl" />
  </div>
  ```

- Glass effect: use `glass` (cards) or `glass-nav` (navbar on scroll) utility classes defined in `index.css`.
- Gradient text: use `gradient-text` utility class.
- Animations: use `animate-float`, `animate-pulse-glow`, `animate-gradient`, `animate-cursor` (all defined in `index.css`).
- Desktop/mobile navbar breakpoint is `lg:` (1024px), **not** `md:`. With 5 nav links + lang toggle, `md:` (768px) overflows.

---

## Mobile / responsive rules

- `overflow-x: hidden` is set on both `html` and `body` in `index.css`. This is required — setting it only on `body` doesn't prevent horizontal scroll in WebKit/Safari mobile (the scroll container transfers to `html`).
- Test responsive layouts at 375px. The tab switcher in `Solutions.jsx` uses `flex-col sm:flex-row` so buttons stack vertically on mobile.
- Avoid fixed pixel widths in content areas. Use `max-w-*` with `w-full` instead.

---

## Accessibility patterns

- Sections use `aria-labelledby` pointing to their `<h2 id="...">`.
- The mobile menu uses `aria-expanded`, `aria-controls`, and `aria-hidden` for the collapsible panel.
- FAQ accordion uses `aria-expanded` + `aria-controls` + `role="region"`. The open/close animation relies on `max-h-0 opacity-0` ↔ `max-h-96 opacity-100` transitions — do **not** use the `hidden` attribute, it bypasses CSS transitions instantly.
- Decorative elements carry `aria-hidden="true"`.

---

## Adding a new section

1. Create `src/components/sections/MySection.jsx`.
2. Add translation keys to both `es.json` and `en.json`.
3. Import and render in `src/App.jsx` in the correct position.
4. Add a nav link key to `NAV_LINKS` in `Navbar.jsx` and corresponding translations under `nav.*` in both locale files.

---

## Brand & design language

See [`docs/project.md`](docs/project.md) for full product context. Key points:
- **Blue** = primary actions and navigation.
- **Violet/indigo** = AI-generated content and features.
- **Green** = success / approved states.
- Target personas: "Alex" (startup Tech Lead) and "Claudia" (enterprise Systems Analyst).
- Copy tone: direct, technical, outcome-focused. Avoid vague marketing language.
