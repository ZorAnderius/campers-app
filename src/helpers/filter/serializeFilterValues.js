export const serializeFilterValues = ({
  location,
  type,
  automatic,
  manual,
  petrol,
  diesel,
  hybrid,
  ...values
}) => {
  return {
    ...values,
    location: location.trim(),
    form: type,
    transmission: (automatic && 'automatic') || (manual && 'manual') || '',
    engine:
      (petrol && 'petrol') ||
      (diesel && 'diesel') ||
      (hybrid && 'hybrid') ||
      '',
  };
};
