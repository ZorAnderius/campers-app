export const scrollToLoad = axiosY => {
  console.log(axiosY);
  setTimeout(() => {
    window.scrollTo({
      top: axiosY,
      behavior: 'smooth',
    });
  }, 300);
};
