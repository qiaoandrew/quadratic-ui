import { Bold } from "lucide-react";

import { Toggle } from "~/components/ui/Toggle";

export default function ToggleSmallDemo() {
  return (
    <Toggle size="sm" aria-label="Toggle bold">
      <Bold />
    </Toggle>
  );
}
