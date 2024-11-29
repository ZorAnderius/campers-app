import { Icon } from '../assets/Icon/Icon';

export const CamperFacilities = ({ info: { title, icon } }) => {
  return (
    <>
      <Icon name={icon} size={20} />
      <p>{title}</p>
    </>
  );
};
