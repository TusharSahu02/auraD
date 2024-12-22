import { memo, useState } from "react";
import Button from "@/components/reactjs/atoms/button/Button";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
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
} from "@/components/reactjs/atoms/button/CustomButtons";
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
import { SectionCommon } from "@/common/SectionCommon";

type Variant = "primary" | "secondary" | "destructive" | "outline" | "ghost";
// | "animation";

const ButtonDoc = memo(() => {
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
      <div className="mt-1">
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
            <div className="relative mt-5 flex h-[300px] w-full items-center justify-center rounded-lg border border-gray-300 dark:border-gray-800 lg:h-[400px]">
              <div
                className="absolute right-3 top-3 flex size-7 cursor-pointer items-center justify-center rounded-md border p-[6px] transition-all duration-300 hover:bg-gray-100/10"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  showToast(setCopyCode);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigator.clipboard.writeText(codeString);
                    showToast(setCopyCode);
                  }
                }}
              >
                <CopyCodeToggleIcons copyCode={copyCode} />
              </div>
              <Button variant="animation">hover me </Button>
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute right-3 top-3 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  showToast(setCopyCode);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigator.clipboard.writeText(codeString);
                    showToast(setCopyCode);
                  }
                }}
              >
                <CopyCodeToggleIcons copyCode={copyCode} />
              </div>

              <SyntaxHighlighterWrapper className="md:text-md text-sm">
                {codeString}
              </SyntaxHighlighterWrapper>
            </div>
          )}
        </div>

        <h2 className="mt-10 border-b pb-2 text-2xl font-medium">
          Installation
        </h2>
        <ManualDocs />

        <h1 className="mt-10 border-b pb-2 text-2xl font-medium">Examples</h1>
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
      <h1 className="mt-5">
        <kbd className="rounded-lg bg-gray-800 px-2 py-1">
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
});

export default ButtonDoc;
