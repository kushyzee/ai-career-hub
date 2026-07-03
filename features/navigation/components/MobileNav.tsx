"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
