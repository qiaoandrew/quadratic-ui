import { Input } from "~/components/ui/Input";

export default function InputDisabledDemo() {
  return (
    <Input
      type="email"
      placeholder="Email"
      disabled
      className="max-w-[320px]"
    />
  );
}
