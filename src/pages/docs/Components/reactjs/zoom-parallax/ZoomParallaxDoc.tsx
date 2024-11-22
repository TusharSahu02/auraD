import { SectionCommon } from "@/common/SectionCommon";
import { ZoomParallaxPreviewModal } from "@/components/reactjs/atoms/zoom-parallax/ZoomParallax";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import { useZoomParallaxTabState } from "@/hooks/reactjs/useTabState";
import ZoomParallaxManualDoc from "./ZoomParallaxManualDoc";
import { getZoomParallaxCodeString } from "@/constants/reactjs/codeString.zoomParallax";

const ZoomParallaxDoc = () => {
  const { show: animatedNumberShow, toggleTab } = useZoomParallaxTabState();

  const sections = [
    {
      title: "Zoom Parallax",
      key: "zoomParallax" as const,
      component: ZoomParallaxPreviewModal,
      codeString: getZoomParallaxCodeString(),
    },
  ];
  return (
    <>
      <p className="text-gray-500">
        Displays a animated robbin hood style number flow
      </p>
      <div className=" relative">
        {sections.map(({ title, key, component, codeString }) => (
          <SectionCommon
            key={key}
            id={key}
            title={title}
            show={animatedNumberShow[key]}
            onToggle={() => toggleTab(key)}
            codeString={codeString}
            Component={component}
          />
        ))}
      </div>
      <ZoomParallaxManualDoc />
      <NavigationButton
        previousTitle="Ripple"
        nextTitle="Number Flow"
        previousLink="/docs/reactjs/components/ripple"
        nextLink="/docs/reactjs/text/number-flow"
      />
    </>
  );
};

export default ZoomParallaxDoc;
