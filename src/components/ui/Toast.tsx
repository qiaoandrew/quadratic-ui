"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "p-4 rounded-2 bg-background w-[356px] border flex items-center gap-x-2",
          title: "text-3.5",
          description: "text-3.5 text-muted-foreground",
          actionButton:
            "rounded-1.5 bg-primary text-primary-foreground text-3.5",
          cancelButton: "rounded-1.5 bg-muted text-muted-foreground text-3.5",
          success: "bg-success text-success-foreground border-success",
          warning: "bg-warning text-warning-foreground border-warning",
          error: "bg-error text-error-foreground border-error",
          info: "bg-info text-info-foreground border-info",
        },
      }}
      className="toaster group"
      {...props}
    />
  );
};

export { Toaster };
