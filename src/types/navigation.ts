export type MobileHeaderItem = {
  id: string;
  label: string;
  href: string;
};

export enum DesktopHeaderItemType {
  Group = "group",
  Route = "route",
  Hyperlink = "hyperlink",
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
  }>;
};

export type DesktopHeaderLinkItem = {
  type: DesktopHeaderItemType.Route | DesktopHeaderItemType.Hyperlink;
  href: string;
};
