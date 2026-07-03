import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function HubHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
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
