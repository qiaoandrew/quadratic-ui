import { Separator } from "~/components/ui/Separator";

export default function SeparatorDemo() {
  return (
    <div>
      <h4 className="mb-1.5 text-4 font-medium">Radix Primitives</h4>
      <p className="text-3.5 text-muted-foreground">
        An open-source UI component library.
      </p>
      <Separator className="my-4" />
      <div className="flex items-center gap-x-4 text-3.5">
        <p>Blog</p>
        <Separator orientation="vertical" className="h-5" />
        <p>Docs</p>
        <Separator orientation="vertical" className="h-5" />
        <p>Source</p>
      </div>
    </div>
  );
}
