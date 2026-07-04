import { notFound } from "next/navigation"
import {
  getModuleBySlug,
  getModuleSlugs,
  getAdjacentModules,
} from "@/lib/content/parser"
import { SECTION_KEYS } from "@/lib/content/types"
import { Breadcrumbs } from "@/features/navigation/components/Breadcrumbs"
import { JumpNav } from "@/features/navigation/components/JumpNav"
import { PrevNext } from "@/features/navigation/components/PrevNext"
import { ModuleHeader } from "@/features/modules/components/ModuleHeader"
import { Section } from "@/features/modules/components/Section"
import { AnswerComparison } from "@/features/modules/components/AnswerComparison"
import { CheatSheet } from "@/features/modules/components/CheatSheet"
import { MarkdownContent } from "@/components/MarkdownContent"

export function generateStaticParams() {
  return getModuleSlugs().map((slug) => ({ slug }))
}

interface ModulePageProps {
  params: Promise<{ slug: string }>
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params

  let parsedModule
  try {
    parsedModule = getModuleBySlug(slug)
  } catch (error) {
    const isFileMissing =
      error instanceof Error &&
      "code" in error &&
      (error as NodeJS.ErrnoException).code === "ENOENT"

    if (isFileMissing) {
      notFound()
    }
    throw error
  }

  const { frontmatter, sections, readingTimeMinutes } = parsedModule
  const { prev, next } = getAdjacentModules(slug)

  return (
    <div className="mx-auto flex max-w-6xl gap-10 px-6 py-8">
      <article className="min-w-0 flex-1">
        <Breadcrumbs
          moduleOrder={frontmatter.order}
          moduleTitle={frontmatter.title}
        />
        <ModuleHeader
          frontmatter={frontmatter}
          readingTimeMinutes={readingTimeMinutes}
        />

        {SECTION_KEYS.map((key) => (
          <Section key={key} sectionKey={key}>
            {key === "answer-comparison" ? (
              <AnswerComparison content={sections[key]} />
            ) : key === "cheat-sheet" ? (
              <CheatSheet content={sections[key]} />
            ) : (
              <MarkdownContent content={sections[key]} />
            )}
          </Section>
        ))}

        <PrevNext prev={prev} next={next} />
      </article>

      <JumpNav />
    </div>
  )
}
