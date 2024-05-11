import { type DocItem } from "~/types/types";

import DocMenuSectionTitle from "./DocMenuSectionTitle";
import DocMenuSectionItem from "./DocMenuSectionItem";

interface DocMenuSectionProps {
  pathname: string;
  title: string;
  items: DocItem[];
  isVisible: boolean;
}

export default function DocMenuSection({
  pathname,
  title,
  items,
  isVisible,
}: DocMenuSectionProps) {
  return (
    isVisible && (
      <div className="grid gap-y-0.5">
        <DocMenuSectionTitle>{title}</DocMenuSectionTitle>
        {items.map((item) => (
          <DocMenuSectionItem
            variant="page"
            href={item.href}
            isActive={item.href === pathname}
            key={item.id}
          >
            {item.label}
          </DocMenuSectionItem>
        ))}
      </div>
    )
  );
}
