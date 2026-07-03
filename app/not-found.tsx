import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Error 404
      </span>
      <h1 className="mt-3 text-3xl">This page doesn&rsquo;t exist.</h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        The page you&rsquo;re looking for may have been moved or never existed.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className={cn(buttonVariants())}>
          Back to home
        </Link>
        <Link
          href="/course"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Browse the course
        </Link>
      </div>
    </div>
  )
}
