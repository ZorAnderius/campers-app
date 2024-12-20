import Skeleton from 'react-loading-skeleton';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/vehicles/selector.js';
import Header from '../Header/Header.jsx';
import SimpleLoader from '../assets/SimpleLoader/SimpleLoader.jsx';
import styles from './Layout.module.css';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={styles['page-layout']}>
      {isLoading ? <Skeleton height={72} /> : <Header />}
      <Suspense fallback={<SimpleLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
