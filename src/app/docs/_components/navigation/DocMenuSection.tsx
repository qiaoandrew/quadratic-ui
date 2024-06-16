import DocMenuSectionTitle from "./DocMenuSectionTitle";
import DocMenuSectionItem from "./DocMenuSectionItem";

import type { DocItem } from "~/types/types";

interface DocMenuSectionProps {
  pathname: string;
  title: string;
  items: DocItem[];
  isVisible: boolean;
  isMobile?: boolean;
}

export default function DocMenuSection({
  pathname,
  title,
  items,
  isVisible,
  isMobile,
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
            isMobile={isMobile}
            key={item.id}
          >
            {item.label}
          </DocMenuSectionItem>
        ))}
      </div>
    )
  );
}
