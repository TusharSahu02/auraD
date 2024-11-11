import { useState } from "react";
import { ShowState } from "../../Types/Reactjs/input.types";
import { ShowStateAuth } from "@/Types/Reactjs/auth.types";

const initialState: ShowState = {
  code: true,
  file: true,
  startIconInput: true,
  endIconInput: true,
  startInlineIconInput: true,
  otp4Digit: true,
  otp6Digit: true,
  charCountInput: true,
  passwordValidatorInput: true,
  inputWithLabel: true,
};

const initialAuthState: ShowStateAuth = {
  welcome: true,
  signup: true,
};

export const useTabState = () => {
  const [show, setShow] = useState<ShowState>(initialState);

  const toggleTab = (key: keyof ShowState) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};

export const useAuthTabState = () => {
  const [show, setShow] = useState<ShowStateAuth>(initialAuthState);
  const toggleTab = (key: keyof ShowStateAuth) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};
