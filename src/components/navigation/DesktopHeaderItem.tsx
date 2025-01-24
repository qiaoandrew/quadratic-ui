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
    "text-3-5 text-muted-foreground hover:text-foreground flex cursor-pointer items-center px-4 font-medium transition-colors",
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
