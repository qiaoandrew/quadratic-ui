import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "~/utils/tailwind";

function Slider({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      {children}
    </SliderPrimitive.Root>
  );
}

function SliderThumb({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>) {
  return (
    <SliderPrimitive.Thumb
      className={cn(
        "block size-4 rounded-full border border-primary/50 bg-background ring-offset-background transition-colors",
        "hover:cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Slider, SliderThumb };
