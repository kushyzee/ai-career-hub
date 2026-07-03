import { SECTION_KEYS, SECTION_LABELS } from "@/lib/content/types"

export function JumpNav() {
  return (
    <nav
      aria-label="Jump to section"
      className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-56 shrink-0 overflow-y-auto pr-4 xl:block"
    >
      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        On this page
      </p>
      <ol className="flex flex-col gap-2 text-sm">
        {SECTION_KEYS.map((key) => (
          <li key={key}>
            <a
              href={`#${key}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {SECTION_LABELS[key]}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
