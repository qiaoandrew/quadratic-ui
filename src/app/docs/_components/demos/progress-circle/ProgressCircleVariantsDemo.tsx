import { ProgressCircle } from "~/components/ui/ProgressCircle";

export default function ProgressCircleVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <ProgressCircle value={62} radius={50} className="mx-auto">
        <p className="text-3.5 font-medium">Default</p>
      </ProgressCircle>
      <ProgressCircle
        value={62}
        radius={50}
        variant="neutral"
        className="mx-auto"
      >
        <p className="text-3.5 font-medium">Neutral</p>
      </ProgressCircle>
      <ProgressCircle
        value={62}
        radius={50}
        variant="warning"
        className="mx-auto"
      >
        <p className="text-3.5 font-medium">Warning</p>
      </ProgressCircle>
      <ProgressCircle
        value={62}
        radius={50}
        variant="success"
        className="mx-auto"
      >
        <p className="text-3.5 font-medium">Success</p>
      </ProgressCircle>
      <ProgressCircle
        value={62}
        radius={50}
        variant="error"
        className="mx-auto"
      >
        <p className="text-3.5 font-medium">Error</p>
      </ProgressCircle>
    </div>
  );
}
