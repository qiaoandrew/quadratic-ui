"use client";

import { useState } from "react";
import { ChevronsDownUpIcon, ChevronsUpDownIcon } from "lucide-react";

import { Button } from "~/components/ui/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/Collapsible";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full max-w-80 flex-col gap-y-2"
    >
      <div className="flex items-center justify-between px-4">
        <h4 className="text-3.5 font-medium text-foreground">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-7 rounded-1.5">
            {isOpen ? (
              <ChevronsDownUpIcon className="size-4" />
            ) : (
              <ChevronsUpDownIcon className="size-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-1.5 border px-4 py-2 font-mono text-3.5">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="flex flex-col gap-y-2">
        <div className="rounded-1.5 border px-4 py-2 font-mono text-3.5">
          @radix-ui/colors
        </div>
        <div className="rounded-1.5 border px-4 py-2 font-mono text-3.5">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
