import { getGlossary } from "@/lib/content/glossary"
import { GlossaryList } from "@/features/glossary/components/GlossaryList"

export default function GlossaryPage() {
  const entries = getGlossary()

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Reference
      </p>
      <h1 className="mt-2 text-3xl">Glossary</h1>
      <p className="mt-3 text-muted-foreground">
        Every key term from every module&rsquo;s cheat sheet, in one place.
      </p>

      <div className="mt-8">
        <GlossaryList entries={entries} />
      </div>
    </div>
  )
}
