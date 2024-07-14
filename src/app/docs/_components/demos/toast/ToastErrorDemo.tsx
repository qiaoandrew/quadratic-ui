"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastErrorDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => toast.error("An error occurred while creating the event.")}
    >
      Show Toast
    </Button>
  );
}
