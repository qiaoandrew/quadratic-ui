"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastUndoDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event created.", {
          cancel: {
            label: "Undo",
            onClick: () => console.log("Undone."),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
