import { vehicleEquipments } from '../filter/vehicleEquipments';

export const serializeFacilities = data => {
  let facilitiesData = Object.entries(data).reduce(
    (acc, [key, value]) =>
      value === true ? [...acc, { [key]: value, title: key }] : acc,
    []
  );
  facilitiesData = [
    ...facilitiesData,
    { [data.engine]: data.engine, title: data.engine },
    { [data.transmission]: data.transmission, title: data.transmission },
  ];
  const filterFacilities = vehicleEquipments.filter(data =>
    facilitiesData.find(
      ({ title }) => title.toLowerCase() === data.title.toLowerCase()
    )
  );
  return filterFacilities;
};
