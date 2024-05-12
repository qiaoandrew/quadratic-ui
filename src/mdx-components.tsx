import * as React from "react";
import type { MDXComponents } from "mdx/types";

import CodeBlock from "./components/mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-16 text-7 font-semibold" {...props} />,
    pre: (
      props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLPreElement>,
        HTMLPreElement
      >,
    ) => {
      const childElement = props.children as
        | React.ReactElement<{
            className?: string;
            children?: React.ReactNode;
          }>
        | undefined;

      const language =
        childElement?.props.className?.replace("language-", "") ?? "";

      return (
        <CodeBlock language={language} containerClassName="mt-6">
          {childElement?.props.children}
        </CodeBlock>
      );
    },
    ...components,
  };
}
