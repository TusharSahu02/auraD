import { SectionCommon } from "@/common/SectionCommon";
import { ScrollTranslatePreview } from "@/components/reactjs/atoms/scroll-translate/ScrollTranslate";
import { getScrollTranslateCodeString } from "@/constants/reactjs/codeString.ScrollTranslate";
import { useScrollTranslateTabState } from "@/hooks/reactjs/useTabState";

import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import ScrollWindowManualDoc from "./ScrollWindowManualDoc";

const ScrollWindowDoc = () => {
  const { show: Show, toggleTab } = useScrollTranslateTabState();

  const sections = [
    {
      title: "Scroll Window",
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

      <ScrollWindowManualDoc />

      <NavigationButton
        previousTitle="Perspective Grid"
        nextTitle="Number Flow"
        previousLink="/docs/reactjs/components/perspective-grid"
        nextLink="/docs/reactjs/text/number-flow"
      />
    </>
  );
};

export default ScrollWindowDoc;
