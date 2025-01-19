import { readDirectory, readFile } from "~/utils/fs";
import { DOCS_MENU_ITEMS } from "~/constants/navigation";
import {
  DocsMenuItemType,
  type DocsTOCItem,
  type DocsMenuGroupSectionItem,
  type DocsMenuGroupSection,
  type DocsMenuItem,
} from "~/types/navigation";

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

const CAPITAL_WORDS = ["otp", "xy"];

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

  for (const group of DOCS_MENU_ITEMS) {
    if (group.type === DocsMenuItemType.Link) continue;

    for (const section of group.sections) {
      const ids = await readDirectory(`src/app/docs/${group.id}/${section.id}`);
      await Promise.all(
        ids.map(async (id) => {
          const filePath = `src/app/docs/${group.id}/${section.id}/${id}/page.mdx`;
          const content = await readFile(filePath);
          const toc = extractSectionIds(content);
          tocs[`${group.id}/${section.id}/${id}`] = toc;
        }),
      );
    }
  }

  return tocs;
}

export const getDocsMenuItems = async () => {
  const docsMenu: DocsMenuItem[] = [];

  for (const group of DOCS_MENU_ITEMS) {
    if (group.type === DocsMenuItemType.Group) {
      const sections: DocsMenuGroupSection[] = [];

      for (const section of group.sections) {
        const ids = await readDirectory(
          `src/app/docs/${group.id}/${section.id}`,
        );
        const items: DocsMenuGroupSectionItem[] = await Promise.all(
          ids.map(async (id) => ({
            id,
            href: `/docs/${group.id}/${section.id}/${id}`,
            label: formatLabel(id),
            icon: section.iconOverrides?.[id] ?? section.defaultIcon ?? null,
          })),
        );

        if (section.moveToFront) {
          for (let i = section.moveToFront.length - 1; i >= 0; i--) {
            const idx = items.findIndex(
              (item) => item.id === section.moveToFront![i],
            );
            if (idx === -1) continue;

            const [item] = items.splice(idx, 1);
            if (item) items.unshift(item);
          }
        }

        if (section.moveToBack) {
          for (let i = 0; i < section.moveToBack.length; i++) {
            const idx = items.findIndex(
              (item) => item.id === section.moveToBack![i],
            );
            if (idx === -1) continue;

            const [item] = items.splice(idx, 1);
            if (item) items.push(item);
          }
        }

        sections.push({ id: section.id, label: section.label, items });
      }

      docsMenu.push({
        id: group.id,
        label: group.label,
        href: group.href,
        type: group.type,
        icon: group.icon,
        sections,
      });
    } else {
      docsMenu.push(group);
    }
  }

  return docsMenu;
};
