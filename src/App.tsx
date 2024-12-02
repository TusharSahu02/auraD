import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/docs/Docs";
import Navbar from "@/common/Docs/Navbar";
import { Toaster } from "sonner";
import About from "@/common/Home/About";
import Template from "./pages/Template";
import ScrollToTop from "./utils/ScrollToTop";
import { checkThemeAndSet } from "./lib/utils";
import Tooltip from "./components/reactjs/atoms/Tooltip";
import BugReport from "./pages/docs/BugReport";
import Test from "./test/Test";
import Preview from "./previews/Preview";
import SmoothScrolling from "./utils/SmoothScroll";

function App() {
  // Set the default theme in localStorage if not already set
  checkThemeAndSet();

  const location = useLocation();
  const path = location.pathname;
  const template = path.split("/")[1];

  return (
    <div className="">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <SmoothScrolling>
              <Home />
            </SmoothScrolling>
          }
        />
        <Route path="/docs/:type/:category/:subcategory" element={<Docs />} />
        <Route path="/docs/:type/:instruction" element={<Docs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/templates/:category" element={<Template />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/preview/:componentName" element={<Preview />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Toaster richColors />

      {path !== "/" &&
        template !== "templates" &&
        template !== "test" &&
        template !== "preview" && (
          <Tooltip>
            <BugReport />
          </Tooltip>
        )}
    </div>
  );
}

export default App;
