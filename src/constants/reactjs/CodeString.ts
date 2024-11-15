type Variant = "primary" | "secondary" | "destructive" | "outline" | "ghost";

export const getCodeString = (variant: Variant): string => {
  const variantStyles: { [key in Variant]: string } = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
    outline:
      "text-black border bg-transparent hover:bg-gray-200 hover:bg-opacity-60",
    ghost:
      "text-black dark:text-white bg-transparent hover:bg-gray-200 hover:bg-opacity-60",
  };

  return `
  import React from "react";

  const App = ({ children }) => {
    return (
      <button
        type="button"
        className="px-3 text-sm py-2 rounded transition duration-300 ${variantStyles[variant]}"
      >
        ${variant}
      </button>
    );
  };

  export default App;
  `;
};

export const getAnimationButtonCodeString = (): string => {
  return `  
  import React from "react";

  const App = () => {
    return (
      <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full group">
          <span className="absolute inset-x-0 w-1/2 mx-auto transition-opacity duration-300 -top-px bg-gradient-to-r opacity-0 group-hover:opacity-100 from-transparent via-blue-500 -transparent h-px" />
            <span>Hover me</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    );
  };

  export default App;
  `;
};

// TODO : make the code string for bento
export const getBentoCodeString = (): string => {
  return `
  import { motion } from "framer-motion";

  const Bento = () => {
    return (
      <motion.div
        className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full mt-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
          variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 + (index * 0.2) } }
            }}
          >
            <div className="border border-white/[0.1] bg-[#1e1e1e3e] overflow-hidden h-[200px] w-full rounded-lg">
              <img
                src="https://images.unsplash.com"
                alt=""
                className="w-full h-full object-cover rounded-lg group-hover:scale-[102%] transition-all duration-300"
              />
            </div>
            <div className="px-1 group-hover:pl-3 transition-all duration-300">
              <h1 className="">Testing</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                animi in sunt illum quae deleniti omnis voluptatibus dolorum
                autem eligendi.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  export default Bento
  `;
};

export const getCliInstallationCommand = () => {
  return `npm i react-aurad`;
};
export const getButtonCliInstallationCommand = () => {
  return `npx aurad add button`;
};

export const getUsageImport = () => {
  return `import Button from "@/components/Button";`;
};

export const getUsageButton = () => {
  return `<Button variant="outline">Click Me</Button>`;
};

export const getButtonCodeString = () => {
  return `
import React from "react";

type Variant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "animation";
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
        "text-black dark:text-white",
        "bg-transparent",
        "hover:bg-gray-200 dark:hover:bg-gray-900",
        "hover:bg-opacity-60"
      );
      break;
    case "outline":
      classes.push(
        "text-black dark:text-white",
        "border",
        "bg-transparent",
        "hover:bg-gray-200 dark:hover:bg-gray-900",
        "hover:bg-opacity-60"
      );
      break;
    case "destructive":
      classes.push("bg-red-600", "hover:bg-red-700", "text-white");
      break;
    case "secondary":
      classes.push("bg-gray-100", "hover:bg-gray-200", "text-black");
      break;
    case "animation":
      classes.push(
        "relative",
        "border",
        "dark:border-white/[0.2] border-black/10",
        "dark:text-white text-black/80",
        "px-4",
        "py-2",
        "rounded-full",
        "group",
        "bg-transparent"
      );
      break;
    default:
      classes.push("bg-blue-500", "text-white", "hover:bg-blue-700");
  }

  // Render icon
  const iconElement = icon && (
    <span
      className={
        iconSize === "small"
          ? "w-4 h-4 flex items-center justify-center"
          : iconSize === "medium"
          ? "w-6 h-6 flex items-center justify-center"
          : "w-8 h-8 flex items-center justify-center"
      }
    >
      {icon}
    </span>
  );

  // Render button content
  const buttonContent = (
    <span className="flex items-center justify-center">
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </span>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes.join(" ") + (className ? " " + className : "")}
    >
      {variant === "animation" ? (
        <>
          <span className="absolute inset-x-0 w-1/2 mx-auto transition-opacity duration-300 -top-px bg-gradient-to-r opacity-0 group-hover:opacity-100 from-transparent dark:via-blue-500 via-green-500 to-transparent h-px" />
          <span>{children}</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent dark:via-blue-500 via-green-400 to-transparent h-px" />
        </>
      ) : loading ? (
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

  `;
};

// Modal Code String

export const getModalCodeString = () => {
  return `
  import { motion, AnimatePresence } from "framer-motion";
  import { CircleX } from "lucide-react";

  interface ModalProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
  }
  const Modal = ({ openModal, setOpenModal, children }: ModalProps) => {
    return (
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 z-10 left-0 bg-black/80 w-full h-full flex items-center justify-center"
              onClick={() => setOpenModal(!openModal)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-1/3 h-1/3 bg-[#09090b] rounded-xl border border-gray-300/10 p-4 absolute"
            >
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setOpenModal(!openModal)}
              >
                <CircleX className=" text-gray-500" />
              </div>
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  export default Modal;

  `;
};
