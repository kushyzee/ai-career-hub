import { MarkdownContent } from "@/components/MarkdownContent"
import { CopyButton } from "./CopyButton"

interface CheatSheetProps {
  content: string
}

export function CheatSheet({ content }: CheatSheetProps) {
  return (
    <div className="rounded-lg border border-hairline bg-card p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Reference
        </span>
        <CopyButton text={content} label="Copy cheat sheet" />
      </div>
      <MarkdownContent content={content} className="max-w-none" />
    </div>
  )
}
