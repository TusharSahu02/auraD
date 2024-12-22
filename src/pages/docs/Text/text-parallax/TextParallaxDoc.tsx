import { SectionCommon } from "@/common/SectionCommon";
// import { ScrollTranslatePreview } from "@/components/reactjs/atoms/scroll-translate/ScrollTranslate";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import { getTextParallaxImportCodeString } from "@/constants/reactjs/codeString.TextParallax";
import { useScrollTranslateTabState } from "@/hooks/reactjs/useTabState";
import TextParallaxManualDoc from "./TextParallaxManualDoc";
import { TextParallaxPreview } from "@/components/reactjs/atoms/text-parallax/TextParallax";

const TextParallaxDoc = () => {
  const { show: Show, toggleTab } = useScrollTranslateTabState();

  const sections = [
    {
      title: "Text Parallax",
      key: "scrollTranslate" as const,
      component: TextParallaxPreview,
      codeString: getTextParallaxImportCodeString(),
    },
  ];

  return (
    <>
      <p className="text-gray-500">
        Displays a parallax effect using GSAP, lenis and ScrollTrigger
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
        <TextParallaxManualDoc />
      </div>

      <NavigationButton
        previousTitle="Perspective Grid"
        nextTitle="Number Flow"
        previousLink="/docs/reactjs/components/perspective-grid"
        nextLink="/docs/reactjs/text/number-flow"
      />
    </>
  );
};

export default TextParallaxDoc;
