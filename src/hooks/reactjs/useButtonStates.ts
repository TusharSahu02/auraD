import { useState } from "react";
import { ShowState, CopyState } from "../../Types/Reactjs/button.types";

export const useButtonStates = () => {
  const [show, setShow] = useState<ShowState>({
    primary: true,
    secondary: true,
    destructive: true,
    outline: true,
    ghost: true,
    animation: true,
  });

  const [copy, setCopy] = useState<CopyState>({
    primary: false,
    secondary: false,
    destructive: false,
    outline: false,
    ghost: false,
    animation: false,
  });

  return { show, setShow, copy, setCopy };
};
