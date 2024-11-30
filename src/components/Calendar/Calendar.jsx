import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import { enUS } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import styles from './Calendar.module.css';

const locale = {
  ...enUS,
  localize: {
    ...enUS.localize,
    day: n => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return days[n];
    },
  },
};

const Calendar = ({ field, props, setFieldValue, validateField, value }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    if (value && value !== dateRange) {
      setDateRange([null, null]);
    }
  }, [value]);

  const handleDateChange = update => {
    setDateRange(update);
    setFieldValue('dataBooking', update);
    validateField('dataBooking');
  };
  return (
    <DatePicker
      {...field}
      {...props}
      selectsRange
      required
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      autoComplete="off"
      locale={locale}
      onChange={handleDateChange}
      placeholderText="Booking date*"
      dateFormat="dd/MM/yyyy"
      shouldCloseOnSelect={false}
      className={styles['field-input']}
    />
  );
};

export default Calendar;
