import Link from "next/link";

import { cn } from "~/utils/tailwind";
import type { Icon } from "~/types/ui";

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
  const icon = (
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
  );

  const docsMenuGroupStyles = cn(
    "group flex items-center gap-x-2 text-3.5 font-medium",
    isActive ? "text-foreground" : "text-muted-foreground",
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={docsMenuGroupStyles}>
        {icon}
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={docsMenuGroupStyles}
      >
        {icon}
        {children}
      </a>
    );
  }
}
