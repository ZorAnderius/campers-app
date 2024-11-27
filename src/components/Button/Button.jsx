import styles from './Button.module.css';

export const Button = ({ btnStyle, type, children }) => {
  return (
    <button type={type} className={styles[btnStyle]}>
      {children}
    </button>
  );
};
