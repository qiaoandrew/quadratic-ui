import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "~/utils/tailwind";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={cn(
        "leading-none relative text-3.5 font-medium",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
