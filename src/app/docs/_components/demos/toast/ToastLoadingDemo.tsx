"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastLoadingDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.loading("Loading accounts...", {
          cancel: {
            label: "Cancel",
            onClick: () => console.log("Cancel!"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
