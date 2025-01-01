import { cn } from "~/utils/tailwind";

import CopyToClipboardButton from "~/components/docs/mdx/ClipboardButton";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-2.5 border bg-accent/70", className)}>
      <pre className="max-h-112 overflow-auto overscroll-contain p-4">
        <code className="text-3.5 leading-6 text-foreground/70">
          {children}
        </code>
      </pre>
      <CopyToClipboardButton text={children} />
    </div>
  );
}
