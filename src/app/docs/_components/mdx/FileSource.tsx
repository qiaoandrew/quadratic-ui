import CodeBlock from "./CodeBlock";

import { readFile } from "~/utils/file-system";
import { FILE_SOURCES } from "~/constants/file-sources";

interface FileSourceProps {
  id: keyof typeof FILE_SOURCES;
}

export default async function FileSource({ id }: FileSourceProps) {
  if (!FILE_SOURCES[id]) throw new Error(`File source not found: ${id}`);

  const path = FILE_SOURCES[id];
  const code = await readFile(path);

  return <CodeBlock className="mt-5">{code}</CodeBlock>;
}
