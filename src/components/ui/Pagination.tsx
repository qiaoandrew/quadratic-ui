import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "~/utils/tailwind";

import { type ButtonProps, Button } from "~/components/ui/Button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-x-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={className} {...props} />
));
PaginationItem.displayName = "PaginationItem";

interface PaginationButtonProps extends ButtonProps {
  isActive?: boolean;
}

const PaginationButton = ({
  onClick,
  isActive,
  size = "icon",
  className,
  ...props
}: PaginationButtonProps) => (
  <Button
    onClick={onClick}
    variant={isActive ? "outline" : "ghost"}
    size={size}
    aria-current={isActive ? "page" : undefined}
    className={className}
    {...props}
  />
);
PaginationButton.displayName = "PaginationButton";

const PaginationPreviousButton = ({
  className,
  iconSize = 16,
  ...props
}: React.ComponentProps<typeof PaginationButton> & { iconSize?: number }) => (
  <PaginationButton
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2", className)}
    {...props}
  >
    <ChevronLeftIcon size={iconSize} />
    <span>Previous</span>
  </PaginationButton>
);
PaginationPreviousButton.displayName = "PaginationPreviousButton";

const PaginationNextButton = ({
  className,
  iconSize = 16,
  ...props
}: React.ComponentProps<typeof PaginationButton> & { iconSize?: number }) => (
  <PaginationButton
    aria-label="Go to next page"
    size="default"
    className={cn("gap-x-1 pr-2", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon size={iconSize} />
  </PaginationButton>
);
PaginationNextButton.displayName = "PaginationNextButton";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontalIcon size={16} className="text-muted-foreground" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton,
  PaginationNextButton,
  PaginationPreviousButton,
};
