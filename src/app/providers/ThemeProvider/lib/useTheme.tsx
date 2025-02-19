import { useContext } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Themes,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Themes;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.NORMAL ? Themes.DARK : Themes.NORMAL;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
