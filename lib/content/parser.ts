import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import {
  SECTION_KEYS,
  type SectionKey,
  type ModuleFrontmatter,
  type ModuleMeta,
  type ModuleSections,
  type ParsedModule,
} from "./types"

const CONTENT_DIR = path.join(process.cwd(), "content", "modules")
const WORDS_PER_MINUTE = 200

const SECTION_MARKER = /<!--\s*section:([a-z-]+)\s*-->/g

function splitIntoSections(markdownBody: string, slug: string): ModuleSections {
  const matches = [...markdownBody.matchAll(SECTION_MARKER)]
  const sections = {} as ModuleSections

  matches.forEach((match, i) => {
    const key = match[1] as SectionKey
    const start = match.index! + match[0].length
    const end =
      i + 1 < matches.length ? matches[i + 1].index! : markdownBody.length
    sections[key] = markdownBody.slice(start, end).trim()
  })

  const missing = SECTION_KEYS.filter((key) => !sections[key])
  if (missing.length > 0) {
    throw new Error(
      `Module "${slug}" is missing section marker(s): ${missing.join(", ")}`
    )
  }

  return sections
}

function estimateReadingTime(markdownBody: string): number {
  const wordCount = markdownBody.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
}

export function getModuleSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

/** Full parse: frontmatter + all 9 sections. Use for module detail pages. */
export function getModuleBySlug(slug: string): ParsedModule {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  const frontmatter = data as ModuleFrontmatter
  const sections = splitIntoSections(content, slug)
  const readingTimeMinutes = estimateReadingTime(content)

  return { frontmatter, sections, readingTimeMinutes }
}

/** Frontmatter only, sorted by `order`. Use for sidebar, breadcrumbs, prev/next —
 *  avoids parsing full section bodies for every module just to render nav. */
export function getAllModuleMeta(): ModuleMeta[] {
  return getModuleSlugs()
    .map((slug) => {
      const filePath = path.join(CONTENT_DIR, `${slug}.md`)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(raw)
      return data as ModuleFrontmatter
    })
    .sort((a, b) => a.order - b.order)
}

export function getAdjacentModules(slug: string): {
  prev: ModuleMeta | null
  next: ModuleMeta | null
} {
  const all = getAllModuleMeta()
  const index = all.findIndex((m) => m.slug === slug)
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index >= 0 && index < all.length - 1 ? all[index + 1] : null,
  }
}
