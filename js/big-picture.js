import {isEscKeyDown, hideElement} from './util.js';
import {posts} from './data.js';

const photos = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
//const socialComments = bigPicture.querySelector('.social__comments');
const socialDescription = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
//const btnBigPictureClose = bigPicture.querySelector('.big-picture__cancel');

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
};

photos.forEach( (photo, i) => {
  photo.addEventListener('click', () => {
    openPopup(posts[i]);
  });
});

document.addEventListener('keydown', (evt) => {
  if (isEscKeyDown) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
