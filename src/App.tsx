import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/docs/Docs";
import Navbar from "./components/common/Docs/Navbar";
import { Toaster } from "sonner";
import About from "./components/common/Home/About";
import Template from "./pages/Template";
import ScrollToTop from "./utils/ScrollToTop";
import { checkThemeAndSet } from "./lib/utils";
import Tooltip from "./components/atoms/Tooltip";
import BugReport from "./pages/docs/BugReport";
import Test from "./Types/test/Test";

function App() {
  // Set the default theme in localStorage if not already set
  checkThemeAndSet();

  const location = useLocation();
  const path = location.pathname;
  const template = path.split("/")[1];
  return (
    <div className=" overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/:type/:category/:subcategory" element={<Docs />} />
        <Route path="/docs/:type/:instruction" element={<Docs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/templates/:category" element={<Template />} />
        <Route path="/about-me" element={<About />} />

        <Route path="/test" element={<Test />} />
      </Routes>
      <Toaster richColors />

      {path !== "/" && template !== "templates" && (
        <Tooltip>
          <BugReport />
        </Tooltip>
      )}
    </div>
  );
}

export default App;
