"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

import { cn } from "~/utils/tailwind";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: cn(
            "toast group",
            "group-[.toaster]:flex group-[.toaster]:w-[356px] group-[.toaster]:items-center group-[.toaster]:gap-x-2 group-[.toaster]:rounded-2 group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:bg-background group-[.toaster]:p-4 group-[.toaster]:text-foreground",
          ),
          title: cn("group-[.toast]:text-3.5 group-[.toast]:font-medium"),
          description: cn(
            "group-[.toast]:text-3.5 group-[.toast]:text-muted-foreground",
          ),
          actionButton: cn(
            "group-[.toast]:h-8 group-[.toast]:rounded-1.5 group-[.toast]:bg-primary group-[.toast]:px-2 group-[.toast]:text-3 group-[.toast]:font-medium group-[.toast]:text-primary-foreground",
          ),
          cancelButton: cn(
            "group-[.toast]:h-8 group-[.toast]:rounded-1.5 group-[.toast]:bg-muted group-[.toast]:px-2 group-[.toast]:text-3 group-[.toast]:font-medium group-[.toast]:text-muted-foreground",
          ),
          success: cn(
            "group-[.toaster]:border-[var(--success-border)] group-[.toaster]:bg-success group-[.toaster]:text-success-foreground",
          ),
          warning: cn(
            "group-[.toaster]:border-[var(--warning-border)] group-[.toaster]:bg-warning group-[.toaster]:text-warning-foreground",
          ),
          error: cn(
            "group-[.toaster]:border-destructive-border group-[.toaster]:bg-destructive group-[.toaster]:text-destructive-foreground",
          ),
          info: cn(
            "group-[.toaster]:border-[var(--info-border)] group-[.toaster]:bg-info group-[.toaster]:text-info-foreground",
          ),
        },
      }}
      cn={cn}
      className="toaster group"
      {...props}
    />
  );
};

export { Toaster };
