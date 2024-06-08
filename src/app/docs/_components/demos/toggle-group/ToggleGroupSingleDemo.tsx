import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/ToggleGroup";

export default function ToggleGroupSingleDemo() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
