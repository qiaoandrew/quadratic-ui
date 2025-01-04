import { cn, tv } from "~/utils/tailwind";

const menuSubTriggerVariants = tv({
  base: [
    "flex cursor-default select-none items-center rounded-1 py-1.5 pr-2 text-3.5 outline-none",
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
    "z-50 min-w-32 overflow-hidden rounded-2 border bg-popover p-1 text-popover-foreground",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ],
});

const menuContentVariants = tv({
  base: [
    "z-50 min-w-32 overflow-hidden rounded-2 border bg-popover p-1 text-popover-foreground",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ],
});

const menuItemVariants = tv({
  base: [
    "relative flex cursor-pointer select-none items-center rounded-1 py-1.5 pr-2 text-3.5 outline-none transition-colors",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "[&>svg]:pointer-events-none [&>svg]:absolute [&>svg]:left-2 [&>svg]:top-1/2 [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:-translate-y-1/2",
  ],
  variants: {
    inset: {
      true: "pl-8",
      false: "pl-2",
    },
  },
});

const menuLabelVariants = tv({
  base: "py-1 pr-2 text-3.5 font-semibold",
  variants: {
    inset: {
      true: "pl-8",
      false: "pl-2",
    },
  },
});

const menuSeparatorVariants = tv({
  base: "-mx-1 my-1 h-0.25 w-full shrink-0 bg-border",
});

function ShortcutGroup({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
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
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex size-4.5 items-center justify-center overflow-hidden rounded-1 border bg-background text-3 text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
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
