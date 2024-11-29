import { Container } from '../../components/assets/Container/Container';
import { NavButton } from '../../components/assets/NavButton/NavButton';
import { ROUTE } from '../../constants/constants';
import styles from './HomePage.module.css';

const HomePage = () => {
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
