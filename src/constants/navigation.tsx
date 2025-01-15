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
  TableIcon,
} from "lucide-react";

import {
  DesktopHeaderItemType,
  type DesktopHeaderItem,
  type DocsMenuItemSetup,
  type FooterGroup,
  type MobileMenuItem,
  DocsMenuItemType,
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

const NAVIGATION_ITEMS = {
  home: {
    id: "home",
    label: "Home",
    href: "/",
  },
  "getting-started": {
    id: "getting-started",
    label: "Getting Started",
    href: "/docs/getting-started/guides/quickstart",
  },
  introduction: {
    id: "introduction",
    label: "Introduction",
    href: "/docs/getting-started/guides/introduction",
  },
  quickstart: {
    id: "quickstart",
    label: "Quickstart",
    href: "/docs/getting-started/guides/quickstart",
  },
  credits: {
    id: "credits",
    label: "Credits",
    href: "/docs/getting-started/learn-more/credits",
  },
  guides: {
    id: "guides",
    label: "Guides",
    href: "/docs/getting-started/guides/create-t3-app",
  },
  "create-t3-app": {
    id: "create-t3-app",
    label: "Create T3 App",
    href: "/docs/getting-started/guides/create-t3-app",
  },
  "dark-mode": {
    id: "dark-mode",
    label: "Dark Mode",
    href: "/docs/getting-started/guides/dark-mode",
  },
  customization: {
    id: "customization",
    label: "Customization",
    href: "/docs/getting-started/learn-more/customization",
  },
  contributing: {
    id: "contributing",
    label: "Contributing",
    href: "/docs/getting-started/learn-more/contributing",
  },
  resources: {
    id: "resources",
    label: "Resources",
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
  visualizations: {
    id: "visualizations",
    label: "Visualizations",
    href: "/docs/visualizations/recharts/quickstart",
  },
  recharts: {
    id: "recharts",
    label: "Recharts",
    href: "/docs/visualizations/recharts/quickstart",
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

export const MOBILE_NAVIGATION_ITEMS: MobileMenuItem[][] = [
  [
    { ...NAVIGATION_ITEMS.home, variant: "primary", isLabel: false },
    { ...NAVIGATION_ITEMS.github, variant: "primary", isLabel: false },
    { ...NAVIGATION_ITEMS.figma, variant: "primary", isLabel: false },
  ],
  [
    { id: "resources", label: "Resources", variant: "primary", isLabel: true },
    { ...NAVIGATION_ITEMS["shadcn/ui"], variant: "secondary", isLabel: false },
    { ...NAVIGATION_ITEMS.next, variant: "secondary", isLabel: false },
    { ...NAVIGATION_ITEMS.react, variant: "secondary", isLabel: false },
    { ...NAVIGATION_ITEMS.t3, variant: "secondary", isLabel: false },
    {
      ...NAVIGATION_ITEMS["tailwind-css"],
      variant: "secondary",
      isLabel: false,
    },
    {
      ...NAVIGATION_ITEMS["tailwind-variants"],
      variant: "secondary",
      isLabel: false,
    },
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
  {
    ...NAVIGATION_ITEMS.components,
    type: DesktopHeaderItemType.Link,
  },
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
export const DOCS_MENU_ITEMS: DocsMenuItemSetup[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    type: DocsMenuItemType.Group,
    href: "/docs/getting-started/guides/quickstart",
    icon: <RocketIcon />,
    sections: [
      {
        id: "guides",
        label: "Guides",
        moveToFront: [
          "introduction",
          "quickstart",
          "create-t3-app",
          "dark-mode",
        ],
        iconOverrides: {
          introduction: <SmileIcon />,
          quickstart: <RocketIcon />,
          "create-t3-app": <AtomIcon />,
          "dark-mode": <MoonIcon />,
        },
      },
      {
        id: "learn-more",
        label: "Learn More",
        moveToFront: ["credits", "contributing", "customization"],
        iconOverrides: {
          credits: <CircleCheckIcon />,
          contributing: <GitMergeIcon />,
          customization: <PaletteIcon />,
        },
      },
    ],
  },
  {
    id: "components",
    label: "Components",
    type: DocsMenuItemType.Group,
    href: "/docs/components/primitives/accordion",
    icon: <ComponentIcon />,
    sections: [
      {
        id: "primitives",
        label: "Primitives",
        defaultIcon: <ComponentIcon />,
      },
    ],
  },
  {
    id: "visualizations",
    label: "Visualizations",
    type: DocsMenuItemType.Group,
    href: "/docs/visualizations/recharts/quickstart",
    icon: <ChartColumnBigIcon />,
    sections: [
      {
        id: "recharts",
        label: "Recharts",
        moveToFront: ["quickstart"],
        moveToBack: ["tooltip"],
        defaultIcon: <ChartColumnBigIcon />,
      },
      // {
      //   id: "visx",
      //   label: "Visx",
      //   moveToFront: ["quickstart"],
      //   moveToBack: ["axes", "legend", "tooltip"],
      //   defaultIcon: <ChartColumnBigIcon />,
      // },
    ],
  },
  {
    id: "tables",
    label: "Tables",
    type: DocsMenuItemType.Group,
    href: "/docs/tables/primitives/table",
    icon: <TableIcon />,
    sections: [
      {
        id: "primitives",
        label: "Primitives",
        defaultIcon: <TableIcon />,
      },
      {
        id: "tanstack",
        label: "TanStack",
        defaultIcon: <TableIcon />,
      },
    ],
  },
  {
    id: "github",
    label: "GitHub",
    type: DocsMenuItemType.Link,
    href: "https://github.com/qiaoandrew/quadratic-ui",
    icon: <GithubIcon />,
  },
  {
    id: "figma",
    label: "Figma",
    type: DocsMenuItemType.Link,
    href: "https://www.figma.com/community/file/1351315753275186770/quadratic-ui-shadcn-ui-design-system-component-library",
    icon: <FigmaIcon />,
  },
];
