import * as React from "react";
import type { MDXComponents } from "mdx/types";

import CodeBlock from "./components/mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-16 text-7 font-semibold" {...props} />,
    h3: (props) => <h3 className="mt-8 text-5 font-semibold" {...props} />,
    p: (props) => <p className="mt-5 text-4 text-foreground" {...props} />,
    code: (props) => (
      <code className="font-mono text-foreground/70" {...props} />
    ),
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
        <CodeBlock language={language} containerClassName="mt-5">
          {childElement?.props.children}
        </CodeBlock>
      );
    },
    ...components,
  };
}
