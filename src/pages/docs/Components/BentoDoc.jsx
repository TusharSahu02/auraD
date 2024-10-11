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
      <div className=" gap-x-6 px-2 border-b  mt-5">
        <h1>Code</h1>
      </div>

      <div className="mt-4">
        <div className="flex items-start justify-center gap-2 border-l border-gray-500">
          <div className="w-[15px] border-l h-full">
            <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium">Install Framer motion</h1>
            <div className="relative">
              <div
                className="absolute top-1.5 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
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
                className="rounded-lg p-5 mt-2 w-full"
              >
                npm i framer-motion
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        <div className="flex pt-4 items-start justify-center gap-2 border-l border-gray-500">
          <div className="w-[15px] border-l h-full">
            <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium">Create a Bento.tsx file</h1>
            <p className="mt-3">
              <kbd className="px-2 py-1 bg-gray-200 rounded-md">src/components/Bento.tsx</kbd>
            </p>
            <div className="relative">
              <div
                className="absolute top-1.5 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
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
                className="rounded-lg p-5 mt-2 w-full"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoDoc;
