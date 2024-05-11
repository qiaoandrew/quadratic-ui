import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";
import Link from "next/link";

export interface DocMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof docMenuItemVariants> {
  Icon?: LucideIcon;
  href: string;
  children: React.ReactNode;
}

const docMenuItemVariants = cva(
  "text-muted-foreground group text-3.5 px-3.5 flex items-center gap-x-2 hover:font-semibold",
  {
    variants: {
      variant: {
        group: "h-9",
        page: "h-10",
      },
    },
    defaultVariants: {
      variant: "page",
    },
  },
);

export default function DocMenuItem({
  Icon,
  href,
  variant,
  children,
}: DocMenuItemProps) {
  const docMenuItemStyles = cn(docMenuItemVariants({ variant }));

  const icon = Icon && (
    <div
      className={cn(
        "grid size-6 place-content-center rounded-1.5 border",
        "group-hover:bg-border",
      )}
    >
      <Icon size={16} />
    </div>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={docMenuItemStyles}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <a href={href} rel="noreferrer noopener" className={docMenuItemStyles}>
      {icon}
      {children}
    </a>
  );
}
