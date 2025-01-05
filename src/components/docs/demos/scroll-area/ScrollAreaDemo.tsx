import { Fragment } from "react";

import { ScrollArea } from "~/components/ui/ScrollArea";
import { Separator } from "~/components/ui/Separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-44 rounded-2 border">
      <div className="p-3">
        <h4 className="mb-3 text-3.5 font-medium">Tags</h4>
        {tags.map((tag, i) => (
          <Fragment key={tag}>
            <div className="text-3.5">{tag}</div>
            {i !== tags.length - 1 && <Separator className="my-2" />}
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
