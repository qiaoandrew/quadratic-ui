import * as React from "react";
import type { MDXComponents } from "mdx/types";

import Id from "./app/docs/_components/mdx/Id";
import CodeBlock from "./app/docs/_components/mdx/CodeBlock";

import { convertToHtmlId } from "./utils/docs";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="mt-16 text-7 font-semibold">
        <Id id={convertToHtmlId(props.children as string)} />
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="mt-8 text-5 font-semibold">
        <Id id={convertToHtmlId(props.children as string)} />
        {props.children}
      </h3>
    ),
    p: (props) => (
      <p className="mt-5 text-4 leading-7 text-foreground" {...props} />
    ),
    code: (props) => (
      <code
        className="-mx-0.5 -my-1 rounded-1 bg-accent px-1 py-1 font-mono text-foreground/70"
        {...props}
      />
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
    a: (props) => (
      <a
        className="text-muted-foreground underline underline-offset-[5px]"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mt-5 flex list-inside list-disc flex-col gap-y-1"
        {...props}
      />
    ),
    ...components,
  };
}
