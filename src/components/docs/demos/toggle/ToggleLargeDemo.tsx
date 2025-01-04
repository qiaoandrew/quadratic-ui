import { Bold } from "lucide-react";

import { Toggle } from "~/components/ui/Toggle";

export default function ToggleLargeDemo() {
  return (
    <Toggle size="lg" aria-label="Toggle bold">
      <Bold />
    </Toggle>
  );
}
