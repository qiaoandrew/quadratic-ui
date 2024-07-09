import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";
import { DEMOS } from "~/constants/demos";

import { Button } from "~/components/ui/Button";

export default function DemosGrid() {
  return (
    <section className="container-docs mb-36">
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:px-3 xl:grid-cols-3">
        {DEMOS.map(({ id, href, Component }) => (
          <div
            className={cn(
              "group relative flex max-h-80 min-h-80 items-center justify-center rounded-4 border border-opacity-80 p-6 transition-colors",
              "md:hover:border-ring/20 md:hover:bg-accent/30",
            )}
            key={id}
          >
            <Button
              size="icon"
              variant="outline"
              asChild
              className={cn(
                "absolute -right-2 -top-2 transition-opacity",
                "md:pointer-events-none md:right-4 md:top-4 md:opacity-0",
                "md:group-hover:pointer-events-auto md:group-hover:opacity-100",
              )}
            >
              <Link href={href}>
                <ArrowRightIcon size={20} />
              </Link>
            </Button>
            <Component />
          </div>
        ))}
      </div>
    </section>
  );
}
