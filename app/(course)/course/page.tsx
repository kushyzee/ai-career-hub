import Link from "next/link"
import { getAllModuleMeta } from "@/lib/content/parser"

export default function CourseIndexPage() {
  const modules = getAllModuleMeta()

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Course
      </p>
      <h1 className="mt-2 text-3xl">AI Evaluation Interview Prep</h1>
      <p className="mt-3 text-muted-foreground">
        {modules.length} module{modules.length === 1 ? "" : "s"}, in order.
      </p>

      <ol className="mt-8 flex flex-col divide-y divide-hairline border-y border-hairline">
        {modules.map((module) => (
          <li key={module.slug}>
            <Link
              href={`/modules/${module.slug}`}
              className="group flex items-baseline gap-4 py-4"
            >
              <span className="font-mono text-sm text-muted-foreground tabular-nums">
                {String(module.order).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="text-lg group-hover:underline">
                  {module.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {module.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
