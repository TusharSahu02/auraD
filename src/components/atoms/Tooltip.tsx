import { CircleHelp } from "lucide-react";
import React, { useState } from "react";

const Tooltip = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className=" absolute size-[50px] rounded-full z-20 bottom-5 bg-zinc-800 right-5 flex items-center justify-center cursor-pointer"
    >
      <CircleHelp size={40} strokeWidth={1} color="white" />
      {visible && (
        <div className="absolute  mr-[8px] mb-[94px] z-10 bg-gray-800 text-white rounded p-2">
          Help
        </div>
      )}
    </div>
  );
};

export default Tooltip;
