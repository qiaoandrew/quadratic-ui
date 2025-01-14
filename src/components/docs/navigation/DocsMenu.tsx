"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";

import { DocsMenuItemType, type DocsMenuItem } from "~/types/navigation";

import DocsMenuGroups from "~/components/docs/navigation/DocsMenuGroups";
import DocsMenuSection from "~/components/docs/navigation/DocsMenuSection";
import { ScrollArea, ScrollAreaBar } from "~/components/ui/ScrollArea";

interface DocsMenuProps {
  docsMenuItems: DocsMenuItem[];
}

export default function DocsMenu({ docsMenuItems }: DocsMenuProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-auto top-14 hidden w-54 md:block xl:top-19">
      <ScrollArea className="h-full">
        <nav className="grid gap-y-8 py-7 xl:py-9">
          <DocsMenuGroups pathname={pathname} />
          {docsMenuItems.map((menuItem) => {
            if (menuItem.type === DocsMenuItemType.Link) {
              return null;
            }

            return (
              <Fragment key={menuItem.id}>
                {menuItem.sections.map(
                  (section) =>
                    pathname.includes(menuItem.id) && (
                      <DocsMenuSection
                        pathname={pathname}
                        label={section.label}
                        items={section.items}
                        key={`${menuItem.id}-${section.id}`}
                      />
                    ),
                )}
              </Fragment>
            );
          })}
        </nav>
        <ScrollAreaBar className="[&>div]:bg-transparent" />
      </ScrollArea>
    </aside>
  );
}
