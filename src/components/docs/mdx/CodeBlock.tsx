import { highlight } from "sugar-high";

import { cn } from "~/utils/tailwind";

import CopyToClipboardButton from "~/components/docs/mdx/ClipboardButton";

interface CodeBlockProps {
  shouldHighlight?: boolean;
  children: string;
  className?: string;
}

export default function CodeBlock({
  shouldHighlight = true,
  children,
  className,
}: CodeBlockProps) {
  return (
    <div className={cn("rounded-2.5 bg-accent/70 relative border", className)}>
      <pre className="max-h-112 overflow-auto p-4">
        <code
          className="text-3.5 text-foreground/70 leading-6"
          dangerouslySetInnerHTML={{
            __html: shouldHighlight ? highlight(children) : children,
          }}
        />
      </pre>
      <CopyToClipboardButton text={children} />
    </div>
  );
}
