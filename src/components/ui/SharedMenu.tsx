import { cn, tv } from "~/utils/tailwind";

const menuSubTriggerVariants = tv({
  base: [
    "flex cursor-default select-none items-center rounded-1 px-2 py-1.5 text-3.5 outline-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
    "[&>svg]:ml-auto [&>svg]:size-4.5 [&>svg]:shrink-0",
  ],
  variants: {
    inset: {
      true: "pl-8",
      false: "",
    },
  },
});

const menuLabelVariants = tv({
  base: "px-2 py-1 text-3.5 font-semibold",
  variants: {
    inset: {
      true: "pl-8",
      false: "",
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
  menuLabelVariants,
  menuSeparatorVariants,
  ShortcutGroup,
  Shortcut,
};
