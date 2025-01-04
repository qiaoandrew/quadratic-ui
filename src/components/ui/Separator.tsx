import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "~/utils/tailwind";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-0.25 w-full" : "h-full w-0.25",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
