"use client";

import { usePathname } from "next/navigation";

import type { DocsItem } from "~/types/docs";
import { GETTING_STARTED_ITEMS, GUIDES_ITEMS } from "~/constants/docs";

import DocsMenuGroups from "~/components/docs/navigation/DocsMenuGroups";
import DocsMenuSection from "~/components/docs/navigation/DocsMenuSection";
import { ScrollArea, ScrollAreaBar } from "~/components/ui/ScrollArea";

interface DocsMenuProps {
  primitivesMenuItems: DocsItem[];
  rechartsMenuItems: DocsItem[];
}

export default function DocsMenu({
  primitivesMenuItems,
  rechartsMenuItems,
}: DocsMenuProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-auto top-14 hidden w-54 md:block xl:top-19">
      <ScrollArea className="h-full">
        <nav className="grid gap-y-8 py-7 xl:py-9">
          <DocsMenuGroups pathname={pathname} />
          {pathname.includes("getting-started") && (
            <DocsMenuSection
              pathname={pathname}
              label="Getting Started"
              items={GETTING_STARTED_ITEMS}
            />
          )}
          {pathname.includes("getting-started") && (
            <DocsMenuSection
              pathname={pathname}
              label="Guides"
              items={GUIDES_ITEMS}
            />
          )}
          {pathname.includes("components") && (
            <DocsMenuSection
              pathname={pathname}
              label="Primitives"
              items={primitivesMenuItems}
            />
          )}
          {pathname.includes("charts") && (
            <DocsMenuSection
              pathname={pathname}
              label="Recharts"
              items={rechartsMenuItems}
            />
          )}
        </nav>
        <ScrollAreaBar className="[&>div]:bg-transparent" />
      </ScrollArea>
    </aside>
  );
}
