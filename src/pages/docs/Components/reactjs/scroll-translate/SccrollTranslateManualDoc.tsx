import Button from "@/components/reactjs/atoms/button/Button";
import { getSmoothScrollCodeString } from "@/constants/reactjs/codeString.PerspectiveGrid";
import {
  getScrollTranslateCodeString,
  getScrollTranslateImportCodeString,
} from "@/constants/reactjs/codeString.ScrollTranslate";
import { showToast } from "@/lib/utils";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

const ScrollTranslateManualDoc = () => {
  const [copy, setCopy] = useState(false);
  const [copy2, setCopy2] = useState(false);
  const [copy3, setCopy3] = useState(false);
  const [copy4, setCopy4] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const scrollTranslateCodeString = getScrollTranslateCodeString();
  const utilsCodeString = getSmoothScrollCodeString();
  const importCodeString = getScrollTranslateImportCodeString();

  const gsapCodeString = "npm i gsap";

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          const width = 1000;
          const height = 700;
          const left = (screenWidth - width) / 2;
          const top = (screenHeight - height) / 2;
          window.open(
            "/preview/scroll-translate",
            "_blank",
            `width=${width},height=${height},left=${left},top=${top}`,
          );
        }}
        className="mt-5 w-full"
        iconPosition="right"
        iconSize="small"
        icon={<SquareArrowOutUpRight />}
      >
        Preview
      </Button>

      <h2 className="mt-10 border-b pb-2 text-2xl font-medium">Manually</h2>

      <div className="mt-4">
        <div className="flex items-start justify-center gap-2 border-l border-gray-500">
          <div className="h-full border-l lg:w-[20px]">
            <div className="-ml-[1px] h-[30px] w-[5px] rounded-r-[10px] rounded-br-[10px] bg-gray-500" />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium">Install dependencies</h1>
            <div className="relative mb-3 overflow-hidden">
              <div
                className="absolute right-3 top-7 z-20 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
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
                <SyntaxHighlighterWrapper className="md:text-md mt-1 w-full rounded-md text-sm">
                  {gsapCodeString}
                </SyntaxHighlighterWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2 border-l border-gray-500 pt-5">
          <div className="h-full border-l lg:w-[20px]">
            <div className="-ml-[1px] h-[30px] w-[5px] rounded-r-[10px] rounded-br-[10px] bg-gray-500" />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium" id="manualZoomParallaxDoc">
              Add ScrollTranslate.tsx File
            </h1>

            <p className="mt-3">
              <kbd className="rounded-md bg-gray-200 px-2 py-1 dark:bg-gray-800">
                src/components/ScrollTranslate.tsx
              </kbd>
            </p>
            {!seeAll ? (
              <div className="relative overflow-hidden">
                <div
                  className="absolute right-3 top-8 z-20 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
                  onClick={() => {
                    navigator.clipboard.writeText(scrollTranslateCodeString);
                    showToast(setCopy2);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigator.clipboard.writeText(scrollTranslateCodeString);
                      showToast(setCopy2);
                    }
                  }}
                >
                  <CopyCodeToggleIcons copyCode={copy2} />
                </div>
                <div className="relative">
                  <SyntaxHighlighterWrapper className="h-[500px] text-sm">
                    {scrollTranslateCodeString}
                  </SyntaxHighlighterWrapper>
                </div>
                <div className="absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-gradient-to-b from-transparent to-black/80" />
                <h1
                  onClick={() => {
                    setSeeAll(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSeeAll(true);
                    }
                  }}
                  className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-gray-400 hover:underline"
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
                    className="absolute right-3 top-3 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
                    onClick={() => {
                      navigator.clipboard.writeText(scrollTranslateCodeString);
                      showToast(setCopy2);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        navigator.clipboard.writeText(
                          scrollTranslateCodeString,
                        );
                        showToast(setCopy2);
                      }
                    }}
                  >
                    <CopyCodeToggleIcons copyCode={copy2} />
                  </div>

                  <SyntaxHighlighterWrapper className="h-[700px] text-sm">
                    {scrollTranslateCodeString}
                  </SyntaxHighlighterWrapper>
                </div>
                <div className="mt-3 flex items-center justify-center">
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
        <div className="flex items-start justify-center gap-2 border-l border-gray-500 pt-5">
          <div className="h-full border-l lg:w-[20px]">
            <div className="-ml-[1px] h-[30px] w-[5px] rounded-r-[10px] rounded-br-[10px] bg-gray-500" />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium">
              Add SmoothScrolling.tsx File (Optional)
            </h1>

            <p className="mt-3">
              <kbd className="rounded-md bg-gray-200 px-2 py-1 dark:bg-gray-800">
                @/lib/utils/SmoothScrolling.tsx
              </kbd>
            </p>
            <div className="relative overflow-hidden">
              <div
                className="absolute right-3 top-8 z-20 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
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
                <SyntaxHighlighterWrapper className="md:text-md h-[170px] text-sm">
                  {utilsCodeString}
                </SyntaxHighlighterWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2 border-l border-gray-500 pt-5">
          <div className="h-full border-l lg:w-[20px]">
            <div className="-ml-[1px] h-[30px] w-[5px] rounded-r-[10px] rounded-br-[10px] bg-gray-500" />
          </div>
          <div className="w-full">
            <h1 className="text-lg font-medium">Now Import the file</h1>

            <p className="mt-3">
              <kbd className="rounded-md bg-gray-200 px-2 py-1 dark:bg-gray-800">
                lenis helps you to add smooth scrolling to your website
              </kbd>
            </p>
            <div className="relative overflow-hidden">
              <div
                className="absolute right-3 top-8 z-20 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
                onClick={() => {
                  navigator.clipboard.writeText(importCodeString);
                  showToast(setCopy4);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigator.clipboard.writeText(importCodeString);
                    showToast(setCopy4);
                  }
                }}
              >
                <CopyCodeToggleIcons copyCode={copy4} />
              </div>
              <div className="relative">
                <SyntaxHighlighterWrapper className="md:text-md h-[170px] text-sm">
                  {importCodeString}
                </SyntaxHighlighterWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTranslateManualDoc;
