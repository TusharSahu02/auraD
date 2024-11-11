import React from "react";
import NavigationButton from "@/components/molecules/NavigationButton";
import {
  Input,
  FileInput,
  StartIconInput,
  EndIconInput,
  StartInlineIconInput,
  OTP4Digit,
  OTP6Digit,
  InputwithCharactersLeft,
  PasswordValidatorInput,
  InputWithLabel,
} from "@/components/atoms/Input";
import { InputSection } from "./InputCodeBlock";
import { useTabState } from "@/hooks/reactjs/useTabState";
import {
  getInputEndIconCode,
  getInputFileCode,
  getInputMainCode,
  getInputStartIconCode,
  getInputWithCharsCountCode,
  getInputWithLabel,
  getOTP4DigitCode,
  getOTP6DigitCode,
  getPasswordValidatorInputCode,
  getStartIconInlineInputCode,
} from "@/constants/reactjs/codeString.input";

const InputDoc: React.FC = () => {
  const { show, toggleTab } = useTabState();

  const sections = [
    {
      title: "Default Input",
      key: "code" as const,
      component: Input,
      codeString: getInputMainCode(),
    },
    {
      title: "Input With Label",
      key: "inputWithLabel" as const,
      component: InputWithLabel,
      codeString: getInputWithLabel(),
    },
    {
      title: "File Input",
      key: "file" as const,
      component: FileInput,
      codeString: getInputFileCode(),
    },
    {
      title: "Start Icon Input",
      key: "startIconInput" as const,
      component: StartIconInput,
      codeString: getInputStartIconCode(),
    },
    {
      title: "End Icon Input",
      key: "endIconInput" as const,
      component: EndIconInput,
      codeString: getInputEndIconCode(),
    },
    {
      title: "Start Inline Icon Input",
      key: "startInlineIconInput" as const,
      component: StartInlineIconInput,
      codeString: getStartIconInlineInputCode(),
    },
    {
      title: "OTP 4 Digit Input",
      key: "otp4Digit" as const,
      component: OTP4Digit,
      codeString: getOTP4DigitCode(),
    },
    {
      title: "OTP 6 Digit Input",
      key: "otp6Digit" as const,
      component: OTP6Digit,
      codeString: getOTP6DigitCode(),
    },
    {
      title: "Left Characters Count Input ",
      key: "charCountInput" as const,
      component: InputwithCharactersLeft,
      codeString: getInputWithCharsCountCode(),
    },
    {
      title: "Password Validator Input",
      key: "passwordValidatorInput" as const,
      component: PasswordValidatorInput,
      codeString: getPasswordValidatorInputCode(),
    },
  ];

  return (
    <div className="mt-1 pb-[20px]">
      <p className="text-gray-500">
        Displays a button or a component that looks like a button.
      </p>

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

export default InputDoc;
