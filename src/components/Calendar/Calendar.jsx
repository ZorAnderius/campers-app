import { useState } from 'react';
import DatePicker from 'react-datepicker';
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

export const Calendar = ({ field, props, setFieldValue, validateField }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = update => {
    console.log('Updated date range:', update);
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
