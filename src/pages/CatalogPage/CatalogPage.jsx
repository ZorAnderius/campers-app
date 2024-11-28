import { useEffect } from 'react';
import { CamperList } from '../../components/CamperList/CamperList';
import { Container } from '../../components/Container/Container';
import { Filter } from '../../components/Filter/Filter';
import styles from './CatalogPage.module.css';
import { useDispatch } from 'react-redux';
import { getVehicles } from '../../redux/vehicles/operation';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const page = 1;
    dispatch(getVehicles({ page }));
  }, [dispatch]);
  return (
    <Container>
      <div className={styles['catalog-container']}>
        <Filter />
        <CamperList />
      </div>
    </Container>
  );
};

export default CatalogPage;
