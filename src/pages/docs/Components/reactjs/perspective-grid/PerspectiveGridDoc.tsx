import { SectionCommon } from "@/common/SectionCommon";
import { usePerspectiveGridTabState } from "@/hooks/reactjs/useTabState";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import { PerspectiveGridPreview } from "@/components/reactjs/atoms/perspective-grid/PerspectiveGrid";
import PerspectiveGridManualDoc from "./PerspectiveGridManualDoc";
import { getPerspectiveGridCodeString } from "@/constants/reactjs/codeString.PerspectiveGrid";

const PerspectiveGridDoc = () => {
  const { show: perspectiveGridShow, toggleTab } = usePerspectiveGridTabState();

  const sections = [
    {
      title: "Perspective Grid",
      key: "perspectiveGrid" as const,
      component: PerspectiveGridPreview,
      codeString: getPerspectiveGridCodeString(),
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
            show={perspectiveGridShow[key]}
            onToggle={() => toggleTab(key)}
            codeString={codeString}
            Component={component}
          />
        ))}
      </div>
      <div className="mt-5">
        <PerspectiveGridManualDoc />
      </div>
      <NavigationButton
        previousTitle="Zoom Parallax"
        nextTitle="Scroll Translate"
        previousLink="/docs/reactjs/components/zoom-parallax"
        nextLink="/docs/reactjs/components/scroll-translate"
      />
    </>
  );
};

export default PerspectiveGridDoc;
