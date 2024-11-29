import { initialState } from '../../redux/filters/initialState';

export const correctionFilterValue = filter => {
  const tempObj = {};
  if (
    typeof filter !== 'object' ||
    filter === null ||
    typeof initialState !== 'object' ||
    initialState === null
  ) {
    return tempObj;
  }

  const keys1 = Object.keys(filter);
  const keys2 = Object.keys(initialState);

  if (keys1.length !== keys2.length) return tempObj;
  for (const key of keys1) {
    if (
      (!keys2.includes(key) || filter[key] !== initialState[key]) &&
      filter[key]
    ) {
      tempObj[key] = filter[key];
    }
  }

  return tempObj;
};
