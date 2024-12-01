import Skeleton from 'react-loading-skeleton';
import { nanoid } from 'nanoid';
import styles from './SkeletonCamperCard.module.css';

const SkeletonCamperCard = () => {
  return (
    <div className={styles['catalog-wrapper']}>
      <Skeleton width={292} height={320} className={styles['border-10']} />
      <div className={styles['camper-info-container']}>
        <div className={styles['camper-info-title-price']}>
          <div className={styles['title-wrap']}>
            <Skeleton width={200} height={32} />
            <div className={styles['camper-price']}>
              <Skeleton width={150} height={32} />
              <Skeleton width={24} height={24} />
            </div>
          </div>
          <div className={styles['rating-location-wrapper']}>
            <Skeleton width={133} height={24} />
            <Skeleton width={118} height={24} />
          </div>
        </div>
        <Skeleton height={24} />
        <ul className={styles['facilities-container']}>
          {Array(8)
            .fill(0)
            .map(() => (
              <li key={nanoid()} className={styles['facilities-item']}>
                <Skeleton
                  width={121}
                  height={48}
                  className={styles['border-100']}
                />
              </li>
            ))}
        </ul>
        <Skeleton width={166} height={56} className={styles['border-200']} />
      </div>
    </div>
  );
};

export default SkeletonCamperCard;
