import Skeleton from 'react-loading-skeleton';
import { nanoid } from 'nanoid';
import styles from './SkeletonFilter.module.css';

const SkeletonFilter = () => {
  return (
    <aside className={styles['filter-skeleton']}>
      <div className={styles['skeleton-location']}>
        <Skeleton width={100} height={24} />
        <Skeleton height={56} className={styles['border-12']} />
      </div>

      <div className={styles['skeleton-filter-block']}>
        <Skeleton width={100} height={24} style={{ marginBottom: '8px' }} />

        <div className={styles['skeleton-checkbox']}>
          <Skeleton width={200} height={24} />
          <Skeleton height={1} />
          <div className={styles['filter-block-item']}>
            {Array(14)
              .fill(0)
              .map(() => {
                return (
                  <Skeleton
                    key={nanoid()}
                    width={111}
                    height={96}
                    className={styles['border-12']}
                  />
                );
              })}
          </div>
        </div>
        <div className={styles['skeleton-checkbox']}>
          <Skeleton width={200} height={24} />
          <Skeleton height={1} />
          <div className={styles['filter-block-item']}>
            {Array(3)
              .fill(0)
              .map(() => {
                return (
                  <Skeleton
                    key={nanoid()}
                    width={111}
                    height={96}
                    className={styles['border-12']}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <Skeleton width={166} height={56} className={styles['border-200']} />
    </aside>
  );
};

export default SkeletonFilter;
