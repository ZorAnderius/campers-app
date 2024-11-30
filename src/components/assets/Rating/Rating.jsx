import { Icon } from '../Icon/Icon';

import styles from './Rating.module.css';

const Rating = ({ rating }) => {
  const stars = 5;
  return (
    <ul className={styles['rating-list']}>
      {[...Array(stars)].map((_, index) => (
        <li key={index} className={styles['star']}>
          {index < rating ? (
            <Icon name="icon-star" style="rating" size={16} />
          ) : (
            <Icon name="icon-star" style="empty-rating" size={16} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Rating;
