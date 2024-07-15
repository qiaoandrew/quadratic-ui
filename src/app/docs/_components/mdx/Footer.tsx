import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Button } from "~/components/ui/Button";

interface FooterProps {
  previousLabel?: string;
  previousHref?: string;
  nextLabel?: string;
  nextHref?: string;
}

export default function Footer({
  previousLabel,
  previousHref,
  nextLabel,
  nextHref,
}: FooterProps) {
  return (
    <footer className="mt-18 flex justify-between">
      {previousLabel && previousHref ? (
        <FooterLink
          direction="previous"
          href={previousHref}
          label={previousLabel}
        />
      ) : (
        <div />
      )}
      {nextLabel && nextHref ? (
        <FooterLink direction="next" href={nextHref} label={nextLabel} />
      ) : (
        <div />
      )}
    </footer>
  );
}

interface FooterLinkProps {
  direction: "previous" | "next";
  href: string;
  label: string;
}

function FooterLink({ direction, href, label }: FooterLinkProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "p-0 text-foreground/80 transition-colors",
        "hover:bg-transparent hover:text-foreground",
        "focus-visible:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0",
      )}
      asChild
    >
      <Link
        href={href}
        className={cn(
          "flex items-center gap-x-1.5",
          direction === "previous" && "flex-row-reverse",
        )}
      >
        {label}
        {direction === "next" ? (
          <ChevronRightIcon size={18} />
        ) : (
          <ChevronLeftIcon size={18} />
        )}
      </Link>
    </Button>
  );
}
