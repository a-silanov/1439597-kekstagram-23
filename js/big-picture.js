import {onEscKeyDown, hideElement} from './utils.js';
import {posts} from './data.js';
import {startFilters} from './filter.js';

const COMMENTS_LOAD_STEP = 5;
const PHOTO_WIDTH = 35;
const PHOTO_HEIGHT = 35;
const photos = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialDescription = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const btnBigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const commentInput = bigPicture.querySelector('.social__footer-text');
const uploadFile = uploadForm.querySelector('#upload-file');

startFilters();
const openPopup = (photo) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  hideElement(commentsLoader);
  hideElement(socialCommentCount);
  bigPictureImg.src = photo.url;
  commentsCount.textContent = photo.comments.length;
  likesCount.textContent = photo.likes;
  socialDescription.textContent = photo.description;
  socialComments.innerHTML = '';
  const generateCommentsList = (comments) => {
    comments.forEach(({avatar, name, message}) => {
      const comment = document.createElement('li');
      const commentImg = document.createElement('img');
      const commentText = document.createElement('p');

      comment.classList.add('social__comment');
      commentImg.classList.add('social__picture');
      commentText.classList.add('social__text');
      commentImg.src = avatar;
      commentImg.alt = name;
      commentImg.width = PHOTO_WIDTH;
      commentImg.height = PHOTO_HEIGHT;
      commentText.textContent = message;
      comment.appendChild(commentImg);
      comment.appendChild(commentText);
      commentsFragment.appendChild(comment);
    });
    socialComments.appendChild(commentsFragment);
  };

  const commentsCounter = 0;
  let currentCommentsNumber = COMMENTS_LOAD_STEP;

  const initialComments = photo.comments.slice(commentsCounter, currentCommentsNumber);
  socialCommentCount.firstChild.textContent = `${initialComments.length}`;
  generateCommentsList(initialComments);

  commentsLoader.addEventListener('click', () => {
    const newCommentsNumber = currentCommentsNumber + COMMENTS_LOAD_STEP;
    const additionalComments = photo.comments.slice(currentCommentsNumber, newCommentsNumber);
    currentCommentsNumber = newCommentsNumber;
    generateCommentsList(additionalComments);

    const renderedCommentsLength = document.querySelectorAll('.social__comment').length;

    if (photo.comments.length === renderedCommentsLength) {
      commentsLoader.classList.add('hidden');
    }
    socialCommentCount.firstChild.textContent = `${renderedCommentsLength}`;
  });

  if (photo.comments.length > COMMENTS_LOAD_STEP) {
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
  } else {
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
};

photos.forEach( (photo, i) => {
  photo.addEventListener('click', () => {
    openPopup(posts[i]);
  });
});

btnBigPictureClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  uploadOverlay.classList.add('hidden');
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
});

document.addEventListener('keydown', onEscKeyDown);
