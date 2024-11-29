export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfiled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
