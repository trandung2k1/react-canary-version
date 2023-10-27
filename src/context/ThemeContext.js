import { createContext, useState, useId } from 'react';
export const ThemeContext = createContext(null);
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const values = { theme, setTheme };
  const key = useId();
  return (
    <ThemeContext.Provider key={key} value={values}>
      {children}
    </ThemeContext.Provider>
  );
}
