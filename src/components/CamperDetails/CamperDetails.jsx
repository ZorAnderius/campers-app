import { useSelector } from 'react-redux';
import { serializeVehiclesData } from '../../helpers/camperCard/serializeCamperData';
import { Icon } from '../assets/Icon/Icon';
import { selectCurrentCamper } from '../../redux/vehicles/selector';
import { NavButton } from '../assets/NavButton/NavButton';
import { ROUTE } from '../../constants/constants';
import styles from './CamperDetails.module.css';

export const CamperDetails = () => {
  const camper = useSelector(selectCurrentCamper);
  const serializeCamper = serializeVehiclesData(camper);

  return (
    serializeCamper && (
      <div className={styles['camper-container']}>
        <div className={styles['camper-info-text']}>
          <h2 className={styles['title-camper']}>{serializeCamper.name}</h2>
          <div className={styles['camper-location-review']}>
            <div className={styles['camper-rating-container']}>
              <Icon name={'icon-star'} style="rating" size={16} />
              <NavButton type="review" link={ROUTE.reviews}>
                {serializeCamper.rating}({serializeCamper.reviewsQuantity}{' '}
                {serializeCamper.reviewsQuantity <= 1 ? 'Review' : 'Reviews'})
              </NavButton>
            </div>
            <div className={styles['location-wrapper']}>
              <Icon name={'icon-map'} size={16} />
              <p>{serializeCamper.location}</p>
            </div>
          </div>
          <p className={styles['camper-price']}>{serializeCamper.price}</p>
        </div>
        <ul className={styles['gallery-container']}>
          {serializeCamper.gallery?.map(({ original }, index) => (
            <li key={original + index} className={styles['camper-gallery']}>
              <img
                src={original}
                alt={serializeCamper.name}
                className={styles['img-camper']}
              />
            </li>
          ))}
        </ul>

        <p className={styles['camper-description']}>
          {serializeCamper.description}
        </p>
      </div>
    )
  );
};
