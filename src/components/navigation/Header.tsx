"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { cn } from "~/utils/tailwind";
import { type DesktopHeaderGroupItem } from "~/types/navigation";
import {
  MOBILE_NAVIGATION_ITEMS,
  DESKTOP_NAVIGATION_ITEMS,
} from "~/constants/navigation";

import DesktopHeaderItem from "~/components/navigation/DesktopHeaderItem";
import DesktopMenuGroupItem from "~/components/navigation/DesktopMenuGroupItem";
import Logo from "~/components/navigation/Logo";
import MobileHeaderToggle from "~/components/navigation/MobileHeaderToggle";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-8" />,
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState<boolean>(false);

  const [activeDesktopMenuGroupItems, setActiveDesktopMenuGroupItems] =
    useState<DesktopHeaderGroupItem["items"]>();

  const openDesktopMenu = (items: DesktopHeaderGroupItem["items"]) => {
    setActiveDesktopMenuGroupItems(items);
    setIsDesktopMenuOpen(true);
  };

  const closeDesktopMenu = () => {
    setIsDesktopMenuOpen(false);
  };

  return (
    <header
      onMouseLeave={() => setIsDesktopMenuOpen(false)}
      className={cn(
        "fixed inset-x-3 top-3 flex flex-col gap-y-2 overflow-hidden rounded-2.5 bg-foreground/5 backdrop-blur transition-[height]",
        "3xl:inset-x-[calc((100vw-1280px)/2)] 3xl:top-6 3xl:rounded-3.5",
        isMobileMenuOpen ? "h-[calc(100dvh-1.5rem)]" : "h-11",
        isDesktopMenuOpen ? "3xl:h-[356px]" : "3xl:h-13",
      )}
    >
      <div
        className={cn(
          "flex h-11 shrink-0 items-stretch justify-between pl-3 pr-1.5",
          "3xl:h-13 3xl:px-4",
        )}
      >
        <div className="flex items-stretch">
          <Logo onMouseEnter={closeDesktopMenu} />
          <div
            onMouseEnter={closeDesktopMenu}
            className="hidden w-4 3xl:block"
          />
          <nav className="hidden items-stretch 3xl:flex">
            {DESKTOP_NAVIGATION_ITEMS.map((item) => (
              <DesktopHeaderItem
                item={item}
                openDesktopMenu={openDesktopMenu}
                closeDesktopMenu={closeDesktopMenu}
                key={item.id}
              />
            ))}
          </nav>
        </div>
        <MobileHeaderToggle
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <div
          onMouseEnter={closeDesktopMenu}
          className="hidden grow items-center justify-end gap-x-2 3xl:flex"
        >
          <ThemeToggle />
        </div>
      </div>
      <nav className="grid grid-cols-2 gap-x-3 gap-y-6 p-3 3xl:hidden">
        {MOBILE_NAVIGATION_ITEMS.map((item) => (
          <Link
            href={item.href}
            className="font-display text-5 font-semibold"
            key={item.id}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <nav className="hidden h-[296px] min-h-[296px] grid-flow-col grid-cols-4 gap-4 px-4 pb-4 3xl:grid">
        {activeDesktopMenuGroupItems?.map((item) => (
          <DesktopMenuGroupItem item={item} key={item.id} />
        ))}
      </nav>
    </header>
  );
}
