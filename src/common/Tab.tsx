import type { TabProps } from "@/Types/Reactjs/input.types";

export const Tab: React.FC<TabProps> = ({ active, onClick, children }) => (
  <div
    className={`cursor-pointer ${
      active ? "border-b-2 border-black dark:border-white" : ""
    }`}
    onClick={onClick}
    onKeyUp={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        onClick();
      }
    }}
    tabIndex={0}
    role="tab"
    aria-selected={active}
  >
    {children}
  </div>
);
