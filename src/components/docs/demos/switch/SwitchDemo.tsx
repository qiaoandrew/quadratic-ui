import { Label } from "~/components/ui/Label";
import { Switch } from "~/components/ui/Switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
