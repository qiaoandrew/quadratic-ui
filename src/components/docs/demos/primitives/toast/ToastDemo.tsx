"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastDemo() {
  return (
    <Button variant="outline" onClick={() => toast("Here's a toast!")}>
      Show Toast
    </Button>
  );
}
