import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/common/theme-provider.tsx";
import { SelectedOptionProvider } from "./context/SelectedOptionContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className=" font-geistRegular h-full">
      <ThemeProvider defaultTheme="dark" storageKey="aurad-theme">
        <SelectedOptionProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SelectedOptionProvider>
      </ThemeProvider>
    </div>
  </StrictMode>
);
