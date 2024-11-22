import Button from "@/components/reactjs/atoms/button/Button";
import {
  getUtilCodeString,
  getZoomParallaxCodeString,
} from "@/constants/reactjs/codeString.zoomParallax";
import { showToast } from "@/lib/utils";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

const ZoomParallaxManualDoc = () => {
  const [copy, setCopy] = useState(false);
  const [copy2, setCopy2] = useState(false);
  const [copy3, setCopy3] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const zoomParallaxCodeString = getZoomParallaxCodeString();
  const utilsCodeString = getUtilCodeString();

  const gsapCodeString = "npm i gsap";

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          const width = 700;
          const height = 700;
          const left = (screenWidth - width) / 2;
          const top = (screenHeight - height) / 2;
          window.open(
            "/preview/zoom-parallax",
            "_blank",
            `width=${width},height=${height},left=${left},top=${top}`
          );
        }}
        className=" w-full mt-5"
        iconPosition="right"
        iconSize="small"
        icon={<SquareArrowOutUpRight />}
      >
        Preview
      </Button>
      <h2 className="font-medium mt-10 border-b pb-2 text-2xl">Manually</h2>
      <div className="mt-4">
        <div className="flex items-start justify-center gap-2 border-l border-gray-500">
          <div className="lg:w-[20px] border-l h-full">
            <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] " />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium">Install dependencies</h1>
            <div className="relative overflow-hidden mb-3">
              <div
                className="absolute top-7 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex z-20 items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(gsapCodeString);
                  showToast(setCopy);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigator.clipboard.writeText(gsapCodeString);
                    showToast(setCopy);
                  }
                }}
              >
                <CopyCodeToggleIcons copyCode={copy} />
              </div>
              <div className="relative">
                <SyntaxHighlighterWrapper className="rounded-md w-full   mt-1  text-sm md:text-md">
                  {gsapCodeString}
                </SyntaxHighlighterWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start pt-5 justify-center  gap-2 border-l border-gray-500">
          <div className="lg:w-[20px] border-l h-full">
            <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] " />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium" id="manualZoomParallaxDoc">
              Add ZoomParallax.tsx File
            </h1>

            <p className="mt-3">
              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                src/components/ZoomParallax.tsx
              </kbd>
            </p>
            {!seeAll ? (
              <div className="relative overflow-hidden">
                <div
                  className="absolute top-8 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex z-20 items-center p-[6px] cursor-pointer justify-center rounded-md"
                  onClick={() => {
                    navigator.clipboard.writeText(zoomParallaxCodeString);
                    showToast(setCopy2);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigator.clipboard.writeText(zoomParallaxCodeString);
                      showToast(setCopy2);
                    }
                  }}
                >
                  <CopyCodeToggleIcons copyCode={copy2} />
                </div>
                <div className="relative">
                  <SyntaxHighlighterWrapper className="h-[500px] text-sm md:text-md">
                    {zoomParallaxCodeString}
                  </SyntaxHighlighterWrapper>
                </div>
                <div className="absolute h-full w-full z-10 top-0 left-0 bg-gradient-to-b from-transparent rounded-lg to-black/80" />
                <h1
                  onClick={() => {
                    setSeeAll(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSeeAll(true);
                    }
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
                    onClick={() => {
                      navigator.clipboard.writeText(zoomParallaxCodeString);
                      showToast(setCopy2);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        navigator.clipboard.writeText(zoomParallaxCodeString);
                        showToast(setCopy2);
                      }
                    }}
                  >
                    <CopyCodeToggleIcons copyCode={copy2} />
                  </div>

                  <SyntaxHighlighterWrapper className="h-[700px]">
                    {zoomParallaxCodeString}
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
        <div className="flex items-start pt-5 justify-center  gap-2 border-l border-gray-500">
          <div className="lg:w-[20px] border-l h-full">
            <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] " />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium">Add utils.ts File</h1>

            <p className="mt-3">
              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                @/lb/utils.ts
              </kbd>
            </p>
            <div className="relative overflow-hidden">
              <div
                className="absolute top-8 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex z-20 items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(utilsCodeString);
                  showToast(setCopy3);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigator.clipboard.writeText(utilsCodeString);
                    showToast(setCopy3);
                  }
                }}
              >
                <CopyCodeToggleIcons copyCode={copy3} />
              </div>
              <div className="relative">
                <SyntaxHighlighterWrapper className="h-[170px]  text-sm md:text-md">
                  {utilsCodeString}
                </SyntaxHighlighterWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomParallaxManualDoc;
