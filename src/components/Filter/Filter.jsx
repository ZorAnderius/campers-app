import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import React, { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vehicleEquipments } from '../../helpers/filter/vehicleEquipments';
import { vehicleTypes } from '../../helpers/filter/vehicleTypes';
import { serializeFilterValues } from '../../helpers/filter/serializeFilterValues';
import { initialValues } from '../../helpers/filter/initialValues';
import { changeFilter, resetFilter } from '../../redux/filters/slice';
import { resetVehicals } from '../../redux/vehicles/slice';
import { scrollToLoad } from '../../helpers/scroll/scrollToTop';
import { isExist } from '../../helpers/filter/isExist';
import { selectFilter } from '../../redux/filters/selector';
import { serializeInitialValues } from '../../helpers/filter/serializeInitialValue';
import FilterField from '../FilterField/FilterField';
import Button from '../assets/Button/Button';
import Icon from '../assets/Icon/Icon';
import styles from './Filter.module.css';

const Filter = React.memo(() => {
  const dispatch = useDispatch();
  const locationId = useId();
  const equipmentId = useId();
  const typeId = useId();
  const btnId = useId();
  const filterValue = useSelector(selectFilter);

  const handleSubmit = values => {
    dispatch(resetVehicals());
    dispatch(changeFilter(serializeFilterValues(values)));
  };

  const initialValuesData = filterValue
    ? serializeInitialValues(filterValue)
    : initialValues;
  return (
    <aside className={styles['filter']}>
      <Formik initialValues={initialValuesData} onSubmit={handleSubmit}>
        {({ values, setValues }) => {
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
              <label htmlFor={btnId} className={styles['btn-container']}>
                <Button type={'submit'} btnStyle={'submit'}>
                  Submit
                </Button>

                {isExist(values) && (
                  <Button
                    type="button"
                    btnStyle="reset"
                    onClick={() => {
                      setValues(initialValues);
                      dispatch(resetFilter());
                      scrollToLoad(0);
                    }}
                  >
                    Reset
                  </Button>
                )}
              </label>
            </Form>
          );
        }}
      </Formik>
    </aside>
  );
});

Filter.displayName = 'Filter';

export default Filter;
