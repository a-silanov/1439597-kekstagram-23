import {isEscKeyDown, hideElement} from './util.js';
import {posts} from './data.js';

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
  photo.comments.forEach(({avatar,name, message}) => {

    const commentItem = document.createElement('li');
    const commentItemImg = document.createElement('img');
    const commentItemText = document.createElement('p');

    commentItem.classList.add('social__comment');
    commentItemImg.classList.add('social__picture');
    commentItemText.classList.add('social__text');
    commentItemText.textContent = message;
    commentItemImg.src = avatar;
    commentItemImg.alt = name;

    commentItem.appendChild(commentItemImg);
    commentItem.appendChild(commentItemText);
    commentsFragment.appendChild(commentItem);
  });
  socialComments.appendChild(commentsFragment);
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

document.addEventListener('keydown', isEscKeyDown);
