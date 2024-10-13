import { useState } from "react";
import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";

const Tooltip = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="absolute size-[50px] hidden rounded-full z-20 bottom-5 bg-zinc-800 right-5 lg:flex items-center justify-center cursor-pointer"
    >
      <CircleHelp size={40} strokeWidth={1} color="white" />
      {visible && (
        <motion.div
          className="absolute mr-[28px] w-max mb-[94px] z-10 bg-gray-800 text-white rounded p-2"
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
        >
          report bug
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
