export interface AnswerComparisonBlocks {
  weak: string
  good: string
  excellent: string
}

const LABEL_PATTERN = /\*\*(weak|good|excellent)\s*:?\*\*/gi

export function parseAnswerComparison(
  markdown: string
): AnswerComparisonBlocks {
  const matches = [...markdown.matchAll(LABEL_PATTERN)]

  const blocks: Partial<AnswerComparisonBlocks> = {}

  matches.forEach((match, i) => {
    const key = match[1].toLowerCase() as keyof AnswerComparisonBlocks
    const start = match.index! + match[0].length
    const end = i + 1 < matches.length ? matches[i + 1].index! : markdown.length
    blocks[key] = markdown.slice(start, end).trim()
  })

  if (!blocks.weak || !blocks.good || !blocks.excellent) {
    throw new Error(
      "Answer comparison section is missing a **Weak:** / **Good:** / **Excellent:** label."
    )
  }

  return blocks as AnswerComparisonBlocks
}
