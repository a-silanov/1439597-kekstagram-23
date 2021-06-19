import {isEscKeyDown, hideElement, showElement} from './util.js';
import {post, createUserComment} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialDescription = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');

const renderPopup = post;

renderPopup.forEach = ({url, likes, comments, description}) => {
  bigPictureImg.src = url;
  commentsCount.textContent = comments.length;
  likesCount.textContent = likes;
  socialDescription.textContent = description;
  socialComments.textContent = createUserComment;
};

showElement(bigPicture);
hideElement(commentsLoader);
hideElement(socialCommentCount);

const openPopup = () => {
  if (showElement(bigPicture)) {
    document.body.classList.add('modal-open');
  }
};
openPopup();

document.addEventListener('keydown', (evt) => {
  if (isEscKeyDown) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
