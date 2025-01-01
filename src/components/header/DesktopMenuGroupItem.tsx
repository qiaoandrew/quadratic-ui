import Link from "next/link";

import { cn } from "~/utils/tailwind";
import type { DesktopHeaderGroupItem } from "~/types/navigation";

interface DesktopMenuGroupItemProps {
  item: DesktopHeaderGroupItem["items"][number];
}

export default function DesktopMenuGroupItem({
  item,
}: DesktopMenuGroupItemProps) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex flex-col gap-y-0.5 rounded-2.5 bg-muted/30 p-3.5",
        item.size === "lg" && "row-span-2",
      )}
    >
      <h3 className="text-3.5 font-medium text-foreground 3xl:text-4">
        {item.label}
      </h3>
      <p className="line-clamp-2 max-w-[220px] text-3.5 leading-6 text-muted-foreground">
        {item.description}
      </p>
    </Link>
  );
}
