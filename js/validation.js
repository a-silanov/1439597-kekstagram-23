import {onEscKeyDown} from './utils.js';
import {activateScaleEditor, deactivateScaleEditor} from './scale.js';
import {createSlider, removeSlider} from './editor.js';
import {showSuccessMessage, showErrorMessage} from './alerts.js';
import {sendData} from './api.js';

const HASHTAGS_COUNT = 5;
const HASHTAGS_CHECK = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_COMMENT_LENGTH = 140;
const TEXT_HASHTAG_VALIDATE = `Хэштег должен начинаться со знака "#" и включать в себя только буквы и цифры.
          Количетво символов после знака "#" должно быть не менее 1 и не более 19. Чтобы добавить новый хэш-тег
          добавьте пробел.`;
const HASHTAGS_NO_REPEAT = 'Хэштеги не должны повторяться';
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeUploadForm = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const textComment = uploadForm.querySelector('.text__description');


const onUploadFile = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  activateScaleEditor();
  createSlider();
};

uploadFile.addEventListener('change', onUploadFile);

closeUploadForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  deactivateScaleEditor();
  removeSlider();
});

document.addEventListener('keydown', onEscKeyDown);

const onSuccess = () => {
  closeUploadForm();
  showSuccessMessage();
};


const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    sendData(onSuccess, showErrorMessage, formData);
  });
};

setUserFormSubmit(onSuccess);

const onFormValidComment = (evt) => {
  const commentLength = evt.target.value.length;
  if (commentLength > MAX_COMMENT_LENGTH) {
    evt.target.setCustomValidity(`Удалите лишние ${commentLength - MAX_COMMENT_LENGTH} симв.`);
  }else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
};

const onFormValidateHashtags = (evt) => {
  if (hashtagsInput.value !== '') {
    const hashtags = hashtagsInput.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag);
    const hashtagDuplicates = new Set (hashtags);
    hashtags.forEach((hashtag) => {
      if(!HASHTAGS_CHECK.test(hashtag)) {
        hashtagsInput.setCustomValidity(TEXT_HASHTAG_VALIDATE);
        evt.preventDefault();
      } else if (hashtagDuplicates.size !== hashtags.length) {
        hashtagsInput.setCustomValidity(HASHTAGS_NO_REPEAT);
        evt.preventDefault();
      } else {
        hashtagsInput.setCustomValidity('');
      }
      hashtagsInput.reportValidity();
    });

    if (hashtags.length > HASHTAGS_COUNT) {
      hashtagsInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    }
  }
};
//строка для проверки
hashtagsInput.addEventListener('input', onFormValidateHashtags);
textComment.addEventListener('input', onFormValidComment);
