import { DOCS_MENU_ITEMS } from "~/constants/navigation";
import { DocsMenuItemType } from "~/types/navigation";

import DocsMenuGroup from "~/components/docs/navigation/DocsMenuGroup";

interface DocsMenuGroupsProps {
  pathname: string;
}

export default function DocsMenuGroups({ pathname }: DocsMenuGroupsProps) {
  return (
    <div className="flex flex-col gap-y-2 px-3">
      {DOCS_MENU_ITEMS.map((menuItem) => (
        <DocsMenuGroup
          href={menuItem.href}
          isActive={
            menuItem.type === DocsMenuItemType.Group &&
            pathname.startsWith(`/docs/${menuItem.id}`)
          }
          icon={menuItem.icon}
          key={menuItem.id}
        >
          {menuItem.label}
        </DocsMenuGroup>
      ))}
    </div>
  );
}
