import type { MDXComponents } from "mdx/types";

import { textToHtmlId } from "~/utils/docs";

import Id from "~/components/docs/mdx/Id";

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
  };
}
