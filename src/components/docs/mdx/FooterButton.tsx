import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Button } from "~/components/ui/Button";

interface FooterButtonProps {
  direction: "previous" | "next";
  href: string;
  label: string;
}

export default function FooterButton({
  direction,
  href,
  label,
}: FooterButtonProps) {
  return (
    <Button
      variant="ghost"
      subject={direction === "previous" ? "icon-text" : "text-icon"}
      size="md"
      className="h-auto p-0 text-muted-foreground hover:bg-transparent [&_svg]:size-4.5"
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
        {direction === "previous" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Link>
    </Button>
  );
}
