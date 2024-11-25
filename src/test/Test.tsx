// import ZoomParallax from "@/components/reactjs/atoms/zoom-parallax/ZoomParallax";

import PerspectiveGrid from "@/components/reactjs/atoms/perspective-grid/PerspectiveGrid";
import SmoothScrolling from "@/utils/SmoothScrool";

const Test = () => {
  return (
    <SmoothScrolling>
      <PerspectiveGrid />
      <div className=" flex items-center justify-center">
        <h1 className=" text-center">Your Content Goes Here</h1>
      </div>
      <div className="h-dvh" />
    </SmoothScrolling>
  );
};

export default Test;
