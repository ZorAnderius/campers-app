import { Link, NavLink } from 'react-router-dom';
import logoIcon from '../../assets/logo.svg';
import styles from './Navigation.module.css';
import clsx from 'clsx';
import { ROUTE } from '../../constants/constants';

const activeStyle = ({ isActive }) => {
  return clsx(styles['nav-link'], isActive && styles['active']);
};

export const Navigation = () => {
  return (
    <nav className={styles['nav-container']}>
      <Link to={ROUTE.home}>
        <img src={logoIcon} alt="Travel Truck Logo" />
      </Link>

      <ul className={styles['nav-list']}>
        <li>
          <NavLink to={ROUTE.home} className={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTE.catalog} className={activeStyle}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
