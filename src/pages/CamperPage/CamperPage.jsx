import { Suspense } from 'react';
import styles from './CamperPage.module.css';
import { Outlet } from 'react-router-dom';

const CamperPage = () => {
  return (
    <>
      <h1 className={styles}>Camper Page</h1>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CamperPage;
