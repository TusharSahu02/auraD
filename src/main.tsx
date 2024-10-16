import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/common/theme-provider.tsx";
import { SelectedOptionProvider } from "./context/SelectedOptionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className=" font-geistRegular h-full">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SelectedOptionProvider>
          <App />
        </SelectedOptionProvider>
      </ThemeProvider>
    </div>
  </StrictMode>
);
