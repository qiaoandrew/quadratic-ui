export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export enum DesktopHeaderItemType {
  Group,
  Link,
}

export type DesktopHeaderGroupItem = {
  type: DesktopHeaderItemType.Group;
  items: DesktopMenuItem[];
};

export type DesktopHeaderLinkItem = {
  type: DesktopHeaderItemType.Link;
  href: string;
};

export type DesktopHeaderItem = {
  id: string;
  label: string;
} & (DesktopHeaderGroupItem | DesktopHeaderLinkItem);

export type DesktopMenuItem = NavigationItem & {
  description: string;
  size: "sm" | "lg";
  Graphic?: () => React.ReactNode;
};

export type MobileMenuItem = NavigationItem & {
  variant: "primary" | "secondary";
};

export type FooterGroup = {
  id: string;
  label: string;
  items: NavigationItem[];
};

export enum DocsMenuItemType {
  Link,
  Group,
}

export type DocsMenuItemSetup = NavigationItem & {
  icon: React.ReactNode;
} & (
    | {
        type: DocsMenuItemType.Group;
        sections: {
          id: string;
          label: string;
          moveToFront?: string[];
          moveToBack?: string[];
          defaultIcon?: React.ReactNode;
          iconOverrides?: Record<string, React.ReactNode>;
        }[];
      }
    | { type: DocsMenuItemType.Link }
  );

export type DocsMenuGroup = NavigationItem & {
  type: DocsMenuItemType.Group;
  icon: React.ReactNode;
  sections: DocsMenuGroupSection[];
};

export type DocsMenuGroupSection = {
  id: string;
  label: string;
  items: DocsMenuGroupSectionItem[];
};

export type DocsMenuGroupSectionItem = NavigationItem & {
  icon: React.ReactNode;
};

export type DocsMenuLink = DocsMenuGroupSectionItem & {
  type: DocsMenuItemType.Link;
  icon: React.ReactNode;
};

export type DocsMenuItem = DocsMenuGroup | DocsMenuLink;

export type DocsTOCItem = {
  type: "h2" | "h3";
  id: string;
  text: string;
};
