import { cn } from "~/utils/tailwind";
import { MOBILE_NAVIGATION_ITEMS } from "~/constants/navigation";
import {
  DocsMenuItemType,
  type DocsMenuItem,
  type MobileMenuItem,
} from "~/types/navigation";

import { ScrollArea, ScrollAreaBar } from "~/components/ui/ScrollArea";
import _Link from "~/components/ui/_Link";
import { useMemo } from "react";

interface MobileMenuProps {
  docsMenuItems: DocsMenuItem[];
  closeMobileMenu: () => void;
}

export default function MobileMenu({
  docsMenuItems,
  closeMobileMenu,
}: MobileMenuProps) {
  const mobileNavigationItems = useMemo(() => {
    const mobileDocsNavigationItems: MobileMenuItem[][] = [];

    for (const group of docsMenuItems) {
      if (group.type === DocsMenuItemType.Group) {
        for (const section of group.sections) {
          const sectionItems: MobileMenuItem[] = [];

          sectionItems.push({
            id: section.id,
            label: section.label,
            variant: "primary",
            isLabel: true,
          });

          for (const item of section.items) {
            sectionItems.push({
              id: item.id,
              label: item.label,
              variant: "secondary",
              href: item.href,
              isLabel: false,
            });
          }

          mobileDocsNavigationItems.push(sectionItems);
        }
      }
    }

    return [
      ...MOBILE_NAVIGATION_ITEMS.slice(0, 1),
      ...mobileDocsNavigationItems,
      ...MOBILE_NAVIGATION_ITEMS.slice(1),
    ];
  }, [docsMenuItems]);

  return (
    <ScrollArea className="h-full">
      <nav className="grid gap-x-3 gap-y-8 px-3 pb-3 xs:gap-y-8 xl:hidden">
        {mobileNavigationItems.map((group, i) => (
          <div className="flex flex-col gap-y-3" key={i}>
            {group.map((item) =>
              item.isLabel ? (
                <p
                  className={cn(
                    "text-6 font-semibold",
                    item.variant === "secondary" && "text-muted-foreground",
                  )}
                  key={item.id}
                >
                  {item.label}
                </p>
              ) : (
                <_Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "text-6 font-semibold",
                    item.variant === "secondary" && "text-muted-foreground",
                  )}
                  key={item.id}
                >
                  {item.label}
                </_Link>
              ),
            )}
          </div>
        ))}
      </nav>
      <ScrollAreaBar />
    </ScrollArea>
  );
}
