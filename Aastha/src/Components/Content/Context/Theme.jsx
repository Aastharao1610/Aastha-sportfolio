// import { createContext, useContext, useState } from "react";

// // Create the ThemeContext
// export const ThemeContext = createContext({
//   themeMode: "light",
//   darkTheme: () => {},
//   lightTheme: () => {},
// });

// // Create ThemeProvider
// export const ThemeProvider = ({ children }) => {
//   const [themeMode, setThemeMode] = useState("light");

//   // Define the dark and light theme functions
//   const darkTheme = () => {
//     setThemeMode("dark");
//     document.documentElement.classList.add('dark'); // Add 'dark' class to enable dark theme
//   };

//   const lightTheme = () => {
//     setThemeMode("light");
//     document.documentElement.classList.remove('dark'); // Remove 'dark' class to disable dark theme
//   };

//   return (
//     <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom Hook to use ThemeContext
// export default function useTheme() {
//   return useContext(ThemeContext);
// }

import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode]);

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
