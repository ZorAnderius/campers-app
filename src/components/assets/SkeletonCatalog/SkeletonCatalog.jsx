import { nanoid } from 'nanoid';
import SkeletonFilter from '../SkeletonFilter/SkeletonFilter';
import SkeletonCamperCard from '../SkeletonCamperCard/SkeletonCamperCard';
import styles from './SkeltonCatalog.module.css';

const SkeletonCatalog = () => {
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

export default SkeletonCatalog;
