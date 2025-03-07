import type React from "react";
import { Check, Clipboard } from "lucide-react";
import type { CodeDisplayProps } from "@/Types/Reactjs/input.types";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";

export const CodeDisplay: React.FC<CodeDisplayProps> = ({
  show,
  codeString,
  onCopy,
  copyState,
  InputComponent,
}) => {
  const CopyButton = () => (
    <div
      className={`absolute top-3 right-3 size-7 hover:bg-gray-${
        show ? "100" : "600"
      } 
        border transition-all duration-300 flex items-center p-[6px] cursor-pointer 
        justify-center rounded-md`}
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
      <div className="w-full relative lg:h-[400px] h-[300px] border border-white/10 flex items-center justify-center mt-5 rounded-lg">
        <CopyButton />
        <InputComponent />
      </div>
    );
  }

  return (
    <div className="relative">
      <CopyButton />
      <SyntaxHighlighterWrapper className="rounded-lg p-5 mt-5 w-full">
        {codeString}
      </SyntaxHighlighterWrapper>
    </div>
  );
};
export const CodeDisplayAuth: React.FC<CodeDisplayProps> = ({
  show,
  codeString,
  onCopy,
  copyState,
  InputComponent,
}) => {
  const CopyButton = () => (
    <div
      className={`absolute top-3 right-3 size-7 hover:bg-gray-${
        show ? "100" : "600"
      } 
        border transition-all duration-300 flex items-center p-[6px] cursor-pointer 
        justify-center rounded-md`}
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
      <div className="w-full relative  border border-white/10 flex items-center justify-center mt-5 rounded-lg">
        <CopyButton />
        <InputComponent />
      </div>
    );
  }

  return (
    <div className="relative">
      <CopyButton />
      <SyntaxHighlighterWrapper className="rounded-lg p-5 mt-5 w-full h-[500px] hideScrollBar">
        {codeString}
      </SyntaxHighlighterWrapper>
    </div>
  );
};
