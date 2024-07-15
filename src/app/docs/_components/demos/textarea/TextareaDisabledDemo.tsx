import { Textarea } from "~/components/ui/Textarea";

export default function TextareaDisabledDemo() {
  return (
    <Textarea
      placeholder="Type your message here."
      disabled
      className="max-h-56 max-w-96"
    />
  );
}
