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
const TEXT_HASHTAG_VALIDATE = `Хэштег должен начинаться со знака "#" и включать в себя только буквы и цифры.
          Количетво символов после знака "#" должно быть не менее 1 и не более 19. Чтобы добавить новый хэш-тег
          добавьте пробел.`;
const HASHTAGS_NO_REPEAT = 'Хэштеги не должны повторяться';


const onUploadFile = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

uploadFile.addEventListener('change', onUploadFile);

closeUploadForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
});

document.addEventListener('keydown', isEscKeyDown);

const validateComment = (evt) =>{
  const commentLength = evt.target.value.length;
  if (commentLength > MAX_COMMENT_LENGTH) {
    evt.target.setCustomValidity(`Удалите лишние ${commentLength - MAX_COMMENT_LENGTH} симв.`);
  }else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
};

const validateHashtags = () => {
  if (hashtagsInput.value !== '') {
    const hashtags = hashtagsInput.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag);
    const hashtagDuplicates = new Set (hashtags);
    hashtags.forEach((hashtag) => {
      if(!HASHTAGS_CHECK.test(hashtag)) {
        hashtagsInput.setCustomValidity(TEXT_HASHTAG_VALIDATE);
      } else if (hashtagDuplicates.size !== hashtags.length) {
        hashtagsInput.setCustomValidity(HASHTAGS_NO_REPEAT);
      } else {
        hashtagsInput.setCustomValidity('');
      }
      hashtagsInput.reportValidity();
    });
    if (hashtags.length > HASHTAGS_COUNT) {
      hashtagsInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    }
  }
  hashtagsInput.setCustomValidity('');
};

hashtagsInput.addEventListener('input', validateHashtags);
textComment.addEventListener('input', validateComment);
