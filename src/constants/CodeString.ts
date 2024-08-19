type Variant = "primary" | "secondary" | "destructive" | "outline" | "ghost";

export const getCodeString = (variant: Variant): string => {
  const variantStyles: { [key in Variant]: string } = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
    outline:
      "text-black border bg-transparent hover:bg-gray-200 hover:bg-opacity-60",
    ghost: "text-black bg-transparent hover:bg-gray-200 hover:bg-opacity-60",
  };

  return `
  import React from "react";

  const App = ({ children }) => {
    return (
      <button
        type="button"
        className="px-3 text-sm py-2 rounded transition duration-300 ${variantStyles[variant]}"
      >
        {children}
      </button>
    );
  };

  export default App;
  `;
};


