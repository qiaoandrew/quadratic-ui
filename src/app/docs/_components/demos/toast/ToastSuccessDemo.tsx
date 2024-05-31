"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastSuccessDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => toast.success("Account created successfully!")}
    >
      Show Toast
    </Button>
  );
}
