import { Bold } from "lucide-react";

import { Toggle } from "~/components/ui/Toggle";

export default function ToggleDisabledDemo() {
  return (
    <Toggle disabled aria-label="Toggle bold">
      <Bold />
    </Toggle>
  );
}
