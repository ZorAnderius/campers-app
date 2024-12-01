export const serializeInitialValues = ({
  form,
  transmision,
  engine,
  ...values
}) => {
  let serializeValue = {};
  if (transmision) {
    serializeValue[transmision] = true;
  }

  if (engine) {
    serializeValue[engine] = true;
  }
  return {
    ...values,
    ...serializeValue,
    type: form ?? '',
  };
};
