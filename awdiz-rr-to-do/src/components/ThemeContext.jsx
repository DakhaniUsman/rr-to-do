import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to wrap your app and provide theme state
export const ThemeProvider = ({ children }) => {
  // Initialize theme state with 'light' as default
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
