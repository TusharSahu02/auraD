import React from "react";
import { Tab } from "@/components/common/Tab";
import { CodeDisplayAuth } from "@/components/common/CodeDisplay";
import { useClipboard } from "@/hooks/reactjs/useClipboard";

interface AuthSectionProps {
  id: string;
  title: string;
  show: boolean;
  onToggle: () => void;
  codeString: string;
  InputComponent: React.ComponentType;
}

export const AuthSection: React.FC<AuthSectionProps> = ({
  id,
  title,
  show,
  onToggle,
  codeString,
  InputComponent,
}) => {
  const { copyState, copyToClipboard } = useClipboard();

  return (
    <div className="mt-10">
      <h1 className="font-medium mb-5 text-xl capitalize" id={id}>
        {title}
      </h1>
      <div className="flex gap-x-6 border-b px-4">
        <Tab active={show} onClick={onToggle}>
          Preview
        </Tab>
        <Tab active={!show} onClick={onToggle}>
          Code
        </Tab>
      </div>
      <CodeDisplayAuth
        show={show}
        codeString={codeString}
        onCopy={() => copyToClipboard(codeString)}
        copyState={copyState}
        InputComponent={InputComponent}
      />
    </div>
  );
};
