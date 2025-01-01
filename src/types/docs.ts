import type { Icon } from "~/types/ui";

export type DocsTOCItem = {
  type: "h2" | "h3";
  id: string;
  text: string;
};

export type DocsGroup = {
  id: string;
  href: string;
  groupHrefPrefix?: string;
  label: string;
  Icon: Icon;
};

export type DocsItem = {
  id: string;
  href: string;
  label: string;
  Icon: Icon;
};
