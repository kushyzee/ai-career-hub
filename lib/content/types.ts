export const SECTION_KEYS = [
  "plain-english",
  "why-it-matters",
  "pipeline-fit",
  "examples",
  "common-mistakes",
  "expert-thinking",
  "answer-comparison",
  "why-excellent",
  "cheat-sheet",
] as const

export type SectionKey = (typeof SECTION_KEYS)[number]

export interface ModuleFrontmatter {
  title: string
  slug: string
  order: number
  description: string
}

export type ModuleSections = Record<SectionKey, string>

export interface ParsedModule {
  frontmatter: ModuleFrontmatter
  sections: ModuleSections
  readingTimeMinutes: number
}

export type ModuleMeta = ModuleFrontmatter
