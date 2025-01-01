"use client";

import { CopyIcon } from "lucide-react";

import useClipboard from "~/hooks/useClipboard";
import { Button } from "~/components/ui/Button";

interface CopyToClipboardButtonProps {
  text: string;
}

export default function CopyToClipboardButton({
  text,
}: CopyToClipboardButtonProps) {
  const { copyToClipboard } = useClipboard();

  return (
    <Button
      onClick={async () => await copyToClipboard(text)}
      variant="secondary"
      size="xs"
      className="absolute right-4 top-4 size-6 rounded-1.5 [&_svg]:size-3.5"
    >
      <CopyIcon className="text-muted-foreground" />
    </Button>
  );
}
