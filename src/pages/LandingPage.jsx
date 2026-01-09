import Hero from "../components/Hero.jsx";

export default function LandingPage({ navigate }) {
  return (
    <header className="grow flex flex-col">
      <Hero navigate={navigate} />
    </header>
  );
}
