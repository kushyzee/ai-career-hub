import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MarkdownContentProps {
  content: string
  className?: string
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div
      className={cn(
        "font-body max-w-(--text-measure) text-[1.0625rem] leading-relaxed text-foreground",
        "[&_li]:mb-1.5 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",
        "[&_em]:italic [&_strong]:font-semibold",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <Link
              href={href ?? "#"}
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              {children}
            </Link>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
