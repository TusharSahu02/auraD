import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

const ResizeView = ({ children }: { children: React.ReactNode }) => {
  const [selectedScreenSize, setSelectedScreenSize] = useState("fullscreen");

  const handleScreenSizeClick = (size: string) => {
    setSelectedScreenSize(size);
  };
  return (
    <div className=" h-[700px]">
      <div className=" w-full flex items-center justify-end mb-2">
        <div className="flex items-center gap-2">
          <div
            onClick={() => handleScreenSizeClick("smartphone")}
            className="h-[22px] w-[22px] p-0 hover:bg-gray-800 transition-colors duration-200 ease-in-out flex items-center justify-center border rounded-md cursor-pointer"
          >
            <Smartphone className="h-3.5 w-3.5 text-gray-400" />
          </div>
          <div
            onClick={() => handleScreenSizeClick("tablet")}
            className="h-[22px] w-[22px] p-0 hover:bg-gray-800 transition-colors duration-200 ease-in-out flex items-center justify-center border rounded-md cursor-pointer"
          >
            <Tablet className="h-3.5 w-3.5 text-gray-400" />
          </div>
          <div
            onClick={() => handleScreenSizeClick("monitor")}
            className="h-[22px] w-[22px] p-0 hover:bg-gray-800 transition-colors duration-200 ease-in-out flex items-center justify-center border rounded-md cursor-pointer"
          >
            <Monitor className="h-3.5 w-3.5 text-gray-400" />
          </div>
          {/* <div
          onClick={() => handleScreenSizeClick("fullscreen")}
          className="h-[22px] w-[22px] p-0 hover:bg-gray-800 transition-colors duration-200 ease-in-out flex items-center justify-center border rounded-md cursor-pointer"
        >
          <Fullscreen className="h-3.5 w-3.5 text-gray-400" />
        </div> */}
        </div>
      </div>
      <div
        className={`w-full border h-full rounded-lg p-2 overflow-y-hidden transition-all duration-300 ease-in-out ${
          selectedScreenSize === "smartphone"
            ? "max-w-sm"
            : selectedScreenSize === "tablet"
            ? "max-w-3xl"
            : selectedScreenSize === "monitor"
            ? "max-w-full"
            : "max-w-full"
        }`}
      >
        <div className="h-full w-full border">{children}</div>
      </div>
    </div>
  );
};

export default ResizeView;
