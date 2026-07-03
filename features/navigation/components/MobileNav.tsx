"use client"

import { useState } from "react"
import { BookOpen, LibraryBig, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModuleNavList } from "./ModuleNavList"
import type { ModuleMeta } from "@/lib/content/types"
import Link from "next/link"

interface MobileNavProps {
  modules: ModuleMeta[]
}

export function MobileNav({ modules }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open course menu"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 px-0">
        <SheetHeader className="px-4">
          <SheetTitle className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Course
          </SheetTitle>
        </SheetHeader>
        <div className="px-3 py-2">
          <ModuleNavList modules={modules} onNavigate={() => setOpen(false)} />
          <div className="mt-6 flex flex-col gap-1 border-t border-hairline px-3 pt-4">
            <Link
              href="/course"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              <LibraryBig className="h-4 w-4" /> Full course index
            </Link>
            <Link
              href="/glossary"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              <BookOpen className="h-4 w-4" /> Glossary
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
