import { Label } from "~/components/ui/Label";
import { Textarea } from "~/components/ui/Textarea";

export default function TextareaWithLabelDemo() {
  return (
    <div className="flex w-full max-w-96 flex-col gap-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        placeholder="Type your message here..."
        id="message"
        className="max-h-56"
      />
    </div>
  );
}
