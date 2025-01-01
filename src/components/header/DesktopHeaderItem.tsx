import Link from "next/link";

import {
  DesktopHeaderItemType,
  type DesktopHeaderGroupItem,
  type DesktopHeaderItem,
} from "~/types/navigation";

interface DesktopHeaderItemProps {
  item: DesktopHeaderItem;
  openDesktopMenu: (items: DesktopHeaderGroupItem["items"]) => void;
  closeDesktopMenu: () => void;
}

export default function DesktopHeaderItem({
  item,
  openDesktopMenu,
  closeDesktopMenu,
}: DesktopHeaderItemProps) {
  const styles =
    "flex items-center cursor-pointer px-4 text-3.5 font-medium text-muted-foreground";

  if (item.type === DesktopHeaderItemType.Group) {
    return (
      <span onMouseEnter={() => openDesktopMenu(item.items)} className={styles}>
        {item.label}
      </span>
    );
  } else if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} onMouseEnter={closeDesktopMenu} className={styles}>
        {item.label}
      </Link>
    );
  } else {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer noopener"
        onMouseEnter={closeDesktopMenu}
        className={styles}
      >
        {item.label}
      </a>
    );
  }
}
