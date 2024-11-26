import { Link } from 'react-router-dom';

import styles from './NavButton.module.css';

export const NavButton = ({ type, pathTo, children }) => {
  return (
    <Link className={styles[type]} to={pathTo}>
      {children}
    </Link>
  );
};
