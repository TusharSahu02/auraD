// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

interface SyntaxHighlighterWrapperProps {
  className?: string;
  children: string;
}

const SyntaxHighlighterWrapper = ({
  children,
  className,
  ...props
}: SyntaxHighlighterWrapperProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <pre className=" whitespace-pre-wrap border p-2 mt-4 rounded-md">
      <code
        className={`rounded-lg px-3 mt-2 w-full hideScrollBar language-javascript ${className}`}
        {...props}
      >
        {children}
      </code>
    </pre>
  );
};

export default SyntaxHighlighterWrapper;
