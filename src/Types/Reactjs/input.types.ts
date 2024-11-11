export interface ShowState {
  code: boolean;
  file: boolean;
  startIconInput: boolean;
  endIconInput: boolean;
  startInlineIconInput: boolean;
  otp4Digit: boolean;
  otp6Digit: boolean;
  charCountInput: boolean;
  passwordValidatorInput: boolean;
  inputWithLabel: boolean;
}

export interface CopyState {
  code: boolean;
  file: boolean;
  startIconInput: boolean;
  endIconInput: boolean;
  startInlineIconInput: boolean;
  otp4Digit: boolean;
  otp6Digit: boolean;
  charCountInput: boolean;
  passwordValidatorInput: boolean;
  inputWithLabel: boolean;
}

export interface CodeDisplayProps {
  show: boolean;
  codeString: string;
  onCopy: () => void;
  copyState: boolean;
  InputComponent: React.ComponentType;
}

export interface TabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
