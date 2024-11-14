import NavigationButton from "@/components/molecules/NavigationButton";
import { getRippleCodeString } from "@/constants/reactjs/codeString.ripple";
import { showToast } from "@/lib/utils";
import CodeToggle from "@/utils/CodeToggle";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import { useState } from "react";
import ManualRippleDoc from "./ManualRippleDoc";

const RippleDoc = () => {
  const [code, setCode] = useState(true);
  const [copyCode, setCopyCode] = useState(false);
  const codeString = getRippleCodeString();
  return (
    <div className="mt-1 pb-[20px]">
      <p className="text-gray-500">
        Displays a button or a component that looks like a button.
      </p>
      <div className="mt-10" id="ripple">
        <CodeToggle
          code={code}
          setCode={setCode}
          leftText="Preview"
          rightText="Code"
        />
        {code ? (
          <div className=" w-full relative lg:h-[500px] h-[300px] border border-gray-300 dark:border-gray-800 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100/10 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                showToast(setCopyCode);
              }}
            >
              <CopyCodeToggleIcons copyCode={copyCode} />
            </div>

            <img
              src="/components/rippleEffect.gif"
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                showToast(setCopyCode);
              }}
            >
              <CopyCodeToggleIcons copyCode={copyCode} />
            </div>

            <SyntaxHighlighterWrapper className="text-sm md:text-md ">
              {codeString}
            </SyntaxHighlighterWrapper>
          </div>
        )}
      </div>

      <h2 className="font-medium mt-10 border-b pb-2 text-2xl">Manually</h2>
      <ManualRippleDoc />

      <NavigationButton
        previousTitle="Bento"
        nextTitle="Auth"
        previousLink="/docs/reactjs/components/bento"
        nextLink="/docs/reactjs/molecules/auth"
      />
    </div>
  );
};

export default RippleDoc;
