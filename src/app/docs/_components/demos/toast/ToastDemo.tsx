"use client";

import { toast } from "sonner";

import { Button } from "~/components/ui/Button";

export default function ToastDemo() {
  return (
    <Button variant="outline" onClick={() => toast("Event created.")}>
      Show Toast
    </Button>
  );
}
