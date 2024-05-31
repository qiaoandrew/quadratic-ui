"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastCancelDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Account created.", {
          cancel: {
            label: "Undo",
            onClick: () => console.log("Undo!"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
