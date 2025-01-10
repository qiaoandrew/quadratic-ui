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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent className="font-inter">
            <NavigationMenuDropdownList variant="card">
              <NavigationMenuDropdownItem
                variant="card"
                title="Quickstart"
                description="Follow a quick and easy installation to get you building ASAP."
                href="/docs/getting-started/quickstart"
                cardImgSrc="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                cardImgAlt="dunes"
              />
              <NavigationMenuDropdownItem
                variant="default"
                title="Introduction"
                description=" Read about quadratic/ui's vision and its core principles."
                href="/docs/getting-started/introduction"
              />
              <NavigationMenuDropdownItem
                variant="default"
                title="Figma Design File"
                description="Design with quadratic/ui's components in Figma."
                href="https://www.figma.com/community/file/1351315753275186770/quadratic-ui"
              />
              <NavigationMenuDropdownItem
                variant="default"
                title="Credits"
                description="The inspiration that made quadratic/ui possible."
                href="/docs/getting-started/credits"
              />
            </NavigationMenuDropdownList>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/docs/components/primitives/accordion">Components</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="font-inter">
            <NavigationMenuDropdownList variant="card">
              <NavigationMenuDropdownItem
                variant="card"
                title="shadcn/ui"
                description="The component library quadratic/ui is inspired by and built on top of."
                href="https://ui.shadcn.com/"
                cardImgSrc="https://images.unsplash.com/photo-1608447714925-599deeb5a682?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                cardImgAlt="black pattern"
              />
              <NavigationMenuDropdownItem
                variant="default"
                title="Radix UI"
                description="The component library shadcn/ui was built on top of."
                href="https://www.radix-ui.com/"
              />
              <NavigationMenuDropdownItem
                variant="default"
                href="https://tailwindcss.com/"
                description="The easiest and fastest way to write CSS. (in my opinion)"
                title="Tailwind CSS"
              />
              <NavigationMenuDropdownItem
                variant="default"
                title="Next.js"
                description=" A React framework that everyone should use. (also in my opinion)"
                href="https://nextjs.org/"
              />
            </NavigationMenuDropdownList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
