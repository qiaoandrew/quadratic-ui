import type { IconType } from "@icons-pack/react-simple-icons";
import type { LucideIcon } from "lucide-react";

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
  Icon: LucideIcon | IconType;
};

export type DocsItem = {
  id: string;
  href: string;
  label: string;
  Icon: LucideIcon | IconType;
};
