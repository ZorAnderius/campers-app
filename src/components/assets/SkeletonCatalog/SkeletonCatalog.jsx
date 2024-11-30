import styles from './SkeltonCatalog.module.css';
import { SkeletonFilter } from '../SkeletonFilter/SkeletonFilter';
import { SkeletonCamperCard } from '../SkeletonCamperCard/SkeletonCamperCard';
import { nanoid } from 'nanoid';

export const SkeletonCatalog = () => {
  return (
    <div className={styles['catalog-skeleton']}>
      <SkeletonFilter />
      <div className={styles['campers-skeleton']}>
        {Array(4)
          .fill(0)
          .map(() => {
            return <SkeletonCamperCard key={nanoid()} />;
          })}
      </div>
    </div>
  );
};
