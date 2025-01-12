import {
  SiGithub as GithubIcon,
  SiFigma as FigmaIcon,
} from "@icons-pack/react-simple-icons";
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

import {
  DesktopHeaderItemType,
  type DesktopHeaderItem,
  type DocsGroup,
  type DocsItem,
  type FooterGroup,
  type MobileHeaderNavigationItem,
} from "~/types/navigation";

import CreateT3AppGraphic from "~/components/navigation/graphics/CreateT3AppGraphic";
import FigmaGraphic from "~/components/navigation/graphics/FigmaGraphic";
import NextGraphic from "~/components/navigation/graphics/NextGraphic";
import ReactGraphic from "~/components/navigation/graphics/ReactGraphic";
import ShadcnUIGraphic from "~/components/navigation/graphics/ShadcnUIGraphic";
import T3Graphic from "~/components/navigation/graphics/T3Graphic";
import TailwindCSSGraphic from "~/components/navigation/graphics/TailwindCSSGraphic";
import TailwindVariantsGraphic from "~/components/navigation/graphics/TailwindVariantsGraphic";
import QuickstartGraphic from "~/components/navigation/graphics/QuickstartGraphic";

export const NAVIGATION_ITEMS = {
  home: {
    id: "home",
    label: "Home",
    href: "/",
  },
  "getting-started": {
    id: "getting-started",
    label: "Getting Started",
    href: "/docs/getting-started/quickstart",
  },
  introduction: {
    id: "introduction",
    label: "Introduction",
    href: "/docs/getting-started/introduction",
  },
  quickstart: {
    id: "quickstart",
    label: "Quickstart",
    href: "/docs/getting-started/quickstart",
  },
  credits: {
    id: "credits",
    label: "Credits",
    href: "/docs/getting-started/credits",
  },
  guides: {
    id: "guides",
    label: "Guides",
    href: "/docs/getting-started/create-t3-app",
  },
  "create-t3-app": {
    id: "create-t3-app",
    label: "Create T3 App",
    href: "/docs/getting-started/create-t3-app",
  },
  "dark-mode": {
    id: "dark-mode",
    label: "Dark Mode",
    href: "/docs/getting-started/dark-mode",
  },
  customization: {
    id: "customization",
    label: "Customization",
    href: "/docs/getting-started/customization",
  },
  contributing: {
    id: "contributing",
    label: "Contributing",
    href: "/docs/getting-started/contributing",
  },
  resources: {
    id: "resources",
    label: "Resources",
    href: "/docs/getting-started/resources",
  },
  figma: {
    id: "figma",
    label: "Figma",
    href: "https://www.figma.com/community/file/1351315753275186770/quadratic-ui-shadcn-ui-design-system-component-library",
  },
  github: {
    id: "github",
    label: "GitHub",
    href: "https://github.com/qiaoandrew/quadratic-ui",
  },
  components: {
    id: "components",
    label: "Components",
    href: "/docs/components/primitives/accordion",
  },
  charts: {
    id: "charts",
    label: "Charts",
    href: "/docs/charts/recharts/quickstart",
  },
  recharts: {
    id: "recharts",
    label: "Recharts",
    href: "/docs/charts/recharts/quickstart",
  },
  "shadcn/ui": {
    id: "shadcn-ui",
    label: "shadcn/ui",
    href: "https://ui.shadcn.com",
  },
  next: {
    id: "next-js",
    label: "Next.js",
    href: "https://nextjs.org",
  },
  react: {
    id: "react",
    label: "React",
    href: "https://reactjs.org",
  },
  t3: {
    id: "t3",
    label: "T3",
    href: "https://create.t3.gg",
  },
  "tailwind-css": {
    id: "tailwind-css",
    label: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  "tailwind-variants": {
    id: "tailwind-variants",
    label: "Tailwind Variants",
    href: "https://www.tailwind-variants.org",
  },
  primitives: {
    id: "primitives",
    label: "Primitives",
    href: "/docs/components/primitives/accordion",
  },
};

export const MOBILE_NAVIGATION_ITEMS: MobileHeaderNavigationItem[][] = [
  [
    { ...NAVIGATION_ITEMS.home, variant: "primary" },
    { ...NAVIGATION_ITEMS.github, variant: "primary" },
    { ...NAVIGATION_ITEMS.figma, variant: "primary" },
  ],
  [
    { ...NAVIGATION_ITEMS["getting-started"], variant: "primary" },
    { ...NAVIGATION_ITEMS.introduction, variant: "secondary" },
    { ...NAVIGATION_ITEMS.quickstart, variant: "secondary" },
    { ...NAVIGATION_ITEMS.credits, variant: "secondary" },
    { ...NAVIGATION_ITEMS["create-t3-app"], variant: "secondary" },
    { ...NAVIGATION_ITEMS["dark-mode"], variant: "secondary" },
    { ...NAVIGATION_ITEMS.customization, variant: "secondary" },
    { ...NAVIGATION_ITEMS.contributing, variant: "secondary" },
  ],
  [{ ...NAVIGATION_ITEMS.components, variant: "primary" }],
  [{ ...NAVIGATION_ITEMS.recharts, variant: "primary" }],
  [
    { ...NAVIGATION_ITEMS.resources, variant: "primary" },
    { ...NAVIGATION_ITEMS["shadcn/ui"], variant: "secondary" },
    { ...NAVIGATION_ITEMS.next, variant: "secondary" },
    { ...NAVIGATION_ITEMS.react, variant: "secondary" },
    { ...NAVIGATION_ITEMS.t3, variant: "secondary" },
    { ...NAVIGATION_ITEMS["tailwind-css"], variant: "secondary" },
    { ...NAVIGATION_ITEMS["tailwind-variants"], variant: "secondary" },
  ],
];

export const DESKTOP_NAVIGATION_ITEMS: DesktopHeaderItem[] = [
  {
    ...NAVIGATION_ITEMS["getting-started"],
    type: DesktopHeaderItemType.Group,
    items: [
      {
        ...NAVIGATION_ITEMS.quickstart,
        description:
          "Add quadratic/ui to your Next.js app and start building instantly.",
        size: "lg",
        Graphic: QuickstartGraphic,
      },
      {
        ...NAVIGATION_ITEMS["create-t3-app"],
        description: "Start your brand new Next.js project the best way.",
        size: "sm",
        Graphic: CreateT3AppGraphic,
      },
      {
        ...NAVIGATION_ITEMS.introduction,
        description: "Learn about quadratic/ui\'s vision and core principles.",
        size: "sm",
      },
      {
        ...NAVIGATION_ITEMS.figma,
        description: "Design with quadratic/ui components in Figma.",
        size: "lg",
        Graphic: FigmaGraphic,
      },
      {
        ...NAVIGATION_ITEMS["dark-mode"],
        description:
          "Add dark mode to your project with just a few lines of code.",
        size: "sm",
      },
      {
        ...NAVIGATION_ITEMS.credits,
        description:
          "Technologies and visionaries that made quadratic/ui possible.",
        size: "sm",
      },
    ],
  },
  { ...NAVIGATION_ITEMS.components, type: DesktopHeaderItemType.Link },
  {
    ...NAVIGATION_ITEMS.resources,
    type: DesktopHeaderItemType.Group,
    items: [
      {
        ...NAVIGATION_ITEMS["shadcn/ui"],
        description: "Beautiful components to copy and paste into your apps.",
        size: "lg",
        Graphic: ShadcnUIGraphic,
      },
      {
        ...NAVIGATION_ITEMS.next,
        description: "The React Framework for the Web. By Vercel.",
        size: "sm",
        Graphic: NextGraphic,
      },
      {
        ...NAVIGATION_ITEMS.react,
        description: "The library for web and native user interfaces. By Meta.",
        size: "sm",
        Graphic: ReactGraphic,
      },
      {
        ...NAVIGATION_ITEMS.t3,
        description: "The best way to start a full-stack, typesafe Next.js app",
        size: "lg",
        Graphic: T3Graphic,
      },
      {
        ...NAVIGATION_ITEMS["tailwind-css"],
        description: "A utility-first CSS framework to build any design.",
        size: "sm",
        Graphic: TailwindCSSGraphic,
      },
      {
        ...NAVIGATION_ITEMS["tailwind-variants"],
        description:
          "The power of Tailwind combined with a first-class variant API.",
        size: "sm",
        Graphic: TailwindVariantsGraphic,
      },
    ],
  },
  { ...NAVIGATION_ITEMS.github, type: DesktopHeaderItemType.Link },
  { ...NAVIGATION_ITEMS.figma, type: DesktopHeaderItemType.Link },
];

export const FOOTER_NAVIGATION_ITEMS: FooterGroup[] = [
  {
    ...NAVIGATION_ITEMS["getting-started"],
    items: [
      NAVIGATION_ITEMS.introduction,
      NAVIGATION_ITEMS.quickstart,
      NAVIGATION_ITEMS.credits,
    ],
  },
  {
    ...NAVIGATION_ITEMS.guides,
    items: [
      NAVIGATION_ITEMS["create-t3-app"],
      NAVIGATION_ITEMS["dark-mode"],
      NAVIGATION_ITEMS.customization,
      NAVIGATION_ITEMS.contributing,
    ],
  },
  {
    ...NAVIGATION_ITEMS.components,
    items: [NAVIGATION_ITEMS.primitives, NAVIGATION_ITEMS.recharts],
  },
  {
    ...NAVIGATION_ITEMS.resources,
    items: [
      NAVIGATION_ITEMS["shadcn/ui"],
      NAVIGATION_ITEMS.next,
      NAVIGATION_ITEMS.react,
      NAVIGATION_ITEMS.t3,
      NAVIGATION_ITEMS["tailwind-css"],
    ],
  },
];

export const DOCS_GROUPS: DocsGroup[] = [
  {
    ...NAVIGATION_ITEMS["getting-started"],
    groupHrefPrefix: "/docs/getting-started",
    Icon: RocketIcon,
  },
  {
    ...NAVIGATION_ITEMS.components,
    groupHrefPrefix: "/docs/components",
    Icon: ComponentIcon,
  },
  {
    ...NAVIGATION_ITEMS.charts,
    groupHrefPrefix: "/docs/charts",
    Icon: ChartColumnBigIcon,
  },
  { ...NAVIGATION_ITEMS.github, Icon: GithubIcon },
  { ...NAVIGATION_ITEMS.figma, Icon: FigmaIcon },
];

export const GETTING_STARTED_ITEMS: DocsItem[] = [
  { ...NAVIGATION_ITEMS["getting-started"], Icon: SmileIcon },
  { ...NAVIGATION_ITEMS.quickstart, Icon: RocketIcon },
  { ...NAVIGATION_ITEMS.credits, Icon: CircleCheckIcon },
];

export const GUIDES_ITEMS: DocsItem[] = [
  { ...NAVIGATION_ITEMS["create-t3-app"], Icon: AtomIcon },
  { ...NAVIGATION_ITEMS["dark-mode"], Icon: MoonIcon },
  { ...NAVIGATION_ITEMS.customization, Icon: PaletteIcon },
  { ...NAVIGATION_ITEMS.contributing, Icon: GitMergeIcon },
];
