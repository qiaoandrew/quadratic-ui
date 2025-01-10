import { Bold } from "lucide-react";

import { Toggle } from "~/components/ui/Toggle";

export default function ToggleDemo() {
  return (
    <Toggle
      aria-label="Toggle bold"
      variant="outline"
      className="bg-background"
    >
      <Bold />
    </Toggle>
  );
}
