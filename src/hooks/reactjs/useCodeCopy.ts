import { useState } from "react";
import { showToast } from "@/lib/utils";

export const useCodeCopy = () => {
  const [copyState, setCopyState] = useState(false);

  const handleCopy = (codeString: string) => {
    navigator.clipboard.writeText(codeString);
    showToast(setCopyState);
  };

  return { copyState, handleCopy };
};
