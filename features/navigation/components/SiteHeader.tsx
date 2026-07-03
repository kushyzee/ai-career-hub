import Link from "next/link"
import { MobileNav } from "./MobileNav"
import { ThemeToggle } from "@/components/theme-toggle"
import type { ModuleMeta } from "@/lib/content/types"

interface SiteHeaderProps {
  modules: ModuleMeta[]
}

export function SiteHeader({ modules }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-14 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="flex h-14 items-center gap-3 px-4">
        <MobileNav modules={modules} />
        <Link href="/" className="font-heading text-base font-semibold">
          AI Career Hub
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
