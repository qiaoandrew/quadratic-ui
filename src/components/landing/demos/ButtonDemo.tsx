import { Button } from "~/components/ui/Button";

export default function ButtonDemo() {
  return (
    <div className="z-10 flex gap-x-4">
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
    </div>
  );
}
