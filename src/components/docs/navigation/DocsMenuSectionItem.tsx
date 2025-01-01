import Link from "next/link";

import { cn } from "~/utils/tailwind";

interface DocsMenuSectionItemProps {
  href: string;
  label: string;
  isActive: boolean;
}

export default function DocsMenuSectionItem({
  href,
  label,
  isActive,
}: DocsMenuSectionItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-9 items-center rounded-2 px-2.5 text-3.5",
        isActive
          ? "bg-foreground/20 font-medium text-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {label}
    </Link>
  );
}
