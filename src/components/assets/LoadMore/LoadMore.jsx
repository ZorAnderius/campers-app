import { forwardRef } from 'react';
import styles from './LoadMore.module.css';

export const LoadMore = forwardRef(({ onClick }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={styles['load-more']}
      onClick={onClick}
    >
      Load more
    </button>
  );
});

LoadMore.displayName = 'LoadMore';