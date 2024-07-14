"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastActionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event created.", {
          action: {
            label: "View Event",
            onClick: () => console.log("Event viewed."),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
