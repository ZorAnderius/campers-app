import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../redux/vehicles/operation';
import { selectFilter } from '../../redux/filters/selector';
import { selectIsLoading, selectPage } from '../../redux/vehicles/selector';
import Filter from '../../components/Filter/Filter';
import Container from '../../components/assets/Container/Container';
import CamperList from '../../components/CamperList/CamperList';
import SkeletonCatalog from '../../components/assets/SkeletonCatalog/SkeletonCatalog';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getVehicles({ page, filter }));
  }, [dispatch, page, filter]);
  return (
    <Container>
      {isLoading ? (
        <SkeletonCatalog />
      ) : (
        <div className={styles['catalog-container']}>
          <Filter />
          <CamperList />
        </div>
      )}
    </Container>
  );
};

export default CatalogPage;
