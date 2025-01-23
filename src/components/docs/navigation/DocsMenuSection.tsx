import type { DocsMenuGroupSectionItem } from "~/types/navigation";

import DocsMenuSectionItem from "~/components/docs/navigation/DocsMenuSectionItem";

interface DocsMenuSectionProps {
  pathname: string;
  label: string;
  items: DocsMenuGroupSectionItem[];
}

export default function DocsMenuSection({
  pathname,
  label,
  items,
}: DocsMenuSectionProps) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <p className="text-3-5 mx-3 truncate font-semibold">{label}</p>
      <div className="flex flex-col gap-y-0.5">
        {items.map((item) => (
          <DocsMenuSectionItem
            {...item}
            isActive={pathname === item.href}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
