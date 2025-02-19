import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import './navbar.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames('navbar', {}, [className])}>
      <div className='links'>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className='main-link'>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
