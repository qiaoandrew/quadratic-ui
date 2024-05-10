import type { MDXComponents } from "mdx/types";

export default function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return { ...components };
}
