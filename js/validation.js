import {isEscKeyDown} from './util.js';

const HASHTAGS_COUNT = 5;
const HASHTAGS_CHECK = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_COMMENT_LENGTH = 140;

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeUploadForm = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const textComment = uploadForm.querySelector('.text__description');
const hashtagDuplicates = new Set ();

const onUploadFile = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

uploadFile.addEventListener('change', onUploadFile);

closeUploadForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscKeyDown) {
    evt.preventDefault();
    document.body.classList.remove('modal-open');
    uploadOverlay.classList.add('hidden');
  }
});

const validComment = () => {
  textComment.addEventListener('input', (evt) =>{
    const commentLength = evt.target.value.length;
    if (commentLength > MAX_COMMENT_LENGTH) {
      evt.target.setCustomValidity(`Удалите лишние ${commentLength - MAX_COMMENT_LENGTH} симв.`);
    }else {
      evt.target.setCustomValidity('');
    }
    evt.target.reportValidity();
  });
};

hashtagsInput.addEventListener('input', () => {
  if (hashtagsInput.length > HASHTAGS_COUNT) {
    hashtagsInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
  } else if (!HASHTAGS_CHECK) {
    hashtagsInput.setCustomValidity('Хэштег не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи');
  } else if (hashtagsInput.includes('#')) {
    hashtagsInput.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
  } else if (hashtagDuplicates.size !== hashtagsInput.length) {
    hashtagsInput.setCustomValidity('Хеш-тег не должен повторяться');
  } else {
    hashtagsInput.setCustomValidity('');
  }

  hashtagsInput.reportValidity();
});

export {validComment};
