import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/docs/Docs";
import Navbar from "./components/common/Docs/Navbar";
import { Toaster } from "sonner";
import About from "./components/common/Home/About";
import Template from "./pages/Template";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  // Set the default theme in localStorage if not already set
  if (!localStorage.getItem("aurad-theme")) {
    localStorage.setItem("aurad-theme", "dark");
  }

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
      </Routes>
      <Toaster richColors />
    </BrowserRouter>
  );
}

export default App;
