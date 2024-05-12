import CodeBlock from "./CodeBlock";

import { readFile } from "~/utils/docs";
import { COMPONENT_SOURCES } from "~/constants/component-sources";

interface ComponentSourceProps {
  id: keyof typeof COMPONENT_SOURCES;
}

export default async function ComponentSource({ id }: ComponentSourceProps) {
  if (!COMPONENT_SOURCES[id]) return null;

  const path = COMPONENT_SOURCES[id];
  const code = await readFile(path);

  return (
    <CodeBlock language="tsx" className="mt-4">
      {code}
    </CodeBlock>
  );
}
