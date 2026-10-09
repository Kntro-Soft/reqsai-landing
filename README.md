<div align="center">

# ReqsAI — Landing Page

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&labelColor=20232a)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white&labelColor=1a1a2e)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white&labelColor=0f172a)
![i18n](https://img.shields.io/badge/i18n-ES%20%7C%20EN-4ade80?logoColor=white&labelColor=14532d)
![Status](https://img.shields.io/badge/status-in%20development-facc15?labelColor=713f12)

</div>

Landing page for **ReqsAI**, an AI-powered requirements elicitation platform by [Kntro-Soft](https://github.com/kntro-soft) — Lima, Peru.

## Stack

|           |                                                              |
|-----------|--------------------------------------------------------------|
| Framework | React 19 + Vite 8                                            |
| Styling   | Tailwind CSS v4 (CSS-first, no config file)                  |
| Compiler  | React Compiler via `babel-plugin-react-compiler`             |
| i18n      | i18next + react-i18next (ES / EN, persisted in localStorage) |
| Icons     | lucide-react                                                 |

## Sections

Navbar · Hero · Stats · Features · Solutions · Pricing · Testimonials · FAQ · Contact · Footer

## Getting started

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm preview
```

## i18n

Translation files live in `src/i18n/locales/`. The active language is stored in `localStorage` under the key `reqsai_lang` and defaults to `es`.

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   └── sections/     # One file per page section
├── hooks/            # useScrolled
├── i18n/
│   ├── index.js      # i18next setup
│   └── locales/      # es.json, en.json
├── App.jsx
├── main.jsx
└── index.css         # Tailwind entry + @theme + global styles
```

## Contributing, releases and deployment

Work follows the organization guide ([CONTRIBUTING.md](https://github.com/Kntro-Soft/.github/blob/main/.github/CONTRIBUTING.md)):
an issue on the [ReqsAI project board](https://github.com/orgs/Kntro-Soft/projects/3), a branch
`feature/<issue>-<slug>` from `develop`, a pull request with `Closes #<issue>`. `main` and `develop` require a pull
request with 1 approval; **CI** (`.github/workflows/ci.yml`: `pnpm lint` + `pnpm build`) runs on every pull
request.

The site is hosted on Vercel. Pull request and branch previews still come from the Vercel Git integration
(no approval). **Production does not deploy on pushes to `main` any more** (`vercel.json` turns that off); it is
released from `release/X.Y.Z` (or `hotfix/X.Y.Z`) by `release.yml` / `hotfix.yml` → `delivery.yml`:

| Job | Environment | What it does |
|-----|-------------|--------------|
| `ci` | — | Lint and build (`ci.yml`). |
| `build` | — | `vercel build --prod` **once**; the output is the artifact for the next two jobs. |
| `deploy-preview` | `preview` (approval by `jhosepmyr`) | Deploys that output as a production deployment without the domains (`--skip-domain`) and prints its URL to check. |
| `deploy-production` | `produccion` (approval by `jhosepmyr`) | `vercel promote` of **that same deployment** to the production domains. |
| `release-pr` | — | Comments on the release pull request to `main`. |

Merging the release pull request runs `tag-release.yml`: it checks the `produccion` deployment of the PR head and
tags `vX.Y.Z` with a GitHub Release. To roll back, release the previous version again (or, as a break-glass step
outside these approvals, use Instant Rollback in Vercel).

Deploy switches (organization variables in *Kntro-Soft → Settings → Secrets and variables → Actions →
Variables*; only `true` turns them on, otherwise the job is skipped and the run summary says why):

| Variable | Controls |
|----------|----------|
| `ENABLE_REQSAI_LANDING_PREVIEW` | `build` and `deploy-preview` (and therefore production, which only promotes a preview) |
| `ENABLE_REQSAI_LANDING_PRODUCCION` | `deploy-production` |

One-time set-up: the secret `VERCEL_TOKEN` (a token of the Vercel account that owns the project) and the
variables `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` (from `.vercel/project.json` after `vercel link`) in this
repository.

---

© 2026 Kntro-Soft · Lima, Peru 🇵🇪
