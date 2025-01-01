import type { MDXComponents } from "mdx/types";

import { textToHtmlId } from "~/utils/docs";

import Id from "~/components/docs/mdx/Id";
import CodeBlock from "~/components/docs/mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    h2: ({ children }: React.ComponentProps<"h2">) => (
      <h2 className="mt-16 font-display text-7 font-semibold">
        <Id id={textToHtmlId(children as string)} />
        {children}
      </h2>
    ),
    h3: ({ children }: React.ComponentProps<"h2">) => (
      <h3 className="mt-12 font-display text-5 font-semibold [&:where(h2+&)]:mt-7">
        <Id id={textToHtmlId(children as string)} />
        {children}
      </h3>
    ),
    pre: ({ children }: React.ComponentProps<"pre">) => {
      if (!children || typeof children !== "object" || !("props" in children)) {
        return null;
      }

      const props = children.props as { children: string };

      return (
        <CodeBlock className="mt-4 [&:where(h2+&)]:mt-5">
          {props.children}
        </CodeBlock>
      );
    },
  };
}
