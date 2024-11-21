import { InputWithLabel } from "@/components/reactjs/atoms/Input";
import NavigationButton from "@/components/reactjs/molecules/NavigationButton";
import { getFloatingLabelCodeString } from "@/constants/react-native/codeString.InputRN";
import { useTabState } from "@/hooks/reactjs/useTabState";
import { InputSection } from "../../reactjs/Input/InputCodeBlock";

const InputDocRN = () => {
  const { show, toggleTab } = useTabState();

  const sections = [
    {
      title: "Default Input",
      key: "code" as const,
      component: InputWithLabel,
      codeString: getFloatingLabelCodeString(),
    },
  ];
  return (
    <div className="mt-1 pb-[20px]">
      <p className="text-gray-500">Displays a variety of input fields.</p>

      {sections.map(({ title, key, component, codeString }) => (
        <InputSection
          key={key}
          id={key}
          title={title}
          show={show[key]}
          onToggle={() => toggleTab(key)}
          codeString={codeString}
          InputComponent={component}
        />
      ))}

      <NavigationButton
        previousTitle="Button"
        nextTitle="Bento"
        previousLink="/docs/reactjs/components/button"
        nextLink="/docs/reactjs/components/bento"
      />
    </div>
  );
};

export default InputDocRN;
