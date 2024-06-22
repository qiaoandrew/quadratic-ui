import { Textarea } from "~/components/ui/Textarea";

export default function TextareaDisabledDemo() {
  return (
    <Textarea
      placeholder="Type your message here."
      disabled
      className="max-w-[360px]"
    />
  );
}
