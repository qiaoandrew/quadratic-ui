"use client";

import { usePathname } from "next/navigation";

import { ScrollArea } from "~/components/ui/ScrollArea";
import DocMenuGroups from "./DocMenuGroups";
import DocMenuSection from "./DocMenuSection";

import { cn } from "~/utils/tailwind";
import { type DocItem } from "~/types/types";
import { GETTING_STARTED_ITEMS, GUIDES_ITEMS } from "~/constants/docs";

interface DocMenuProps {
  primitivesMenuItems: DocItem[];
  compositesMenuItems: DocItem[];
  visualizationsMenuItems: DocItem[];
  isMobile?: boolean;
}

export default function DocMenu({
  primitivesMenuItems,
  compositesMenuItems,
  visualizationsMenuItems,
  isMobile,
}: DocMenuProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        isMobile
          ? "h-full"
          : "fixed bottom-0 left-auto top-18 z-30 hidden w-60 md:block",
      )}
    >
      <ScrollArea showScrollbar={false} className="h-full">
        <nav className={cn("grid gap-y-8", isMobile ? "pb-6 pt-8" : "py-6")}>
          <DocMenuGroups pathname={pathname} />
          <DocMenuSection
            pathname={pathname}
            title="Getting Started"
            items={GETTING_STARTED_ITEMS}
            isVisible={pathname.includes("getting-started") || pathname === "/"}
            isMobile={isMobile}
          />
          <DocMenuSection
            pathname={pathname}
            title="Guides"
            items={GUIDES_ITEMS}
            isVisible={pathname.includes("getting-started") || pathname === "/"}
            isMobile={isMobile}
          />
          <DocMenuSection
            pathname={pathname}
            title="Primitives"
            items={primitivesMenuItems}
            isVisible={pathname.includes("components") || pathname === "/"}
            isMobile={isMobile}
          />
          <DocMenuSection
            pathname={pathname}
            title="Composites"
            items={compositesMenuItems}
            isVisible={pathname.includes("components") || pathname === "/"}
            isMobile={isMobile}
          />
          <DocMenuSection
            pathname={pathname}
            title="Visualizations"
            items={visualizationsMenuItems}
            isVisible={pathname.includes("components") || pathname === "/"}
            isMobile={isMobile}
          />
        </nav>
      </ScrollArea>
    </aside>
  );
}
