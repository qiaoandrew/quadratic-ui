import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "../ui/Button";

interface FooterProps {
  previousLabel: string;
  previousHref: string;
  nextLabel: string;
  nextHref: string;
}

export default function Footer({
  previousLabel,
  previousHref,
  nextLabel,
  nextHref,
}: FooterProps) {
  return (
    <footer className="mt-18 flex justify-between">
      <Button
        variant="ghost"
        className="p-0 text-foreground/80 hover:bg-transparent hover:text-foreground"
      >
        <Link href={previousHref} className="flex items-center gap-x-1.5">
          <ChevronLeftIcon size={18} />
          {previousLabel}
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="p-0 text-foreground/80 hover:bg-transparent hover:text-foreground"
      >
        <Link href={nextHref} className="flex items-center gap-x-1.5">
          {nextLabel}
          <ChevronRightIcon size={18} />
        </Link>
      </Button>
    </footer>
  );
}
