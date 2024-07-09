import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

import { SheetClose } from "~/components/ui/Sheet";

import { cn } from "~/utils/tailwind";

export interface DocMenuSectionItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof docMenuSectionItemVariants> {
  Icon?: LucideIcon;
  href: string;
  isActive: boolean;
  isMobile?: boolean;
  children: React.ReactNode;
}

const docMenuSectionItemVariants = cva(
  cn(
    "text-muted-foreground group text-3.5 px-3 flex items-center gap-x-2 rounded-2 outline-none",
    "data-[active=true]:font-semibold data-[active=true]:text-highlight-foreground",
    "focus-visible:bg-accent",
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
  isMobile,
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

  const content = href.startsWith("/") ? (
    <Link href={href} data-active={isActive} className={docMenuItemStyles}>
      {icon}
      {children}
    </Link>
  ) : (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      data-active={isActive}
      className={docMenuItemStyles}
    >
      {icon}
      {children}
    </a>
  );

  if (isMobile) {
    return <SheetClose asChild>{content}</SheetClose>;
  }

  return content;
}
