import type { JSX } from "react";

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export type DesktopHeaderNavigationItem = NavigationItem & {
  description: string;
  size: "sm" | "lg";
  Graphic?: () => JSX.Element;
};

export type MobileHeaderNavigationItem = NavigationItem & {
  variant: "primary" | "secondary";
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
  items: DesktopHeaderNavigationItem[];
};

export type DesktopHeaderLinkItem = {
  type: DesktopHeaderItemType.Link;
  href: string;
};

export type FooterGroup = {
  id: string;
  label: string;
  items: NavigationItem[];
};
