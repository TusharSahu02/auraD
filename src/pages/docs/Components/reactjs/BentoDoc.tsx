import { memo, useState } from "react";
import Bento from "@/components/reactjs/atoms/Bento";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { getBentoCodeString } from "@/constants/reactjs/CodeString";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";

const BentoDoc: React.FC = memo(() => {
  const [copyStates, setCopyStates] = useState({ code: false, framer: false });

  const codeString: string = getBentoCodeString();
  const framerMotionCodeString: string = "npm i framer-motion";

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
      <div id="bento4Grid" className="mt-10 flex gap-x-6 border-b px-4">
        <h1>Preview</h1>
      </div>
      <Bento />
      <div className="mt-5 gap-x-6 border-b px-2">
        <h1>Code</h1>
      </div>

      <div className="mt-4">
        {["Install Framer motion", "Create a Bento.tsx file"].map(
          (title, index) => (
            <div
              key={index}
              className={`flex items-start justify-center gap-2 border-l border-gray-500 ${
                index > 0 && "pt-4"
              }`}
            >
              <div className="h-full w-[15px] border-l">
                <div className="-ml-[1px] h-[30px] w-[5px] rounded-r-[10px] rounded-br-[10px] bg-gray-500" />
              </div>
              <div className="w-full">
                <h1 className="text-lg font-medium">{title}</h1>
                {index === 1 && (
                  <p className="my-3">
                    <kbd className="rounded-md bg-gray-200 px-2 py-1 dark:bg-gray-800">
                      src/components/Bento.tsx
                    </kbd>
                  </p>
                )}
                <div className="relative">
                  <div
                    className="absolute right-3 top-1.5 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
                    onClick={() => handleCopy(index === 0 ? "install" : "code")}
                    onKeyDown={() =>
                      handleCopy(index === 0 ? "install" : "code")
                    }
                  >
                    {getCopyIcon(index === 0 ? "install" : "code")}
                  </div>
                  <SyntaxHighlighterWrapper>
                    {index === 0 ? framerMotionCodeString : codeString}
                  </SyntaxHighlighterWrapper>
                </div>
              </div>
            </div>
          ),
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
