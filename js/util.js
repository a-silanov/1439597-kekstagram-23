const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomNumber};

const isEscKeyDown = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const hideElement = (el) => el.classList.add('hidden');
const showElement = (el) => el.classList.remove('hidden');
export {isEscKeyDown, hideElement, showElement};
