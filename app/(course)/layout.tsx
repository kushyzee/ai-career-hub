import { getAllModuleMeta } from "@/lib/content/parser"
import { Sidebar } from "@/features/navigation/components/Sidebar"
import { SiteHeader } from "@/features/navigation/components/SiteHeader"

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const modules = getAllModuleMeta()

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader modules={modules} />
      <div className="flex flex-1">
        <Sidebar modules={modules} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  )
}
