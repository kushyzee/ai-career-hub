# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/). While the project is pre-1.0, minor versions (`0.x.0`) may include breaking changes to content structure or internal APIs.

## [Unreleased]

Nothing in progress. Next planned work is the V2 roadmap (search, related modules, reading progress bar, notes, bookmarks, offline support). See `README.md`.

## [1.0.0] - 2026-07-04

**The course is complete.** All 16 modules are written and readable end-to-end, this is the point where AI Career Hub actually does its job.

### Added

- All 16 modules of the AI Evaluation Interview Prep course: Rubric Engineering, Operational Definitions, Fact-Checking Methodology, Claim Classification Systems, Rubric Calibration, Score Anchoring, Decision Framework Design, Annotation Guideline Writing, Edge Case Design, Error Taxonomy, Error Analysis, Documentation Standards, AI Response Evaluation Frameworks, Reproducibility, AI Safety Evaluation, and End-to-End Evaluation Workflow
- `/course` and `/glossary` links wired into `Sidebar` and `MobileNav`, making every route in the app reachable from navigation

### Fixed

- `AnswerComparison` parser was silently dropping the interviewer's question (the text before the `**Weak:**` label), now captured and rendered above the verdict-stamped answers
- Duplicate section headings on the module page; `Section` no longer renders a generic label on top of each module's own Markdown heading

## [0.1.0] - 2026-07-04

Initial MVP scaffold; no real course content yet, but architecture, theming, navigation, and page shells are in place and ready to receive it.

### Added

- Next.js 16 App Router project structure; feature-based organization
- Tailwind v4 CSS-first theme (`@theme inline` + `:root`/`.dark`), built on top of shadcn's default token structure with the AI Career Hub palette (paper/ink base, accent blue, weak/good/excellent verdict colors)
- Dark mode via `next-themes`, toggle in the header
- Content layer: Markdown modules with frontmatter + invisible section markers, parsed via `lib/content/parser.ts`
- Module detail page (`/modules/[slug]`) rendering all 9 sections, including:
  - `AnswerComparison`; weak/good/excellent split with the verdict-stamp
    signature treatment
  - `CheatSheet`; distinct reference-card styling with a copy button
  - `JumpNav`; in-page section anchor navigation
  - `PrevNext`; sequential module navigation
- Course index page (`/course`); full module table of contents
- Glossary page (`/glossary`); terminology aggregated across all modules' cheat sheets, cross-linked back to source modules
- Hub landing page (`/`); course cards, with a "coming soon" placeholder for the planned Data Annotation course
- Persistent desktop sidebar + mobile drawer navigation, breadcrumbs
- Reading time estimate, computed automatically from word count
- Custom 404 pages: root-level fallback and a course-shell-aware version for bad module slugs
