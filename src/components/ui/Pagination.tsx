import * as React from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import {
  type ButtonProps,
  buttonVariants,
  Button,
} from "~/components/ui/Button";

import { cn } from "~/utils/tailwind";

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
    className={cn("flex flex-row items-center gap-1", className)}
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

interface PaginationLinkProps
  extends React.ComponentProps<typeof Link>,
    Pick<ButtonProps, "size"> {
  isActive?: boolean;
}

const PaginationLink = ({
  href,
  isActive,
  size = "icon",
  className,
  ...props
}: PaginationLinkProps) => (
  <Link
    href={href}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPreviousLink = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2", className)}
    {...props}
  >
    <ChevronLeftIcon size={16} />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPreviousLink.displayName = "PaginationPreviousLink";

const PaginationNextLink = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon size={16} />
  </PaginationLink>
);
PaginationNextLink.displayName = "PaginationNextLink";

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
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2", className)}
    {...props}
  >
    <ChevronLeftIcon size={16} />
    <span>Previous</span>
  </PaginationButton>
);
PaginationPreviousButton.displayName = "PaginationPreviousButton";

const PaginationNextButton = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon size={16} />
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
  PaginationLink,
  PaginationNextLink,
  PaginationPreviousLink,
  PaginationButton,
  PaginationNextButton,
  PaginationPreviousButton,
};
