import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import './appLink.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={classNames('app-link', {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
