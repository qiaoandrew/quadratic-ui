"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Dialog, DialogContent, DialogTitle } from "~/components/ui/Dialog";
import {
  menuSeparatorVariants,
  Shortcut,
  ShortcutGroup,
} from "~/components/ui/_Menu";
import { VisuallyHidden } from "~/components/ui/_VisuallyHidden";

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      className={cn(
        "flex size-full flex-col overflow-hidden rounded-3 bg-popover text-popover-foreground",
        className,
      )}
      {...props}
    />
  );
}

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <VisuallyHidden>
        <DialogTitle>Command</DialogTitle>
      </VisuallyHidden>
      <DialogContent
        showCloseButton={false}
        className="overflow-hidden rounded-3 p-0"
      >
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div className="flex items-center gap-x-2 border-b px-3">
      <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
      <CommandPrimitive.Input
        className={cn(
          "flex h-11 w-full items-center bg-transparent text-3.5 outline-none",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      className={cn(
        "max-h-72 overflow-y-auto overflow-x-hidden overscroll-contain",
        className,
      )}
      {...props}
    />
  );
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      className={cn("px-3.5 pb-3.5 pt-3 text-3.5", className)}
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      className={cn(
        "overflow-hidden p-1.5 text-foreground",
        "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-3 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      className={menuSeparatorVariants({
        className: cn("my-0", className),
      })}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      className={cn(
        "relative flex h-10 cursor-pointer select-none items-center gap-x-2 rounded-1.5 px-2 text-3.5 outline-none",
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:size-4.5 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

function CommandShortcutGroup(props: React.ComponentProps<"div">) {
  return <ShortcutGroup {...props} />;
}

function CommandShortcut(props: React.ComponentProps<"span">) {
  return <Shortcut {...props} />;
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcutGroup,
  CommandShortcut,
  CommandSeparator,
};
