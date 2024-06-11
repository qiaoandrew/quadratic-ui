import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import CommandMenu from "./CommandMenu";
import ThemeToggle from "./ThemeToggle";
import DocMenuMobileSheet from "../docs/_components/navigation/DocMenuMobileSheet";

import { getComponentsMenuItems } from "~/utils/docs";

export default async function Header() {
  const { primitivesMenuItems, compositesMenuItems, visualizationsMenuItems } =
    await getComponentsMenuItems();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-b-primary/10 bg-background/80 backdrop-blur-sm md:h-18">
      <div className="container-docs flex h-full items-center justify-between">
        <div className="flex items-center gap-x-6 md:pl-3">
          <Logo />
          <DesktopMenu />
        </div>
        <div className="flex items-center gap-x-4 md:pr-3">
          <CommandMenu
            primitivesMenuItems={primitivesMenuItems}
            compositesMenuItems={compositesMenuItems}
            visualizationsMenuItems={visualizationsMenuItems}
          />
          <ThemeToggle />
          <DocMenuMobileSheet />
        </div>
      </div>
    </header>
  );
}
