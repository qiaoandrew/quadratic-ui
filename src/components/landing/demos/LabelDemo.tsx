import { Checkbox } from "~/components/ui/Checkbox";
import { Label } from "~/components/ui/Label";

export default function LabelDemo() {
  return (
    <div className="z-10 flex items-center gap-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}
