"use client";

import * as React from "react";
import * as HoverCardPrimitives from "@radix-ui/react-hover-card";

import { cn } from "~/utils/tailwind";

interface TrackerBlockProps {
  key?: string | number;
  color?: string;
  tooltip?: string;
  defaultBackgroundColor?: string;
}

const TrackerBlock = ({
  color,
  tooltip,
  defaultBackgroundColor,
}: TrackerBlockProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <HoverCardPrimitives.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardPrimitives.Trigger onClick={() => setIsOpen(true)} asChild>
        <div
          className={cn(
            "size-full rounded-px first:rounded-l-1 last:rounded-r-1",
            color ?? defaultBackgroundColor,
          )}
        />
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className="w-auto rounded-1.5 bg-foreground px-2 py-1 text-3.5 text-background"
        >
          {tooltip}
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  );
};
TrackerBlock.displayName = "Tracker";

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[];
  defaultBackgroundColor?: string;
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    { data = [], defaultBackgroundColor = "bg-accent", className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-10 w-full items-center gap-x-0.5", className)}
        {...props}
      >
        {data.map((props, index) => (
          <TrackerBlock
            key={props.key ?? index}
            defaultBackgroundColor={defaultBackgroundColor}
            {...props}
          />
        ))}
      </div>
    );
  },
);
Tracker.displayName = "Tracker";

export { Tracker, type TrackerBlockProps };
