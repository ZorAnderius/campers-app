import { useDispatch, useSelector } from 'react-redux';
import { Camper } from '../Camper/Camper';
import {
  selectCampers,
  selectError,
  selectPage,
  selectTotalCampers,
} from '../../redux/vehicles/selector';
import styles from './CamperList.module.css';
import { LoadMore } from '../assets/LoadMore/LoadMore';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { PAGINATION, ROUTE } from '../../constants/constants';
import { setPage } from '../../redux/vehicles/slice';
import { getVehicles } from '../../redux/vehicles/operation';
import { NotifyEmpty } from '../assets/NotifyEmpty/NotifyEmpty';
import { useNavigate } from 'react-router-dom';
import { scrollToLoad } from '../../helpers/scroll/scrollToTop';

const margin = 110;

export const CamperList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);
  const totalCampers = useSelector(selectTotalCampers);
  const page = useSelector(selectPage);
  const lodaMoreRef = useRef(null);

  useEffect(() => {
    if (error) {
      if (!error.includes('404')) {
        navigate(ROUTE.error);
      }
    }
  }, [error, navigate]);

  const totalPages = useMemo(
    () => Math.ceil(totalCampers / PAGINATION.limit),
    [totalCampers]
  );

  const handleClick = useCallback(() => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
      dispatch(getVehicles());
      const scrollPosition =
        lodaMoreRef.current.getBoundingClientRect().top +
        document.documentElement.scrollTop -
        margin;
      scrollToLoad(scrollPosition);
    }
  }, [dispatch, page, totalPages]);

  return (
    <main className={styles['catalog-wrapper']}>
      {!error
        ? campers && (
            <>
              <ul className={styles['camper-container']}>
                {campers?.map(camper => (
                  <li key={camper.id} className={styles['camper-card']}>
                    <Camper camper={camper} />
                  </li>
                ))}
              </ul>
              {totalCampers > PAGINATION.limit && page <= totalPages - 1 && (
                <LoadMore ref={lodaMoreRef} onClick={handleClick} />
              )}
            </>
          )
        : error.includes('404') && <NotifyEmpty />}
    </main>
  );
};
