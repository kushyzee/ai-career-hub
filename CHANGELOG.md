# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project uses [Semantic Versioning](https://semver.org/). While the
project is pre-1.0, minor versions (`0.x.0`) may include breaking changes to
content structure or internal APIs.

## [Unreleased]

### Planned

- Real module content (currently one sample module); this closes out `1.0.0`,
  since `1.0.0` marks the course actually being complete and readable
  end-to-end, not just the scaffold
- Nav links to `/course` and `/glossary` in `Sidebar` and `MobileNav`

## [0.1.0] - 2026-07-04

Initial MVP scaffold; no real course content yet, but architecture, theming,
navigation, and page shells are in place and ready to receive it.

### Added

- Next.js 16 App Router project structure; feature-based organization
- Tailwind v4 CSS-first theme (`@theme inline` + `:root`/`.dark`), built on
  top of shadcn's default token structure with the AI Career Hub palette
  (paper/ink base, accent blue, weak/good/excellent verdict colors)
- Dark mode via `next-themes`, toggle in the header
- Content layer: Markdown modules with frontmatter + invisible section
  markers, parsed via `lib/content/parser.ts`
- Module detail page (`/modules/[slug]`) rendering all 9 sections, including:
  - `AnswerComparison`; weak/good/excellent split with the verdict-stamp
    signature treatment
  - `CheatSheet`; distinct reference-card styling with a copy button
  - `JumpNav`; in-page section anchor navigation
  - `PrevNext`; sequential module navigation
- Course index page (`/course`); full module table of contents
- Glossary page (`/glossary`); terminology aggregated across all modules'
  cheat sheets, cross-linked back to source modules
- Hub landing page (`/`); course cards, with a "coming soon" placeholder for
  the planned Data Annotation course
- Persistent desktop sidebar + mobile drawer navigation, breadcrumbs
- Reading time estimate, computed automatically from word count
- Custom 404 pages: root-level fallback and a course-shell-aware version for
  bad module slugs
