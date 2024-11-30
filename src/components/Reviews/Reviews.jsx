import { useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/vehicles/selector';
import ReviewCard from '../assets/ReviewCard/ReviewCard';

import styles from './Reviews.module.css';

export const Reviews = () => {
  const camper = useSelector(selectCurrentCamper);

  return (
    camper && (
      <ul className={styles['review-list']}>
        {camper?.reviews?.map((review, idx) => (
          <li
            key={`${review.review_name}${idx}${review.review_rating}`}
            className={styles['review-item']}
          >
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
    )
  );
};
