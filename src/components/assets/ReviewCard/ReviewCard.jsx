import Rating from '../Rating/Rating';
import styles from './ReviewCard.module.css';

const ReviewCard = ({ reviewer_name, reviewer_rating, comment }) => {
  return (
    <>
      <div className={styles['reviewer-container']}>
        <div className={styles['reviewer-avatar']}>
          <p>{reviewer_name?.charAt(0).toUpperCase()}</p>
        </div>
        <div className={styles['rating-name']}>
          <div>
            <p>{reviewer_name}</p>
          </div>
          <div>
            <Rating rating={reviewer_rating} />
          </div>
        </div>
      </div>
      <div>
        <p className={styles['comment']}>{comment}</p>
      </div>
    </>
  );
};

export default ReviewCard;
