import { useEffect, useState, useCallback } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

export default function ScrollToTop() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  const handleScrollButton = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHasScrolled(y !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === "Space") {
        handleScrollButton();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyUp);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleScrollButton]);

  return (
    <button
      onClick={() => handleScrollButton()}
      className={`cursor-pointer fixed  ${scrollDirection === "up" ? "sm:top-18" : "sm:top-3"} transform px-4 py-2 rounded border border-accent/20 shadow-lg z-50 bg-base-100/40 md:max-w-[30%] lg:max-w-[10%] ${!hasScrolled && "hidden"} right-5 sm:left-1/2 sm:-translate-x-1/2`}
    >
      <span className="md:hidden">↑</span>
      <span className="hidden md:block">Scroll to Top</span>
    </button>
  );
}
