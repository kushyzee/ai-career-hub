import { ModuleNavList } from "./ModuleNavList"
import type { ModuleMeta } from "@/lib/content/types"

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
      </div>
    </aside>
  )
}
