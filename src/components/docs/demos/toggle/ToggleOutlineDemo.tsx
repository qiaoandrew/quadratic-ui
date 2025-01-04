import { Bold } from "lucide-react";

import { Toggle } from "~/components/ui/Toggle";

export default function ToggleOutlineDemo() {
  return (
    <Toggle variant="outline" aria-label="Toggle bold">
      <Bold />
    </Toggle>
  );
}
