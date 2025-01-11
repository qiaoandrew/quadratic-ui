import { cn } from "~/utils/tailwind";
import {
  DesktopHeaderItemType,
  type DesktopHeaderGroupItem,
  type DesktopHeaderItem,
} from "~/types/navigation";

import _Link from "~/components/ui/_Link";

interface DesktopHeaderItemProps {
  idx: number;
  item: DesktopHeaderItem;
  activeDesktopMenuGroupIdx: number;
  openDesktopMenu: (
    idx: number,
    items: DesktopHeaderGroupItem["items"],
  ) => void;
  closeDesktopMenu: () => void;
}

export default function DesktopHeaderItem({
  idx,
  item,
  activeDesktopMenuGroupIdx,
  openDesktopMenu,
  closeDesktopMenu,
}: DesktopHeaderItemProps) {
  const styles = cn(
    "flex cursor-pointer items-center px-4 text-3.5 font-medium text-muted-foreground transition-colors hover:text-foreground",
    idx === activeDesktopMenuGroupIdx && "text-foreground",
  );

  if (item.type === DesktopHeaderItemType.Group) {
    return (
      <span
        onMouseEnter={() => openDesktopMenu(idx, item.items)}
        className={styles}
      >
        {item.label}
      </span>
    );
  }

  return (
    <_Link href={item.href} onMouseEnter={closeDesktopMenu} className={styles}>
      {item.label}
    </_Link>
  );
}
