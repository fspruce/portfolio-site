export default function Hero({ navigate }) {
  return (
    <div className="hero grow flex items-center justify-center p-6 lg:p-0 bg-base-100">
      <div className="bg-base-200 hero-content p-10 lg:p-20 border border-base-300 rounded-4xl shadow-2xl flex-col lg:flex-row lg:gap-8 w-full max-w-[90%] h-auto">
        <img
          src="https://whvtyrgmvzxyewsmyszc.supabase.co/storage/v1/object/sign/portfolio-assets/images/hero/fintan.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iOTk1OTQxZi00MjUyLTQ5NjQtODFiNi0yMWUzYzVlYWEwYTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tYXNzZXRzL2ltYWdlcy9oZXJvL2ZpbnRhbi5qcGciLCJpYXQiOjE3NjgwNjEzNjAsImV4cCI6NDkyMTY2MTM2MH0.UsCdTPIkMHUQeFWczpEtTjVNktAD39kxkUToW4-dGe4"
          className="max-w-sm rounded-lg shadow-2xl h-auto w-auto"
        />
        <div className="flex flex-col justify-center gap-6 w-full max-w-[90%] px-4">
          <h1 className="text-5xl text-center font-bold">Welcome!</h1>
          <p className="py-6 px-4 text-center text-lg">
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
          <button
            className="btn btn-primary mx-auto mt-5 scale-110"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
