"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/utils/tailwind";
import type { DocsTOCItem } from "~/types/docs";
import useActiveId from "~/hooks/useActiveId";
import { ScrollArea, ScrollBar } from "~/components/ui/ScrollArea";

interface DocsTOCProps {
  tocs: Record<string, DocsTOCItem[]>;
}

export default function DocsTOC({ tocs }: DocsTOCProps) {
  const pathname = usePathname();
  const tocId = pathname.split("/").slice(2).join("/");
  const toc = tocs[tocId];

  const activeId = useActiveId({ ids: (toc ?? []).map((item) => item.id) });

  if (!toc) {
    throw new Error(`No toc found for ${tocId}`);
  }

  return (
    <div className="hidden w-58 shrink-0 pr-4 xl:block">
      <div className="fixed bottom-0 top-19 w-full">
        <ScrollArea className="h-full">
          <nav className="flex flex-col items-start gap-y-2.5 py-9">
            {toc.map((item) => (
              <Link
                href={`#${item.id}`}
                className={cn(
                  "text-3.5 focus-visible:outline-none",
                  item.id === activeId
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground focus-visible:text-foreground",
                  item.type === "h3" && "ml-6",
                )}
                key={item.id}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <ScrollBar className="bg-transparent" />
        </ScrollArea>
      </div>
    </div>
  );
}
