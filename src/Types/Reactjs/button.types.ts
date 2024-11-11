export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "animation";

export interface ButtonConfig {
  variant: ButtonVariant;
  buttonText: string;
}

export interface ShowState {
  [key: string]: boolean;
}

export interface CopyState {
  [key: string]: boolean;
}
