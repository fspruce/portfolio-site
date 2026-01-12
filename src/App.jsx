import "./App.css";
import useScrollDirection from "./hooks/useScrollDirection.js";
import { Routes, Route } from "react-router-dom";

//Importing from the pages folder
import LandingPage from "./pages/LandingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

//Shared UI
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav
          className={
            "sticky top-0 z-100 transition-all duration-300 ease-in-out " +
            (scrollDirection === "down"
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100")
          }
        >
          <Navbar />
        </nav>
        <main className="grow flex flex-col">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}
