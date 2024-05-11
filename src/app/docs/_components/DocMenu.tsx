"use client";

import { usePathname } from "next/navigation";

import { ScrollArea } from "~/components/ui/ScrollArea";
import DocMenuGroups from "./DocMenuGroups";
import DocMenuSection from "./DocMenuSection";

import { type DocItem } from "~/types/types";
import { GETTING_STARTED_ITEMS, GUIDES_ITEMS } from "~/constants/docs";

interface DocMenuProps {
  primitivesMenuItems: DocItem[];
}

export default function DocMenu({ primitivesMenuItems }: DocMenuProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-auto top-18 z-30 w-60">
      <ScrollArea showScrollbar={false} className="h-full">
        <nav className="grid gap-y-8 py-6">
          <DocMenuGroups pathname={pathname} />
          <DocMenuSection
            pathname={pathname}
            title="Getting Started"
            items={GETTING_STARTED_ITEMS}
            isVisible={pathname.includes("getting-started")}
          />
          <DocMenuSection
            pathname={pathname}
            title="Guides"
            items={GUIDES_ITEMS}
            isVisible={pathname.includes("getting-started")}
          />
          <DocMenuSection
            pathname={pathname}
            title="Primitives"
            items={primitivesMenuItems}
            isVisible={pathname.includes("primitives")}
          />
        </nav>
      </ScrollArea>
    </aside>
  );
}
