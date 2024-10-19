import React from "react";

interface StepperProps {
  title: string;
  children?: React.ReactNode;
}

const StepperComponent: React.FC<StepperProps> = ({ title, children }) => {
  return (
    <div className="flex items-start justify-center gap-2 border-l border-gray-500">
      <div className="lg:w-[20px] border-l h-full">
        <div
          className={`w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] `}
        ></div>
      </div>
      <div className="w-full">
        <h1 className="text-lg font-semibold" >{title}</h1>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
};

export default StepperComponent;
