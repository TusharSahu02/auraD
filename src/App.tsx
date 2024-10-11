import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/docs/Docs";
import Navbar from "./components/common/Docs/Navbar";
import { Toaster } from "sonner";
import About from "./components/common/Home/About";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/:category/:subcategory" element={<Docs />} />
        <Route path="/docs/:instruction" element={<Docs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
      <Toaster richColors />
    </BrowserRouter>
  );
}

export default App;
