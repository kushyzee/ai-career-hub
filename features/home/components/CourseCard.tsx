import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CourseCardProps {
  title: string
  description: string
  moduleCount?: number
  href?: string
  status: "available" | "coming-soon"
}

export function CourseCard({
  title,
  description,
  moduleCount,
  href,
  status,
}: CourseCardProps) {
  const isAvailable = status === "available" && href

  return (
    <div
      className={`flex flex-col justify-between rounded-lg border border-hairline bg-card p-6 ${
        isAvailable ? "" : "opacity-60"
      }`}
    >
      <div>
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {status === "available" ? "Available now" : "Coming soon"}
        </span>
        <h3 className="mt-2 text-xl">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        {moduleCount !== undefined && (
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            {moduleCount} module{moduleCount === 1 ? "" : "s"}
          </p>
        )}
      </div>

      {isAvailable ? (
        <Link href={href} className={cn(buttonVariants(), "mt-6 w-fit")}>
          Start the course <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <Button disabled className="mt-6 w-fit">
          Notify me
        </Button>
      )}
    </div>
  )
}
