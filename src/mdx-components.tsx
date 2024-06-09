import * as React from "react";
import type { MDXComponents } from "mdx/types";

import Id from "./app/docs/_components/mdx/Id";
import CodeBlock from "./app/docs/_components/mdx/CodeBlock";

import { textToHtmlId } from "./utils/docs";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="mt-16 text-7 font-semibold">
        <Id id={textToHtmlId(props.children as string)} />
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="mt-10 text-5 font-semibold">
        <Id id={textToHtmlId(props.children as string)} />
        {props.children}
      </h3>
    ),
    p: (props) => (
      <p className="mt-4 text-4 leading-7 text-foreground" {...props} />
    ),
    code: (props) => (
      <code
        className="-my-1 rounded-1 bg-accent px-1 py-1 font-mono text-foreground/70"
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
        <CodeBlock language={language} containerClassName="mt-4">
          {childElement?.props.children}
        </CodeBlock>
      );
    },
    a: (props) =>
      props.href?.startsWith("/") ? (
        <Link
          href={props.href}
          className="text-muted-foreground underline underline-offset-[5px]"
          {...props}
        />
      ) : (
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
