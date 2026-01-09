import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GiAbacus } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content flex flex-col gap-4 py-2">
      <aside>
        <GiAbacus className="text-5xl" />
        <p className="font-bold">
          Fintan Spruce || Junior Developer
          <br />
          Breaking into the tech world since 2025.
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="pb-6">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.github.com/fspruce/"
            target="_blank"
            aria-label="GitHub link - opens in new tab"
          >
            <FaGithubSquare className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/fintan-spruce"
            target="_blank"
            aria-label="LinkedIn link - opens in new tab"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
