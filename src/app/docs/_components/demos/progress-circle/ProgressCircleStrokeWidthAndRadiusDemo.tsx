import { ProgressCircle } from "~/components/ui/ProgressCircle";

export default function ProgressCircleStrokeWidthAndRadiusDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <ProgressCircle value={72} radius={16} strokeWidth={4} />
      <ProgressCircle value={72} radius={25} strokeWidth={6} />
      <ProgressCircle value={72} radius={40} strokeWidth={10} />
      <ProgressCircle value={72} radius={45} strokeWidth={5} />
      <ProgressCircle value={72} radius={50} strokeWidth={8} />
    </div>
  );
}
