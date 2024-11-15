import Button from "@/components/reactjs/atoms/button/Button";
import { getButtonCodeString } from "@/constants/reactjs/CodeString";
import { showToast } from "@/lib/utils";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import { useState } from "react";

const ManualDocs = () => {
  const buttonCodeString = getButtonCodeString();
  const [copy, setCopy] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(buttonCodeString);
    showToast(setCopy);
  };

  return (
    <div className="mt-4">
      <div className="flex items-start justify-center gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Setup Tailwind CSS</h1>
          <p className="mt-3">
            visit the link{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              className="underline mr-1 underline-offset-2"
            >
              here
            </a>
            and follow the instructions to setup the tailwind css for your
            project
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center pt-5 gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Add Button.tsx File</h1>

          <p className="mt-3">
            <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
              src/components/Button.tsx
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
                  {buttonCodeString}
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
                  {buttonCodeString}
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

export default ManualDocs;
