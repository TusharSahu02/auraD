import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/docs/Docs";
import Navbar from "./components/common/Docs/Navbar";
import { Toaster } from "sonner";
import About from "./components/common/Home/About";
import Template from "./pages/Template";
import ScrollToTop from "./utils/ScrollToTop";
import { checkThemeAndSet } from "./lib/utils";
// import Test from "./test/Test";


function App() {
  // Set the default theme in localStorage if not already set
  checkThemeAndSet();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/:type/:category/:subcategory" element={<Docs />} />
        <Route path="/docs/:type/:instruction" element={<Docs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/templates/:category" element={<Template />} />
        <Route path="/about-me" element={<About />} />

        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
      <Toaster richColors />
    </BrowserRouter>
  );
}

export default App;
