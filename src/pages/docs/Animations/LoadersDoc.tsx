import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { getCodeString } from "../../../constants/CodeString";
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
  const [show, setShow] = useState({
    l1: true,
    l2: true,
    l3: true,
    l4: true,
    l5: true,
    l6: true,
    l7: true,
  });

  const [copy, setCopy] = useState({
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
    l7: false,
  });

  const codeString = getCodeString("primary");

  return (
    <div className="mt-1 pb-[20px]">
      <p className="text-gray-500">
        Displays a button or a component that looks like a button.
      </p>
      {/* Loader 1 */}
      <div className="mt-10" id="l1">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.l1 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l1: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l1: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.l1 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l1: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l1: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.l1 ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, l1: true });
                setTimeout(() => {
                  setCopy({ ...copy, l1: false });
                }, 3000);
              }}
            >
              {copy.l1 ? <Check /> : <Clipboard />}
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
                setCopy({ ...copy, l1: true });
                setTimeout(() => {
                  setCopy({ ...copy, l1: false });
                }, 3000);
              }}
            >
              {copy.l1 ? (
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

      {/* Loader 2 */}
      <div className="mt-10" id="l2">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.l2 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l2: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l2: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.l2 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l2: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l2: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.l2 ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, l2: true });
                setTimeout(() => {
                  setCopy({ ...copy, l2: false });
                }, 3000);
              }}
            >
              {copy.l2 ? <Check /> : <Clipboard />}
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
                setCopy({ ...copy, l2: true });
                setTimeout(() => {
                  setCopy({ ...copy, l2: false });
                }, 3000);
              }}
            >
              {copy.l2 ? (
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

      {/* Loader 3 */}
      <div className="mt-10" id="l3">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.l3 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l3: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l3: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.l3 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l3: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l3: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.l3 ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, l3: true });
                setTimeout(() => {
                  setCopy({ ...copy, l3: false });
                }, 3000);
              }}
            >
              {copy.l3 ? <Check /> : <Clipboard />}
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
                setCopy({ ...copy, l3: true });
                setTimeout(() => {
                  setCopy({ ...copy, l3: false });
                }, 3000);
              }}
            >
              {copy.l3 ? (
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

      {/* Loader 4 */}
      <div className="mt-10" id="l4">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.l4 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l4: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l4: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.l4 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l4: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l4: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.l4 ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, l4: true });
                setTimeout(() => {
                  setCopy({ ...copy, l4: false });
                }, 3000);
              }}
            >
              {copy.l4 ? <Check /> : <Clipboard />}
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
                setCopy({ ...copy, l4: true });
                setTimeout(() => {
                  setCopy({ ...copy, l4: false });
                }, 3000);
              }}
            >
              {copy.l4 ? (
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

      {/* Loader 5 */}
      <div className="mt-10" id="l5">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.l5 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l5: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l5: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.l5 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l5: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l5: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.l5 ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, l5: true });
                setTimeout(() => {
                  setCopy({ ...copy, l5: false });
                }, 3000);
              }}
            >
              {copy.l5 ? <Check /> : <Clipboard />}
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
                setCopy({ ...copy, l5: true });
                setTimeout(() => {
                  setCopy({ ...copy, l5: false });
                }, 3000);
              }}
            >
              {copy.l5 ? (
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

      {/* Loader 6 */}
      <div className="mt-10" id="l6">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.l6 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l6: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l6: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.l6 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l6: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l6: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.l6 ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, l6: true });
                setTimeout(() => {
                  setCopy({ ...copy, l6: false });
                }, 3000);
              }}
            >
              {copy.l6 ? <Check /> : <Clipboard />}
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
                setCopy({ ...copy, l6: true });
                setTimeout(() => {
                  setCopy({ ...copy, l6: false });
                }, 3000);
              }}
            >
              {copy.l6 ? (
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

      {/* Loader 7 */}
      <div className="mt-10" id="l7">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer ${
              show.l7 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l7: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l7: true });
              }
            }}
            tabIndex={0}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.l7 ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setShow({ ...show, l7: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, l7: false });
              }
            }}
            tabIndex={0}
          >
            Code
          </div>
        </div>
        {show.l7 ? (
          <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy({ ...copy, l7: true });
                setTimeout(() => {
                  setCopy({ ...copy, l7: false });
                }, 3000);
              }}
            >
              {copy.l7 ? <Check /> : <Clipboard />}
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
                setCopy({ ...copy, l7: true });
                setTimeout(() => {
                  setCopy({ ...copy, l7: false });
                }, 3000);
              }}
            >
              {copy.l7 ? (
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
