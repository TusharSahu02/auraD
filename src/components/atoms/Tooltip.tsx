import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleHelp, CircleX } from "lucide-react";

const Tooltip = () => {
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
    <>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => setOpenModal(!openModal)}
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
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 z-10 left-0 bg-black/80 w-full h-full flex items-center justify-center"
              onClick={() => setOpenModal(!openModal)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-1/3 h-1/3 bg-[#09090b] rounded-xl border border-gray-300/10 p-4 absolute"
            >
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setOpenModal(!openModal)}
              >
                <CircleX className=" text-gray-500" />
              </div>
              {/* CONTENT */}
              <div className=" h-full">
                <h1 className=" text-center text-gray-300 ml-1">Report Bug</h1>
                <textarea
                  name=""
                  id=""
                  autoFocus
                  placeholder="Describe the bug"
                  className="w-full bg-transparent p-4 border border-gray-400/10 h-[80%] mt-4 resize-none rounded-lg"
                ></textarea>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tooltip;
