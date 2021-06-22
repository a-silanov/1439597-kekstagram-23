const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const isEscKeyDown = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const hideElement = (el) => el.classList.add('hidden');

export {getRandomNumber};
export {isEscKeyDown, hideElement};
