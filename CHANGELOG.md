# Changelog

All notable changes to the ReqsAI landing are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/). The release pipeline (docs/deploy.md) uses the section of each
version as the notes of its GitHub Release: a release branch `release/X.Y.Z` renames `[Unreleased]` to
`[X.Y.Z] - YYYY-MM-DD`. The latest release is `1.2.1`, so the next one is `1.3.0` or higher.

## [Unreleased]

### Changed (Landing shows the current product — `feature/21-landing-refresh`, #21)
- The hero shows a real screenshot of the capture page instead of a drawn mockup, and the copy leads with the code-aware copilot.
- Features are alternating rows with real screenshots (WebP, two widths, fixed dimensions, lazy below the fold): the copilot that reads the client's code and warns on contradictions, shared session links (spectator and reviewer), Jira and GitHub, creating a project from its sources, project and organization overviews, AI usage and the token allowance, and the guided first steps.
- Solutions, FAQ and the hero copy only state what the API and web CHANGELOGs and `PlanCatalog` back: the invented metrics (40 %, 80 %, 10x, 30 %), the "less than 15 minutes of editing" claim, the Zoom and Meet bot, the Drive and OneDrive import and the "coming soon" integrations are gone. A new FAQ answers what happens when the monthly AI allowance runs out.
- The contact form no longer fakes a send: it opens the visitor's mail app with the message written.
- Accessibility: skip link, visible focus ring, text contrast at 4.5:1 or better, selection and scrollbar colours, no blur on the reveal. Gradient text, section eyebrows and decorative glows are removed. The English free plan label no longer reads "Gratis".
- Metadata: Spanish title and description, canonical URL, Open Graph and Twitter image (`public/og-image.jpg`), `robots.txt` and `sitemap.xml`.

### Removed
- The team video section and its "Equipo" navigation link. The product demo video stays.
- The unused testimonials copy (invented people) and the metrics strip.

### Fixed (Branch cleanup — `bugfix/19-branch-cleanup-pulls`, #19)
- The weekly branch cleanup read each branch's pull requests with `gh api -f`, which sends a POST to the create-pull-request endpoint instead of listing, so every lookup failed with 422 and the open-PR and `do-not-delete` protections were never checked. It now lists with `--method GET`, and a branch whose PRs cannot be read is left alone.

### Changed
- The release pull request and the back-merge pull request are opened by the GitHub App `reqsai-release-bot` (a short-lived token minted per job from `RELEASE_APP_ID` and `RELEASE_APP_PRIVATE_KEY`), so their CI runs: opened with `GITHUB_TOKEN` they started no `pull_request` workflow. The back-merge turns on auto-merge (merge commit) when the repository allows it; without the App configuration the job fails instead of falling back to `GITHUB_TOKEN`.

### Fixed
- Release notes longer than GitHub's 125000-character limit are cut at a line break with a link to the full CHANGELOG, instead of failing the tag after the deploy (1.2.0 of reqsai-api).

## [1.3.0] - 2026-10-10

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
