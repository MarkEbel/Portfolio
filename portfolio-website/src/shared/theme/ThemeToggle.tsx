import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <span onClick={toggleTheme} className="theme-toggle">
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </span>
  );
};

export default ThemeToggle;
