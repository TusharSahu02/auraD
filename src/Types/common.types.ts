export interface CodeDisplayCommmonProps {
  show: boolean;
  codeString: string;
  onCopy: () => void;
  copyState: boolean;
  Component: React.ComponentType;
}

export interface ShowStateButton {
  telegramBtn: boolean;
  slideAnimOnHoverBtn: boolean;
  goldShineOnHoverAnimBtn: boolean;
  hoverWithContentSlideOut: boolean;
}

export interface CopyStateButton {
  telegramBtn: boolean;
  slideAnimOnHoverBtn: boolean;
  goldShineOnHoverAnimBtn: boolean;
  hoverWithContentSlideOut: boolean;
}
