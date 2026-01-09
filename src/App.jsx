import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

//Importing from the pages folder
import LandingPage from "./pages/LandingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

//Shared UI
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

export default function App() {
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute("data-theme")
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav>
          <Navbar
            navigate={navigate}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </nav>
        <main className="grow flex flex-col">
          <Routes>
            <Route path="/" element={<LandingPage navigate={navigate} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
