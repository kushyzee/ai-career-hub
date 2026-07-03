import { Clock } from "lucide-react"
import type { ModuleFrontmatter } from "@/lib/content/types"

interface ModuleHeaderProps {
  frontmatter: ModuleFrontmatter
  readingTimeMinutes: number
}

export function ModuleHeader({
  frontmatter,
  readingTimeMinutes,
}: ModuleHeaderProps) {
  return (
    <header className="mb-8 border-b border-hairline pb-6">
      <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Module {frontmatter.order}
      </p>
      <h1 className="text-3xl">{frontmatter.title}</h1>
      <p className="mt-3 max-w-(--text-measure) text-muted-foreground">
        {frontmatter.description}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Clock className="h-3.5 w-3.5" />
        <span>{readingTimeMinutes} min read</span>
      </div>
    </header>
  )
}
