import { RocketIcon, ComponentIcon, GithubIcon, FigmaIcon } from "lucide-react";

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
    href: "/docs/primitives/accordion",
    hrefPrefix: "/docs/primitives",
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
  },
  {
    id: "quickstart",
    href: "/docs/getting-started/quickstart",
    label: "Quickstart",
  },
  {
    id: "credits",
    href: "/docs/getting-started/credits",
    label: "Credits",
  },
];

export const GUIDES_ITEMS: DocItem[] = [
  {
    id: "adding-components",
    href: "/docs/getting-started/adding-components",
    label: "Adding Components",
  },
  {
    id: "customization",
    href: "/docs/getting-started/customization",
    label: "Customization",
  },
  {
    id: "figma",
    href: "/docs/getting-started/figma",
    label: "Figma",
  },
  {
    id: "contributing",
    href: "/docs/getting-started/contributing",
    label: "Contributing",
  },
];
