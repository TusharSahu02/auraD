import { useState } from "react";
import type { ShowState } from "../../Types/Reactjs/input.types";
import type { ShowStateAuth } from "@/Types/Reactjs/auth.types";
import type {
  ScrollTranslateButton,
  ShowAnimatedNumberButton,
  ShowNumberButton,
  ShowPerspectiveGridButton,
  ShowStateButton,
  ShowZoomParallaxButton,
} from "@/Types/common.types";

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

const initialButtonState: ShowStateButton = {
  telegramBtn: true,
  slideAnimOnHoverBtn: true,
  goldShineOnHoverAnimBtn: true,
  hoverWithContentSlideOut: true,
  premiumUnlockBtn: true,
  backToTopBtn: true,
  socialRotateOnHoverBtn: true,
  amoungUsGameBtn: true,
  macCommandBtn: true,
};

const initialNumberState: ShowNumberButton = {
  incrementDecrementNF: true,
  incrementLoaderNF: true,
};
const initialAnimatedNumberState: ShowAnimatedNumberButton = {
  mysteriousText: true,
  infiniteTextDemo: true,
};
const initialZoomParallaxState: ShowZoomParallaxButton = {
  zoomParallax: true,
};
const perspectiveGridState: ShowPerspectiveGridButton = {
  perspectiveGrid: true,
};
const scrollTranslateState: ScrollTranslateButton = {
  scrollTranslate: true,
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

export const useButtonTabState = () => {
  const [show, setShow] = useState<ShowStateButton>(initialButtonState);
  const toggleTab = (key: keyof ShowStateButton) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};
export const useNumberTabState = () => {
  const [show, setShow] = useState<ShowNumberButton>(initialNumberState);
  const toggleTab = (key: keyof ShowNumberButton) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};

export const useAnimatedNumberTabState = () => {
  const [show, setShow] = useState<ShowAnimatedNumberButton>(
    initialAnimatedNumberState
  );
  const toggleTab = (key: keyof ShowAnimatedNumberButton) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};
export const useZoomParallaxTabState = () => {
  const [show, setShow] = useState<ShowZoomParallaxButton>(
    initialZoomParallaxState
  );
  const toggleTab = (key: keyof ShowZoomParallaxButton) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};
export const usePerspectiveGridTabState = () => {
  const [show, setShow] =
    useState<ShowPerspectiveGridButton>(perspectiveGridState);
  const toggleTab = (key: keyof ShowPerspectiveGridButton) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};

export const useScrollTranslateTabState = () => {
  const [show, setShow] = useState<ScrollTranslateButton>(scrollTranslateState);
  const toggleTab = (key: keyof ScrollTranslateButton) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { show, toggleTab };
};
