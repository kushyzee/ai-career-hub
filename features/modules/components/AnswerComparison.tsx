import { MarkdownContent } from "@/components/MarkdownContent"
import { parseAnswerComparison } from "@/lib/content/answerComparison"

interface AnswerComparisonProps {
  content: string
}

const VERDICTS = [
  { key: "weak", label: "Weak" },
  { key: "good", label: "Good" },
  { key: "excellent", label: "Excellent" },
] as const

export function AnswerComparison({ content }: AnswerComparisonProps) {
  const blocks = parseAnswerComparison(content)

  return (
    <div className="flex flex-col gap-6">
      {VERDICTS.map(({ key, label }) => (
        <div key={key}>
          <span className={`verdict-stamp verdict-stamp--${key}`}>{label}</span>
          <div className="mt-2">
            <MarkdownContent content={blocks[key]} />
          </div>
        </div>
      ))}
    </div>
  )
}
