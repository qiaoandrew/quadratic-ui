import { RocketIcon, ComponentIcon, GithubIcon, FigmaIcon } from "lucide-react";

import { type DocGroup } from "~/types/types";

export const DOCUMENTATION_GROUPS: DocGroup[] = [
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
