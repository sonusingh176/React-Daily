// 1. React se zaroori hooks import kiye
import { createContext, useState, useContext } from "react";

// 2. Context banaya – isse hum Theme ka data global banayenge
const ThemeContext = createContext();

// 3. ThemeProvider banaya – ye ek wrapper component hai
export const ThemeProvider = ({ children }) => {
  // state banayi jo theme ko manage karegi (light/dark)
  const [theme, setTheme] = useState("light");

  // function banaya jo theme ko toggle karega
  const toggleTheme = () => {
    // agar theme light hai to dark karo, warna light
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ThemeContext.Provider ke through value pass ki — jisse sab child components use kar saken
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Custom Hook banaya jisse hum easily context ko access kar saken
export const useTheme = () => useContext(ThemeContext);
