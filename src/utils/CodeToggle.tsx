import React from "react";

const CodeToggle = ({
  code,
  setCode,
  leftText,
  rightText,
}: {
  code: boolean;
  setCode: React.Dispatch<React.SetStateAction<boolean>>;
  leftText: string;
  rightText: string;
}) => {
  return (
    <div className="flex gap-x-6 border-b px-4">
      <div
        className={`cursor-pointer ${
          code ? "border-b-2 border-black dark:border-white" : ""
        }`}
        onClick={() => setCode(true)}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setCode(true);
          }
        }}
        tabIndex={0}
      >
        {leftText}
      </div>
      <div
        className={`cursor-pointer ${
          !code ? "border-b-2 border-black dark:border-white" : ""
        }`}
        onClick={() => setCode(false)}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setCode(false);
          }
        }}
        tabIndex={0}
      >
        {rightText}
      </div>
    </div>
  );
};

export default CodeToggle;
