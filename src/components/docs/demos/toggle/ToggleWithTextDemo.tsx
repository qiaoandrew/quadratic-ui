import { Bold } from "lucide-react";

import { Toggle } from "~/components/ui/Toggle";

export default function ToggleWithTextDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold />
      Bold
    </Toggle>
  );
}
