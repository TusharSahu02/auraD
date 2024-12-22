import { memo, useState } from "react";
import Bento from "@/components/reactjs/atoms/Bento";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { getBentoCodeString } from "@/constants/reactjs/CodeString";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";

const BentoDoc: React.FC = memo(() => {
  const [copyStates, setCopyStates] = useState({ code: false, framer: false });

  const codeString: string = getBentoCodeString();
  const framerMotionCodeString: string = `npm i framer-motion`;

  const handleCopy = (variant: string) => {
    const copyTest =
      variant === "install" ? framerMotionCodeString : codeString;

    navigator.clipboard.writeText(copyTest);
    toast.success("Copied to clipboard", {
      icon: "📋",
      position: "top-center",
    });

    setCopyStates((prev) => ({
      ...prev,
      [variant === "install" ? "framer" : "code"]: true,
    }));

    setTimeout(() => {
      setCopyStates((prev) => ({
        ...prev,
        [variant === "install" ? "framer" : "code"]: false,
      }));
    }, 3000);
  };

  const getCopyIcon = (variant: string) =>
    copyStates[variant === "install" ? "framer" : "code"] ? (
      <Check className="text-white" />
    ) : (
      <Clipboard className="text-white" />
    );

  return (
    <>
      <p className="text-gray-500">Displays a bento grid of cards.</p>
      <div id="bento4Grid" className="flex gap-x-6 border-b px-4 mt-10">
        <h1>Preview</h1>
      </div>
      <Bento />
      <div className="gap-x-6 px-2 border-b mt-5">
        <h1>Code</h1>
      </div>

      <div className="mt-4">
        {["Install Framer motion", "Create a Bento.tsx file"].map(
          (title, index) => (
            <div
              key={index}
              className={`flex items-start justify-center gap-2 border-l border-gray-500 ${index > 0 && "pt-4"
                }`}
            >
              <div className="w-[15px] border-l h-full">
                <div className="w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px]" />
              </div>
              <div className="w-full">
                <h1 className="text-lg font-medium">{title}</h1>
                {index === 1 && (
                  <p className="my-3">
                    <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                      src/components/Bento.tsx
                    </kbd>
                  </p>
                )}
                <div className="relative">
                  <div
                    className="absolute top-1.5 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                    onClick={() => handleCopy(index === 0 ? "install" : "code")}
                  >
                    {getCopyIcon(index === 0 ? "install" : "code")}
                  </div>
                  <SyntaxHighlighter
                    language="tsx"
                    wrapLongLines={true}
                    style={atomOneDark}
                    className="rounded-lg p-5 mt-2 w-full"
                  >
                    {index === 0 ? framerMotionCodeString : codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <NavigationButton
        previousTitle="Input"
        nextTitle="Ripple"
        previousLink="/docs/reactjs/components/input"
        nextLink="/docs/reactjs/components/ripple"
      />
    </>
  );
});

export default BentoDoc;
