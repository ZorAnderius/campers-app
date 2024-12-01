import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import { ROUTE } from '../../constants/constants';
import logoIcon from '../../assets/logo.svg';
import styles from './Navigation.module.css';

const activeStyle = ({ isActive }) => {
  return clsx(styles['nav-link'], isActive && styles['active']);
};

const Navigation = () => {
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

export default Navigation;
