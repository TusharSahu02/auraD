import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import {
  getLoader1CodeString,
  getLoader2CodeString,
  getLoader3CodeString,
  getLoader4CodeString,
  getLoader5CodeString,
  getLoader6CodeString,
  getLoader7CodeString,
} from "../../../constants/CodeString";
import {
  Loader1,
  Loader2,
  Loader3,
  Loader4,
  Loader5,
  Loader6,
  Loader7,
} from "../../../components/atoms/Loaders";

export const inputDocSections = [
  { id: "l1", title: "Loader 1" },
  { id: "l2", title: "Loader 2" },
  { id: "l3", title: "Loader 3" },
  { id: "l4", title: "Loader 4" },
  { id: "l5", title: "Loader 5" },
  { id: "l6", title: "Loader 6" },
  { id: "l7", title: "Loader 7" },
];

const LoadersDoc = () => {
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    l1: true,
    l2: true,
    l3: true,
    l4: true,
    l5: true,
    l6: true,
    l7: true,
  });

  const [copy, setCopy] = useState<{ [key: string]: boolean }>({
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
    l7: false,
  });

  const loaderCodeMap: Record<string, () => string> = {
    l1: getLoader1CodeString,
    l2: getLoader2CodeString,
    l3: getLoader3CodeString,
    l4: getLoader4CodeString,
    l5: getLoader5CodeString,
    l6: getLoader6CodeString,
    l7: getLoader7CodeString,
  };

  const handleCopy = (loader: string) => {
    const codeString = loaderCodeMap[loader]();
    navigator.clipboard.writeText(codeString);
    toast.success("Copied to clipboard", {
      icon: "📋",
      position: "top-center",
    });
    setCopy({ ...copy, [loader]: true });
    setTimeout(() => {
      setCopy({ ...copy, [loader]: false });
    }, 3000);
  };

  const renderLoaderSection = (id: string, LoaderComponent: React.FC) => {
    const codeString = loaderCodeMap[id]();
    return (
      <div className="mt-10" id={id}>
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show[id] ? "border-b-2 border-black dark:border-white" : ""
            }`}
            onClick={() => setShow({ ...show, [id]: true })}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show[id] ? "border-b-2 border-black dark:border-white" : ""
            }`}
            onClick={() => setShow({ ...show, [id]: false })}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show[id] ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 dark:border-gray-800 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => handleCopy(id)}
            >
              {copy[id] ? <Check /> : <Clipboard />}
            </div>
            <LoaderComponent />
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => handleCopy(id)}
            >
              {copy[id] ? (
                <Check className="text-white" />
              ) : (
                <Clipboard className="text-white" />
              )}
            </div>
            <SyntaxHighlighter
              language="tsx"
              wrapLongLines={true}
              style={atomOneDark}
              className="rounded-lg p-5 mt-5 w-full"
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mt-1 pb-[20px]">
      <p className="text-gray-500">
        Displays a button or a component that looks like a button.
      </p>
      {renderLoaderSection("l1", Loader1)}
      {renderLoaderSection("l2", Loader2)}
      {renderLoaderSection("l3", Loader3)}
      {renderLoaderSection("l4", Loader4)}
      {renderLoaderSection("l5", Loader5)}
      {renderLoaderSection("l6", Loader6)}
      {renderLoaderSection("l7", Loader7)}
    </div>
  );
};

export default LoadersDoc;
