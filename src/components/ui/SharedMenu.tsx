import { cn } from "~/utils/tailwind";

import { Separator } from "~/components/ui/Separator";

function SharedMenuShortcutGroup({
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

function SharedMenuShortcut({
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

function SharedMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return <Separator className={cn("-mx-1 my-1", className)} {...props} />;
}

export { SharedMenuShortcutGroup, SharedMenuShortcut, SharedMenuSeparator };
