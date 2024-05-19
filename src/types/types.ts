import { type LucideIcon } from "lucide-react";

export type DocGroup = {
  id: string;
  href: string;
  hrefPrefix?: string;
  label: string;
  Icon: LucideIcon;
};

export type DocItem = {
  id: string;
  href: string;
  label: string;
  Icon?: LucideIcon;
};

export type DocTOCItem = {
  type: "h2" | "h3";
  id: string;
  text: string;
};
