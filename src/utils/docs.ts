import fs from "fs";
import path from "path";

import { formatDocMenuLabel } from "./helper";
import type { DocTOCItem } from "~/types/types";

const getPath = async (relativePath: string) =>
  path.join(process.cwd(), relativePath);

const readDirectory = async (relativePath: string) => {
  const dirPath = await getPath(relativePath);
  return fs.readdirSync(dirPath);
};

export const readFile = async (relativePath: string) => {
  const filePath = await getPath(relativePath);
  return fs.readFileSync(filePath, "utf-8");
};

export const getPrimitivesMenuItems = async () => {
  const names = await readDirectory("src/app/docs/primitives");
  const menuItems = await Promise.all(
    names.map(async (name) => ({
      id: name,
      href: `/docs/primitives/${name}`,
      label: formatDocMenuLabel(name),
    })),
  );
  return menuItems;
};

export const convertToHtmlId = (text: string) => {
  text = text.trim().replace(/\s+/g, " ");
  let id = text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  if (id === "") {
    id = "id";
  }
  return id;
};

const extractSections = (content: string) => {
  const lines = content.split("\n");
  const ids: DocTOCItem[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      const text = line.substring(3);
      const id = convertToHtmlId(text);
      ids.push({ type: "h2", text, id });
    } else if (line.startsWith("### ")) {
      const text = line.substring(4);
      const id = convertToHtmlId(text);
      ids.push({ type: "h3", text, id });
    }
  }

  return ids;
};

export const getTOCs = async () => {
  const tocs: Record<string, DocTOCItem[]> = {};

  const primitives = await readDirectory("src/app/docs/primitives");
  await Promise.all(
    primitives.map(async (name) => {
      const filePath = `src/app/docs/primitives/${name}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSections(content);
      tocs[name] = toc;
    }),
  );

  const gettingStarted = await readDirectory("src/app/docs/getting-started");
  await Promise.all(
    gettingStarted.map(async (name) => {
      const filePath = `src/app/docs/getting-started/${name}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSections(content);
      tocs[name] = toc;
    }),
  );

  return tocs;
};
