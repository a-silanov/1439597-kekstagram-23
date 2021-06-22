import {getRandomNumber} from './util.js';

const COUNT_POST_PHOTO = 25;
const MIN_COMMENT_NUMBER = 1;
const MAX_COMMENT_NUMBER = 3;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;

const NAMES = [
  'Олег',
  'Сергей',
  'Алексей',
  'Мария',
  'Настя',
  'Вика',
  'Костя',
  'Анна',
  'Петр',
  'Денис',
];

const DESCRIPTIONS = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createUserComment = (index) => ({
  return: {
    id: index,
    avatar: `img/avatar-${  getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)  }.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
});

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
  comments: new Array(getRandomNumber(MIN_COMMENT_NUMBER, MAX_COMMENT_NUMBER)).fill(null).map((item, i) => createUserComment(i + 1)),
});

const posts = new Array(COUNT_POST_PHOTO).fill(null).map((item, index) => createPhotoDescription(index + 1));
export {posts};
