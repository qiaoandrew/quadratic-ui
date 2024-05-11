import { SearchIcon } from "lucide-react";

import { Shortcut } from "../ui/Shortcut";

export default function SearchCommandTrigger() {
  return (
    <button
      type="button"
      className="hidden w-[300px] items-center justify-between rounded-2 border py-2.5 pl-2.5 pr-3 text-muted-foreground transition-colors hover:bg-accent/50 xl:flex 2xl:w-[360px]"
    >
      <div className="flex items-center gap-x-1.5">
        <SearchIcon size={16} />
        <p className="text-3.5">Search documentation...</p>
      </div>
      <Shortcut size="default">⌘K</Shortcut>
    </button>
  );
}
