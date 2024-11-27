import { Field, Form, Formik } from 'formik';
import styles from './Filter.module.css';
import { useId } from 'react';
import clsx from 'clsx';

const initialValues = {
  location: '',
};

export const Filter = () => {
  const locationId = useId();
  return (
    <aside className={styles['filter']}>
      <Formik initialValues={initialValues}>
        <Form className={styles['form']}>
          <label htmlFor={locationId} className={styles['location-container']}>
            <span className={styles['location-title']}>Location</span>
            <div className={styles['location-input-wrap']}>
              <Field
                className={styles['location-input']}
                id={locationId}
                name="location"
                type="text"
                placeholder="City"
              />
              <span className={clsx('icon-Map1', styles['icon'])}></span>
            </div>
          </label>

          <label></label>
        </Form>
      </Formik>
    </aside>
  );
};
