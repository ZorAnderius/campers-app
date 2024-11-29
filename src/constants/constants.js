export const ROUTE = Object.freeze({
  home: '/',
  catalog: '/catalog',
  camperId: '/catalog/:id',
  features: 'features',
  reviews: 'reviews',
  error: '*',
});

export const PAGINATION = Object.freeze({
  limit: 4,
});

export const STATUS = Object.freeze({
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
});
