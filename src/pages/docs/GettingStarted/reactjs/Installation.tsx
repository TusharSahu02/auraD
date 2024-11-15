import StepperComponent from "@/components/reactjs/atoms/StepperComponent";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";

const Installation = () => {
  return (
    <div className=" mt-6">
      <StepperComponent title="Create a React App">
        <Step1 />
      </StepperComponent>
      <StepperComponent title="Configure Tailwind CSS">
        <Step2 />
      </StepperComponent>
      <StepperComponent title="That's it">
        <Step3 />
      </StepperComponent>

      <NavigationButton
        previousLink="/docs/reactjs/introduction"
        nextLink="/docs/reactjs/components/button"
        previousTitle="Introduction"
        nextTitle="Button"
      />
    </div>
  );
};

export default Installation;

/**
 * Step 1 of the installation process. This step is to create a new
 * React.js project.
 *
 * It renders a code block with a copy button.
 *
 * @returns {React.ReactElement} The step 1 component.
 */
const Step1 = (): React.ReactElement => {
  const [copy, setCopy] = useState(false);

  const step1CodeString = `npm create vite@latest`;

  const handleCopy = () => {
    navigator.clipboard.writeText(step1CodeString);
    toast.success("Copied to clipboard", {
      icon: "📋",
      position: "top-center",
    });
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div>
      <p className="my-1">Run this command to create a new React.js project</p>
      <div className="relative overflow-hidden mb-3">
        <div
          className="absolute top-2 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex z-20 items-center p-[6px] cursor-pointer justify-center rounded-md"
          onClick={handleCopy}
        >
          {copy ? (
            <Check className="text-white" />
          ) : (
            <Clipboard className="text-white" />
          )}
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={atomOneDark}
          className="rounded-md p-5 bg-red-500 mt-1 w-full text-sm md:text-md"
        >
          {step1CodeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

/**
 * A component that shows the instructions for Step 2 of the installation
 * guide. This step is about configuring tailwindCss.
 *
 * @returns A JSX element containing the instructions for Step 2 of the
 * installation guide.
 */
const Step2 = () => {
  return (
    <div>
      <p className="my-2 mb-3">
        {" "}
        visit{" "}
        <a
          href="https://tailwindcss.com/docs/guides/vite"
          className="underline underline-offset-2"
        >
          {" "}
          tailwind guide
        </a>{" "}
        and configure step by step
      </p>
    </div>
  );
};

/**
 * A component that shows the instructions for Step 3 of the installation
 * guide. This step is about adding components to the project.
 *
 * @returns A JSX element containing the instructions for Step 3 of the
 * installation guide.
 */
const Step3 = () => {
  return (
    <div>
      <p className="my-2">
        You can now start adding components to your project.
      </p>
      <p className="my-2">
        try adding{" "}
        <Link to="/docs/reactjs/components/bento">
          <strong className="underline underline-offset-2">Bento</strong>
        </Link>{" "}
        to your project
      </p>
    </div>
  );
};
