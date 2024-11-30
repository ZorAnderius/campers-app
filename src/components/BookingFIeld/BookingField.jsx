import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
// import { useDispatch } from 'react-redux';
import styles from './BookingField.module.css';
import { Button } from '../assets/Button/Button';
import { Calendar } from '../Calendar/Calendar';

const initialValues = {
  name: '',
  email: '',
  dataBooking: [null, null],
  textarea: '',
};

const bookingSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, 'Your name is too short')
    .max(50, 'Your name is too long')
    .required('Name is required'),
  email: Yup.string()
    .trim()
    .email('Invalid email')
    .required('Email is required'),
  dataBooking: Yup.array()
    .of(Yup.date().nullable())
    .test('is-valid-range', 'Select both start and end dates', value => {
      return value && value[0] && value[1];
    })
    .required('Date range is required'),
});

export const BookingField = () => {
  const nameId = useId();
  const emailId = useId();
  const dateId = useId();
  //   const dispatch = useDispatch();

  const handleSubmit = ({ name, email, dataBooking }, action) => {
    // const nameCondition = name && name.trim() !== '';
    // const emailCondition = email && email.trim() !== '';
    // const dataBookingCondition = dataBooking;
    console.log(name);
    console.log(email);
    console.log(dataBooking);

    // if (nameCondition && emailCondition && dataBookingCondition) {
    //   dispatch(
    //     notify({
    //       message: `Thank you ${name}! You journey will begin soon.`,
    //       toastType: 'success',
    //     })
    //   );
    // }
    action.resetForm();
  };
  return (
    <div className={styles['booking-form']}>
      <div className={styles['booking-title']}>
        <h2 className={styles['title']}>Book your campervan now</h2>
        <p className={styles['subtitle']}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, validateField }) => (
          <Form className={styles['form']}>
            <label htmlFor={nameId} className={styles['input-wrap']}>
              <Field
                type="text"
                name="name"
                className={styles['field-input']}
                placeholder="Name*"
              />
              <ErrorMessage
                className={styles['error-msg']}
                name="name"
                component="div"
              />
            </label>
            <label htmlFor={emailId} className={styles['input-wrap']}>
              <Field
                type="email"
                name="email"
                className={styles['field-input']}
                placeholder="Email*"
              />
              <ErrorMessage
                className={styles['error-msg']}
                name="email"
                component="div"
              />
            </label>
            <label htmlFor={dateId} className={styles['input-wrap']}>
              <Field
                name="dataBooking"
                component={Calendar}
                validateField={validateField}
                setFieldValue={setFieldValue}
              />
              <ErrorMessage
                className={styles['error-msg']}
                name="dataBooking"
                component="div"
              />
            </label>
            <Field name="textarea" placeholder="Comment*">
              {({ field }) => (
                <InputTextarea
                  className={styles.comment}
                  placeholder="Comment"
                  autoResize={true}
                  rows={3}
                  value={field.value}
                  onChange={e => setFieldValue(field.name, e.target.value)}
                />
              )}
            </Field>
            <Button type="submit" btnStyle="submitForm">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
