const { createContext, useState } = require('react');

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return <ThemeContext.Provider value={[isDark, setDark]}>{children}</ThemeContext.Provider>;
}
