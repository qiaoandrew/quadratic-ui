import type { MDXComponents } from "mdx/types";

import { textToHtmlId } from "~/utils/navigation";

import Id from "~/components/docs/mdx/Id";
import CodeBlock from "~/components/docs/mdx/CodeBlock";
import _Link from "~/components/ui/_Link";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    h2: ({ children }: React.ComponentProps<"h2">) => (
      <h2 className="font-display text-7 mt-16 font-semibold">
        <Id id={textToHtmlId(children as string)} />
        {children}
      </h2>
    ),
    h3: ({ children }: React.ComponentProps<"h2">) => (
      <h3 className="font-display text-5 mt-12 font-semibold [&:where(h2+&)]:mt-7">
        <Id id={textToHtmlId(children as string)} />
        {children}
      </h3>
    ),
    p: ({ children }: React.ComponentProps<"p">) => (
      <p className="text-4 text-foreground/80 mt-4 leading-7 [&:where(h2+&)]:mt-3.5 [&:where(h3+&)]:mt-2">
        {children}
      </p>
    ),
    code: ({ children }: React.ComponentProps<"code">) => (
      <code className="rounded-1 bg-muted text-muted-foreground -my-1 p-1 font-mono">
        {children}
      </code>
    ),
    pre: ({ children }: React.ComponentProps<"pre">) => {
      if (!children || typeof children !== "object" || !("props" in children)) {
        return null;
      }

      const props = children.props as { children: string; className: string };

      return (
        <CodeBlock
          shouldHighlight={props.className === "language-tsx"}
          className="mt-4 [&:where(p+&)]:mt-6"
        >
          {props.children}
        </CodeBlock>
      );
    },
    a: ({ href, children }: React.ComponentProps<"a">) => (
      <_Link
        href={href ?? ""}
        className="text-muted-foreground hover:text-foreground underline underline-offset-[5px] transition-colors"
      >
        {children}
      </_Link>
    ),
    ul: (props: React.ComponentProps<"ul">) => (
      <ul
        className="mt-6 flex list-inside list-disc flex-col gap-y-1"
        {...props}
      />
    ),
  };
}
