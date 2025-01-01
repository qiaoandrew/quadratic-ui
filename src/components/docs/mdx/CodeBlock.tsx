import { cn } from "~/utils/tailwind";

import CopyToClipboardButton from "~/components/docs/mdx/ClipboardButton";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        "relative max-h-112 overflow-auto rounded-3 border bg-accent/70 p-4",
        className,
      )}
    >
      <code className="text-3.5 leading-6 text-foreground/70">{children}</code>
      <CopyToClipboardButton text={children} />
    </pre>
  );
}
