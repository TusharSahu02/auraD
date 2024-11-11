import { useState } from "react";
import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import Modal from "./Modal";

interface ToolTipProps {
  children: React.ReactNode;
}

const Tooltip = ({ children }: ToolTipProps) => {
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
        className="absolute  size-[50px] hidden rounded-full z-20 lg:bottom-5 -bottom-10 bg-zinc-800 right-5 lg:flex items-center justify-center cursor-pointer"
      >
        <CircleHelp size={40} strokeWidth={1} color="white" />
        {visible && (
          <motion.div
            className="absolute lg:mr-[28px] mr-[50px] w-max mb-[94px] z-10 bg-gray-800 text-white rounded p-2"
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
          >
            report bug
          </motion.div>
        )}
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {children}
      </Modal>
    </>
  );
};

export default Tooltip;
