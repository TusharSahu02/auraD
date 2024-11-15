import NumberFlow from "@/components/reactjs/atoms/text/NumberFlow";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

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
