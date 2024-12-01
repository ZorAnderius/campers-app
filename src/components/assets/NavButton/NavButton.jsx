import { Link } from 'react-router-dom';

import styles from './NavButton.module.css';

const NavButton = ({ type, link, children }) => {
  return (
    <Link className={styles[type]} to={link}>
      {children}
    </Link>
  );
};

export default NavButton;
