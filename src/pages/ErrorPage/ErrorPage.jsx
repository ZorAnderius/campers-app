import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/constants';

import styles from './ErrorPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetFilter } from '../../redux/filters/slice';
import { resetVehicals } from '../../redux/vehicles/slice';

const ErrorPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetVehicals());
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <div className={styles['error-wrapper']}>
      <h1 className={styles['error-title']}>404</h1>
      <p className={styles['message']}>
        Oops! You&apos;ve been pulled into a black hole.
      </p>

      <div className={styles['black-hole']}></div>

      <div
        className={styles['swirling-text']}
        style={{
          top: '50%',
          left: '50%',
          animationDelay: '0s',
        }}
      >
        Lost...
      </div>
      <div
        className={styles['swirling-text']}
        style={{
          top: '50%',
          left: '50%',
          animationDelay: '1s',
        }}
      >
        404...
      </div>
      <div
        className={styles['swirling-text']}
        style={{
          top: '50%',
          left: '50%',
          animationDelay: '2s',
        }}
      >
        Help!
      </div>
      <Link to={ROUTE.home} className={styles['button']}>
        Escape to Safety
      </Link>
    </div>
  );
};

export default ErrorPage;
