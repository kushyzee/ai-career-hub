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

export const SECTION_LABELS: Record<SectionKey, string> = {
  "plain-english": "Plain English",
  "why-it-matters": "Why Companies Use It",
  "pipeline-fit": "Where It Fits in the Pipeline",
  examples: "Realistic Examples",
  "common-mistakes": "Common Beginner Mistakes",
  "expert-thinking": "How Experienced Evaluators Think",
  "answer-comparison": "Interview Answer: Weak \u2192 Good \u2192 Excellent",
  "why-excellent": "Why the Excellent Answer Stands Out",
  "cheat-sheet": "Interview Cheat Sheet",
}

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
