import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperFacilities from '../CamperFacilities/CamperFacilities';
import Icon from '../assets/Icon/Icon';
import NavButton from '../assets/NavButton/NavButton';
import { ROUTE } from '../../constants/constants';
import { serializeVehiclesData } from '../../helpers/camperCard/serializeCamperData';
import {
  addToFavourite,
  removeFromFavourite,
} from '../../redux/vehicles/slice';
import { selectFavouriteCampers } from '../../redux/vehicles/selector';
import styles from './Camper.module.css';

const Camper = ({ camper }) => {
  const [active, setActive] = useState(false);
  const favouriteCampers = useSelector(selectFavouriteCampers);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    camper => {
      setActive(!active);
      if (active) {
        dispatch(removeFromFavourite(camper));
      } else {
        dispatch(addToFavourite(camper));
      }
    },
    [dispatch, active]
  );

  const updatedCamper = serializeVehiclesData(camper, 'catalog');
  const {
    name,
    imgVehicle,
    price,
    rating,
    reviewsQuantity,
    location,
    description,
    facilities,
  } = updatedCamper;

  useEffect(() => {
    setActive(!!favouriteCampers?.find(({ id }) => id === camper.id));
  }, [favouriteCampers, camper.id]);

  return (
    <>
      <div className={styles['thumb-img']}>
        <img className={styles['camper-img']} src={imgVehicle} alt={name} />
      </div>
      <div className={styles['camper-info-container']}>
        <div className={styles['camper-info-title-price']}>
          <div className={styles['title-wrap']}>
            <h2 className={styles['camper-title']}>{name}</h2>
            <div className={styles['camper-price']}>
              <p>{price}</p>
              <button
                className={clsx(
                  styles['subscribe-btn'],
                  active && styles['active-subscribe']
                )}
                onClick={() => handleClick(camper)}
              >
                <Icon name="icon-heart" style={'subscribe'} size={24} />
              </button>
            </div>
          </div>
          <div className={styles['rating-location-wrapper']}>
            <div className={styles['rating-wrapper']}>
              <Icon name={'icon-star'} style={'rating'} size={16} />
              <NavButton
                type="review"
                link={{
                  pathname: `${ROUTE.catalog}/${updatedCamper.id}/${ROUTE.reviews}`,
                  state: { scrollToReviews: true },
                }}
              >
                <p>
                  {rating}({reviewsQuantity}{' '}
                  {reviewsQuantity <= 1 ? 'Review' : 'Reviews'})
                </p>
              </NavButton>
            </div>
            <div className={styles['location-wrapper']}>
              <Icon name={'icon-map'} size={16} />
              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={styles['camper-description']}>{description}</p>
        <ul className={styles['facilities-container']}>
          {facilities?.map(facility => (
            <li key={facility.id} className={styles['facilities-item']}>
              <CamperFacilities info={facility} />
            </li>
          ))}
        </ul>
        <NavButton
          type="show-more"
          link={`${ROUTE.catalog}/${updatedCamper.id}/${ROUTE.features}`}
        >
          Show more
        </NavButton>
      </div>
    </>
  );
};

export default Camper;
