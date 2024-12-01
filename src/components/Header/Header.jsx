import clsx from 'clsx';
import { useRef, useState } from 'react';
import Container from '../assets/Container/Container';
import HeaderObserver from '../assets/HeaderObserver/HeaderObserver';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState();
  const observRef = useRef();
  return (
    <>
      <HeaderObserver ref={observRef} setVisible={setIsVisible} />
      <header className={clsx(styles['header'], !isVisible && styles['fixed'])}>
        <Container>
          <Navigation />
        </Container>
      </header>
    </>
  );
};

export default Header;
