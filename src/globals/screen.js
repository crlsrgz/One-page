export const checkScreen = { width: window.innerWidth };

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const generateRandomFloat = (min, max) => {
  return Math.random(max - min) + min;
};
