import { Separator } from "~/components/ui/Separator";

export default function SeparatorDemo() {
  return (
    <div>
      <h4 className="mb-2 text-4 font-medium">Radix Primitives</h4>
      <p className="text-3.5 text-muted-foreground">
        An open-source UI component library.
      </p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-x-4 text-3.5">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
