import { getAllModuleMeta } from "@/lib/content/parser"

import { CourseCard } from "@/features/home/components/CourseCard"
import { HubHeader } from "@/features/home/components/HubHeader"

export default function HomePage() {
  const modules = getAllModuleMeta()

  return (
    <div className="flex min-h-svh flex-col">
      <HubHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          AI Career Hub
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl">
          Interview prep for AI evaluation and training roles.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Plain-English explanations, realistic workplace examples, and
          weak-to-excellent answer breakdowns for every core concept
          interviewers actually ask about.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <CourseCard
            title="AI Evaluation Interview Prep"
            description="AI Trainer, AI Evaluator, Prompt Evaluator, and AI QA interview readiness, one module per concept."
            moduleCount={modules.length}
            href="/course"
            status="available"
          />
          <CourseCard
            title="Data Annotation Interview Prep"
            description="The same module structure, built for data annotation and labeling roles."
            status="coming-soon"
          />
        </div>
      </main>
    </div>
  )
}
