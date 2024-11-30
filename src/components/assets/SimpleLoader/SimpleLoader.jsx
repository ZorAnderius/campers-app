import { SpinnerDotted } from 'spinners-react';
import styles from './SimplyLoader.module.css';

export const SimpleLoader = () => {
  return (
    <div className={styles['simply-loader']}>
      <SpinnerDotted size={350} thickness={100} speed={100} color="#b9b8b8" />
    </div>
  );
};
