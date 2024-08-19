import React, { useState } from "react";
import Button from "../../../components/atoms/Button";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Input from "../../../components/atoms/Input";
const InputDoc = () => {
  const [show, setShow] = useState({
    code: true,
  });

  const [copy, setCopy] = useState({
    code: false,
  });

  const codeString = `getCodeString("code")`;

  return (
    <>
      <div className="mt-1 pb-[20px]">
        <p className="text-gray-500">
          Displays a button or a component that looks like a button.
        </p>
        <div className="mt-10">
          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer ${
                show.code ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setShow({ ...show, code: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, code: true });
                }
              }}
              tabIndex={0}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.code ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setShow({ ...show, code: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, code: false });
                }
              }}
              tabIndex={0}
            >
              Code
            </div>
          </div>
          {show.code ? (
            <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard", {
                    icon: "📋",
                    position: "top-center",
                  });
                  setCopy({ ...copy, code: true });
                  setTimeout(() => {
                    setCopy({ ...copy, code: false });
                  }, 3000);
                }}
              >
                {copy.code ? <Check /> : <Clipboard />}
              </div>
              <Input />
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard", {
                    icon: "📋",
                    position: "top-center",
                  });
                  setCopy({ ...copy, code: true });
                  setTimeout(() => {
                    setCopy({ ...copy, code: false });
                  }, 3000);
                }}
              >
                {copy.code ? (
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
          )}
        </div>
        <h1 className="font-medium mt-10 border-b pb-2 text-2xl">Examples</h1>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="outline">
          <span className="flex items-center gap-1">
            <FiChevronLeft />
            Previous
          </span>
        </Button>
        <Button variant="outline">
          <span className="flex items-center gap-1">
            Input
            <FiChevronRight />
          </span>
        </Button>
      </div>
    </>
  );
};

export default InputDoc;
