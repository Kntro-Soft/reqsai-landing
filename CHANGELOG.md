# Changelog

All notable changes to the ReqsAI landing are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/). The release pipeline (docs/deploy.md) uses the section of each
version as the notes of its GitHub Release: a release branch `release/X.Y.Z` renames `[Unreleased]` to
`[X.Y.Z] - YYYY-MM-DD`. The latest release is `1.2.1`, so the next one is `1.3.0` or higher.

## [Unreleased]

### Added

- CI on every pull request and on pushes to `main`, `develop`, `release/**` and `hotfix/**`: `pnpm lint` and
  `pnpm build`.
- Release pipeline, model C + tag at the end: the site is built once on `release/X.Y.Z` or `hotfix/X.Y.Z` into
  the pre-release `vX.Y.Z-rc.N` (bundle, SHA-256, tree hash, `version.json`), staged on Cloudflare Pages behind
  the `staging` approval, and the same bundle is deployed to production from `main` behind the `produccion`
  approval; `vX.Y.Z` is tagged only after production succeeded, then a back-merge pull request into `develop`.
- Rollback workflow that redeploys the bundle of an earlier final release.
- A weekly `branch-cleanup.yml` (Mondays 04:00 UTC, or by hand with a dry run) deletes branches merged 7+ days ago and unmerged branches with no commits for 30+ days; it never touches `main`, `develop`, `release/*`, `hotfix/*`, branches with an open pull request or pull requests labelled `do-not-delete`, and `BRANCH_CLEANUP_ENABLED=false` turns it off.

### Changed

- Hosting moved from Vercel to Cloudflare Pages (project `reqsai-landing`, <https://reqsai-landing.pages.dev>).
  `vercel.json` was removed.

### Fixed

- `pnpm lint` failed on `react-hooks/set-state-in-effect` in `useReveal`; the hook now starts revealed
  through a lazy initial state when `IntersectionObserver` is missing.

## [1.2.1] - 2026-10-09

### Fixed

- Sign-up and sign-in buttons point to `https://reqsai.tech`; the pricing section matches the real plans.

## [1.2.0] - 2026-07-10

### Added

- Product demo and team video sections with their navigation links; the hero's "Watch demo" button again.

### Changed

- Sign-in and sign-up buttons point to the hosted app.

## [1.1.0] - 2026-07-10

### Added

- Localized Terms of Service (`/terminos`) and Privacy Policy (`/privacidad`) pages.

### Changed

- Sign-in and sign-up buttons point to the hosted app; sales buttons relabelled; the Team plan is now
  Enterprise; original red logo; footer links point to real sections; contact email updated.

## [1.0.0] - 2026-06-20

### Added

- First public version of the landing: navigation, hero, stats, features, solutions, pricing, FAQ, contact
  and footer, in Spanish and English, with favicons and a web app manifest.

[Unreleased]: https://github.com/Kntro-Soft/reqsai-landing/compare/v1.2.1...HEAD
[1.2.1]: https://github.com/Kntro-Soft/reqsai-landing/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/Kntro-Soft/reqsai-landing/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Kntro-Soft/reqsai-landing/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Kntro-Soft/reqsai-landing/releases/tag/v1.0.0
