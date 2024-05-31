"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastActionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Account added.", {
          action: {
            label: "View Account",
            onClick: () => console.log("View Account!"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
