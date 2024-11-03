import { CheckIcon, CopyIcon } from "lucide-react";

const CopyCodeToggleIcons = ({ copyCode }: { copyCode: boolean }) => {
  return (
    <>
      {copyCode ? (
        <CheckIcon className="text-white" />
      ) : (
        <CopyIcon className="text-white" />
      )}
    </>
  );
};

export default CopyCodeToggleIcons;
