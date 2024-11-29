import styles from './NotifyEmpty.module.css';
export const NotifyEmpty = () => {
  return (
    <div className={styles}>
      <h1>No campers found with the selected parameters</h1>
    </div>
  );
};
