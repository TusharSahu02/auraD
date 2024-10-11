import Button from "../../../components/atoms/Button";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Input from "../../../components/atoms/Input";
import React, { useState, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
const InputDoc = () => {
  const [show, setShow] = useState({
    code: true,
    file: true,
    floatingInput: true,
  });

  const [copy, setCopy] = useState({
    code: false,
    file: false,
    floatingInput: false,
  });
  const [imageUrl, setImageUrl] = useState("");
  const [iseDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const codeString = `getCodeString("code")`;

  // input == file start

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.items) {
      const file = event.dataTransfer.items[0].getAsFile();
      if (file) {
        setImageUrl(URL.createObjectURL(file));
      }
    }
    setIsDragging(true);
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setImageUrl("");
  };

  // input == file end

  return (
    <>
      <div className="mt-1 pb-[20px]">
        <p className="text-gray-500">
          Displays a button or a component that looks like a button.
        </p>
        <div className="mt-10">
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
              <Input />
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
        <h1 className="font-medium mt-10 border-b pb-2 text-2xl">Examples</h1>
        {/* base */}
        {/* input == file */}
        <div className="mt-10">
          <h1 className="font-medium mb-5 text-xl capitalize">File</h1>

          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer ${
                show.file ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setShow({ ...show, file: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, file: true });
                }
              }}
              tabIndex={0}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.file ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setShow({ ...show, file: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, file: false });
                }
              }}
              tabIndex={0}
            >
              Code
            </div>
          </div>
          {show.file ? (
            <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  toast.success("Copied to clipboard", {
                    icon: "📋",
                    position: "top-center",
                  });
                  setCopy({ ...copy, file: true });
                  setTimeout(() => {
                    setCopy({ ...copy, file: false });
                  }, 3000);
                }}
              >
                {copy.file ? <Check /> : <Clipboard />}
              </div>
              {/* file code */}
              <div className="h-full w-full flex items-center justify-center flex-col">
                <label
                  htmlFor="input-file"
                  className={`lg:w-[500px] w-full h-[300px] relative p-[20px] border-2 border-gray-300 border-dashed  text-center rounded-[8px] transition-colors duration-200 ${
                    iseDragging ? "bg-[#e8eafb]" : "bg-[#f7f8ff]"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {imageUrl ? (
                    <>
                      <img
                        src={imageUrl}
                        alt="uploaded image"
                        className="w-full h-full object-cover rounded-[10px]"
                      />
                      <div
                        className="size-[30px] rounded-full border absolute top-[25px] cursor-pointer right-[25px] flex items-center justify-center"
                        onClick={(e) => {
                          e.preventDefault();
                          resetFileInput();
                        }}
                      >
                        <IoIosCloseCircle className="text-white" size={30} />
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center rounded-[10px] h-full flex-col justify-center">
                      <MdCloudUpload size={100} className="text-blue-400" />
                      <p>
                        Drag & Drop or Click here <br /> to upload image
                      </p>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    hidden
                    type="file"
                    accept="image/*"
                    id="input-file"
                    className="border px-4 py-1 border-gray-300 rounded-md placeholder:text-sm text-sm"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
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
        {/* input == Floating Input */}
        <div className="mt-10">
          <h1 className="font-medium mb-5 text-xl capitalize">
            Floating Input
          </h1>

          <div className="flex gap-x-6 border-b px-4">
            <div
              className={`cursor-pointer ${
                show.floatingInput ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setShow({ ...show, floatingInput: true })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, floatingInput: true });
                }
              }}
              tabIndex={0}
            >
              Preview
            </div>
            <div
              className={`cursor-pointer ${
                !show.floatingInput ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setShow({ ...show, floatingInput: false })}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShow({ ...show, floatingInput: false });
                }
              }}
              tabIndex={0}
            >
              Code
            </div>
          </div>
          {show.floatingInput ? (
            <div className="w-full relative lg:h-[400px] h-[300px] border border-gray-300 flex items-center justify-center mt-5 rounded-lg">
              <div
                className="absolute top-3 right-3 size-7 hover:bg-gray-100 border transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
                onClick={() => {
                  // navigator.clipboard.writeText(getCodeStringInputDoc());
                  toast.success("Copied to clipboard", {
                    icon: "📋",
                    position: "top-center",
                  });
                  setCopy({ ...copy, floatingInput: true });
                  setTimeout(() => {
                    setCopy({ ...copy, floatingInput: false });
                  }, 3000);
                }}
              >
                {copy.floatingInput ? <Check /> : <Clipboard />}
              </div>
              {/* file code */}
              <div className="flex flex-col items-center justify-center ">
                <div className="relative h-[50px]  flex items-center justify-center">
                  <input
                    id="usernameInput"
                    type="text"
                    required
                    className="border px-4 py-[10px] outline-none rounded-md text-gray-600  transition-all duration-200 ease-in-out focus:-mb-20 focus:ml-3"
                  />
                  <label
                    htmlFor="usernameInput"
                    className="absolute top-1/2 left-[5px] -translate-y-1/2 text-sm text-gray-400 px-4 py-1 pointer-events-none transition-all duration-200 ease-in-out  focus:text-xs"
                  >
                    Username
                  </label>
                </div>
              </div>
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
      <div className="flex items-center justify-between">
        <Button variant="outline">
          <span className="flex items-center gap-1">
            <FiChevronLeft />
            Previous
          </span>
        </Button>
        <Button variant="outline">
          <span className="flex items-center gap-1">
            Input
            <FiChevronRight />
          </span>
        </Button>
      </div>
    </>
  );
};

export default InputDoc;
