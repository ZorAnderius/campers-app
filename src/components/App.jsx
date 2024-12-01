import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'modern-normalize';
import 'react-loading-skeleton/dist/skeleton.css';

import Layout from './Layout/Layout';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import { ROUTE } from '../constants/constants';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('../pages/CamperPage/CamperPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.catalog} element={<CatalogPage />} />
        <Route path={ROUTE.camperId} element={<CamperPage />}>
          <Route path={ROUTE.features} element={<Features />} />
          <Route path={ROUTE.reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
