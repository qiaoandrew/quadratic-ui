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
        "rounded-2 text-3-5 flex h-9 items-center px-3",
        isActive
          ? "bg-foreground/20 text-foreground font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {label}
    </Link>
  );
}
