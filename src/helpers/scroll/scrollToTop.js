export const scrollToLoad = axiosY => {
  setTimeout(() => {
    window.scrollTo({
      top: axiosY,
      behavior: 'smooth',
    });
  }, 350);
};
