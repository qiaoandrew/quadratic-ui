import type { NavigationItem } from "~/types/navigation";
import type { Icon } from "~/types/ui";

export type DocsTOCItem = {
  type: "h2" | "h3";
  id: string;
  text: string;
};

export type DocsGroup = NavigationItem & {
  groupHrefPrefix?: string;
  Icon: Icon;
};

export type DocsItem = NavigationItem & {
  Icon?: Icon;
};
