import * as React from "react";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/tokyo-night-dark.min.css";

import CopyToClipboardButton from "./CopyToClipboardButton";

import { cn } from "~/utils/tailwind";

interface CodeBlockProps {
  language: string;
  containerClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export default function CodeBlock({
  language,
  containerClassName,
  className,
  children,
}: CodeBlockProps) {
  const codeString = React.Children.toArray(children).join("");
  const highlightedCode = hljs.highlight(codeString, { language }).value;

  return (
    <div className={cn("relative", containerClassName)}>
      <pre
        className={cn(
          "max-h-[480px] overflow-auto rounded-3 border bg-border/40 p-4",
          className,
        )}
      >
        <code
          className={cn("text-3.5 leading-6", language)}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
      <CopyToClipboardButton value={codeString} />
    </div>
  );
}
