"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { cn } from "~/utils/tailwind";
import {
  type DesktopHeaderGroupItem,
  type DocsMenuItem,
} from "~/types/navigation";
import { DESKTOP_NAVIGATION_ITEMS } from "~/constants/navigation";

import DesktopHeaderItem from "~/components/navigation/DesktopHeaderItem";
import DesktopMenuItem from "~/components/navigation/DesktopMenuItem";
import Logo from "~/components/navigation/Logo";
import MobileHeaderToggle from "~/components/navigation/MobileHeaderToggle";
import CommandMenu from "~/components/navigation/CommandMenu";
import { dialogOverlayVariants } from "~/components/ui/_Dialog";
import MobileMenu from "~/components/navigation/MobileMenu";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-8" />,
});

interface HeaderProps {
  docsMenuItems: DocsMenuItem[];
}

export default function Header({ docsMenuItems }: HeaderProps) {
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

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDesktopMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="bg-background/60 fixed inset-x-0 top-0 z-40 h-3 backdrop-blur-sm xl:h-6" />
      {(isMobileMenuOpen || isDesktopMenuOpen) && (
        <div
          className={dialogOverlayVariants({
            className: "z-40 bg-white/80 backdrop-blur-xs dark:bg-black/80",
          })}
        />
      )}
      <header
        onMouseLeave={closeDesktopMenu}
        className={cn(
          "rounded-2-5 border-border/50 bg-background/60 fixed inset-x-3 top-3 z-40 flex flex-col gap-y-2 overflow-hidden border backdrop-blur-sm transition-[height]",
          "xl:rounded-3-5 xl:top-6",
          "3xl:inset-x-[calc((100vw-1280px)/2)]",
          isMobileMenuOpen ? "h-[calc(100dvh-1.5rem)]" : "h-11",
          isDesktopMenuOpen ? "xl:h-[328px] 2xl:h-[364px]" : "xl:h-13",
        )}
      >
        <div
          className={cn(
            "flex h-[42px] shrink-0 items-stretch justify-between pr-1.5 pl-3",
            "xl:h-[50px] xl:pr-3",
          )}
        >
          <div className="flex items-stretch">
            <Logo size="md" onMouseEnter={closeDesktopMenu} />
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
            openMobileMenu={openMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
          <div
            onMouseEnter={closeDesktopMenu}
            className="hidden grow items-center justify-end gap-x-2 xl:flex"
          >
            <CommandMenu docsMenuItems={docsMenuItems} />
            <ThemeToggle />
          </div>
        </div>
        <MobileMenu
          docsMenuItems={docsMenuItems}
          closeMobileMenu={closeMobileMenu}
        />
        <nav className="hidden grid-flow-col grid-cols-4 gap-4 px-4 pb-4 xl:grid xl:h-[260px] xl:min-h-[260px] 2xl:h-[296px] 2xl:min-h-[296px]">
          {activeDesktopMenuGroupItems.map((item) => (
            <DesktopMenuItem
              closeDesktopMenu={closeDesktopMenu}
              item={item}
              key={item.id}
            />
          ))}
        </nav>
      </header>
    </>
  );
}
