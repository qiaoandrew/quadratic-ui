"use client";

import { usePathname } from "next/navigation";

import DocsMenuGroups from "~/components/docs/navigation/DocsMenuGroups";
import { ScrollArea, ScrollBar } from "~/components/ui/ScrollArea";

export default function DocsMenu() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-auto top-14 hidden w-60 md:block xl:top-19">
      <ScrollArea className="h-full">
        <nav className="grid gap-y-8 py-7 xl:py-9">
          <DocsMenuGroups pathname={pathname} />
        </nav>
        <ScrollBar className="bg-transparent" />
      </ScrollArea>
    </aside>
  );
}
