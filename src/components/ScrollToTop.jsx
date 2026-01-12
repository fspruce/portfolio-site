import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHasScrolled(y !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  function handleScrollButton() {
    window.scrollTo(0, 0);
    setHasScrolled(false);
  }

  return (
    <button
      onClick={() => handleScrollButton()}
      className={`cursor-pointer fixed bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg z-50 bg-base-300/20 ${!hasScrolled && "hidden"}`}
    >
      Scroll to Top
    </button>
  );
}
