import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NumberFlow = ({ value = 0, duration = 0.5 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);

  React.useEffect(() => {
    setPreviousValue(displayValue);
    setDisplayValue(value);
  }, [displayValue, value]);

  const formatNumber = (num = 0) => {
    return Math.round(num).toString();
  };

  const digits = formatNumber(displayValue).split("");
  const previousDigits = formatNumber(previousValue).split("");

  return (
    <motion.div
      className="flex items-center justify-center text-black text-6xl font-bold"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {digits.map((digit, index) => (
        <div key={index} className="relative w-12 h-20 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={digit}
              initial={{
                y: previousDigits[index] > digit ? -100 : 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: previousDigits[index] > digit ? 100 : -100,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                duration: duration,
                opacity: { duration: duration / 2 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {digit}
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

const Test = () => {
  const [count, setCount] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  const generateRandomNumber = () => {
    const length = Math.floor(Math.random() * 3) + 3;
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleShuffle = () => {
    if (isShuffling) return;

    setIsShuffling(true);

    let steps = 0;
    const totalSteps = 15; // Increased steps for smoother transition
    const interval = setInterval(() => {
      setCount(generateRandomNumber());
      steps++;

      if (steps >= totalSteps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsShuffling(false);
        }, 400); // Slightly reduced end delay
      }
    }, 60); // Slightly increased interval for smoother animation
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-100">
      <motion.div
        className="p-8 rounded-lg"
        animate={{
          scale: isShuffling ? 1.02 : 1, // Reduced scale effect
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <NumberFlow value={count} />
      </motion.div>
      <motion.button
        className="mt-5 text-black rounded-xl cursor-pointer px-6 py-3 shadow-lg font-medium
                   bg-white hover:bg-gray-50 transition-colors"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleShuffle}
        disabled={isShuffling}
      >
        {isShuffling ? "Shuffling..." : "Shuffle"}
      </motion.button>
    </div>
  );
};

export default Test;
