import { getModuleSlugs, getModuleBySlug } from "./parser"

export interface GlossaryEntry {
  term: string
  modules: { slug: string; title: string }[]
}

const TERMINOLOGY_LINE = /\*\*Key terminology:?\*\*\s*(.+)/i

function extractTerms(cheatSheetMarkdown: string): string[] {
  const match = cheatSheetMarkdown.match(TERMINOLOGY_LINE)
  if (!match) return []

  return match[1]
    .split(",")
    .map((term) => term.trim())
    .filter(Boolean)
}

export function getGlossary(): GlossaryEntry[] {
  const entries = new Map<string, GlossaryEntry>()

  for (const slug of getModuleSlugs()) {
    const { frontmatter, sections } = getModuleBySlug(slug)
    const terms = extractTerms(sections["cheat-sheet"])
    const moduleRef = { slug, title: frontmatter.title }

    for (const term of terms) {
      const key = term.toLowerCase()
      const existing = entries.get(key)

      if (existing) {
        existing.modules.push(moduleRef)
      } else {
        entries.set(key, { term, modules: [moduleRef] })
      }
    }
  }

  return [...entries.values()].sort((a, b) => a.term.localeCompare(b.term))
}
