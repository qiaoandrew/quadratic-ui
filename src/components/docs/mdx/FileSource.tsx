import { readFile } from "~/utils/fs";
import { FILE_SOURCES } from "~/constants/fileSources";

import CodeBlock from "~/components/docs/mdx/CodeBlock";

interface FileSourceProps {
  id: keyof typeof FILE_SOURCES;
}

export default async function FileSource({ id }: FileSourceProps) {
  if (!FILE_SOURCES[id]) throw new Error(`File source not found: ${id}`);

  const path = FILE_SOURCES[id];
  const code = await readFile(path);

  return <CodeBlock>{code}</CodeBlock>;
}
