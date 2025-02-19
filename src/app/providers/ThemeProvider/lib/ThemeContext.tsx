import { createContext } from 'react';

export const enum Themes {
  NORMAL = 'normal',
  DARK = 'dark',
}

export interface ThemesContextProps {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemesContextProps>({
  theme: Themes.NORMAL,
  setTheme: function (theme: Themes): void {
    throw new Error('Function not implemented.');
  },
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
