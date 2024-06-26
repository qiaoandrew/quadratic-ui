import DocMenuSectionItem from "./DocMenuSectionItem";

import { DOC_GROUPS } from "~/constants/docs";

interface DocMenuGroupsProps {
  pathname: string;
}

export default function DocMenuGroups({ pathname }: DocMenuGroupsProps) {
  return (
    <div>
      {DOC_GROUPS.map((group) => (
        <DocMenuSectionItem
          variant="group"
          Icon={group.Icon}
          href={group.href}
          isActive={
            group.hrefPrefix ? pathname.startsWith(group.hrefPrefix) : false
          }
          key={group.id}
        >
          {group.label}
        </DocMenuSectionItem>
      ))}
    </div>
  );
}
