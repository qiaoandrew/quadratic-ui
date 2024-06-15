import {
  type LucideIcon,
  RocketIcon,
  ComponentIcon,
  GithubIcon,
  FigmaIcon,
  CircleCheckIcon,
  SmileIcon,
  CodeXmlIcon,
  FileCode2,
  AtomIcon,
  MoonIcon,
} from "lucide-react";

import type { DocItem, DocGroup } from "~/types/types";

export const DOC_GROUPS: DocGroup[] = [
  {
    id: "getting-started",
    href: "/docs/getting-started/quickstart",
    hrefPrefix: "/docs/getting-started",
    label: "Getting Started",
    Icon: RocketIcon,
  },
  {
    id: "components",
    href: "/docs/components/primitives/accordion",
    hrefPrefix: "/docs/components",
    label: "Components",
    Icon: ComponentIcon,
  },
  {
    id: "github",
    href: "https://github.com/qiaoandrew/quadratic-ui",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    id: "figma",
    label: "Figma",
    Icon: FigmaIcon,
    href: "https://www.figma.com/community/file/1351315753275186770/quadratic-ui",
  },
];

export const GETTING_STARTED_ITEMS: DocItem[] = [
  {
    id: "introduction",
    href: "/docs/getting-started/introduction",
    label: "Introduction",
    Icon: SmileIcon,
  },
  {
    id: "quickstart",
    href: "/docs/getting-started/quickstart",
    label: "Quickstart",
    Icon: RocketIcon,
  },
  {
    id: "credits",
    href: "/docs/getting-started/credits",
    label: "Credits",
    Icon: CircleCheckIcon,
  },
];

export const GUIDES_ITEMS: DocItem[] = [
  {
    id: "create-t3-app",
    href: "/docs/getting-started/create-t3-app",
    label: "create-t3-app",
    Icon: AtomIcon,
  },
  {
    id: "dark-mode",
    href: "/docs/getting-started/dark-mode",
    label: "Dark Mode",
    Icon: MoonIcon,
  },
  {
    id: "customization",
    href: "/docs/getting-started/customization",
    label: "Customization",
  },
  {
    id: "contributing",
    href: "/docs/getting-started/contributing",
    label: "Contributing",
  },
];

export const DOC_LINKS_ICONS: Record<string, LucideIcon> = {
  "code-xml": CodeXmlIcon,
  "file-code-2": FileCode2,
};
