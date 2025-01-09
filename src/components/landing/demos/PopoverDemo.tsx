import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/Label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/Popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild className="z-10">
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-4 font-medium">Dimensions</h4>
            <p className="text-3.5 text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-3 items-center gap-x-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                inputSize="xs"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-x-4">
              <Label htmlFor="maxWidth">Max Width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                inputSize="xs"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-x-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                inputSize="xs"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-x-4">
              <Label htmlFor="maxHeight">Max Height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                inputSize="xs"
                className="col-span-2"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
