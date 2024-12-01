import clsx from 'clsx';
import sprite from '../../../assets/icons.svg';
import styles from './Icon.module.css';

const Icon = ({ name, style = '', size = 32 }) => {
  return (
    <svg
      className={clsx(style && styles[style])}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
