import Button from "@/components/reactjs/atoms/button/Button";
import CopyCodeToggleIcons from "@/utils/CopyCodeToggleIcons";
import SyntaxHighlighterWrapper from "@/utils/SyntaxHighlighterWrapper";
import { toast } from "sonner";

type Variant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "animation";

interface ButtonProps {
  id: string;
  show: { [key in Variant]: boolean };
  setShow: React.Dispatch<React.SetStateAction<{ [key in Variant]: boolean }>>;
  copy: { [key in Variant]: boolean };
  setCopy: React.Dispatch<React.SetStateAction<{ [key in Variant]: boolean }>>;
  variant: Variant;
  buttonText: string;
  codeString: string;
}

const CodeBlock = ({
  id,
  show,
  setShow,
  copy,
  setCopy,
  variant,
  buttonText,
  codeString,
}: ButtonProps) => {
  const isPreview = show[variant];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast.success("Copied to clipboard", {
      icon: "📋",
      position: "top-center",
    });
    setCopy({ ...copy, [variant]: true });
    setTimeout(() => {
      setCopy({ ...copy, [variant]: false });
    }, 3000);
  };
  const copyButton = (
    <div
      className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
      onClick={handleCopy}
    >
      <CopyCodeToggleIcons copyCode={copy[variant]} />
    </div>
  );

  return (
    <div id={id} className="mt-4">
      <h1 className="font-medium mb-5 text-xl capitalize">{variant}</h1>
      <div className="flex gap-x-6 border-b px-4">
        <div
          className={`cursor-pointer ${
            isPreview ? "border-b-2 border-black dark:border-white" : ""
          }`}
          onClick={() => setShow({ ...show, [variant]: true })}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShow({ ...show, [variant]: true });
            }
          }}
          tabIndex={0}
        >
          Preview
        </div>
        <div
          className={`cursor-pointer ${
            !isPreview ? "border-b-2 border-black dark:border-white" : ""
          }`}
          onClick={() => setShow({ ...show, [variant]: false })}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShow({ ...show, [variant]: false });
            }
          }}
          tabIndex={0}
        >
          Code
        </div>
      </div>

      {isPreview ? (
        <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 dark:border-gray-800 flex items-center justify-center mt-5 rounded-lg">
          {copyButton}
          <Button variant={variant}>{buttonText}</Button>
        </div>
      ) : (
        <div className="relative">
          {copyButton}
          <SyntaxHighlighterWrapper className="text-sm md:text-md">
            {codeString}
          </SyntaxHighlighterWrapper>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
