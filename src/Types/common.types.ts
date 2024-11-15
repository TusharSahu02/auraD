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
  premiumUnlockBtn: boolean;
  backToTopBtn: boolean;
  socialRotateOnHoverBtn: boolean;
  amoungUsGameBtn: boolean;
  macCommandBtn: boolean;
}

export interface CopyStateButton {
  telegramBtn: boolean;
  slideAnimOnHoverBtn: boolean;
  goldShineOnHoverAnimBtn: boolean;
  hoverWithContentSlideOut: boolean;
  premiumUnlockBtn: boolean;
  backToTopBtn: boolean;
  socialRotateOnHoverBtn: boolean;
  amoungUsGameBtn: boolean;
  macCommandBtn: boolean;
}

export interface ShowNumberButton {
  incrementDecrementNF: boolean;
  incrementLoaderNF: boolean;
}
export interface CopyNumberButton {
  incrementDecrementNF: boolean;
  incrementLoaderNF: boolean;
}
