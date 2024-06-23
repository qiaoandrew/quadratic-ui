"use client";

import { Checkbox } from "~/components/ui/Checkbox";
import { Label } from "~/components/ui/Label";

export default function CheckboxDefaultDemo() {
  return (
    <div className="flex items-center gap-x-2">
      <Checkbox id="terms-2" />
      <Label htmlFor="terms-2">Accept terms and conditions</Label>
    </div>
  );
}
