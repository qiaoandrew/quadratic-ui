import { Slider, SliderThumb } from "~/components/ui/Slider";

export default function SliderDemo() {
  return (
    <Slider defaultValue={[50]} min={0} max={100} step={1} className="max-w-80">
      <SliderThumb />
    </Slider>
  );
}
