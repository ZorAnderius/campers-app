import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import { ROUTE } from '../../constants/constants';
// import { Container } from '../../components/assets/Container/Container';

const ErrorPage = () => {
  return (
    <div className={styles['error-wrapper']}>
      <h1 className={styles['error-title']}>404</h1>
      <p className={styles['message']}>
        Oops! You&apos;ve been pulled into a black hole.
      </p>

      <div className={styles['black-hole']}></div>

      <div
        className={styles['swirling-text']}
        style={{
          top: '50%',
          left: '50%',
          animationDelay: '0s',
        }}
      >
        Lost...
      </div>
      <div
        className={styles['swirling-text']}
        style={{
          top: '50%',
          left: '50%',
          animationDelay: '1s',
        }}
      >
        404...
      </div>
      <div
        className={styles['swirling-text']}
        style={{
          top: '50%',
          left: '50%',
          animationDelay: '2s',
        }}
      >
        Help!
      </div>
      <Link to={ROUTE.home} className={styles['button']}>
        Escape to Safety
      </Link>
    </div>
  );
};

export default ErrorPage;

// const ErrorPage = () => {
//   return (
//     <div className={styles['error-wrapper']}>
//       <h1 className={styles['error-code']}>404</h1>
//       <p className={styles['message']}>
//         {' '}
//         Oops! It seems like you are lost in the way.
//       </p>
//       <div className={styles['spaceship']}>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3555/3555577.png"
//           alt="Spaceship"
//         />
//       </div>
//       <Link to={ROUTE.home} className={styles['button']}>
//         Go Home
//       </Link>
//     </div>
//   );
// };
