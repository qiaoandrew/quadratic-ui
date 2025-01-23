import { cn, tv } from "~/utils/tailwind";

const menuSubTriggerVariants = tv({
  base: [
    "rounded-1 text-3-5 flex cursor-default items-center py-1.5 pr-2 outline-hidden select-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
    "[&>svg]:pointer-events-none [&>svg]:ml-auto [&>svg]:size-4.5 [&>svg]:shrink-0",
  ],
  variants: {
    inset: {
      true: "pl-8",
      false: "pl-2",
    },
  },
});

const menuSubContentVariants = tv({
  base: [
    "rounded-2 bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden border p-1",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ],
});

const menuContentVariants = tv({
  base: [
    "rounded-2 bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden border p-1",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ],
  variants: {
    hasClosedAnimateOut: {
      true: "data-[state=closed]:animate-out",
      false: "",
    },
  },
});

const menuItemVariants = tv({
  base: [
    "rounded-1 text-3-5 relative flex cursor-pointer items-center py-1.5 pr-2 outline-hidden transition-colors select-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "[&>svg]:pointer-events-none [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:left-2 [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:-translate-y-1/2",
  ],
  variants: {
    inset: {
      true: "pl-8",
      false: "pl-2",
    },
  },
});

const menuLabelVariants = tv({
  base: "text-3-5 py-1 pr-2 font-semibold",
  variants: {
    inset: {
      true: "pl-8",
      false: "pl-2",
    },
  },
});

const menuSeparatorVariants = tv({
  base: "bg-border -mx-1 my-1 h-0.25 w-full shrink-0",
});

function ShortcutGroup({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("ml-auto flex gap-x-1", className)} {...props}>
      {children}
    </div>
  );
}

function Shortcut({
  children,
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <kbd
      className={cn(
        "rounded-1 bg-background text-3-5 text-muted-foreground flex size-5 items-center justify-center overflow-hidden border font-mono",
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}

export {
  menuSubTriggerVariants,
  menuSubContentVariants,
  menuContentVariants,
  menuItemVariants,
  menuLabelVariants,
  menuSeparatorVariants,
  ShortcutGroup,
  Shortcut,
};
