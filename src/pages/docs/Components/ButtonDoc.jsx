import { useState } from "react";
import Button from "../../../components/atoms/Button";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import {
  getButtonCliInstallationCommand,
  getButtonCodeString,
  getCliInstallationCommand,
  getCodeString,
  getUsageButton,
  getUsageImport,
} from "../../../constants/CodeString";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const buttonDocSections = [
  { id: "overview", title: "Overview" },
  { id: "primary", title: "Primary" },
  { id: "secondary", title: "Secondary" },
  { id: "destructive", title: "Destructive" },
  { id: "outline", title: "Outline" },
  { id: "ghost", title: "Ghost" },
];

const CodeBlock = ({
  id,
  show,
  setShow,
  copy,
  setCopy,
  variant,
  buttonText,
  codeString,
}) => {
  const isPreview = show[variant];

  return (
    <div id={id} className="mt-10">
      <h1 className="font-medium mb-5 text-xl capitalize">{variant}</h1>
      <div className="flex gap-x-6 border-b px-4">
        <div
          className={`cursor-pointer ${
            isPreview ? "border-b-2 border-black" : ""
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
            !isPreview ? "border-b-2 border-black" : ""
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
        <div className="w-full relative h-[400px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
          <div
            className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              toast.success("Copied to clipboard", {
                icon: "📋",
                position: "top-center",
              });
              setCopy({ ...copy, [variant]: true });
              setTimeout(() => {
                setCopy({ ...copy, [variant]: false });
              }, 3000);
            }}
          >
            {copy[variant] ? <Check /> : <Clipboard />}
          </div>
          <Button variant={variant}>{buttonText}</Button>
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
              setCopy({ ...copy, [variant]: true });
              setTimeout(() => {
                setCopy({ ...copy, [variant]: false });
              }, 3000);
            }}
          >
            {copy[variant] ? (
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

const CLIDocs = () => {
  const [copy, setCopy] = useState(false);
  const [copyImport, setCopyImport] = useState(false);
  const [copyButton, setCopyButton] = useState(false);
  const [copyCli, setCopyCli] = useState(false);
  const [copyButtonCli, setCopyButtonCli] = useState(false);

  const codeStringForCli = getCliInstallationCommand();
  const codeStringForButton = getButtonCliInstallationCommand();
  const importCodeString = getUsageImport();
  const buttonCodeString = getUsageButton();
  return (
    <>
      <div className="relative">
        <div
          className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
          onClick={() => {
            navigator.clipboard.writeText(codeStringForCli);
            toast.success("Copied to clipboard", {
              icon: "📋",
              position: "top-center",
            });
            setCopyButtonCli(true);
            setTimeout(() => {
              setCopyButtonCli(false);
            }, 3000);
          }}
        >
          {copyButtonCli ? (
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
          {codeStringForCli}
        </SyntaxHighlighter>
      </div>
      <div className="relative">
        <div
          className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
          onClick={() => {
            navigator.clipboard.writeText(codeStringForButton);
            toast.success("Copied to clipboard", {
              icon: "📋",
              position: "top-center",
            });
            setCopyCli(true);
            setTimeout(() => {
              setCopyCli(false);
            }, 3000);
          }}
        >
          {copyCli ? (
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
          {codeStringForButton}
        </SyntaxHighlighter>
      </div>
      <h1 className="font-medium mt-10 border-b pb-2 text-2xl">Usage</h1>
      <div className="relative">
        <div
          className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
          onClick={() => {
            navigator.clipboard.writeText(importCodeString);
            toast.success("Copied to clipboard", {
              icon: "📋",
              position: "top-center",
            });
            setCopyImport(true);
            setTimeout(() => {
              setCopyImport(false);
            }, 3000);
          }}
        >
          {copyImport ? (
            <Check className="text-white" />
          ) : (
            <Clipboard className="text-white" />
          )}
        </div>
        <SyntaxHighlighter
          language="tsx"
          wrapLongLines={true}
          style={atomOneDark}
          className="rounded-lg mt-5 w-full"
        >
          {importCodeString}
        </SyntaxHighlighter>
      </div>
      <div className="relative">
        <div
          className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
          onClick={() => {
            navigator.clipboard.writeText(buttonCodeString);
            toast.success("Copied to clipboard", {
              icon: "📋",
              position: "top-center",
            });
            setCopyButton(true);
            setTimeout(() => {
              setCopyButton(false);
            }, 3000);
          }}
        >
          {copyButton ? (
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
          {buttonCodeString}
        </SyntaxHighlighter>
      </div>
      <div className="mt-3">
        <p>
          Note : setup{" "}
          <kbd className="px-2 py-1 bg-gray-300/30 rounded-lg mx-1">
            tailwind
          </kbd>{" "}
          too else the styling will not work
        </p>
      </div>
    </>
  );
};
const ManualDocs = () => {
  const buttonCodeString = getButtonCodeString();
  const [copy, setCopy] = useState(false);

  return (
    <div className="mt-4">
      <div className="flex items-start justify-center gap-2 border-l-2 border-gray-500">
        <div className="w-[30px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Setup Tailwind CSS</h1>
          <p className="mt-3">
            visit the link{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              className="underline mr-1 underline-offset-2"
            >
              here
            </a>
            and follow the instructions to setup the tailwind css for your
            project
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center pt-5 gap-2 border-l-2 border-gray-500">
        <div className="w-[30px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Add Button.tsx File</h1>

          <p className="mt-3">src/components/Button.tsx</p>
          <div className="relative">
            <div
              className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(buttonCodeString);
                toast.success("Copied to clipboard", {
                  icon: "📋",
                  position: "top-center",
                });
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              {copy ? (
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
              {buttonCodeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

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

  const [cli, setCli] = useState(true);

  const variants = [
    { variant: "primary", buttonText: "Primary" },
    { variant: "secondary", buttonText: "Secondary" },
    { variant: "destructive", buttonText: "Destructive" },
    { variant: "outline", buttonText: "Outline" },
    { variant: "ghost", buttonText: "Ghost" },
  ];

  const codeString = getCodeString("primary");

  return (
    <>
      <div className="mt-1 pb-[20px]">
        <p className="text-gray-500">
          Displays a button or a component that looks like a button.
        </p>
        <div id="overview" className="mt-10">
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
              <Button>Button</Button>
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

        <h1 className="font-medium mt-10 border-b pb-2 text-2xl">
          Installation
        </h1>
        <div className="flex gap-x-6 border-b px-4 mt-6">
          <div
            className={`cursor-pointer ${cli ? "border-b-2 border-black" : ""}`}
            onClick={() => setCli(true)}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setCli(true);
              }
            }}
            tabIndex={0}
          >
            CLI
          </div>
          <div
            className={`cursor-pointer ${
              !cli ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setCli(false)}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setCli(false);
              }
            }}
            tabIndex={0}
          >
            Manual
          </div>
        </div>

        {/* CLI docs */}
        {cli ? <CLIDocs /> : <ManualDocs />}

        <h1 className="font-medium mt-10 border-b pb-2 text-2xl">Examples</h1>
        {variants.map(({ variant, buttonText }) => {
          const codeString = getCodeString(variant);
          return (
            <CodeBlock
              key={variant}
              id={variant}
              show={show}
              setShow={setShow}
              copy={copy}
              setCopy={setCopy}
              variant={variant}
              buttonText={buttonText}
              codeString={codeString}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <Button variant="outline">
          <span className="flex items-center gap-1">
            <FiChevronLeft />
            Previous
          </span>
        </Button>
        <Link to={"/docs/components/input"}>
          <Button variant="outline">
            <span className="flex items-center gap-1">
              Input
              <FiChevronRight />
            </span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ButtonDoc;
