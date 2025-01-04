import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/ToggleGroup";

export default function ToggleGroupLargeDemo() {
  return (
    <ToggleGroup type="multiple" size="lg">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
