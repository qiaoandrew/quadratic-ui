import CopyToClipboardButton from "./CopyToClipboardButton";

import { cn } from "~/utils/tailwind";

interface CodeBlockProps {
  containerClassName?: string;
  className?: string;
  children: string;
}

export default function CodeBlock({
  containerClassName,
  className,
  children,
}: CodeBlockProps) {
  return (
    <div className={cn("relative", containerClassName)}>
      <pre
        className={cn(
          "max-h-112 overflow-auto rounded-3 border bg-accent/70 p-4",
          className,
        )}
      >
        <code className="text-3.5 leading-6 text-foreground/70">
          {children}
        </code>
      </pre>
      <CopyToClipboardButton value={children} />
    </div>
  );
}
