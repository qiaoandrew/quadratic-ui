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
      className="flex w-full max-w-76 flex-col gap-y-2"
    >
      <div className="flex items-center justify-between px-4">
        <h4 className="text-3.5 text-foreground font-medium">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-1.5 hover:bg-background size-7"
          >
            {isOpen ? (
              <ChevronsDownUpIcon className="size-4" />
            ) : (
              <ChevronsUpDownIcon className="size-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-1.5 bg-background text-3.5 border px-4 py-2 font-mono">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="flex flex-col gap-y-2">
        <div className="rounded-1.5 bg-background text-3.5 border px-4 py-2 font-mono">
          @radix-ui/colors
        </div>
        <div className="rounded-1.5 bg-background text-3.5 border px-4 py-2 font-mono">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
