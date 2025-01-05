"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastWarningDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => toast.warning("Start time cannot be earlier than 8am.")}
    >
      Show Toast
    </Button>
  );
}
