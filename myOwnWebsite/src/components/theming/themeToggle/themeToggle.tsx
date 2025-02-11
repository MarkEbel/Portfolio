import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../themeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <span onClick={toggleTheme} className="theme-toggle">
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </span>
  );
};

export default ThemeToggle;
