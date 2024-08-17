import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "ghost" | "outline" | "destructive" | "secondary";
};

const Button: React.FC<Props> = ({ children, onClick, variant }: Props) => {
  const classes = [
    "px-3",
    "text-sm",
    "py-2",
    "rounded",
    "focus:outline-none",
    "focus:shadow-outline",
    "transition",
    "duration-300",
  ];

  switch (variant) {
    case "ghost":
      classes.push(
        "text-black",
        "bg-transparent",
        "hover:bg-gray-200",
        "hover:bg-opacity-60"
      );
      break;
    case "outline":
      classes.push(
        "text-black",
        "border",
        "bg-transparent",
        "hover:bg-gray-200",
        "hover:bg-opacity-60"
      );
      break;
    case "destructive":
      classes.push("border", "bg-red-600", "hover:bg-red-600", "text-white");
      break;
    case "secondary":
      classes.push("bg-gray-100", "hover:bg-gray-100", "text-black");
      break;
    default:
      classes.push("bg-blue-500", "text-white", "hover:bg-blue-700");
  }

  return (
    <button type="button" onClick={onClick} className={classes.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
