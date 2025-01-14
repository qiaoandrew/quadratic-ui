import { Fragment, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ComponentIcon, SearchIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";
import { DocsMenuItemType, type DocsMenuItem } from "~/types/navigation";

import { Shortcut, ShortcutGroup } from "~/components/ui/_Menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/Command";

interface CommandMenuProps {
  docsMenuItems: DocsMenuItem[];
}

export default function CommandMenu({ docsMenuItems }: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "relative hidden h-9 w-68 items-center justify-between rounded-2 border bg-background pl-7.5 pr-3 text-3.5 text-muted-foreground transition-colors",
          "xl:flex",
          "hover:bg-accent",
        )}
      >
        <SearchIcon className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
        Search documentation...
        <ShortcutGroup>
          <Shortcut>⌘</Shortcut>
          <Shortcut>K</Shortcut>
        </ShortcutGroup>
      </button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {docsMenuItems.map((menuItem) => {
            if (menuItem.type === DocsMenuItemType.Link) return null;

            return (
              <Fragment key={menuItem.id}>
                {menuItem.sections.map((section) => (
                  <CommandGroup heading={section.label} key={section.id}>
                    {section.items.map((item) => (
                      <CommandItem
                        onSelect={() =>
                          handleSelect(() => router.push(item.href))
                        }
                        key={`${section.id}-${item.id}`}
                      >
                        {/* <item.Icon /> */}
                        <ComponentIcon />
                        {item.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </Fragment>
            );
          })}
          <CommandGroup heading="Links">
            {docsMenuItems.map((menuItem) => {
              if (menuItem.type === DocsMenuItemType.Group) return null;

              return (
                <CommandItem
                  onSelect={() =>
                    handleSelect(() => router.push(menuItem.href))
                  }
                  key={menuItem.id}
                >
                  {/* <menuItem.Icon /> */}
                  <ComponentIcon />
                  {menuItem.label}
                </CommandItem>
              );
            })}
          </CommandGroup>
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => handleSelect(() => setTheme("light"))}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem onSelect={() => handleSelect(() => setTheme("dark"))}>
              <MoonIcon />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
