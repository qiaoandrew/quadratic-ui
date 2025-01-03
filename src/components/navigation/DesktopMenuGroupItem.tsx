import Link from "next/link";

import { cn } from "~/utils/tailwind";
import type { DesktopHeaderGroupItem } from "~/types/navigation";

interface DesktopMenuGroupItemProps {
  closeDesktopMenu: () => void;
  item: DesktopHeaderGroupItem["items"][number];
}

export default function DesktopMenuGroupItem({
  closeDesktopMenu,
  item,
}: DesktopMenuGroupItemProps) {
  return (
    <Link
      href={item.href}
      onClick={closeDesktopMenu}
      className={cn(
        "relative flex flex-col gap-y-0.5 overflow-hidden rounded-2.5 border border-border/50 bg-accent/30 p-3.5 transition-colors",
        "hover:bg-accent/80",
        item.size === "lg" && "row-span-2",
      )}
    >
      {item.Graphic && <item.Graphic />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      <h3 className="relative text-3.5 font-medium text-foreground 3xl:text-4">
        {item.label}
      </h3>
      <p className="relative line-clamp-2 max-w-[220px] text-3.5 leading-6 text-muted-foreground">
        {item.description}
      </p>
    </Link>
  );
}
