import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { CamperPage } from '../pages/CamperPage/CamperPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
