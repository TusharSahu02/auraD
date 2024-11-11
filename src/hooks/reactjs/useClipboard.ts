import { useState, useCallback } from "react";
import { toast } from "sonner";

export const useClipboard = (timeout = 3000) => {
  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard", {
          icon: "📋",
          position: "top-center",
        });
        setCopyState(true);
        setTimeout(() => setCopyState(false), timeout);
      } catch (error) {
        toast.error("Failed to copy to clipboard");
        console.error(error);
      }
    },
    [timeout]
  );

  return { copyState, copyToClipboard };
};
