import { Field } from 'formik';
import FilterBox from '../FilterBox/FilterBox';
import styles from './FilterField.module.css';

const FilterField = ({ labelId, data, type, children }) => {
  return (
    <>
      <h2 className={styles['filter-box-title']}>{children}</h2>
      <ul className={styles['filter-box-list']}>
        {data?.map(({ id, value, title, icon }) => {
          return (
            <li key={id}>
              <Field
                id={labelId}
                name={type === 'radio' ? 'type' : value}
                value={type === 'radio' ? value : undefined}
                type={type}
                title={title}
                style={icon}
                component={FilterBox}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilterField;
