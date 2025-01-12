import { DOCS_GROUPS } from "~/constants/navigation";

import DocsMenuGroup from "~/components/docs/navigation/DocsMenuGroup";

interface DocsMenuGroupsProps {
  pathname: string;
}

export default function DocsMenuGroups({ pathname }: DocsMenuGroupsProps) {
  return (
    <div className="flex flex-col gap-y-2 px-3">
      {DOCS_GROUPS.map((group) => (
        <DocsMenuGroup
          href={group.href}
          isActive={
            !!group.groupHrefPrefix &&
            pathname.startsWith(group.groupHrefPrefix)
          }
          Icon={group.Icon}
          key={group.id}
        >
          {group.label}
        </DocsMenuGroup>
      ))}
    </div>
  );
}
