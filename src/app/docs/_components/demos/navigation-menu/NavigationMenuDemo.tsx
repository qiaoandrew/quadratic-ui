"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuDropdownList,
  NavigationMenuDropdownItem,
  navigationMenuTriggerStyle,
} from "~/components/ui/NavigationMenu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent className="font-inter">
            <NavigationMenuDropdownList variant="card">
              <NavigationMenuDropdownItem
                variant="card"
                title="Installation"
                href="/docs/getting-started/installation"
                isRoute
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
          <Link href="/docs/primitives/accordion" legacyBehavior passHref>
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
