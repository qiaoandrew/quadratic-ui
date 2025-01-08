import { Label } from "~/components/ui/Label";
import { Input } from "~/components/ui/Input";

export default function InputWithLabelDemo() {
  return (
    <div className="flex w-full max-w-[320px] flex-col gap-y-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  );
}
