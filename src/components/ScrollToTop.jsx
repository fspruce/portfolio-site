import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [buttonBottom, setButtonBottom] = useState("20px");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHasScrolled(y !== 0);

      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const viewportHeight = window.innerHeight;
        const buttonMargin = 10; // Approximate height of the button

        if (window.scrollY + viewportHeight >= footerTop) {
          setButtonBottom(
            `${viewportHeight - (footerTop - window.scrollY) + buttonMargin}px`
          );
        } else {
          setButtonBottom("20px");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScrollButton() {
    window.scrollTo(0, 0);
    setHasScrolled(false);
  }

  return (
    <button
      onClick={() => handleScrollButton()}
      style={{ bottom: buttonBottom }}
      className={`cursor-pointer fixed transform px-4 py-2 rounded border border-accent/20 shadow-lg z-50 bg-base-100/40 md:max-w-[30%] lg:max-w-[10%] ${!hasScrolled && "hidden"} right-5 sm:left-1/2 sm:-translate-x-1/2`}
    >
      <span className="md:hidden">↑</span>
      <span className="hidden md:block">Scroll to Top</span>
    </button>
  );
}
