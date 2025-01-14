// This file is derived from Tremor, licensed under the Apache License 2.0.
// Modifications were made by Andrew Qiao on January 12, 2025.
// See LICENSE-APACHE-2.0 for details.

"use client";

import { useState } from "react";
import * as HoverCardPrimitives from "@radix-ui/react-hover-card";

import { cn } from "~/utils/tailwind";

interface TrackerProps extends React.ComponentProps<"div"> {
  data: TrackerBlockProps[];
  defaultBackgroundColor?: string;
  showHoverEffect?: boolean;
}

function Tracker({
  data,
  defaultBackgroundColor,
  showHoverEffect,
  className,
  ...props
}: TrackerProps) {
  return (
    <div
      className={cn("group flex h-8 w-full items-center", className)}
      {...props}
    >
      {data.map((props, idx) => (
        <TrackerBlock
          defaultBackgroundColor={defaultBackgroundColor}
          showHoverEffect={showHoverEffect}
          key={props.key ?? idx}
          {...props}
        />
      ))}
    </div>
  );
}

interface TrackerBlockProps {
  key?: string | number;
  color?: string;
  tooltip?: string;
  showHoverEffect?: boolean;
  defaultBackgroundColor?: string;
}

function TrackerBlock({
  color,
  tooltip,
  showHoverEffect,
  defaultBackgroundColor,
}: TrackerBlockProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HoverCardPrimitives.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      openDelay={0}
      closeDelay={0}
      tremor-id="tremor-raw"
    >
      <HoverCardPrimitives.Trigger onClick={() => setIsOpen(true)} asChild>
        <div
          className={cn(
            "size-full overflow-hidden px-[0.5px] transition-colors",
            "first:rounded-l-1 first:pl-0",
            "last:rounded-r-1 last:pr-0",
            "sm:px-0.25",
          )}
        >
          <div
            className={cn(
              "size-full rounded-0.25",
              color ?? defaultBackgroundColor,
              showHoverEffect && "hover:opacity-50",
            )}
          />
        </div>
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className="w-auto rounded-1.5 bg-primary px-1.5 py-1 text-3 text-primary-foreground"
        >
          {tooltip}
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  );
}

export { Tracker, type TrackerBlockProps };
