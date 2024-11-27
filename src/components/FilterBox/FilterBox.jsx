import clsx from 'clsx';
import { useField } from 'formik';

import styles from './FilterBox.module.css';
import { Icon } from '../Icon/Icon';

export const FilterBox = ({ style, title, field, type }) => {
  const { name, value, checked } = field;
  const [fieldProps, , helpers] = useField(name);

  const handleChange = () => {
    type === 'radio'
      ? helpers.setValue(value)
      : helpers.setValue(!fieldProps.value);
  };

  const styleValue = type === 'radio' ? checked : value;

  return (
    <button
      type="button"
      onClick={handleChange}
      className={clsx(styles['filter-btn'], styleValue && styles['active'])}
    >
      <Icon name={style} style={'filter'} />
      <h3 className={styles['filter-btn-title']}>{title}</h3>
    </button>
  );
};
