import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbsProps {
  moduleOrder: number
  moduleTitle: string
}

export function Breadcrumbs({ moduleOrder, moduleTitle }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-muted-foreground"
    >
      <Link href="/course" className="transition-colors hover:text-foreground">
        Course
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span className="text-foreground">
        Module {moduleOrder}: {moduleTitle}
      </span>
    </nav>
  )
}
