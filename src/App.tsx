import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/docs/Docs";
import Navbar from "./components/common/Docs/Navbar";
import { Toaster } from "sonner";
import Test from "./demo/Test";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/:category/:subcategory" element={<Docs />} />
        <Route path="/docs/:instruction" element={<Docs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Toaster richColors />
    </BrowserRouter>
  );
}

export default App;
