import { useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/vehicles/selector';
import {
  serializeFacilitiesBadge,
  serializeVehicleDetails,
} from '../../helpers/camperCard/serializeCamperData';
import CamperFacilities from '../CamperFacilities/CamperFacilities';
import Title from '../assets/Title/Title';
import styles from './Features.module.css';

const Features = () => {
  const camper = useSelector(selectCurrentCamper);
  const facilities = serializeFacilitiesBadge(camper);
  const camperDetails = serializeVehicleDetails(camper);
  return (
    <div className={styles['feature-container']}>
      {facilities?.length > 0 && (
        <ul className={styles['feature-facilities']}>
          {facilities?.map(facility => (
            <li key={facility.id} className={styles['facility-item']}>
              <CamperFacilities info={facility} />
            </li>
          ))}
        </ul>
      )}
      <div className={styles['camper-details']}>
        <Title>Vehicle details</Title>
        {camperDetails?.length > 0 && (
          <ul className={styles['details-list']}>
            {camperDetails?.map(({ feature, title, id }) => (
              <li key={id} className={styles['details-item']}>
                <p>{title}</p>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Features;
