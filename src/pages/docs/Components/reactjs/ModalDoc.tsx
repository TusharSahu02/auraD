import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import { getModalCodeString } from "@/constants/reactjs/CodeString";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";
import NavigationButton from "@/components/molecules/NavigationButton";
import Dialog from "@/components/molecules/Dialog";

const ModalDoc = () => {
  const [code, setCode] = useState(true);
  const [copyCode, setCopyCode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const codeString = getModalCodeString();

  return (
    <>
      <div className="mt-1 pb-[20px]">
        <p className="text-gray-500">Displays a modal dialog.</p>

        <div id="overview" className="mt-10">
          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer ${
                code ? "border-b-2 border-black dark:border-white" : ""
              }`}
              onClick={() => setCode(true)}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCode(true);
                }
              }}
              tabIndex={0}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !code ? "border-b-2 border-black dark:border-white" : ""
              }`}
              onClick={() => setCode(false)}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCode(false);
                }
              }}
              tabIndex={0}
            >
              Code
            </div>
          </div>
          {code ? (
            <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 dark:border-gray-800 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100/10 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard", {
                    icon: "📋",
                    position: "top-center",
                  });
                  setCopyCode(true);
                  setTimeout(() => {
                    setCopyCode(false);
                  }, 3000);
                }}
              >
                {copyCode ? <Check /> : <Clipboard />}
              </div>
              <Button onClick={() => setOpenModal(true)} variant="outline">
                Open Modal
              </Button>
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
                  setCopyCode(true);
                  setTimeout(() => {
                    setCopyCode(false);
                  }, 3000);
                }}
              >
                {copyCode ? (
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

      <h1 className="font-medium mt-10 border-b pb-2 text-2xl">Installation</h1>
      <ManualDocs />

      <NavigationButton
        previousTitle="Bento"
        nextTitle="Loaders"
        nextLink="/docs/reactjs/animations/loaders"
        previousLink="/docs/reactjs/components/bento"
      />

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Dialog />
      </Modal>
    </>
  );
};

export default ModalDoc;

const ManualDocs = () => {
  const modalCodeString = getModalCodeString();
  const [copy, setCopy] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(modalCodeString);
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
    <div className="mt-4">
      <div className="flex items-start justify-center gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
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
      <div className="flex items-start justify-center gap-2 pt-5 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Install Framer Motion</h1>
          <SyntaxHighlighter
            language="tsx"
            wrapLongLines={true}
            style={atomOneDark}
            className="rounded-lg p-5 mt-5 w-full customScrollBar text-sm"
          >
            npm i framer-motion
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="flex items-start justify-center pt-5 gap-2 border-l border-gray-500">
        <div className="lg:w-[20px] border-l h-full">
          <div className=" w-[5px] h-[30px] bg-gray-500 rounded-r-[10px] rounded-br-[10px] -ml-[1px] "></div>
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium">Add Modal.tsx File</h1>

          <p className="mt-3">
            <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
              src/components/Modal.tsx
            </kbd>
          </p>
          {!seeAll ? (
            <div className="relative overflow-hidden">
              <div
                className="absolute top-8 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex z-20 items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={handleCopy}
              >
                {copy ? (
                  <Check className="text-white" />
                ) : (
                  <Clipboard className="text-white" />
                )}
              </div>
              <div className="relative">
                <SyntaxHighlighter
                  language="tsx"
                  wrapLongLines={true}
                  style={atomOneDark}
                  className="rounded-lg p-5 mt-5 w-full h-[500px] customScrollBar text-sm"
                >
                  {modalCodeString}
                </SyntaxHighlighter>
              </div>
              <div className="absolute h-full w-full z-10 top-0 left-0 bg-gradient-to-b from-transparent rounded-lg to-black/80"></div>
              <h1
                onClick={() => {
                  setSeeAll(true);
                }}
                className="text-gray-400 absolute bottom-5 left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:underline "
              >
                <Button variant="ghost" className="text-white">
                  See more
                </Button>
              </h1>
            </div>
          ) : (
            <>
              <div className="relative">
                <div
                  className="absolute top-3 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
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
                  wrapLongLines={true}
                  style={atomOneDark}
                  className="rounded-lg p-5 mt-5 w-full h-[700px] customScrollBar"
                >
                  {modalCodeString}
                </SyntaxHighlighter>
              </div>
              <div className="flex items-center justify-center mt-3 ">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSeeAll(false);
                  }}
                >
                  See less
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
