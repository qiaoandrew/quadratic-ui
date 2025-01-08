"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastInfoDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => toast.info("Arrive 10 minutes before the start time.")}
    >
      Show Toast
    </Button>
  );
}
