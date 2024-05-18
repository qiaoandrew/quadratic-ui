"use client";

import { toast } from "sonner";
import { CopyIcon } from "lucide-react";

import useClipboard from "~/hooks/useClipboard";
import { Button } from "../../../../components/ui/Button";

interface CopyToClipboardButtonProps {
  value: string;
}

export default function CopyToClipboardButton({
  value,
}: CopyToClipboardButtonProps) {
  const { copyToClipboard } = useClipboard();

  return (
    <Button
      onClick={async () =>
        await copyToClipboard(
          value,
          () => toast.success("Copied to clipboard."),
          () => toast.error("Failed to copy to clipboard."),
        )
      }
      variant="secondary"
      size="icon"
      aria-label="Copy to clipboard"
      className="absolute right-4 top-4 size-6 rounded-1.5"
    >
      <CopyIcon size={14} className="text-foreground/50" />
    </Button>
  );
}
