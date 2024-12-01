import styles from './Button.module.css';

const Button = ({ btnStyle, type, children, onClick = () => {} }) => {
  return (
    <button type={type} className={styles[btnStyle]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
