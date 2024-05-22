import {
  RocketIcon,
  ComponentIcon,
  GithubIcon,
  FigmaIcon,
  CircleCheckIcon,
  SmileIcon,
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
    id: "t3-setup",
    href: "/docs/getting-started/t3-setup",
    label: "T3 App Setup",
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
