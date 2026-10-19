import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Art from "./pages/Art";
import Projects from "./pages/Projects";
import Leadership from "./pages/Leadership";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const TITLES = {
  "/": "Aryan Basnet | Founder & CEO of Vidhata | Glocal Teen Hero Nepal 2024",
  "/community": "Community Involvement | Aryan Basnet",
  "/art": "Art & Culture | Aryan Basnet",
  "/projects": "Projects | Aryan Basnet",
  "/leadership": "Leadership | Aryan Basnet",
  "/work": "Work Experience | Aryan Basnet",
  "/contact": "Contact | Aryan Basnet",
};

const DocTitle = () => {
  const { pathname } = useLocation();
  useEffect(() => { document.title = TITLES[pathname] ?? "Aryan Basnet"; }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <DocTitle />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/art" element={<Art />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
