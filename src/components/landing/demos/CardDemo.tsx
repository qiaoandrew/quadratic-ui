import { Button } from "~/components/ui/Button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";

export default function CardDemo() {
  return (
    <Card className="z-10 w-full max-w-70 rounded-3 px-3.5 pb-3.5 pt-3">
      <CardHeader className="gap-y-0.5 pb-3">
        <CardTitle className="text-3.5">Create Project</CardTitle>
        <CardDescription className="text-2.5">
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <form>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1.5">
              <Label htmlFor="name" className="text-2.5">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Name of your project"
                inputSize="xs"
                className="text-2.5"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <Label htmlFor="framework" className="text-2.5">
                Framework
              </Label>
              <Select>
                <SelectTrigger
                  id="framework"
                  className="h-7 rounded-1 px-2 text-2.5 [&>svg]:size-3"
                >
                  <SelectValue placeholder="Select framework..." />
                </SelectTrigger>
                <SelectContent position="popper" className="rounded-1">
                  <SelectItem value="next" className="h-7 px-2 text-2.5">
                    Next.js
                  </SelectItem>
                  <SelectItem value="sveltekit" className="h-7 px-2 text-2.5">
                    SvelteKit
                  </SelectItem>
                  <SelectItem value="astro" className="h-7 px-2 text-2.5">
                    Astro
                  </SelectItem>
                  <SelectItem value="nuxt" className="h-7 px-2 text-2.5">
                    Nuxt.js
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardBody>
      <CardFooter className="flex justify-end gap-x-3 pt-3.5">
        <Button variant="outline" size="xs" className="h-7 text-2.5">
          Cancel
        </Button>
        <Button size="xs" className="h-7 text-2.5">
          Deploy
        </Button>
      </CardFooter>
    </Card>
  );
}
