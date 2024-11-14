import {
  //   getRippleCodeString,
  getRippleCodeString2,
  getRippleImportCodeString,
  getRippleTailwindCodeString,
} from "@/constants/reactjs/codeString.ripple";
import { showToast } from "@/lib/utils";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import { useState } from "react";

const ManualRippleDoc = () => {
  //   const buttonCodeString = getRippleCodeString();
  const buttonCodeString2 = getRippleCodeString2();
  const tailwindConfigCodeString = getRippleTailwindCodeString();
  const importRippleCodeString = getRippleImportCodeString();

  const [copy2, setCopy2] = useState(false);
  const [copy3, setCopy3] = useState(false);
  const [copy4, setCopy4] = useState(false);

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
          <h1 className="text-lg font-medium">Add RippleEffext.tsx File</h1>
          <p className="mt-3">
            <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
              src/components/RippleEffext.tsx
            </kbd>
          </p>

          <div className="relative" id="manual-setup">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(buttonCodeString2);
                showToast(setCopy2);
              }}
            >
              <CopyCodeToggleIcons copyCode={copy2} />
            </div>

            <SyntaxHighlighterWrapper className="h-[700px]">
              {buttonCodeString2}
            </SyntaxHighlighterWrapper>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center pt-10 gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">
            Add this to{" "}
            <kbd className="px-2 ml-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
              tailwind.config.js
            </kbd>
          </h1>
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(tailwindConfigCodeString);
                showToast(setCopy3);
              }}
            >
              <CopyCodeToggleIcons copyCode={copy3} />
            </div>
            <SyntaxHighlighterWrapper className="h-[500px]">
              {tailwindConfigCodeString}
            </SyntaxHighlighterWrapper>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center pt-10 gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">
            Then Just Import the Component in you project
          </h1>
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(importRippleCodeString);
                showToast(setCopy4);
              }}
            >
              <CopyCodeToggleIcons copyCode={copy4} />
            </div>
            <SyntaxHighlighterWrapper className="h-[400px]">
              {importRippleCodeString}
            </SyntaxHighlighterWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualRippleDoc;
