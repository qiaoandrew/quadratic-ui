"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { cn } from "~/utils/tailwind";
import type { DocsItem } from "~/types/docs";
import type {
  DesktopHeaderGroupItem,
  MobileHeaderNavigationItem,
} from "~/types/navigation";
import {
  MOBILE_NAVIGATION_ITEMS,
  DESKTOP_NAVIGATION_ITEMS,
} from "~/constants/navigation";

import DesktopHeaderItem from "~/components/navigation/DesktopHeaderItem";
import DesktopMenuGroupItem from "~/components/navigation/DesktopMenuGroupItem";
import Logo from "~/components/navigation/Logo";
import MobileHeaderToggle from "~/components/navigation/MobileHeaderToggle";
import CommandMenu from "~/components/navigation/CommandMenu";
import { ScrollArea, ScrollAreaBar } from "~/components/ui/ScrollArea";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-8" />,
});

interface HeaderProps {
  primitivesMenuItems: DocsItem[];
  rechartsMenuItems: DocsItem[];
}

export default function Header({
  primitivesMenuItems,
  rechartsMenuItems,
}: HeaderProps) {
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

  const mobileNavigationItems: MobileHeaderNavigationItem[][] =
    MOBILE_NAVIGATION_ITEMS.map((group, index) => {
      if (index === 2) {
        return [
          ...group,
          ...primitivesMenuItems.map(
            (item) =>
              ({ ...item, variant: "secondary" }) as MobileHeaderNavigationItem,
          ),
        ];
      } else if (index === 3) {
        return [
          ...group,
          ...rechartsMenuItems.map(
            (item) =>
              ({ ...item, variant: "secondary" }) as MobileHeaderNavigationItem,
          ),
        ];
      } else {
        return group;
      }
    });

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 h-3 bg-background/60 backdrop-blur xl:h-6" />
      <header
        onMouseLeave={closeDesktopMenu}
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
            "xl:h-[50px] xl:pr-3",
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
            openMobileMenu={openMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
          <div
            onMouseEnter={closeDesktopMenu}
            className="hidden grow items-center justify-end gap-x-2 xl:flex"
          >
            <CommandMenu
              primitivesMenuItems={primitivesMenuItems}
              rechartsMenuItems={rechartsMenuItems}
            />
            <ThemeToggle />
          </div>
        </div>
        <ScrollArea className="h-full">
          <nav className="grid gap-x-3 gap-y-8 p-3 xs:gap-y-8 xl:hidden">
            {mobileNavigationItems.map((group, i) => (
              <div className="flex flex-col gap-y-3" key={i}>
                {group.map((item) => (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "text-6 font-semibold",
                      item.variant === "secondary" && "text-muted-foreground",
                    )}
                    key={item.id}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <ScrollAreaBar />
        </ScrollArea>

        <nav className="hidden grid-flow-col grid-cols-4 gap-4 px-4 pb-4 xl:grid xl:h-[260px] xl:min-h-[260px] 2xl:h-[296px] 2xl:min-h-[296px]">
          {activeDesktopMenuGroupItems.map((item) => (
            <DesktopMenuGroupItem
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
