import { useSelector } from 'react-redux';
import { Camper } from '../Camper/Camper';
import { selectCampers } from '../../redux/vehicles/selector';
import styles from './CamperList.module.css';
import { LoadMore } from '../LoadMore/LoadMore';

export const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <main className={styles['catalog-wrapper']}>
      {campers && (
        <ul className={styles['camper-container']}>
          {campers?.map(camper => {
            return (
              <li key={camper.id} className={styles['camper-card']}>
                <Camper camper={camper} />
              </li>
            );
          })}
        </ul>
      )}
      <LoadMore />
    </main>
  );
};
