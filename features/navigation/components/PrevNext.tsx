import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { ModuleMeta } from "@/lib/content/types"

interface PrevNextProps {
  prev: ModuleMeta | null
  next: ModuleMeta | null
}

export function PrevNext({ prev, next }: PrevNextProps) {
  if (!prev && !next) return null

  return (
    <nav
      aria-label="Module navigation"
      className="mt-10 grid grid-cols-2 gap-4 border-t border-hairline pt-6"
    >
      <div>
        {prev && (
          <Link
            href={`/modules/${prev.slug}`}
            className="group flex flex-col gap-1 text-sm"
          >
            <span className="flex items-center gap-1 text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> Module {prev.order}
            </span>
            <span className="font-medium text-foreground group-hover:underline">
              {prev.title}
            </span>
          </Link>
        )}
      </div>
      <div className="text-right">
        {next && (
          <Link
            href={`/modules/${next.slug}`}
            className="group flex flex-col items-end gap-1 text-sm"
          >
            <span className="flex items-center gap-1 text-muted-foreground">
              Module {next.order} <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium text-foreground group-hover:underline">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  )
}
