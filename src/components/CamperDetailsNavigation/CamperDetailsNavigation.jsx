import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ROUTE } from '../../constants/constants';
import styles from './CamperDetailsNavigation.module.css';

const buildActive = ({ isActive }) =>
  clsx(styles['nav-link'], isActive && styles['active-link']);

const CamperDetailsNavigation = () => {
  return (
    <ul className={styles['detail-navigation']}>
      <li>
        <NavLink to={ROUTE.features} className={buildActive}>
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTE.reviews} className={buildActive}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default CamperDetailsNavigation;
