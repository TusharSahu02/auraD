import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { getCodeString } from "../../../constants/CodeString";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  Loader1,
  Loader2,
  Loader3,
  Loader4,
  Loader5,
  Loader6,
  Loader7,
} from "../../../components/atoms/Loaders";
import Button from "../../../components/atoms/Button";

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
  const [show, setShow] = useState({
    code: true,
    primary: true,
    secondary: true,
    destructive: true,
    outline: true,
    ghost: true,
  });

  const [copy, setCopy] = useState({
    code: false,
    primary: false,
    secondary: false,
    destructive: false,
    outline: false,
    ghost: false,
  });

  const codeString = getCodeString("primary");

  return (
    <div className="mt-1 pb-[20px]">
      <p className="text-gray-500">
        Displays a button or a component that looks like a button.
      </p>
      <div className="mt-10" id="l1">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.code ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <Loader1 />
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
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
      <div className="mt-10" id="l2">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.code ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <>
              <Loader2 />
            </>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
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
      <div className="mt-10" id="l3">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.code ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <>
              <Loader3 />
            </>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
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
      <div className="mt-10" id="l4">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.code ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <>
              <Loader4 />
            </>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
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
      <div className="mt-10" id="l5">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.code ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <>
              <Loader5 />
            </>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
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
      <div className="mt-10" id="l6">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.code ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <>
              <Loader6 />
            </>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
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
      <div className="mt-10" id="l7">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.code ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <>
              <Loader7 />
            </>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
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
    </div>
  );
};

export default LoadersDoc;
