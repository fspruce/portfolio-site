import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GiAbacus } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer bg-base-300 text-base-content flex flex-row gap-8 py-2 px-4 justify-between items-center">
      <aside>
        <div className="flex items-center gap-3">
          <GiAbacus className="text-5xl" />
          <div>
            <p className="font-bold">
              Fintan Spruce || Junior Developer
              <br />
              Breaking into the tech world since 2025.
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </div>
        </div>
      </aside>
      <nav>
        <div className="flex gap-4">
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
          <a
            href="mailto:fspruce@fintanspruce.dev"
            aria-label="Email link"
            className="flex items-center gap-2"
          >
            <MdEmail className="text-2xl" />
            <span className="underline">fspruce@fintanspruce.dev</span>
          </a>
        </div>
      </nav>
    </footer>
  );
}
