import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

const LoaderText = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50); // adjust the speed of the animation

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: count < 100 ? 1.1 : 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            values: [
              { scale: 1 },
              { scale: 1.1 },
              { scale: 1 },
              { scale: 1.1 },
              { scale: 1 },
            ],
          },
        }}
      >
        <h1 className="text-6xl font-black">{count}</h1>
      </motion.div>
      <div
        onClick={() => setCount(1)}
        className=" size-[30px] p-1 border-2 cursor-pointer flex items-center justify-center rounded-full"
      >
        <RotateCcw />
      </div>
    </div>
  );
};

export default LoaderText;
