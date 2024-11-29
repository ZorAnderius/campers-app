import { useEffect } from 'react';
import { CamperList } from '../../components/CamperList/CamperList';
import { Container } from '../../components/Container/Container';
import { Filter } from '../../components/Filter/Filter';
import styles from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../redux/vehicles/operation';
import { selectPage } from '../../redux/vehicles/selector';
import { selectFilter } from '../../redux/filters/selector';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getVehicles({ page, filter }));
  }, [dispatch, page, filter]);
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
