import {
  DesktopHeaderItemType,
  type DesktopHeaderItem,
  type MobileHeaderItem,
} from "~/types/navigation";

import NextGraphic from "~/components/header/graphics/NextGraphic";
import ReactGraphic from "~/components/header/graphics/ReactGraphic";
import ShadcnUIGraphic from "~/components/header/graphics/ShadcnUIGraphic";
import T3Graphic from "~/components/header/graphics/T3Graphic";
import TailwindCSSGraphic from "~/components/header/graphics/TailwindCSSGraphic";
import TailwindVariantsGraphic from "~/components/header/graphics/TailwindVariantsGraphic";

export const MOBILE_NAVIGATION_ITEMS: MobileHeaderItem[] = [
  {
    id: "components",
    label: "Components",
    href: "/docs/components/accordion",
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
    href: "/docs/getting-started/introduction",
  },
  {
    id: "github",
    label: "GitHub",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "dark-mode",
    label: "Dark Mode",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "credits",
    label: "Credits",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "shadcn-ui",
    label: "shadcn/ui",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "next-js",
    label: "Next.js",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "react",
    label: "React",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "t3",
    label: "T3",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "tailwind-css",
    label: "Tailwind CSS",
    href: "/docs/getting-started/introduction",
  },
  {
    id: "tailwind-variants",
    label: "Tailwind Variants",
    href: "/docs/getting-started/introduction",
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
      },
      {
        id: "create-t3-app",
        label: "Create T3 App",
        description: "Start your brand new Next.js project the best way.",
        href: "/docs/getting-started/create-t3-app",
        size: "sm",
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
