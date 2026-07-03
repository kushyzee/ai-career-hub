"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { ModuleMeta } from "@/lib/content/types"

interface ModuleNavListProps {
  modules: ModuleMeta[]
  onNavigate?: () => void
}

export function ModuleNavList({ modules, onNavigate }: ModuleNavListProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Course modules" className="flex flex-col gap-1">
      {modules.map((module) => {
        const href = `/modules/${module.slug}`
        const isActive = pathname === href

        return (
          <Link
            key={module.slug}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex items-baseline gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              isActive
                ? "bg-accent font-medium text-accent-foreground"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            )}
          >
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {String(module.order).padStart(2, "0")}
            </span>
            <span>{module.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}
