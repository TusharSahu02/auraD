import Button from "@/components/atoms/button/Button";
import { getNumberFlowCodeString } from "@/constants/reactjs/codeString.number";
import { showToast } from "@/lib/utils";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import { useState } from "react";

const ManualNFDoc = () => {
  const numberFlowCodeString = getNumberFlowCodeString();
  const [copy, setCopy] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const [copy2, setCopy2] = useState(false);

  const framerMotionCodeString: string = `npm i framer-motion`;

  const handleCopy = () => {
    navigator.clipboard.writeText(numberFlowCodeString);
    showToast(setCopy);
  };
  return (
    <div className="mt-4">
      <div className="flex items-start justify-center gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Install Framer motion</h1>
          <div className="relative">
            <div
              className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-sm"
              onClick={() => {
                navigator.clipboard.writeText(framerMotionCodeString);
                showToast(setCopy2);
              }}
            >
              <CopyCodeToggleIcons copyCode={copy2} />
            </div>
            <SyntaxHighlighterWrapper className=" text-sm md:text-md">
              {framerMotionCodeString}
            </SyntaxHighlighterWrapper>
          </div>
        </div>
      </div>
      <div className="flex items-start pt-5 justify-center  gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Add NumberFlow.tsx File</h1>

          <p className="mt-3">
            <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
              src/components/NumberFlow.tsx
            </kbd>
          </p>
          {!seeAll ? (
            <div className="relative overflow-hidden">
              <div
                className="absolute top-8 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex z-20 items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={handleCopy}
              >
                <CopyCodeToggleIcons copyCode={copy} />
              </div>
              <div className="relative">
                <SyntaxHighlighterWrapper className="h-[500px]  text-sm md:text-md">
                  {numberFlowCodeString}
                </SyntaxHighlighterWrapper>
              </div>
              <div className="absolute h-full w-full z-10 top-0 left-0 bg-gradient-to-b from-transparent rounded-lg to-black/80"></div>
              <h1
                onClick={() => {
                  setSeeAll(true);
                }}
                className="text-gray-400 absolute bottom-5 left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:underline "
              >
                <Button variant="ghost" className="text-white">
                  See more
                </Button>
              </h1>
            </div>
          ) : (
            <>
              <div className="relative">
                <div
                  className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                  onClick={handleCopy}
                >
                  <CopyCodeToggleIcons copyCode={copy} />
                </div>

                <SyntaxHighlighterWrapper className="h-[700px]">
                  {numberFlowCodeString}
                </SyntaxHighlighterWrapper>
              </div>
              <div className="flex items-center justify-center mt-3 ">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSeeAll(false);
                  }}
                >
                  See less
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManualNFDoc;
