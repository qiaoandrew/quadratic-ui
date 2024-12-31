"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "~/utils/tailwind";
import {
  DesktopHeaderItemType,
  type DesktopHeaderGroupItem,
} from "~/types/navigation";
import {
  MOBILE_NAVIGATION_ITEMS,
  DESKTOP_NAVIGATION_ITEMS,
} from "~/constants/navigation";

import GradientText from "~/components/effects/GradientText";

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
          <Link
            href="/"
            onMouseEnter={closeDesktopMenu}
            className="flex items-center gap-x-2"
          >
            <span className="relative size-4.5">
              <span className="absolute bottom-0 left-0 size-4 rounded-1 bg-muted-foreground" />
              <span className="absolute right-0 top-0 size-4 rounded-1 border border-foreground" />
            </span>
            <GradientText className="font-display text-4 font-semibold">
              quadratic/ui
            </GradientText>
          </Link>
          <div
            onMouseEnter={closeDesktopMenu}
            className="hidden w-4 3xl:block"
          />
          <nav className="hidden items-stretch 3xl:flex">
            {DESKTOP_NAVIGATION_ITEMS.map((item) => {
              const className =
                "flex items-center cursor-pointer px-4 py-2 text-3.5 font-medium text-muted-foreground";

              if (item.type === DesktopHeaderItemType.Group) {
                return (
                  <span
                    onMouseEnter={() => openDesktopMenu(item.items)}
                    className={className}
                    key={item.id}
                  >
                    {item.label}
                  </span>
                );
              } else if (item.type === DesktopHeaderItemType.Route) {
                return (
                  <Link
                    href={item.href}
                    onMouseEnter={closeDesktopMenu}
                    className={className}
                    key={item.id}
                  >
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
                    className={className}
                    key={item.id}
                  >
                    {item.label}
                  </a>
                );
              }
            })}
          </nav>
        </div>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={cn(
            "flex size-9 items-center justify-center self-center",
            "3xl:hidden",
          )}
        >
          <span className="relative size-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-muted-foreground transition-transform",
                isMobileMenuOpen
                  ? "translate-y-[9px] rotate-45"
                  : "translate-y-[5px] rotate-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-muted-foreground transition-transform",
                isMobileMenuOpen
                  ? "translate-y-[9px] -rotate-45"
                  : "translate-y-[13px] rotate-0",
              )}
            />
          </span>
        </button>
        <div
          onMouseEnter={closeDesktopMenu}
          className="hidden grow items-center justify-end gap-x-2 3xl:flex"
        ></div>
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
          <Link
            href={item.href}
            className={cn(
              "rounded-2.5 bg-foreground/3 p-3.5",
              item.size === "lg" && "row-span-2",
            )}
            key={item.id}
          >
            <h3 className="mb-0.5 text-4 font-medium text-foreground">
              {item.label}
            </h3>
            <p className="max-w-[220px] text-3.5 leading-6 text-muted-foreground">
              {item.description}
            </p>
          </Link>
        ))}
      </nav>
    </header>
  );
}
