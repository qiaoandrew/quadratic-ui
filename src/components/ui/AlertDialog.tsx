import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "~/utils/tailwind";

import {
  dialogContentVariants,
  dialogDescriptionVariants,
  dialogFooterVariants,
  dialogHeaderVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
} from "~/components/ui/_Dialog";
import { buttonVariants, type ButtonProps } from "~/components/ui/Button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      className={dialogOverlayVariants({ className })}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        className={dialogContentVariants({ className })}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={dialogHeaderVariants({
        className: cn("pb-0 xs:pb-0", className),
      })}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={dialogFooterVariants({ className })} {...props} />;
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      className={dialogTitleVariants({ className })}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={dialogDescriptionVariants({ className })}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  variant = "destructive-outline",
  size,
  subject,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> & ButtonProps) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants({ variant, size, subject, className }))}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size,
  subject,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> & ButtonProps) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant, size, subject, className }))}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
