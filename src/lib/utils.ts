import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkThemeAndSet() {
  if (!localStorage.getItem("aurad-theme")) {
    localStorage.setItem("aurad-theme", "dark");
  }
}

export function showToast(
  setCopyCode: React.Dispatch<React.SetStateAction<boolean>>
) {
  toast.success("Copied to clipboard", {
    icon: "📋",
    position: "top-center",
  });
  setCopyCode(true);
  setTimeout(() => {
    setCopyCode(false);
  }, 3000);
}

export function replaceHyphensWithSpaces(str: string) {
  return str.replace(/-/g, " ");
}
