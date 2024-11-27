import { Field, Form, Formik } from 'formik';
import styles from './Filter.module.css';
import { useId } from 'react';
import clsx from 'clsx';
import { FilterField } from '../FilterField/FilterField';
import { vehicleEquipments } from '../../helpers/filter/vehicleEquipments';
import { vehicleTypes } from '../../helpers/filter/vehicleTypes';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

const initialValues = {
  location: '',
};

export const Filter = () => {
  const locationId = useId();
  const equipmentId = useId();
  const typeId = useId();

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <aside className={styles['filter']}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form className={styles['form']}>
              <label
                htmlFor={locationId}
                className={clsx(
                  styles['location-container'],
                  values.location && styles['active']
                )}
              >
                <span className={styles['location-title']}>Location</span>
                <div className={styles['location-input-wrap']}>
                  <Field
                    className={clsx(styles['location-input'])}
                    id={locationId}
                    name="location"
                    type="text"
                    placeholder="City"
                  />
                  <Icon name={'icon-map'} style={'icon'} size={20} />
                </div>
              </label>

              <fieldset className={styles['filter-block']}>
                <legend className={styles['filter-block-title']}>
                  Filters
                </legend>
                <label
                  htmlFor={equipmentId}
                  className={styles['filter-block-item']}
                >
                  <FilterField labelId={equipmentId} data={vehicleEquipments}>
                    Vehicle equipment
                  </FilterField>
                </label>
                <label htmlFor={typeId} className={styles['filter-block-item']}>
                  <FilterField
                    labelId={typeId}
                    type="radio"
                    data={vehicleTypes}
                  >
                    Vehicle type
                  </FilterField>
                </label>
              </fieldset>
              <Button type={'submit'} btnStyle={'submit'}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </aside>
  );
};
