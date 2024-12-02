import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/common/theme-provider.tsx";
import { SelectedOptionProvider } from "./context/SelectedOptionContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-full font-geistRegular">
      <ThemeProvider defaultTheme="dark" storageKey="aurad-theme">
        <SelectedOptionProvider>
          <HelmetProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </HelmetProvider>
        </SelectedOptionProvider>
      </ThemeProvider>
      <Analytics />
    </div>
  </StrictMode>,
);
