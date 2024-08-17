import { useState } from "react";
import Button from "../../../components/atoms/Button";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, ChevronLeft, ChevronRight, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
const ButtonDoc = () => {
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

  const codeString = `
  import  React from "react";

  const App = ({children}) => {
    return (
      <button type="button"  className="px-3 text-sm py-2 rounded transition duration-300 bg-blue-500 text-white hover:bg-blue-700">      
      {children}
      </button>
    );
  };

  export default App;

  `;

  return (
    <div className="mt-1 pb-[20px]">
      <p className=" text-gray-500">
        Displays a button or a component that looks like a button.
      </p>
      <div className="mt-10">
        <div className="flex gap-x-6 border-b px-4">
          <div
            className={`cursor-pointer  ${
              show.code ? "border-b-2 border-black" : ""
            } `}
            onClick={() => setShow({ ...show, code: true })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ${
              !show.code ? "border-b-2 border-black" : ""
            } `}
            onClick={() => setShow({ ...show, code: false })}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShow({ ...show, code: true });
              }
            }}
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
                toast.success("Copied to clipboard");
                setCopy({ ...copy, code: true });
                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? <Check /> : <Clipboard />}
            </div>
            <Button>Button</Button>
          </div>
        ) : (
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Copied to clipboard");
                setCopy({ ...copy, code: true });

                setTimeout(() => {
                  setCopy({ ...copy, code: false });
                }, 3000);
              }}
            >
              {copy.code ? (
                <Check className=" text-white" />
              ) : (
                <Clipboard className=" text-white" />
              )}
            </div>
            <SyntaxHighlighter
              language="tsx"
              wrapLongLines={true}
              style={atomOneDark}
              className=" rounded-lg p-5 mt-5 w-full"
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
      <h1 className=" font-medium mt-10 border-b pb-2 text-2xl">Examples</h1>
      <div className="mt-10">
        <div className="mt-10">
          {/* Primary */}
          <h1 className=" font-medium mb-5 text-xl">Primary</h1>
          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer  ${
                show.primary ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, primary: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, primary: true });
                }
              }}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.primary ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, primary: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, primary: true });
                }
              }}
            >
              Code
            </div>
          </div>
          {show.primary ? (
            <div className="w-full relative h-[400px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, primary: true });
                  setTimeout(() => {
                    setCopy({ ...copy, primary: false });
                  }, 3000);
                }}
              >
                {copy.primary ? <Check /> : <Clipboard />}
              </div>
              <Button>Primary</Button>
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, primary: true });

                  setTimeout(() => {
                    setCopy({ ...copy, primary: false });
                  }, 3000);
                }}
              >
                {copy.primary ? (
                  <Check className=" text-white" />
                ) : (
                  <Clipboard className=" text-white" />
                )}
              </div>
              <SyntaxHighlighter
                language="tsx"
                wrapLongLines={true}
                style={atomOneDark}
                className=" rounded-lg p-5 mt-5 w-full"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
        <div className="mt-10">
          {/* Secondary */}
          <h1 className=" font-medium mb-5 text-xl">Secondary</h1>
          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer  ${
                show.secondary ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, secondary: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, secondary: true });
                }
              }}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.secondary ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, secondary: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, secondary: true });
                }
              }}
            >
              Code
            </div>
          </div>
          {show.secondary ? (
            <div className="w-full relative h-[400px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, secondary: true });
                  setTimeout(() => {
                    setCopy({ ...copy, secondary: false });
                  }, 3000);
                }}
              >
                {copy.secondary ? <Check /> : <Clipboard />}
              </div>
              <Button variant="secondary">Secondary</Button>
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, secondary: true });

                  setTimeout(() => {
                    setCopy({ ...copy, secondary: false });
                  }, 3000);
                }}
              >
                {copy.secondary ? (
                  <Check className=" text-white" />
                ) : (
                  <Clipboard className=" text-white" />
                )}
              </div>
              <SyntaxHighlighter
                language="tsx"
                wrapLongLines={true}
                style={atomOneDark}
                className=" rounded-lg p-5 mt-5 w-full"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
        <div className="mt-10">
          {/* Destructive */}
          <h1 className=" font-medium mb-5 text-xl">Destructive</h1>
          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer  ${
                show.destructive ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, destructive: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, destructive: true });
                }
              }}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.destructive ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, destructive: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, destructive: true });
                }
              }}
            >
              Code
            </div>
          </div>
          {show.destructive ? (
            <div className="w-full relative h-[400px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, destructive: true });
                  setTimeout(() => {
                    setCopy({ ...copy, destructive: false });
                  }, 3000);
                }}
              >
                {copy.destructive ? <Check /> : <Clipboard />}
              </div>
              <Button variant="destructive">Destructive</Button>
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, destructive: true });

                  setTimeout(() => {
                    setCopy({ ...copy, destructive: false });
                  }, 3000);
                }}
              >
                {copy.destructive ? (
                  <Check className=" text-white" />
                ) : (
                  <Clipboard className=" text-white" />
                )}
              </div>
              <SyntaxHighlighter
                language="tsx"
                wrapLongLines={true}
                style={atomOneDark}
                className=" rounded-lg p-5 mt-5 w-full"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
        <div className="mt-10">
          {/* Outline */}
          <h1 className=" font-medium mb-5 text-xl">Outline</h1>
          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer  ${
                show.outline ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, outline: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, outline: true });
                }
              }}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.outline ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, outline: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, outline: true });
                }
              }}
            >
              Code
            </div>
          </div>
          {show.outline ? (
            <div className="w-full relative h-[400px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, outline: true });
                  setTimeout(() => {
                    setCopy({ ...copy, outline: false });
                  }, 3000);
                }}
              >
                {copy.outline ? <Check /> : <Clipboard />}
              </div>
              <Button variant="outline">Outline</Button>
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard");
                  setCopy({ ...copy, outline: true });

                  setTimeout(() => {
                    setCopy({ ...copy, outline: false });
                  }, 3000);
                }}
              >
                {copy.outline ? (
                  <Check className=" text-white" />
                ) : (
                  <Clipboard className=" text-white" />
                )}
              </div>
              <SyntaxHighlighter
                language="tsx"
                wrapLongLines={true}
                style={atomOneDark}
                className=" rounded-lg p-5 mt-5 w-full"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
        <div className="mt-10">
          {/* Ghost */}
          <h1 className=" font-medium mb-5 text-xl">Ghost</h1>
          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer  ${
                show.ghost ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, ghost: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, ghost: true });
                }
              }}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.ghost ? "border-b-2 border-black" : ""
              } `}
              onClick={() => setShow({ ...show, ghost: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, ghost: true });
                }
              }}
            >
              Code
            </div>
          </div>
          {show.ghost ? (
            <div className="w-full relative h-[400px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard", {
                    icon: "📋",
                    position: "bottom-center",
                  });
                  setCopy({ ...copy, ghost: true });
                  setTimeout(() => {
                    setCopy({ ...copy, ghost: false });
                  }, 3000);
                }}
              >
                {copy.ghost ? <Check /> : <Clipboard />}
              </div>
              <Button variant="ghost">Ghost</Button>
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard", {
                    icon: "📋",
                    position: "bottom-center",
                  });
                  setCopy({ ...copy, ghost: true });

                  setTimeout(() => {
                    setCopy({ ...copy, ghost: false });
                  }, 3000);
                }}
              >
                {copy.ghost ? (
                  <Check className=" text-white" />
                ) : (
                  <Clipboard className=" text-white" />
                )}
              </div>
              <SyntaxHighlighter
                language="tsx"
                wrapLongLines={true}
                style={atomOneDark}
                className=" rounded-lg p-5 mt-5 w-full"
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-10">
        <Button variant="outline">
          <span className="flex items-center gap-x-1">
            <ChevronLeft className="w-4" /> Test
          </span>
        </Button>
        <Link to={"/docs/components/input"}>
          <Button variant="outline">
            <span className="flex items-center gap-x-1">
              Input <ChevronRight className="w-4" />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonDoc;
