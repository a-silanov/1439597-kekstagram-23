const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const textComment = uploadForm.querySelector('.text__description');

const isEscKeyDown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (hashtagsInput === document.activeElement) {
      evt.stopPropagation();
    } else if (textComment === document.activeElement) {
      evt.stopPropagation();
    } else {
      evt.preventDefault();
      document.body.classList.remove('modal-open');
      uploadOverlay.classList.add('hidden');
      hashtagsInput.value = '';
      textComment.value = '';
      uploadFile.value = '';
    }
  }
};

const hideElement = (el) => el.classList.add('hidden');
export {getRandomNumber};
export {isEscKeyDown, hideElement};
