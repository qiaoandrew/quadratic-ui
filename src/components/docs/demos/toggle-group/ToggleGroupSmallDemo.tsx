import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/ToggleGroup";

export default function ToggleGroupSmallDemo() {
  return (
    <ToggleGroup type="multiple" size="sm">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold size={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic size={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline size={14} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
