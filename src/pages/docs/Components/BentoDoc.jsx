import React, { useState } from "react";
import Bento from "../../../components/atoms/Bento";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { getBentoCodeString } from "../../../constants/CodeString";

const BentoDoc = () => {
  const [copy, setCopy] = useState(false);
  const [show, setShow] = useState(false);

  const codeString = getBentoCodeString();

  return (
    <>
      <p className="text-gray-500">Displays a bento grid of cards.</p>

      <div className="flex gap-x-6 border-b px-4 mt-10">
        <h1>Preview</h1>
      </div>
      <Bento />
      <div className="flex gap-x-6 border-b px-4 mt-5">
        <h1>Code</h1>
      </div>
      <div className="relative">
        <div
          className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
          onClick={() => {
            navigator.clipboard.writeText(codeString);
            toast.success("Copied to clipboard", {
              icon: "📋",
              position: "top-center",
            });
            setCopy(true);
            setTimeout(() => {
              setCopy({ ...copy, [variant]: false });
            }, 3000);
          }}
        >
          {copy ? (
            <Check className="text-white" />
          ) : (
            <Clipboard className="text-white" />
          )}
        </div>
        <SyntaxHighlighter
          language="tsx"
          wrapLongLines={true}
          style={atomOneDark}
          className="rounded-lg p-5 mt-5 w-full"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default BentoDoc;
