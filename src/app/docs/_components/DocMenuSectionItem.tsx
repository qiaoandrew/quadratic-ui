import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

export interface DocMenuSectionItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof docMenuSectionItemVariants> {
  Icon?: LucideIcon;
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const docMenuSectionItemVariants = cva(
  cn(
    "text-muted-foreground group text-3.5 px-3 flex items-center gap-x-2 rounded-2",
    "data-[active=true]:font-semibold data-[active=true]:text-highlight-foreground",
  ),
  {
    variants: {
      variant: {
        group: "h-9",
        page: "h-10 hover:bg-accent data-[active=true]:bg-highlight",
      },
    },
    defaultVariants: {
      variant: "page",
    },
  },
);

export default function DocMenuSectionItem({
  Icon,
  href,
  variant,
  isActive,
  children,
}: DocMenuSectionItemProps) {
  const docMenuItemStyles = cn(docMenuSectionItemVariants({ variant }));

  const icon = Icon && (
    <div
      className={cn(
        "grid size-6 place-content-center rounded-1.5 border",
        "group-hover:bg-border",
        isActive && "bg-highlight",
      )}
    >
      <Icon size={16} />
    </div>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} data-active={isActive} className={docMenuItemStyles}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      rel="noreferrer noopener"
      data-active={isActive}
      className={docMenuItemStyles}
    >
      {icon}
      {children}
    </a>
  );
}
