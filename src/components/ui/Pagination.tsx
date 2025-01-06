import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Button, type ButtonProps } from "~/components/ui/Button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("flex items-center gap-x-1.5", className)} {...props} />
  );
}

function PaginationItem(props: React.ComponentProps<"li">) {
  return <li {...props} />;
}

interface PaginationButtonProps extends ButtonProps {
  isActive?: boolean;
}

function PaginationButton({
  isActive,
  subject = "icon",
  size = "md",
  ...props
}: PaginationButtonProps) {
  return (
    <Button
      aria-current={isActive ? "page" : undefined}
      variant={isActive ? "outline" : "ghost"}
      subject={subject}
      size={size}
      {...props}
    />
  );
}

function PaginationPreviousButton(
  props: React.ComponentProps<typeof PaginationButton>,
) {
  return (
    <PaginationButton
      aria-label="Go to previous page"
      subject="icon-text"
      {...props}
    >
      <ChevronLeftIcon />
      Previous
    </PaginationButton>
  );
}

function PaginationNextButton(
  props: React.ComponentProps<typeof PaginationButton>,
) {
  return (
    <PaginationButton
      aria-label="Go to next page"
      subject="text-icon"
      {...props}
    >
      Next
      <ChevronRightIcon />
    </PaginationButton>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4.5" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton,
  PaginationNextButton,
  PaginationPreviousButton,
};
