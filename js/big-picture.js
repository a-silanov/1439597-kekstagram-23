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
  photo.comments.forEach(({avatar,name, message}) => {
    const commentElement = socialComments.cloneNode(true);

    const commentItem = document.createElement('li');
    const commentItemImg = document.createElement('img');
    const commentItemText = document.createElement('p');
    commentItemImg.src = avatar;
    commentItemImg.alt = name;
    commentItemText.classList.add('social__text');
    commentItemText.textContent = message;

    commentItem.appendChild(commentElement);
  });
};

socialCommentCount.appendChild(commentsFragment);

photos.forEach( (photo, i) => {
  photo.addEventListener('click', () => {
    openPopup(posts[i]);
  });
});

btnBigPictureClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (isEscKeyDown) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
