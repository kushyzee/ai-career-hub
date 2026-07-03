import { BookOpen, LibraryBig } from "lucide-react"
import { ModuleNavList } from "./ModuleNavList"
import type { ModuleMeta } from "@/lib/content/types"
import Link from "next/link"

interface SidebarProps {
  modules: ModuleMeta[]
}

export function Sidebar({ modules }: SidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar md:block">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-6">
        <p className="px-3 pb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Course
        </p>
        <ModuleNavList modules={modules} />
        <div className="mt-6 flex flex-col gap-1 border-t border-hairline pt-4">
          <Link
            href="/course"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
          >
            <LibraryBig className="h-4 w-4" /> Full course index
          </Link>
          <Link
            href="/glossary"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
          >
            <BookOpen className="h-4 w-4" /> Glossary
          </Link>
        </div>
      </div>
    </aside>
  )
}
