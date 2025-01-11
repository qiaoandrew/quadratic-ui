import { cn } from "~/utils/tailwind";
import type { Icon } from "~/types/ui";

import _Link from "~/components/ui/_Link";

interface DocsMenuGroupProps {
  href: string;
  isActive: boolean;
  Icon: Icon;
  children: React.ReactNode;
}

export default function DocsMenuGroup({
  href,
  isActive,
  Icon,
  children,
}: DocsMenuGroupProps) {
  return (
    <_Link
      href={href}
      className={cn(
        "group flex items-center gap-x-2 text-3.5 font-medium",
        isActive ? "text-foreground" : "text-muted-foreground",
      )}
    >
      <div
        className={cn(
          "flex size-6 items-center justify-center rounded-1.5 border",
          isActive ? "bg-foreground/20" : "group-hover:bg-border",
        )}
      >
        <Icon
          className={cn(
            "size-4",
            isActive ? "text-foreground" : "text-muted-foreground",
          )}
        />
      </div>
      {children}
    </_Link>
  );
}
