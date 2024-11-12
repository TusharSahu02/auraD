import { useState } from "react";
import Button from "@/components/atoms/Button";
import NavigationButton from "@/components/molecules/NavigationButton";
import {
  getAnimationButtonCodeString,
  getCodeString,
} from "@/constants/reactjs/CodeString";
import { showToast } from "@/lib/utils";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import CodeToggle from "@/utils/CodeToggle";
import ManualDocs from "./ButtonManualInstalltion";
import CodeBlock from "./ButtonsCodeBlock";
import { useButtonTabState } from "@/hooks/reactjs/useTabState";
import {
  AmoungUsPlayButton,
  BackToTopButtonWithAnimation,
  GoldShineOnHoverAnimButton,
  HoverWithContentSlideOutButton,
  MacBookCommandKeyBoardBtn,
  PremiumUnlockButton,
  RotateOnHoverSocialBtn,
  SaveHoverAnimationButton,
  TelegramButton,
} from "@/components/atoms/CustomButtons";
import { SectionCommon } from "@/components/common/SectionCommon";
import {
  getAmoungUsBtnCodeString,
  getBackToTopButton,
  getGoldShineOnHoverAnimButton,
  getHoverWithContentSlideOutButton,
  getMacBookCommandKeyCodeString,
  getPremiumUnlockButton,
  getRotateOnHoverBtn,
  getSaveHoverAnimationButton,
  getTelegramButtonCode,
} from "@/constants/reactjs/codeString.button";

type Variant = "primary" | "secondary" | "destructive" | "outline" | "ghost";
// | "animation";

const ButtonDoc = () => {
  const [show, setShow] = useState({
    primary: true,
    secondary: true,
    destructive: true,
    outline: true,
    ghost: true,
    animation: true,
  });

  const [code, setCode] = useState(true);
  const [copyCode, setCopyCode] = useState(false);

  const [copy, setCopy] = useState({
    primary: false,
    secondary: false,
    destructive: false,
    outline: false,
    ghost: false,
    animation: false,
  });

  const variants = [
    { variant: "primary", buttonText: "Primary" },
    { variant: "secondary", buttonText: "Secondary" },
    { variant: "destructive", buttonText: "Destructive" },
    { variant: "outline", buttonText: "Outline" },
    { variant: "ghost", buttonText: "Ghost" },
    // { variant: "animation", buttonText: "Animation" },
  ];

  const codeString = getAnimationButtonCodeString();

  const { show: buttonShow, toggleTab } = useButtonTabState();

  const sections = [
    {
      title: "Bounce Effect",
      key: "telegramBtn" as const,
      component: TelegramButton,
      codeString: getTelegramButtonCode(),
    },
    {
      title: "Slide Animation on Hover",
      key: "slideAnimOnHoverBtn" as const,
      component: SaveHoverAnimationButton,
      codeString: getSaveHoverAnimationButton(),
    },
    {
      title: "Gold Shine on Hover",
      key: "goldShineOnHoverAnimBtn" as const,
      component: GoldShineOnHoverAnimButton,
      codeString: getGoldShineOnHoverAnimButton(),
    },
    {
      title: "Hover With Content Slideout",
      key: "hoverWithContentSlideOut" as const,
      component: HoverWithContentSlideOutButton,
      codeString: getHoverWithContentSlideOutButton(),
    },
    {
      title: "Premium Unlock Button",
      key: "premiumUnlockBtn" as const,
      component: PremiumUnlockButton,
      codeString: getPremiumUnlockButton(),
    },
    {
      title: "Back To Top",
      key: "backToTopBtn" as const,
      component: BackToTopButtonWithAnimation,
      codeString: getBackToTopButton(),
    },
    {
      title: "Social Link with Rotate On Hover",
      key: "socialRotateOnHoverBtn" as const,
      component: RotateOnHoverSocialBtn,
      codeString: getRotateOnHoverBtn(),
    },
    {
      title: "Among Us Game Button",
      key: "amoungUsGameBtn" as const,
      component: AmoungUsPlayButton,
      codeString: getAmoungUsBtnCodeString(),
    },
    {
      title: "Mac Command Button",
      key: "macCommandBtn" as const,
      component: MacBookCommandKeyBoardBtn,
      codeString: getMacBookCommandKeyCodeString(),
    },
  ];

  return (
    <>
      <div className="mt-1 ">
        <p className="text-gray-500">
          Displays a button or a component that looks like a button.
        </p>
        <div id="overview" className="mt-10">
          <CodeToggle
            code={code}
            setCode={setCode}
            leftText="Preview"
            rightText="Code"
          />
          {code ? (
            <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 dark:border-gray-800 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100/10 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  showToast(setCopyCode);
                }}
              >
                <CopyCodeToggleIcons copyCode={copyCode} />
              </div>
              <Button variant="animation">hover me </Button>
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

        <h2 className="font-medium mt-10 border-b pb-2 text-2xl">
          Installation
        </h2>
        <ManualDocs />

        <h1 className="font-medium mt-10 border-b pb-2 text-2xl">Examples</h1>
        {variants.map(({ variant, buttonText }) => {
          const codeString = getCodeString(variant as Variant);
          return (
            <CodeBlock
              key={variant}
              id={variant}
              show={show}
              setShow={setShow}
              copy={copy}
              setCopy={setCopy}
              variant={variant as Variant}
              buttonText={buttonText}
              codeString={codeString}
            />
          );
        })}
      </div>
      <h1 className=" mt-5">
        <kbd className=" bg-gray-800 px-2 py-1 rounded-lg">
          Below Button are Custom Buttons and is not added in the above varients
        </kbd>
      </h1>
      {sections.map(({ title, key, component, codeString }) => (
        <SectionCommon
          key={key}
          id={key}
          title={title}
          show={buttonShow[key]}
          onToggle={() => toggleTab(key)}
          codeString={codeString}
          Component={component}
        />
      ))}
      <NavigationButton
        previousTitle="Installation"
        nextTitle="Input"
        previousLink="/docs/reactjs/installation"
        nextLink="/docs/reactjs/components/input"
      />
      <div className="mb-5 md:mb-0" />
    </>
  );
};

export default ButtonDoc;
