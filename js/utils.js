export const renderScreen = (element) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = element.trim();
  return wrapper;
};

const mainElement = document.querySelector(`.central`);

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};
