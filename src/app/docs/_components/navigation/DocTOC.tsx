"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useActiveId } from "~/hooks/useActiveID";
import { ScrollArea } from "~/components/ui/ScrollArea";

import { cn } from "~/utils/tailwind";
import type { DocTOCItem } from "~/types/types";

interface DocTOCProps {
  tocs: Record<string, DocTOCItem[]>;
}

export default function DocTOC({ tocs }: DocTOCProps) {
  const pathname = usePathname();
  const tocId = pathname.split("/").slice(2).join("/");
  const toc = tocs[tocId];

  const activeId = useActiveId({ ids: (toc ?? []).map((item) => item.id) });

  if (!toc) throw new Error(`No TOC found for ${tocId}`);

  return (
    <div className="z-30 hidden w-60 shrink-0 pr-3 xl:block">
      <div className="fixed bottom-0 top-20 w-full">
        <ScrollArea showScrollbar={false} className="h-full">
          <nav className="grid gap-y-2.5 py-6">
            {toc.map((item) => (
              <Link
                href={`#${item.id}`}
                className={cn(
                  "text-3.5",
                  item.id === activeId
                    ? "font-medium text-highlight-foreground"
                    : "text-muted-foreground hover:text-accent-foreground",
                  item.type === "h3" && "ml-6",
                )}
                key={item.id}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
}
