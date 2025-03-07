import { SectionCommon } from "@/common/SectionCommon";
import { ScrollTranslatePreview } from "@/components/reactjs/atoms/scroll-translate/ScrollTranslate";
import { getScrollTranslateCodeString } from "@/constants/reactjs/codeString.ScrollTranslate";
import { useScrollTranslateTabState } from "@/hooks/reactjs/useTabState";
import ScrollTranslateManualDoc from "./SccrollTranslateManualDoc";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";

const ScrollTranslateDoc = () => {
  const { show: Show, toggleTab } = useScrollTranslateTabState();

  const sections = [
    {
      title: "Scroll Translate",
      key: "scrollTranslate" as const,
      component: ScrollTranslatePreview,
      codeString: getScrollTranslateCodeString(),
    },
  ];

  return (
    <>
      <p className="text-gray-500">
        Displays a animated perspective grid using GSAP and lenis
      </p>

      <div className="relative">
        {sections.map(({ title, key, component, codeString }) => (
          <SectionCommon
            key={key}
            id={key}
            title={title}
            show={Show[key]}
            onToggle={() => toggleTab(key)}
            codeString={codeString}
            Component={component}
          />
        ))}
      </div>

      <div className="mt-5">
        <ScrollTranslateManualDoc />
      </div>

      <NavigationButton
        previousTitle="Perspective Grid"
        nextTitle="Text Parallax"
        previousLink="/docs/reactjs/components/perspective-grid"
        nextLink="/docs/reactjs/components/text-parallax"
      />
    </>
  );
};

export default ScrollTranslateDoc;
