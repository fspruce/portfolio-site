import "./App.css";
import useScrollDirection from "./hooks/useScrollDirection.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

//Importing from the pages folder
import LandingPage from "./pages/LandingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

//Shared UI
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);

  const [currentTheme, setCurrentTheme] = useLocalStorage(
    "theme",
    "caramellatte"
  );
  useEffect(() => {
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, [currentTheme]);

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
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
