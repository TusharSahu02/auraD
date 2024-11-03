import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface SyntaxHighlighterWrapperProps {
  className?: string;
  children: string;
}

const SyntaxHighlighterWrapper = ({
  children,
  className,
  ...props
}: SyntaxHighlighterWrapperProps) => {
  return (
    <SyntaxHighlighter
      language={`tsx`}
      wrapLongLines={true}
      style={atomOneDark}
      className={`rounded-lg p-5 mt-5 w-full customScrollBar ${className}`}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterWrapper;
