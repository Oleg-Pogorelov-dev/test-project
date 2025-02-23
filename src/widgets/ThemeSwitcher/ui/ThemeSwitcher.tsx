import { classNames } from 'shared/lib/classNames/classNames';
import { Themes, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import './themeSwitcher.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={className}
      onClick={toggleTheme}
    >
      {theme === Themes.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
