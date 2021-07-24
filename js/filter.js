import {debounce, shuffle} from './utils.js';
import {getCurrentComments} from './storage.js';
const filterForm = document.querySelector('.img-filters__form');
const imgFilters = document.querySelector('.img-filters');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');


const clearPosts = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((photo) => photo.remove());
};

const compareAmountComments = (amountA, amountB) => {
  const amountCommentsA = amountA.comments.length;
  const amountCommentsB = amountB.comments.length;

  return amountCommentsB - amountCommentsA;
};

const startFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
  const showDefault = () => {
    clearPosts();
  };

  const showRandom = () => {
    clearPosts();
    const posts = getCurrentComments().slice();
    shuffle(posts);
  };

  const showDiscussed = () => {
    clearPosts();
    const discussedPosts = getCurrentComments().slice();
    discussedPosts.sort(compareAmountComments);
  };

  const changeFilter = (evt) => {
    const filterBtn = evt.target;
    switch (filterBtn.id) {
      case 'filter-default':
        showDefault();
        break;

      case 'filter-random':
        showRandom();
        break;

      case 'filter-discussed':
        showDiscussed();
        break;
    }
  };

  const changeActiveBtn = (evt) => {
    filterButtons.forEach((button) => button.classList.toggle('img-filters__button--active', button === evt.target));
  };

  const debouncedFilter = debounce(changeFilter);

  const changeView = (evt) => {
    changeActiveBtn(evt);
    debouncedFilter(evt);
  };

  filterForm.addEventListener('click', changeView);
};

export {startFilters};
