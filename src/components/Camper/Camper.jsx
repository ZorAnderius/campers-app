import clsx from 'clsx';
import { serializeVehiclesData } from '../../helpers/camperCard/serializeCamperData';
import { NavButton } from '../NavButton/NavButton';

import styles from './Camper.module.css';
import { ROUTE } from '../../constants/constants';
import { CamperFacilities } from '../CamperFacilities/CamperFacilities';
import { Icon } from '../Icon/Icon';
import { useCallback, useState } from 'react';

export const Camper = ({ camper }) => {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    setActive(!active);
  }, [active]);

  const updatedVehicle = serializeVehiclesData(camper, 'catalog');
  const {
    name,
    imgVehicle,
    price,
    rating,
    reviewsQuantity,
    location,
    description,
    facilities,
  } = updatedVehicle;
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
                onClick={handleClick}
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
                  pathname: `${ROUTE.catalog}/${updatedVehicle.id}/${ROUTE.reviews}`,
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
          link={`${ROUTE.catalog}/${updatedVehicle.id}/${ROUTE.features}`}
        >
          Show more
        </NavButton>
      </div>
    </>
  );
};
