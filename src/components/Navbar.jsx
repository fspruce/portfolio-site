import { useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function Navbar({ navigate, currentTheme, setCurrentTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  function handleLinkClick(path) {
    navigate(path);
    setDrawerOpen(false);
  }

  const links = {
    Home: "/",
    "About Me": "/about",
    "Featured Projects": "/projects",
    "Contact Me": "/contact",
  };

  const location = useLocation();

  const linkElements = Object.entries(links).map(([key, value]) => (
    <li key={key}>
      <a
        onClick={() => handleLinkClick(value)}
        className={
          location.pathname === value
            ? currentTheme === "dark"
              ? "text-secondary bg-primary-content/30"
              : "text-primary-content bg-neutral/30"
            : null
        }
      >
        {key}
      </a>
    </li>
  ));

  return (
    <div className="drawer">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={(e) => setDrawerOpen(e.target.checked)}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <a onClick={() => navigate("/")}>
              Fintan Spruce || Junior Developer
            </a>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {linkElements}
              <li>
                <ThemeController setCurrentTheme={setCurrentTheme} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {linkElements}
          <li>
            <ThemeController setCurrentTheme={setCurrentTheme} />
          </li>
        </ul>
      </div>
    </div>
  );
}
