import NumberFlow from "@/components/atoms/text/NumberFlow";
import { useEffect, useState } from "react";

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
