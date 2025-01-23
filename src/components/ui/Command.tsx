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
        "rounded-3 bg-popover text-popover-foreground flex size-full flex-col overflow-hidden",
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
        className="rounded-3 overflow-hidden p-0"
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
    <div
      className={cn(
        "relative flex items-center border-b pr-3 pl-9",
        "[&>svg]:text-muted-foreground [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:left-3 [&>svg]:size-4 [&>svg]:-translate-y-1/2",
        "[&>[cmdk-input]]:text-3-5 [&>[cmdk-input]]:h-11 [&>[cmdk-input]]:w-full [&>[cmdk-input]]:items-center [&>[cmdk-input]]:bg-transparent [&>[cmdk-input]]:outline-hidden",
        "[&>[cmdk-input]]:placeholder:text-muted-foreground",
        "disabled:[&>[cmdk-input]]:cursor-not-allowed disabled:[&>[cmdk-input]]:opacity-50",
        className,
      )}
    >
      <SearchIcon />
      <CommandPrimitive.Input {...props} />
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
        "max-h-72 overflow-x-hidden overflow-y-auto overscroll-contain",
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
      className={cn("text-3-5 px-3.5 pt-3 pb-3.5", className)}
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
        "text-foreground overflow-hidden p-1.5",
        "[&_[cmdk-group-heading]]:text-3 [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium",
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
        "rounded-1.5 text-3-5 relative flex h-10 cursor-pointer items-center pr-3 pl-8.5 outline-hidden select-none",
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        "[&>svg]:pointer-events-none [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:left-2 [&>svg]:size-4.5 [&>svg]:-translate-y-1/2",
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
