import { Textarea } from "~/components/ui/Textarea";

export default function TextareaDemo() {
  return (
    <Textarea
      placeholder="Type your message here."
      className="z-10 max-h-56 max-w-96"
    />
  );
}
