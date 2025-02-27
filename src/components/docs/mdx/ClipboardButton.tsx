"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CopyIcon, CheckIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import useClipboard from "~/hooks/useClipboard";
import { Button } from "~/components/ui/Button";

interface CopyToClipboardButtonProps {
  text: string;
}

export default function CopyToClipboardButton({
  text,
}: CopyToClipboardButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { copyToClipboard } = useClipboard();

  const handleCopy = async () => {
    await copyToClipboard(
      text,
      () => {
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
      },
      () => toast.error("Failed to copy to clipboard."),
    );
  };

  return (
    <Button
      onClick={handleCopy}
      variant={hasCopied ? "success-outline" : "secondary"}
      size="xs"
      className={cn(
        "rounded-1.5 absolute top-4 right-4 size-6 [&_svg]:size-3.5",
        hasCopied && "hover:bg-success",
      )}
      aria-label="Copy to clipboard"
    >
      {hasCopied ? (
        <CheckIcon />
      ) : (
        <CopyIcon className="text-muted-foreground" />
      )}
    </Button>
  );
}
