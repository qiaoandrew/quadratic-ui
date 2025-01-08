import { SiGithub, SiFigma } from "@icons-pack/react-simple-icons";
import {
  AtomIcon,
  ChartColumnBigIcon,
  CircleCheckIcon,
  ComponentIcon,
  GitMergeIcon,
  MoonIcon,
  PaletteIcon,
  RocketIcon,
  SmileIcon,
} from "lucide-react";

import type { DocsItem } from "~/types/docs";

export const DOCS_GROUPS = [
  {
    id: "getting-started",
    href: "/docs/getting-started/quickstart",
    groupHrefPrefix: "/docs/getting-started",
    label: "Getting Started",
    Icon: RocketIcon,
  },
  {
    id: "components",
    href: "/docs/components/primitives/accordion",
    groupHrefPrefix: "/docs/components",
    label: "Components",
    Icon: ComponentIcon,
  },
  {
    id: "charts",
    href: "/docs/charts/recharts/area-chart",
    groupHrefPrefix: "/docs/charts",
    label: "Charts",
    Icon: ChartColumnBigIcon,
  },
  {
    id: "github",
    href: "https://github.com/qiaoandrew/quadratic-ui",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    id: "figma",
    label: "Figma",
    Icon: SiFigma,
    href: "https://www.figma.com/community/file/1351315753275186770/quadratic-ui",
  },
];

export const GETTING_STARTED_ITEMS: DocsItem[] = [
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

export const GUIDES_ITEMS: DocsItem[] = [
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
    Icon: PaletteIcon,
  },
  {
    id: "contributing",
    href: "/docs/getting-started/contributing",
    label: "Contributing",
    Icon: GitMergeIcon,
  },
];
