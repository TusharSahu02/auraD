import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/common/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className=" font-geistRegular">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </div>
  </StrictMode>
);
