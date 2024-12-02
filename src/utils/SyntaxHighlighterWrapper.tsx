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
    <pre className="mt-4 whitespace-pre-wrap rounded-md border">
      <code
        className={`hideScrollBar language-javascript mt-0 w-full rounded-lg px-3 ${className}`}
        {...props}
      >
        {children}
      </code>
    </pre>
  );
};

export default SyntaxHighlighterWrapper;
