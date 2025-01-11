import {
  DesktopHeaderItemType,
  type DesktopHeaderItem,
  type FooterGroup,
  type MobileHeaderItem,
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

export const MOBILE_NAVIGATION_ITEMS: MobileHeaderItem[] = [
  {
    id: "components",
    label: "Components",
    href: "/docs/components/primitives/accordion",
  },
  {
    id: "quickstart",
    label: "Quickstart",
    href: "/docs/getting-started/quickstart",
  },
  {
    id: "create-t3-app",
    label: "Create T3 App",
    href: "/docs/getting-started/create-t3-app",
  },
  {
    id: "introduction",
    label: "Introduction",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "figma",
    label: "Figma",
    href: "https://www.figma.com/community/file/1351315753275186770/quadratic-ui-shadcn-ui-design-system-component-library",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/qiaoandrew/quadratic-ui",
  },
  {
    id: "dark-mode",
    label: "Dark Mode",
    href: "/docs/getting-started/dark-mode",
  },
  {
    id: "credits",
    label: "Credits",
    href: "/docs/getting-started/credits",
  },
  {
    id: "shadcn-ui",
    label: "shadcn/ui",
    href: "https://ui.shadcn.com",
  },
  {
    id: "next-js",
    label: "Next.js",
    href: "https://nextjs.org",
  },
  {
    id: "react",
    label: "React",
    href: "https://reactjs.org",
  },
  {
    id: "t3",
    label: "T3",
    href: "https://create.t3.gg",
  },
  {
    id: "tailwind-css",
    label: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    id: "tailwind-variants",
    label: "Tailwind Variants",
    href: "https://www.tailwind-variants.org",
  },
];

export const DESKTOP_NAVIGATION_ITEMS: DesktopHeaderItem[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    type: DesktopHeaderItemType.Group,
    items: [
      {
        id: "quickstart",
        label: "Quickstart",
        description:
          "Add quadratic/ui to your Next.js app and start building instantly.",
        href: "/docs/getting-started/quickstart",
        size: "lg",
        Graphic: QuickstartGraphic,
      },
      {
        id: "create-t3-app",
        label: "Create T3 App",
        description: "Start your brand new Next.js project the best way.",
        href: "/docs/getting-started/create-t3-app",
        size: "sm",
        Graphic: CreateT3AppGraphic,
      },
      {
        id: "introduction",
        label: "Introduction",
        description: "Learn about quadratic/ui\'s vision and core principles.",
        href: "/docs/getting-started/introduction",
        size: "sm",
      },
      {
        id: "figma",
        label: "Figma",
        description: "Design with quadratic/ui components in Figma.",
        href: "/docs/getting-started/introduction",
        size: "lg",
        Graphic: FigmaGraphic,
      },
      {
        id: "dark-mode",
        label: "Dark Mode",
        description:
          "Add dark mode to your project with just a few lines of code.",
        href: "/docs/getting-started/introduction",
        size: "sm",
      },
      {
        id: "credits",
        label: "Credits",
        description:
          "Technologies and visionaries that made quadratic/ui possible.",
        href: "/docs/getting-started/introduction",
        size: "sm",
      },
    ],
  },
  {
    id: "components",
    label: "Components",
    type: DesktopHeaderItemType.Link,
    href: "/docs/components/primitives/accordion",
  },
  {
    id: "resources",
    label: "Resources",
    type: DesktopHeaderItemType.Group,
    items: [
      {
        id: "shadcn-ui",
        label: "shadcn/ui",
        description: "Beautiful components to copy and paste into your apps.",
        href: "https://ui.shadcn.com",
        size: "lg",
        Graphic: ShadcnUIGraphic,
      },
      {
        id: "next-js",
        label: "Next.js",
        description: "The React Framework for the Web. By Vercel.",
        href: "https://nextjs.org",
        size: "sm",
        Graphic: NextGraphic,
      },
      {
        id: "react",
        label: "React",
        description: "The library for web and native user interfaces. By Meta.",
        href: "https://reactjs.org",
        size: "sm",
        Graphic: ReactGraphic,
      },
      {
        id: "t3",
        label: "T3",
        description: "The best way to start a full-stack, typesafe Next.js app",
        href: "https://create.t3.gg",
        size: "lg",
        Graphic: T3Graphic,
      },
      {
        id: "tailwind-css",
        label: "Tailwind CSS",
        description: "A utility-first CSS framework to build any design.",
        href: "https://tailwindcss.com",
        size: "sm",
        Graphic: TailwindCSSGraphic,
      },
      {
        id: "tailwind-variants",
        label: "Tailwind Variants",
        description:
          "The power of Tailwind combined with a first-class variant API.",
        href: "https://www.tailwind-variants.org",
        size: "sm",
        Graphic: TailwindVariantsGraphic,
      },
    ],
  },
  {
    id: "github",
    label: "GitHub",
    type: DesktopHeaderItemType.Link,
    href: "https://github.com/qiaoandrew/quadratic-ui",
  },
  {
    id: "figma",
    label: "Figma",
    type: DesktopHeaderItemType.Link,
    href: "https://www.figma.com/community/file/1351315753275186770/quadratic-ui-shadcn-ui-design-system-component-library",
  },
];

export const FOOTER_NAVIGATION_ITEMS: FooterGroup[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      {
        id: "introduction",
        label: "Introduction",
        href: "/docs/getting-started/introduction",
      },
      {
        id: "quickstart",
        label: "Quickstart",
        href: "/docs/getting-started/quickstart",
      },
      {
        id: "credits",
        label: "Credits",
        href: "/docs/getting-started/credits",
      },
    ],
  },
  {
    id: "guides",
    label: "Guides",
    items: [
      {
        id: "create-t3-app",
        label: "Create T3 App",
        href: "/docs/getting-started/create-t3-app",
      },
      {
        id: "dark-mode",
        label: "Dark Mode",
        href: "/docs/getting-started/dark-mode",
      },
      {
        id: "customization",
        label: "Customization",
        href: "/docs/getting-started/customization",
      },
      {
        id: "contributing",
        label: "Contributing",
        href: "/docs/getting-started/contributing",
      },
    ],
  },
  {
    id: "components",
    label: "Components",
    items: [
      {
        id: "primitives",
        label: "Primitives",
        href: "/docs/components/primitives/accordion",
      },
      {
        id: "charts",
        label: "Charts",
        href: "/docs/components/charts/bar-chart",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    items: [
      {
        id: "shadcn-ui",
        label: "shadcn/ui",
        href: "https://ui.shadcn.com",
      },
      {
        id: "radix-ui",
        label: "Radix UI",
        href: "https://www.radix-ui.com",
      },
      {
        id: "next-js",
        label: "Next.js",
        href: "https://nextjs.org",
      },
      {
        id: "tailwind-css",
        label: "Tailwind CSS",
        href: "https://tailwindcss.com",
      },
    ],
  },
];
