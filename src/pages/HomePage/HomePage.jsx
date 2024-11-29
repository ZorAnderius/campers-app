import { useEffect } from 'react';
import { Container } from '../../components/assets/Container/Container';
import { NavButton } from '../../components/assets/NavButton/NavButton';
import { ROUTE } from '../../constants/constants';
import styles from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { resetVehicals } from '../../redux/vehicles/slice';
import { resetFilter } from '../../redux/filters/slice';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetVehicals());
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <main className={styles['main']}>
      <section className={styles['hero']}>
        <Container>
          <div className={styles['hero-content']}>
            <div className={styles['hero-text-container']}>
              <h1 className={styles['hero-title']}>Campers of your dreams</h1>
              <p className={styles['hero-text']}>
                You can find everything you want in our catalog
              </p>
            </div>
            <NavButton type={'view-now'} link={ROUTE.catalog}>
              View Now
            </NavButton>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
