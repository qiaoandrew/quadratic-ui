import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/ToggleGroup";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem
        value="bold"
        aria-label="Toggle bold"
        variant="outline"
        className="bg-background"
      >
        <Bold size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
        variant="outline"
        className="bg-background"
      >
        <Italic size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="strikethrough"
        aria-label="Toggle strikethrough"
        variant="outline"
        className="bg-background"
      >
        <Underline size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
