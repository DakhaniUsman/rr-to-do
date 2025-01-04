import React from "react";
import { useTheme } from "./ThemeContext"; // Import the custom hook to access theme context

const ThemeToggleButton = () => {
  const{ theme, toggleTheme } = useTheme("light"); // Use the context to get theme and toggle function



  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggleButton;
