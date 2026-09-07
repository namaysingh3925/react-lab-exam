import useTheme from "./Hooks/Usetheme";
import "./App.css";

function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={
        theme === "Light"
          ? "light"
          : "dark"
      }
    >

      <h1>Theme Preference Manager</h1>

      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

    </div>
  );
}

export default App;
