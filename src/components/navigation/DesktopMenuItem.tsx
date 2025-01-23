import { cn } from "~/utils/tailwind";
import type { DesktopHeaderGroupItem } from "~/types/navigation";

import _Link from "~/components/ui/_Link";

interface DesktopMenuItemProps {
  closeDesktopMenu: () => void;
  item: DesktopHeaderGroupItem["items"][number];
}

export default function DesktopMenuItem({
  closeDesktopMenu,
  item,
}: DesktopMenuItemProps) {
  return (
    <_Link
      href={item.href}
      onClick={closeDesktopMenu}
      className={cn(
        "rounded-2-5 border-border/50 bg-accent/30 relative flex flex-col gap-y-0.5 overflow-hidden border p-3.5 transition-colors",
        "hover:bg-accent/80",
        item.size === "lg" && "row-span-2",
      )}
    >
      {item.Graphic && <item.Graphic />}
      <div className="to-background absolute inset-0 bg-linear-to-b from-transparent" />
      <h3 className="text-3-5 text-foreground 3xl:text-4 relative font-medium">
        {item.label}
      </h3>
      <p className="text-3-5 text-muted-foreground relative line-clamp-2 max-w-[220px] leading-6">
        {item.description}
      </p>
    </_Link>
  );
}
