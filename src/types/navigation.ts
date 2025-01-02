import type { JSX } from "react";

export type MobileHeaderItem = {
  id: string;
  label: string;
  href: string;
};

export enum DesktopHeaderItemType {
  Group,
  Link,
}

export type DesktopHeaderItem = {
  id: string;
  label: string;
} & (DesktopHeaderGroupItem | DesktopHeaderLinkItem);

export type DesktopHeaderGroupItem = {
  type: DesktopHeaderItemType.Group;
  items: Array<{
    id: string;
    label: string;
    description: string;
    href: string;
    size: "sm" | "lg";
    Graphic?: () => JSX.Element;
  }>;
};

export type DesktopHeaderLinkItem = {
  type: DesktopHeaderItemType.Link;
  href: string;
};
