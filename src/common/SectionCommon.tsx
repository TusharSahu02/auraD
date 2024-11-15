import React from "react";
import { Tab } from "@/common/Tab";
import { useClipboard } from "@/hooks/useClipboard";
import { CodeDisplayCommon } from "./CodeDisplayCommon";

interface SectionProps {
  id: string;
  title: string;
  show: boolean;
  onToggle: () => void;
  codeString: string;
  Component: React.ComponentType;
}

export const SectionCommon: React.FC<SectionProps> = ({
  id,
  title,
  show,
  onToggle,
  codeString,
  Component,
}) => {
  const { copyState, copyToClipboard } = useClipboard();

  return (
    <div className="mt-5">
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
      <CodeDisplayCommon
        show={show}
        codeString={codeString}
        onCopy={() => copyToClipboard(codeString)}
        copyState={copyState}
        Component={Component}
      />
    </div>
  );
};
