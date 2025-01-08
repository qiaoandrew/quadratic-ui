import { Slider, SliderThumb } from "~/components/ui/Slider";

export default function SliderMultipleThumbsDemo() {
  return (
    <Slider
      defaultValue={[10, 30]}
      min={0}
      max={100}
      step={1}
      className="max-w-96"
    >
      <SliderThumb />
      <SliderThumb />
    </Slider>
  );
}
