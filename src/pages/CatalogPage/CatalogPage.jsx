import { CamperList } from '../../components/CamperList/CamperList';
import { Container } from '../../components/Container/Container';
import { Filter } from '../../components/Filter/Filter';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
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
