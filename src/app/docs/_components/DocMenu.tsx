import { ScrollArea } from "~/components/ui/ScrollArea";

import { DOCUMENTATION_GROUPS } from "~/constants/navigation";
import DocMenuItem from "./DocMenuItem";

export default function DocMenu() {
  return (
    <aside className="top-18 fixed bottom-0 left-auto z-30 w-60">
      <ScrollArea showScrollbar={false} className="h-full">
        <nav className="grid gap-y-8 py-6">
          <div>
            {DOCUMENTATION_GROUPS.map((group) => (
              <DocMenuItem
                variant="group"
                Icon={group.Icon}
                href={group.href}
                key={group.id}
              >
                {group.title}
              </DocMenuItem>
            ))}
          </div>
        </nav>
      </ScrollArea>
    </aside>
  );
}
