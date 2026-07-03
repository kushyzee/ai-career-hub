import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ModuleNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Error 404
      </span>
      <h1 className="mt-3 text-3xl">Module not found.</h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        That module doesn&rsquo;t exist yet, or the link is out of date.
      </p>
      <Link href="/course" className={cn(buttonVariants(), "mt-8")}>
        Browse all modules
      </Link>
    </div>
  )
}
