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
                src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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

  type Variant = "primary" | "secondary" | "destructive" | "outline" | "ghost";

  type Props = {
    children: React.ReactNode;
    variant: Variant;
    onClick?: () => void;
    className?: string;
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
        classes.push("bg-red-600", "hover:bg-red-700", "text-white");
        break;
      case "secondary":
        classes.push("bg-gray-100", "hover:bg-gray-200", "text-black");
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

  `
}