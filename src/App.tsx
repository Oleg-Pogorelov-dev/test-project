import { lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
export const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
