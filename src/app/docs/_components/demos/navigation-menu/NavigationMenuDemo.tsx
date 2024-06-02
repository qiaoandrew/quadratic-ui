"use client";

import Link from "next/link";

import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuDropdownList,
  NavigationMenuDropdownItem,
} from "~/components/ui/NavigationMenu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent className="font-inter">
            <NavigationMenuDropdownList variant="card">
              <NavigationMenuDropdownItem
                variant="card"
                title="Quickstart"
                href="/docs/getting-started/quickstart"
                isRoute
                cardImg="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                cardImgAlt="dunes texture"
              >
                Follow a quick and easy installation to get you building ASAP.
              </NavigationMenuDropdownItem>
              <NavigationMenuDropdownItem
                href="/docs/getting-started/introduction"
                title="Introduction"
                isRoute
              >
                Read about quadratic/ui&apos;s vision and its core principles.
              </NavigationMenuDropdownItem>
              <NavigationMenuDropdownItem
                href="https://www.figma.com/community/file/1351315753275186770/quadratic-ui"
                title="Figma Design File"
              >
                Design with quadratic/ui&apos;s components in Figma.
              </NavigationMenuDropdownItem>
              <NavigationMenuDropdownItem
                href="/docs/getting-started/credits"
                title="Credits"
                isRoute
              >
                The inspiration that made quadratic/ui possible.
              </NavigationMenuDropdownItem>
            </NavigationMenuDropdownList>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/docs/components/primitives/accordion"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Components
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="font-inter">
            <NavigationMenuDropdownList variant="card">
              <NavigationMenuDropdownItem
                variant="card"
                title="shadcn/ui"
                href="https://ui.shadcn.com/"
                cardImg="https://images.unsplash.com/photo-1608447714925-599deeb5a682?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                cardImgAlt="black pattern"
              >
                The component library quadratic/ui is inspired by and built on
                top of.
              </NavigationMenuDropdownItem>
              <NavigationMenuDropdownItem
                title="Radix UI"
                href="https://www.radix-ui.com/"
              >
                The component library shadcn/ui was built on top of.
              </NavigationMenuDropdownItem>
              <NavigationMenuDropdownItem
                href="https://tailwindcss.com/"
                title="Tailwind CSS"
              >
                The easiest and fastest way to write CSS. (in my opinion)
              </NavigationMenuDropdownItem>
              <NavigationMenuDropdownItem
                title="Next.js"
                href="https://nextjs.org/"
              >
                A React framework that everyone should use. (also in my opinion)
              </NavigationMenuDropdownItem>
            </NavigationMenuDropdownList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
