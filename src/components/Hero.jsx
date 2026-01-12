import { useGetCurrentTheme } from "../hooks/getCurrentTheme";
import useHandleRedirect from "../hooks/useHandleRedirect";

export default function Hero() {
  const currentTheme = useGetCurrentTheme();
  const handleRedirect = useHandleRedirect();
  return (
    <div className="hero grow flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-base-100">
      <div className="bg-base-200 hero-content md:p-6 lg:p-12 border border-base-300 rounded-4xl shadow-2xl flex flex-wrap lg:flex-nowrap lg:gap-6 w-full max-w-[90%]">
        <img
          src="https://whvtyrgmvzxyewsmyszc.supabase.co/storage/v1/object/sign/portfolio-assets/images/hero/fintan.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iOTk1OTQxZi00MjUyLTQ5NjQtODFiNi0yMWUzYzVlYWEwYTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tYXNzZXRzL2ltYWdlcy9oZXJvL2ZpbnRhbi5qcGciLCJpYXQiOjE3NjgwNjEzNjAsImV4cCI6NDkyMTY2MTM2MH0.UsCdTPIkMHUQeFWczpEtTjVNktAD39kxkUToW4-dGe4"
          className="rounded-lg shadow-2xl h-auto w-full max-w-[250px] lg:max-w-[350px]"
        />
        <div className="flex flex-col justify-center gap-4 w-full px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold">
            Welcome!
          </h1>
          <p className="py-4 px-2 text-center text-sm sm:text-base lg:text-lg w-full">
            My name is Fintan Spruce. I'm a junior developer who jumped from
            teaching into software. I earned a 2:1 BSc (Hons) in Mathematics,
            and completed Code Institute's full-stack bootcamp, and I now apply
            that mix of theory and practical web skills to break down problems
            and focus on working solutions. <br /> <br />I work comfortably in
            HTML, CSS, JavaScript and Python, and I have recently been
            self-learning the React library. In fact, this portfolio has been
            crafted with the help of React, Tailwind and DaisyUI! Alongisde
            this, I have also been looking into C#, and strengthening my React
            skills whenever possible. <br /> <br />
            Please click the button below to find out more about me, my skills
            and my projects, and feel free to contact me with any queries you
            may have!
          </p>
          <div className="flex flex-col lg:flex-row mx-auto m-2">
            <a
              className={
                (currentTheme === "dark"
                  ? "btn-primary "
                  : currentTheme === "light"
                    ? "btn-secondary "
                    : "btn-accent ") + "btn m-2 p-3 md:m-3 btn-l md:btn-xl"
              }
              onClick={() => handleRedirect("/projects")}
              aria-label="Go to projects page"
            >
              Projects
            </a>
            <a
              className={
                (currentTheme === "light" ? "btn-accent " : "btn-secondary ") +
                "btn m-2 p-3 md:m-3 btn-l md:btn-xl"
              }
              onClick={() => handleRedirect("/about")}
              aria-label="Go to about me page"
            >
              About Me
            </a>
            <a
              className={
                (currentTheme === "dark" ? "btn-accent " : "btn-primary ") +
                "btn m-2 p-3 md:m-3 btn-l md:btn-xl"
              }
              onClick={() => handleRedirect("/contact")}
              aria-label="Go to contact page"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
