import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
const Modal = ({ openModal, setOpenModal, children }: ModalProps) => {
  return (
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
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
