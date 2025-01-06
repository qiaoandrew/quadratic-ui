import * as SheetPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "tailwind-variants";
import { XIcon } from "lucide-react";

import { tv, cn } from "~/utils/tailwind";

import {
  dialogDescriptionVariants,
  dialogFooterVariants,
  dialogHeaderVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
} from "~/components/ui/_Dialog";
import { Button } from "~/components/ui/Button";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      className={dialogOverlayVariants({ className })}
      {...props}
    />
  );
}

const sheetVariants = tv({
  base: [
    "fixed z-50 flex flex-col bg-background p-6 transition ease-in-out",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "[&>button]:absolute [&>button]:right-2.5 [&>button]:top-2.5",
  ],
  variants: {
    side: {
      top: cn(
        "inset-x-0 top-0 border-b",
        "data-[state=open]:slide-in-from-top",
        "data-[state=closed]:slide-out-to-top",
      ),
      bottom: cn(
        "inset-x-0 bottom-0 border-t",
        "data-[state=open]:slide-in-from-bottom",
        "data-[state=closed]:slide-out-to-bottom",
      ),
      left: cn(
        "inset-y-0 left-0 h-full w-3/4 border-r",
        "sm:max-w-96",
        "data-[state=open]:slide-in-from-left",
        "data-[state=closed]:slide-out-to-left",
      ),
      right: cn(
        "inset-y-0 right-0 h-full w-3/4 border-l",
        "sm:max-w-96",
        "data-[state=open]:slide-in-from-right",
        "data-[state=closed]:slide-out-to-right",
      ),
    },
  },
  defaultVariants: {
    side: "right",
  },
});

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

function SheetContent({
  side = "right",
  className,
  children,
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close asChild>
          <Button variant="ghost" size="sm" subject="icon">
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={dialogHeaderVariants({ className })} {...props} />;
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={dialogFooterVariants({ className })} {...props} />;
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      className={dialogTitleVariants({ className })}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      className={dialogDescriptionVariants({ className })}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
