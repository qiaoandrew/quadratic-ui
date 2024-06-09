import { ProgressCircle } from "~/components/ui/ProgressCircle";

export default function ProgressCircleWithChildrenDemo() {
  return (
    <div className="flex items-center gap-x-6">
      <ProgressCircle value={75} className="mx-auto">
        <p className="text-3.5 font-medium">75%</p>
      </ProgressCircle>
      <div className="flex flex-col gap-y-0.5">
        <p className="text-3.5 font-medium">$340/$450</p>
        <p className="text-3.5 text-muted-foreground">
          Spend management control
        </p>
      </div>
    </div>
  );
}
