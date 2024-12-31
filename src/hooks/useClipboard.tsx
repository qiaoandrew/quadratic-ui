import { useCallback } from "react";

export default function useClipboard() {
  const copyToClipboard = useCallback(
    async (text: string, onSuccess?: () => void, onError?: () => void) => {
      try {
        await navigator.clipboard.writeText(text);
        onSuccess?.();
      } catch (error) {
        console.error("Failed to copy text to clipboard: ", error);
        onError?.();
      }
    },
    [],
  );

  return { copyToClipboard };
}
