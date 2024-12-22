import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import {
  Loader1,
  Loader2,
  Loader3,
  Loader4,
  Loader5,
  Loader6,
  Loader7,
} from "../../../components/reactjs/atoms/Loaders";
import {
  getLoader1CodeString,
  getLoader2CodeString,
  getLoader3CodeString,
  getLoader4CodeString,
  getLoader5CodeString,
  getLoader6CodeString,
  getLoader7CodeString,
} from "@/constants/reactjs/codeString.loaders";

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
            aria-selected={show[id]}
            role="tab"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShow({ ...show, [id]: true });
              }
            }}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show[id] ? "border-b-2 border-black dark:border-white" : ""
            }`}
            onClick={() => setShow({ ...show, [id]: false })}
            tabIndex={0}
            aria-selected={!show[id]}
            role="tab"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShow({ ...show, [id]: false });
              }
            }}
          >
            Code
          </div>
        </div>
        {show[id] ? (
          <div className="relative mt-5 flex h-[300px] w-full items-center justify-center rounded-lg border border-gray-300 dark:border-gray-800 lg:h-[400px]">
            <div
              className="absolute right-3 top-3 flex size-7 cursor-pointer items-center justify-center rounded-md border p-[6px] transition-all duration-300 hover:bg-gray-100"
              onClick={() => handleCopy(id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCopy(id);
                }
              }}
            >
              {copy[id] ? <Check /> : <Clipboard />}
            </div>
            <LoaderComponent />
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute right-3 top-3 flex size-7 cursor-pointer items-center justify-center rounded-md p-[6px] transition-all duration-300 hover:bg-gray-600"
              onClick={() => handleCopy(id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCopy(id);
                }
              }}
            >
              {copy[id] ? (
                <Check className="text-white" />
              ) : (
                <Clipboard className="text-white" />
              )}
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={atomOneDark}
              className="customScrollBarHorizonalal mt-5 w-full rounded-lg p-5"
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
        Displays bunch of loaders in different styles
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
