import type { SectionKey } from "@/lib/content/types"
import { SECTION_LABELS } from "@/lib/content/types"

interface SectionProps {
  sectionKey: SectionKey
  children: React.ReactNode
}

export function Section({ sectionKey, children }: SectionProps) {
  return (
    <section id={sectionKey} className="scroll-mt-20 py-8 first:pt-0">
      <h2 className="mb-4 text-xl">{SECTION_LABELS[sectionKey]}</h2>
      {children}
    </section>
  )
}
