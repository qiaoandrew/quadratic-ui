import { readDirectory, readFile } from "~/utils/fs";
import type { DocsItem, DocsTOCItem } from "~/types/navigation";

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

const CAPITAL_WORDS = ["otp"];

export function formatLabel(label: string) {
  return label
    .split("-")
    .map((word) =>
      CAPITAL_WORDS.includes(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
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

  const rechartsPages = await readDirectory("src/app/docs/charts/recharts");
  await Promise.all(
    rechartsPages.map(async (page) => {
      const filePath = `src/app/docs/charts/recharts/${page}/page.mdx`;
      const content = await readFile(filePath);
      const toc = extractSectionIds(content);
      tocs[`charts/recharts/${page}`] = toc;
    }),
  );

  return tocs;
}

export const getMenuItems = async () => {
  const primitives = await readDirectory("src/app/docs/components/primitives");
  const primitivesMenuItems: DocsItem[] = await Promise.all(
    primitives.map(async (name) => ({
      id: name,
      href: `/docs/components/primitives/${name}`,
      label: formatLabel(name),
    })),
  );

  const rechartCharts = await readDirectory("src/app/docs/charts/recharts");
  const rechartsMenuItems: DocsItem[] = await Promise.all(
    rechartCharts.map(async (name) => ({
      id: name,
      href: `/docs/charts/recharts/${name}`,
      label: formatLabel(name),
    })),
  );
  const rechartsQuickstartIndex = rechartsMenuItems.findIndex(
    (item) => item.id === "quickstart",
  );
  const [quickstartItem] = rechartsMenuItems.splice(rechartsQuickstartIndex, 1);
  if (quickstartItem) {
    rechartsMenuItems.unshift(quickstartItem);
  }
  const rechartsTooltipIndex = rechartsMenuItems.findIndex(
    (item) => item.id === "tooltip",
  );
  const [tooltipItem] = rechartsMenuItems.splice(rechartsTooltipIndex, 1);
  if (tooltipItem) {
    rechartsMenuItems.push(tooltipItem);
  }

  return { primitivesMenuItems, rechartsMenuItems };
};
