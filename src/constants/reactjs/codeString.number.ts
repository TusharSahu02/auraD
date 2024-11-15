export const getIncrementDecrementNF = () => {
  return `
import { useEffect, useState } from "react";
import NumberFlow from "@/components/NumberFlow";

const IncrementDecrementNF = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);
  return (
    <div className="flex items-center gap-2">
      <div
        onClick={() => setCount(count - 1)}
        className=" size-[30px] border-2 bg-transparent rounded-full flex items-center justify-center cursor-pointer"
      >
        -
      </div>
      <NumberFlow value={count} />
      <div
        onClick={() => setCount(count + 1)}
        className=" size-[30px] border-2 bg-transparent rounded-full flex items-center justify-center cursor-pointer"
      >
        +
      </div>
    </div>
  );
};

export default IncrementDecrementNF;

`;
};

export const getIncrementLoaderNF = () => {
  return `
import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import NumberFlow from "@/components/NumberFlow";

const IncrementLoaderNF = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (count < 100) {
      intervalId = setInterval(() => {
        setCount(count + 1);
      }, 500);
    }
    return () => clearInterval(intervalId as NodeJS.Timeout);
  }, [count]);

  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <NumberFlow value={count} />
      <button
        className="flex items-center justify-center"
        onClick={() => setCount(0)}
      >
        <RotateCcw />
      </button>
    </div>
  );
};

export default IncrementLoaderNF;
`;
};


export const getNumberFlowCodeString = () => {
  return`
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
`
}