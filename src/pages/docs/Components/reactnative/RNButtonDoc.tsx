import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getRNButtonCodeString } from "@/constants/react-native/RNcodeString";
import { Check, Clipboard } from "lucide-react";
import { showToast } from "@/lib/utils";
const RNButtonDoc = () => {
  // const [code, setCode] = useState(true);
  const [copyCode, setCopyCode] = useState(false);
  const codeString = getRNButtonCodeString();
  return (
    <>
      <div className="mt-1 pb-[20px]">
        <p className="text-gray-500">
          Displays a button or a component that looks like a button.
        </p>

        <div id="overview" className="mt-10">
          <div className="flex gap-x-6 border-b px-4">
            <h1>Code</h1>
          </div>
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                showToast(setCopyCode);
              }}
            >
              {copyCode ? (
                <Check className="text-white" />
              ) : (
                <Clipboard className="text-white" />
              )}
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={atomOneDark}
              className="rounded-lg p-5 mt-3 w-full text-sm md:text-md customScrollBarHorizonalal"
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* <NavigationButton
          previousTitle="Installation"
          nextTitle="Input"
          previousLink="/docs/react-native/installation"
          nextLink="/docs/reactjs/components/input"
        /> */}

        <div className="mb-5 md:mb-0" />
      </div>
    </>
  );
};

export default RNButtonDoc;
