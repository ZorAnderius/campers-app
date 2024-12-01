import Icon from '../assets/Icon/Icon';

const CamperFacilities = ({ info: { title, icon } }) => {
  return (
    <>
      <Icon name={icon} size={20} />
      <p>{title}</p>
    </>
  );
};

export default CamperFacilities;
