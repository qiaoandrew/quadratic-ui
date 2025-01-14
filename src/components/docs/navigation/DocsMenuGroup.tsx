import { cn } from "~/utils/tailwind";

import _Link from "~/components/ui/_Link";

interface DocsMenuGroupProps {
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function DocsMenuGroup({
  href,
  isActive,
  icon,
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
          "[&>svg]:size-4",
          isActive
            ? "[&>svg]:text-foreground"
            : "[&>svg]:text-muted-foreground",
        )}
      >
        {icon}
      </div>
      {children}
    </_Link>
  );
}
