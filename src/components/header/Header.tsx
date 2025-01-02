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

import DesktopHeaderItem from "~/components/header/DesktopHeaderItem";
import DesktopMenuGroupItem from "~/components/header/DesktopMenuGroupItem";
import Logo from "~/components/header/Logo";
import MobileHeaderToggle from "~/components/header/MobileHeaderToggle";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-8" />,
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState<boolean>(false);

  const [activeDesktopMenuGroupIdx, setActiveDesktopMenuGroupIdx] =
    useState<number>(-1);
  const [activeDesktopMenuGroupItems, setActiveDesktopMenuGroupItems] =
    useState<DesktopHeaderGroupItem["items"]>([]);

  const openDesktopMenu = (
    idx: number,
    items: DesktopHeaderGroupItem["items"],
  ) => {
    setActiveDesktopMenuGroupIdx(idx);
    setActiveDesktopMenuGroupItems(items);
    setIsDesktopMenuOpen(true);
  };

  const closeDesktopMenu = () => {
    setIsDesktopMenuOpen(false);
    setActiveDesktopMenuGroupIdx(-1);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 h-3 bg-background/60 backdrop-blur xl:h-6" />
      <header
        onMouseLeave={() => setIsDesktopMenuOpen(false)}
        className={cn(
          "fixed inset-x-3 top-3 z-40 flex flex-col gap-y-2 overflow-hidden rounded-2.5 border border-border/50 bg-background/60 backdrop-blur transition-[height]",
          "xl:top-6 xl:rounded-3.5",
          "3xl:inset-x-[calc((100vw-1280px)/2)]",
          isMobileMenuOpen ? "h-[calc(100dvh-1.5rem)]" : "h-11",
          isDesktopMenuOpen ? "xl:h-80 2xl:h-[356px]" : "xl:h-13",
        )}
      >
        <div
          className={cn(
            "flex h-[42px] shrink-0 items-stretch justify-between pl-3 pr-1.5",
            "xl:h-[50px] xl:px-4",
          )}
        >
          <div className="flex items-stretch">
            <Logo onMouseEnter={closeDesktopMenu} />
            <div
              onMouseEnter={closeDesktopMenu}
              className="hidden w-4 xl:block"
            />
            <nav className="hidden items-stretch xl:flex">
              {DESKTOP_NAVIGATION_ITEMS.map((item, idx) => (
                <DesktopHeaderItem
                  idx={idx}
                  item={item}
                  activeDesktopMenuGroupIdx={activeDesktopMenuGroupIdx}
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
            className="hidden grow items-center justify-end gap-x-2 xl:flex"
          >
            {/* TODO: add command */}
            <ThemeToggle />
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-x-3 gap-y-6 p-3 xs:gap-y-8 xl:hidden">
          {MOBILE_NAVIGATION_ITEMS.map((item) => (
            <Link
              href={item.href}
              className="font-display text-5 font-semibold xs:text-6"
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="hidden grid-flow-col grid-cols-4 gap-4 px-4 pb-4 xl:grid xl:h-[260px] xl:min-h-[260px] 2xl:h-[296px] 2xl:min-h-[296px]">
          {activeDesktopMenuGroupItems.map((item) => (
            <DesktopMenuGroupItem item={item} key={item.id} />
          ))}
        </nav>
      </header>
    </>
  );
}
