import React from "react";

type Variant = "primary" | "secondary" | "destructive" | "outline" | "ghost";
type ButtonType = "button" | "submit" | "reset";
type Size = "small" | "medium" | "large";
type IconPosition = "left" | "right";
type IconSize = "small" | "medium" | "large";

type Props = {
  children: React.ReactNode;
  variant: Variant;
  onClick?: () => void;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  iconSize?: IconSize;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant,
  type,
  className,
  size = "medium",
  icon,
  iconPosition = "left",
  iconSize = "medium",
  loading = false,
  disabled = false,
}: Props) => {
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

  // size classes
  switch (size) {
    case "small":
      classes.push("text-xs", "py-1");
      break;
    case "medium":
      classes.push("text-sm", "py-2");
      break;
    case "large":
      classes.push("text-lg", "py-3");
      break;
    default:
      break;
  }

  // Add disabled classes
  if (disabled) {
    classes.push("opacity-50", "cursor-not-allowed");
  }

  // Add loading classes
  if (loading) {
    classes.push("cursor-wait");
  }

  // Variant classes
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
      classes.push("bg-red-600", "hover:bg-red-700", "text-white");
      break;
    case "secondary":
      classes.push("bg-gray-100", "hover:bg-gray-200", "text-black");
      break;
    default:
      classes.push("bg-blue-500", "text-white", "hover:bg-blue-700");
  }

  // Render icon
  const iconElement = icon && (
    <span
      className={`${
        iconSize === "small"
          ? "w-4 h-4 flex items-center justify-center"
          : iconSize === "medium"
          ? "w-6 h-6 flex items-center justify-center"
          : "w-8 h-8 flex items-center justify-center "
      }`}
    >
      {icon}
    </span>
  );

  // Render button content
  const buttonContent = (
    <span className="flex items-center justify-center">
      {iconPosition === "left" && iconElement}
      <span className={`${iconPosition === "left" ? "ml-2" : "mr-2"}`}>
        {children}
      </span>
      {iconPosition === "right" && iconElement}
    </span>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes.join(" ")} ${className}`}
    >
      {loading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12c0-3.309 2.69-6 6-6v2z"
            />
          </svg>
        </span>
      ) : (
        buttonContent
      )}
    </button>
  );
};

export default Button;
