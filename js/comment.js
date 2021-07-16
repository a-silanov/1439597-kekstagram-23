import {getCurrentComments} from './storage.js';

const socialComments = document.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const MAX_VISIBLE_COUNT = 5;
const commentsFragment = document.createDocumentFragment();


const updateCounter = (count) => socialCommentCount.firstChild.textContent = `${count} из `;

const showPartComments = (comments) => {
  for (let i=0; i < MAX_VISIBLE_COUNT; i++) {
    if (!comments[i]) {
      break;
    }
    commentsLoader.classList.remove('hidden');
    socialComments.append(comments[i]);
  }
  comments.splice(0, MAX_VISIBLE_COUNT);
  if (comments.length === 0) {
    commentsLoader.classList.add('hidden');
  }
};

const downloadMore = () => {
  showPartComments(getCurrentComments());
  updateCounter(socialComments.childElementCount);
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';
  comments.forEach(({avatar,name, message}) => {

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
  showPartComments(getCurrentComments());
  updateCounter(socialComments.childElementCount);
};

commentsLoader.addEventListener('click', downloadMore);
export {renderComments};


