import { Slider, SliderThumb } from "~/components/ui/Slider";

import { cn } from "~/utils/tailwind";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      min={0}
      max={100}
      step={1}
      className={cn("w-full max-w-80", className)}
      {...props}
    >
      <SliderThumb />
    </Slider>
  );
}
