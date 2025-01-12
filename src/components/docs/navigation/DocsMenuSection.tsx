import type { DocsItem } from "~/types/navigation";

import DocsMenuSectionItem from "~/components/docs/navigation/DocsMenuSectionItem";

interface DocsMenuSectionProps {
  pathname: string;
  label: string;
  items: DocsItem[];
}

export default function DocsMenuSection({
  pathname,
  label,
  items,
}: DocsMenuSectionProps) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <p className="mx-3 text-3.5 font-semibold">{label}</p>
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
