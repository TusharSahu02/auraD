import type React from "react";
import { Check, Clipboard } from "lucide-react";
import type { CodeDisplayCommmonProps } from "@/Types/common.types";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";

export const CodeDisplayCommon: React.FC<CodeDisplayCommmonProps> = ({
  show,
  codeString,
  onCopy,
  copyState,
  Component,
}) => {
  const CopyButton = () => (
    <div
      className={`absolute right-3 top-3 size-7 hover:bg-gray-${
        show ? "100" : "600"
      } flex cursor-pointer items-center justify-center rounded-md border p-[6px] transition-all duration-300 hover:dark:bg-gray-700`}
      onClick={onCopy}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onCopy();
        }
      }}
    >
      {copyState ? (
        <Check className={show ? "" : "text-white"} />
      ) : (
        <Clipboard className={show ? "" : "text-white"} />
      )}
    </div>
  );

  if (show) {
    return (
      <div className="relative mt-5 flex h-[300px] w-full items-center justify-center rounded-lg border border-white/10 lg:h-[400px]">
        <CopyButton />
        <Component />
      </div>
    );
  }

  return (
    <div className="relative">
      <CopyButton />
      <SyntaxHighlighterWrapper className="mt-5 w-full rounded-lg p-5">
        {codeString}
      </SyntaxHighlighterWrapper>
    </div>
  );
};
