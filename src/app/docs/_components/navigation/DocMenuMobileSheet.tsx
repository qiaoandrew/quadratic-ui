import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/Sheet";
import DocMenu from "./DocMenu";

import { getPrimitivesMenuItems } from "~/utils/docs";

export default async function DocMenuMobileSheet() {
  const primitivesMenuItems = await getPrimitivesMenuItems();

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <button type="button" className="flex flex-col gap-y-[5px]">
          <span className="h-[5px] w-[22px] rounded-full bg-gradient-dark dark:bg-gradient-light" />
          <span className="h-[5px] w-8 rounded-full bg-gradient-dark dark:bg-gradient-light" />
          <span className="h-[5px] w-[22px] self-end rounded-full bg-gradient-dark dark:bg-gradient-light" />
        </button>
      </SheetTrigger>
      <SheetContent className="px-3 py-0">
        <DocMenu isMobile primitivesMenuItems={primitivesMenuItems} />
      </SheetContent>
    </Sheet>
  );
}
