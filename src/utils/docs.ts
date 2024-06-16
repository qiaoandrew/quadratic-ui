import { readDirectory, readFile } from "./file-system";
import type { DocTOCItem } from "~/types/types";

const CAPITAL_WORDS = ["otp"];

export const formatLabel = (label: string) =>
  label
    .split("-")
    .map((word) =>
      CAPITAL_WORDS.includes(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");

export const textToHtmlId = (text: string) => {
  if (!text.trim()) return "id";

  return text
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const extractSectionIds = (content: string) => {
  const lines = content.split("\n");
  const ids: DocTOCItem[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      const text = line.substring(3);
      const id = textToHtmlId(text);
      ids.push({ type: "h2", text, id });
    } else if (line.startsWith("### ")) {
      const text = line.substring(4);
      const id = textToHtmlId(text);
      ids.push({ type: "h3", text, id });
    }
  }

  return ids;
};

export const getComponentsMenuItems = async () => {
  const primitives = await readDirectory("src/app/docs/components/primitives");
  const primitivesMenuItems = await Promise.all(
    primitives.map(async (name) => ({
      id: name,
      href: `/docs/components/primitives/${name}`,
      label: formatLabel(name),
    })),
  );

  const composites = await readDirectory("src/app/docs/components/composites");
  const compositesMenuItems = await Promise.all(
    composites.map(async (name) => ({
      id: name,
      href: `/docs/components/composites/${name}`,
      label: formatLabel(name),
    })),
  );

  const patterns = await readDirectory("src/app/docs/components/patterns");
  const patternsMenuItems = await Promise.all(
    patterns.map(async (name) => ({
      id: name,
      href: `/docs/components/patterns/${name}`,
      label: formatLabel(name),
    })),
  );

  return {
    primitivesMenuItems,
    compositesMenuItems,
    patternsMenuItems,
  };
};

export const getTOCs = async () => {
  const tocs: Record<string, DocTOCItem[]> = {};

  const gettingStarted = await readDirectory("src/app/docs/getting-started");
  await Promise.all(
    gettingStarted.map(async (guide) => {
      const filePath = `src/app/docs/getting-started/${guide}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSectionIds(content);
      tocs[`getting-started/${guide}`] = toc;
    }),
  );

  const primitives = await readDirectory("src/app/docs/components/primitives");
  await Promise.all(
    primitives.map(async (primitive) => {
      const filePath = `src/app/docs/components/primitives/${primitive}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSectionIds(content);
      tocs[`components/primitives/${primitive}`] = toc;
    }),
  );

  const composites = await readDirectory("src/app/docs/components/composites");
  await Promise.all(
    composites.map(async (composite) => {
      const filePath = `src/app/docs/components/composites/${composite}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSectionIds(content);
      tocs[`components/composites/${composite}`] = toc;
    }),
  );

  const patterns = await readDirectory("src/app/docs/components/patterns");
  await Promise.all(
    patterns.map(async (pattern) => {
      const filePath = `src/app/docs/components/patterns/${pattern}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSectionIds(content);
      tocs[`components/patterns/${pattern}`] = toc;
    }),
  );

  return tocs;
};
