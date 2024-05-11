"use client";

import { usePathname } from "next/navigation";

import { ScrollArea } from "~/components/ui/ScrollArea";
import DocMenuSectionTitle from "./DocMenuSectionTitle";
import DocMenuSectionItem from "./DocMenuSectionItem";

import { DOCUMENTATION_GROUPS } from "~/constants/navigation";
import { type DocItem } from "~/types/types";

interface DocMenuProps {
  primitivesMenu: DocItem[];
}

export default function DocMenu({ primitivesMenu }: DocMenuProps) {
  const pathname = usePathname();

  return (
    <aside className="top-18 fixed bottom-0 left-auto z-30 w-60">
      <ScrollArea showScrollbar={false} className="h-full">
        <nav className="grid gap-y-8 py-6">
          <div>
            {DOCUMENTATION_GROUPS.map((group) => (
              <DocMenuSectionItem
                variant="group"
                Icon={group.Icon}
                href={group.href}
                isActive={
                  group.hrefPrefix
                    ? pathname.startsWith(group.hrefPrefix)
                    : false
                }
                key={group.id}
              >
                {group.label}
              </DocMenuSectionItem>
            ))}
          </div>
          {pathname.includes("primitives") && (
            <div className="grid gap-y-0.5">
              <DocMenuSectionTitle>Primitives</DocMenuSectionTitle>
              {primitivesMenu.map((primitive) => (
                <DocMenuSectionItem
                  variant="page"
                  href={primitive.href}
                  isActive={primitive.href === pathname}
                  key={primitive.id}
                >
                  {primitive.label}
                </DocMenuSectionItem>
              ))}
            </div>
          )}
        </nav>
      </ScrollArea>
    </aside>
  );
}
