import {isEscKeyDown, hideElement, showElement} from './util.js';

/* Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
Описание фотографии description вставьте строкой в блок .social__caption.
После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
 */
const bigPicture = document.querySelector('.big-picture');
//bigPicture.classList.remove('hidden');
showElement(bigPicture);
//const bigPictureImg = bigPicture.querySelector('.big-picture__img');
//const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
//const socialComments = bigPicture.querySelector('.social__comments');
//const description = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');

hideElement(commentsLoader);
hideElement(commentsCount);
//Закрытие при нажатии на Esc

document.addEventListener('keydown', (evt) => {
  if (isEscKeyDown) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
