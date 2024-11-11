// const CLIDocs = () => {
//   const [copyImport, setCopyImport] = useState(false);
//   const [copyButton, setCopyButton] = useState(false);
//   const [copyCli, setCopyCli] = useState(false);
//   const [copyButtonCli, setCopyButtonCli] = useState(false);

//   const codeStringForCli = getCliInstallationCommand();
//   const codeStringForButton = getButtonCliInstallationCommand();
//   const importCodeString = getUsageImport();
//   const buttonCodeString = getUsageButton();
//   return (
//     <>
//       <div className="relative">
//         <div
//           className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
//           onClick={() => {
//             navigator.clipboard.writeText(codeStringForCli);
//             toast.success("Copied to clipboard", {
//               icon: "📋",
//               position: "top-center",
//             });
//             setCopyButtonCli(true);
//             setTimeout(() => {
//               setCopyButtonCli(false);
//             }, 3000);
//           }}
//         >
//           {copyButtonCli ? (
//             <Check className="text-white" />
//           ) : (
//             <Clipboard className="text-white" />
//           )}
//         </div>
//         <SyntaxHighlighter
//           language="tsx"
//           wrapLongLines={true}
//           style={atomOneDark}
//           className="rounded-lg p-5 mt-5 w-full"
//         >
//           {codeStringForCli}
//         </SyntaxHighlighter>
//       </div>
//       <div className="relative">
//         <div
//           className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
//           onClick={() => {
//             navigator.clipboard.writeText(codeStringForButton);
//             toast.success("Copied to clipboard", {
//               icon: "📋",
//               position: "top-center",
//             });
//             setCopyCli(true);
//             setTimeout(() => {
//               setCopyCli(false);
//             }, 3000);
//           }}
//         >
//           {copyCli ? (
//             <Check className="text-white" />
//           ) : (
//             <Clipboard className="text-white" />
//           )}
//         </div>
//         <SyntaxHighlighter
//           language="tsx"
//           wrapLongLines={true}
//           style={atomOneDark}
//           className="rounded-lg p-5 mt-5 w-full"
//         >
//           {codeStringForButton}
//         </SyntaxHighlighter>
//       </div>
//       <h1 className="font-medium mt-10 border-b pb-2 text-2xl">Usage</h1>
//       <div className="relative">
//         <div
//           className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
//           onClick={() => {
//             navigator.clipboard.writeText(importCodeString);
//             toast.success("Copied to clipboard", {
//               icon: "📋",
//               position: "top-center",
//             });
//             setCopyImport(true);
//             setTimeout(() => {
//               setCopyImport(false);
//             }, 3000);
//           }}
//         >
//           {copyImport ? (
//             <Check className="text-white" />
//           ) : (
//             <Clipboard className="text-white" />
//           )}
//         </div>
//         <SyntaxHighlighter
//           language="tsx"
//           wrapLongLines={true}
//           style={atomOneDark}
//           className="rounded-lg mt-5 w-full"
//         >
//           {importCodeString}
//         </SyntaxHighlighter>
//       </div>
//       <div className="relative">
//         <div
//           className="absolute top-1 right-3 size-7 hover:bg-gray-600 transition-all duration-300 flex items-center p-[6px] cursor-pointer justify-center rounded-md"
//           onClick={() => {
//             navigator.clipboard.writeText(buttonCodeString);
//             toast.success("Copied to clipboard", {
//               icon: "📋",
//               position: "top-center",
//             });
//             setCopyButton(true);
//             setTimeout(() => {
//               setCopyButton(false);
//             }, 3000);
//           }}
//         >
//           {copyButton ? (
//             <Check className="text-white" />
//           ) : (
//             <Clipboard className="text-white" />
//           )}
//         </div>
//         <SyntaxHighlighter
//           language="tsx"
//           wrapLongLines={true}
//           style={atomOneDark}
//           className="rounded-lg p-5 mt-5 w-full"
//         >
//           {buttonCodeString}
//         </SyntaxHighlighter>
//       </div>
//       <div className="mt-3">
//         <p>
//           Note : setup{" "}
//           <kbd className="px-2 py-1 bg-gray-300/30 rounded-lg mx-1">
//             tailwind
//           </kbd>{" "}
//           too else the styling will not work
//         </p>
//       </div>
//     </>
//   );
// };
