"use client";

import { useState } from "react";
import Link from "next/link";

import GradientText from "~/components/ui/GradientText";
import { cn } from "~/utils/tailwind";

const MOBILE_NAVIGATION_ITEMS = [
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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "bg-foreground/5 rounded-2.5 fixed inset-x-3 top-3 flex flex-col gap-y-5 overflow-hidden backdrop-blur transition-[height]",
        isMobileMenuOpen ? "h-[calc(100dvh-1.5rem)]" : "h-11",
      )}
    >
      <div className="flex h-11 shrink-0 items-center justify-between pl-3 pr-1.5">
        <Link href="/" className="flex items-center gap-x-2">
          <span className="relative size-4">
            <span className="bg-muted-foreground absolute bottom-0 left-0 size-3.5 rounded-[3.5px]" />
            <span className="border-foreground absolute right-0 top-0 size-3.5 rounded-[3.5px] border" />
          </span>
          <GradientText className="font-display text-4 font-semibold">
            quadratic/ui
          </GradientText>
        </Link>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex size-9 items-center justify-center"
        >
          <span className="relative size-5">
            <span
              className={cn(
                "bg-muted-foreground absolute left-0 top-0 h-0.5 w-5 transition-transform",
                isMobileMenuOpen
                  ? "translate-y-[9px] rotate-45"
                  : "translate-y-[5px] rotate-0",
              )}
            />
            <span
              className={cn(
                "bg-muted-foreground absolute left-0 top-0 h-0.5 w-5 transition-transform",
                isMobileMenuOpen
                  ? "translate-y-[9px] -rotate-45"
                  : "translate-y-[13px] rotate-0",
              )}
            />
          </span>
        </button>
      </div>
      <nav className="grow px-3 pb-3">
        <div className="grid grid-cols-2 gap-x-3 gap-y-6">
          {MOBILE_NAVIGATION_ITEMS.map((item) => (
            <Link
              href={item.href}
              className="font-display text-5 font-semibold"
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
