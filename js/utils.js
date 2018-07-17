export const renderScreen = (element) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = element.trim();
  return wrapper;
};

export const changeTemplate = (idx) => {
  if (idx >= MIN_INDEX && idx < MAX_INDEX) {
    changeScreen(idx);
    currentIndex = idx;
  }
};
