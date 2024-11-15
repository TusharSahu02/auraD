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
      className="flex items-center justify-center text-white text-6xl font-bold"
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
                y:
                  previousDigits[index] > digit
                    ? -100
                    : value < previousValue
                    ? -100
                    : 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y:
                  previousDigits[index] > digit
                    ? 100
                    : value < previousValue
                    ? 100
                    : -100,
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

export default NumberFlow;
