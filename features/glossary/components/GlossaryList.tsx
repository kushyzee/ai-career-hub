import Link from "next/link"
import type { GlossaryEntry } from "@/lib/content/glossary"

interface GlossaryListProps {
  entries: GlossaryEntry[]
}

function groupByLetter(entries: GlossaryEntry[]) {
  const groups = new Map<string, GlossaryEntry[]>()

  for (const entry of entries) {
    const letter = entry.term[0]?.toUpperCase() ?? "#"
    const group = groups.get(letter)
    if (group) {
      group.push(entry)
    } else {
      groups.set(letter, [entry])
    }
  }

  return groups
}

export function GlossaryList({ entries }: GlossaryListProps) {
  const groups = groupByLetter(entries)

  return (
    <div className="flex flex-col gap-8">
      {[...groups.entries()].map(([letter, group]) => (
        <div key={letter}>
          <h2 className="font-mono text-sm text-muted-foreground">{letter}</h2>
          <dl className="mt-3 flex flex-col divide-y divide-hairline border-t border-hairline">
            {group.map((entry) => (
              <div key={entry.term} className="py-3">
                <dt className="font-medium">{entry.term}</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 text-sm text-muted-foreground">
                  {entry.modules.map((module, i) => (
                    <span key={module.slug}>
                      <Link
                        href={`/modules/${module.slug}#cheat-sheet`}
                        className="hover:text-foreground hover:underline"
                      >
                        {module.title}
                      </Link>
                      {i < entry.modules.length - 1 ? "," : ""}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  )
}
