import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header.jsx';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles['page-layout']}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
