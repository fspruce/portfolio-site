import { FaPaintBrush } from "react-icons/fa";

export default function ThemeController({ setCurrentTheme }) {
  const themes = ["default", "light", "dark"];
  const themeElements = themes.map((theme) => (
    <li key={theme}>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label={theme[0].toUpperCase() + theme.slice(1)}
        value={theme}
        onChange={() => setCurrentTheme(theme)}
      />
    </li>
  ));

  return (
    <>
      <div className="dropdown max-w-9">
        <div tabIndex={0} role="button">
          <FaPaintBrush />
        </div>
        <ul
          tabIndex="-1"
          className="-ml-3 dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl lg:-mx-15 lg:my-5 lg:max-w-25"
        >
          {themeElements}
        </ul>
      </div>
    </>
  );
}
