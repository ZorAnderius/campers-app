export const selectCampers = state => state.vehicles.campers;

export const selectFavouriteCampers = state => state.vehicles.favorites;

export const selectTotalCampers = state => state.vehicles.totalCampers;

export const selectCurrentCamper = state => state.vehicles.currentCamper;

export const selectPage = state => state.vehicles.page;

export const selectIsLoading = state => state.vehicles.isLoading;

export const selectError = state => state.vehicles.error;
