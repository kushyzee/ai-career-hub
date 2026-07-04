# AI Career Hub

Interview prep for AI Trainer, AI Evaluator, Prompt Evaluator, and AI QA roles; plain-English explanations, realistic workplace examples, and weak-to-excellent answer breakdowns for every core concept interviewers actually ask about.

Built as a reading-first course platform: no accounts, no video, no clutter, just well-typeset, well-navigated content.

## Stack

| Layer           | Choice                                          |
| --------------- | ----------------------------------------------- |
| Framework       | Next.js 16 (App Router, Cache Components)       |
| Styling         | Tailwind CSS v4 (CSS-first `@theme`), shadcn/ui |
| Content         | Markdown, stored locally in the repo (no CMS)   |
| Package manager | pnpm                                            |
| Deployment      | Vercel                                          |

## Getting started

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000`.

## Project structure

```code
app/
  page.tsx                # hub landing page (course cards)
  not-found.tsx            # 404 for unknown top-level routes
  (course)/                 # route group; adds header + sidebar shell
    layout.tsx
    not-found.tsx           # 404 for bad module slugs (keeps sidebar visible)
    course/page.tsx         # full module index
    glossary/page.tsx       # aggregated cheat-sheet terminology
    modules/[slug]/page.tsx # module detail page

features/
  modules/components/       # module page building blocks (Section, AnswerComparison, CheatSheet, ...)
  navigation/components/    # Sidebar, MobileNav, Breadcrumbs, JumpNav, PrevNext
  home/components/          # hub landing page pieces
  glossary/components/      # glossary list rendering

content/
  modules/*.md               # one file per module; see "Adding a module" below

lib/
  content/
    types.ts                # SectionKey union, frontmatter + parsed types
    parser.ts                # reads + parses module .md files
    answerComparison.ts       # splits the answer-comparison section into weak/good/excellent
    glossary.ts               # aggregates terminology across all modules

components/
  ui/                        # shadcn primitives; regenerate via `pnpm dlx shadcn add`, don't hand-edit
  MarkdownContent.tsx         # shared markdown renderer
  theme-provider.tsx
  theme-toggle.tsx
```

## Adding a module

Create one file at `content/modules/<slug>.md`. Nothing else needs to change;
the module list, sidebar, prev/next, and glossary are all derived from these
files at read time.

**Frontmatter:**

```yaml
---
title: "Operational Definitions"
slug: "operational-definitions"
order: 2
description: "Turn abstract eval criteria into observable, gradeable procedures."
---
```

**Sections:** every module has exactly 9 sections, each preceded by an
invisible HTML-comment marker. The marker is what the parser keys off; the
heading text above it can read however you like:

```markdown
<!-- section:plain-english -->

## Plain English

...
```

Required marker keys, in any heading order you like (but the parser expects
all 9 present): `plain-english`, `why-it-matters`, `pipeline-fit`, `examples`,
`common-mistakes`, `expert-thinking`, `answer-comparison`, `why-excellent`,
`cheat-sheet`.

**Two sections have a required internal format:**

- `answer-comparison`; must contain the labels `**Weak:**`, `**Good:**`, and
  `**Excellent:**` (bold, exactly that wording) so the answer-comparison
  parser can split them into separate verdict-stamped blocks.
- `cheat-sheet`; must contain a line starting with `**Key terminology:**`
  followed by a comma-separated list of terms, so the glossary can aggregate
  them across modules.

**Cross-module links** work as ordinary Markdown links pointing at another
module's slug: `[Module 4](/modules/claim-classification-systems)`.

## Roadmap

**V2:** search, hand-curated related modules, reading progress bar,
localStorage notes, bookmarks, offline support (PWA/service worker).

**V3:** mock interview mode, flashcards, interactive quizzes, AI chat
assistant.

See `CHANGELOG.md` for what's actually shipped.
