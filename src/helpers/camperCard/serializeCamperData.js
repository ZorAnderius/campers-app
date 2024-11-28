import { nanoid } from 'nanoid';
import { serializeFacilities } from './serializeFacilities';
import { serializeFormValue, serializeSizeValue } from './serializeFeatures';
import { serializePrice } from './serializePrice';

export const serializeFacilitiesBadge = (vehicle = {}) => {
  if (!vehicle) return;
  const {
    AC,
    TV,
    bathroom,
    kitchen,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    engine,
    transmission,
  } = vehicle;
  return serializeFacilities({
    AC,
    TV,
    bathroom,
    kitchen,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    engine,
    transmission,
  });
};

export const serializeVehiclesData = (vehicle = {}, type = '') => {
  if (!vehicle) return;
  const { id, name, description, gallery, price, rating, reviews, location } =
    vehicle;

  const baseFacilities = {
    price: serializePrice(price),
    location: location?.split(',')?.reverse()?.join(', '),
    rating: rating?.toFixed(1),
    reviewsQuantity: reviews?.length,
    facilities: serializeFacilities(vehicle),
    id,
    name,
    description,
    reviews,
  };
  return type === 'catalog'
    ? {
        ...baseFacilities,
        imgVehicle: gallery && gallery[0].original,
      }
    : {
        ...baseFacilities,
        gallery,
      };
};

export const serializeVehicleDetails = (vehicle = {}) => {
  if (!vehicle) return;
  const { form, length, width, height, tank, consumption } = vehicle;
  return [
    { feature: serializeFormValue(form), title: 'Form', id: nanoid() },
    { feature: serializeSizeValue(length), title: 'Length', id: nanoid() },
    { feature: serializeSizeValue(width), title: 'Width', id: nanoid() },
    { feature: serializeSizeValue(height), title: 'Height', id: nanoid() },
    { feature: serializeSizeValue(tank), title: 'Tank', id: nanoid() },
    { feature: consumption, title: 'Consumption', id: nanoid() },
  ];
};
