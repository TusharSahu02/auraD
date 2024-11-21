import ZoomParallax from "@/components/reactjs/atoms/zoom-parallax/ZoomParallax";
import { useLocation } from "react-router-dom";

interface PathComponents {
  [path: string]: () => JSX.Element;
}

const pathComponents: PathComponents = {
  "zoom-parallax": () => <ZoomParallax />,
};

const Preview = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const Component = pathComponents[path];

  return (
    <div className="bg-[#090716]">
      <Component />
    </div>
  );
};

export default Preview;
