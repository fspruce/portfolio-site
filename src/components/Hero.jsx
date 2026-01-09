import fintanImg from "../assets/fintan.jpg";

export default function Hero({ navigate }) {
  return (
    <div className="hero bg-base-200 grow flex items-center justify-center">
      <div className="hero-content p-10 flex-col lg:flex-row lg:gap-8">
        <img
          src={fintanImg}
          className="max-w-sm lg:max-w-md rounded-lg shadow-2xl"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl lg:text-6xl mx-auto font-bold">Welcome!</h1>
          <p className="py-6 px-20 lg:px-0 text-center lg:text-start lg:text-lg">
            My name is Fintan Spruce. I'm a junior developer who jumped from
            teaching into software. I earned a 2:1 BSc (Hons) in Mathematics,
            and completed Code Institute's full-stack bootcamp, and I now apply
            that mix of theory and practical web skills to break down problems
            and focus on working solutions. <br /> <br />I work comfortably in
            HTML, CSS, JavaScript and Python, and I have recently been
            self-learning the React library. In fact, this portfolio has been
            crafted with the help of React, Tailwind and DaisyUI! Alongisde
            this, I have also been looking into C#, and strenghting my React
            skills whenever possible. <br /> <br />
            Please click the button below to find out more about me, my skills
            and my projects, and feel free to contact me with any queries you
            may have!
          </p>
          <button
            className="btn btn-primary mx-auto lg:mt-5"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
