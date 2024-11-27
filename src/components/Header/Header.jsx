import { useRef, useState } from 'react';
import { Container } from '../Container/Container';
import { HeaderObserver } from '../HeaderObserver/HeaderObserver';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.css';
import clsx from 'clsx';

export const Header = () => {
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
