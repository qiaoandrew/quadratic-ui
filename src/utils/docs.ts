import { readDirectory, readFile } from "~/utils/fs";
import type { DocsTOCItem } from "~/types/docs";

export function textToHtmlId(text: string) {
  if (!text.trim()) {
    throw new Error("text is empty");
  }

  return text
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

function extractSectionIds(content: string) {
  const lines = content.split("\n");
  const ids: DocsTOCItem[] = [];

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      const text = line.substring(3);
      const id = textToHtmlId(text);
      ids.push({ type: "h2", text, id });
    } else if (line.startsWith("### ")) {
      const text = line.substring(4);
      const id = textToHtmlId(text);
      ids.push({ type: "h3", text, id });
    }
  });

  return ids;
}

export async function getTOCs() {
  const tocs: Record<string, DocsTOCItem[]> = {};

  const gettingStartedPages = await readDirectory(
    "src/app/docs/getting-started",
  );
  await Promise.all(
    gettingStartedPages.map(async (page) => {
      const filePath = `src/app/docs/getting-started/${page}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSectionIds(content);
      tocs[`getting-started/${page}`] = toc;
    }),
  );

  const primitivesPages = await readDirectory(
    "src/app/docs/components/primitives",
  );
  await Promise.all(
    primitivesPages.map(async (page) => {
      const filePath = `src/app/docs/components/primitives/${page}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSectionIds(content);
      tocs[`components/primitives/${page}`] = toc;
    }),
  );

  return tocs;
}
