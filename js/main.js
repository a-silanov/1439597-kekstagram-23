const COUNT_POST_PHOTOS = 25;
const MIN_PHOTO_IDS = 1;
const MAX_PHOTO_IDS = 25;
const MIN_COUNT_IDS = 1;
const MAX_COUNT_IDS = 10000;
const MIN_AVATAR_NUMBERS = 1;
const MAX_AVATAR_NUMBERS = 6;
const MIN_LIKES_NUMBERS = 15;
const MAX_LIKES_NUMBERS = 200;

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

function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createUserComment = () => ({
  return: {
    id: getRandomNumber(MIN_COUNT_IDS, MAX_COUNT_IDS),
    avatar: `img/avatar-${  getRandomNumber(MIN_AVATAR_NUMBERS, MAX_AVATAR_NUMBERS)  }.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
});
createUserComment();

const createPhotoDescription = () => ({
  id: getRandomNumber(MIN_PHOTO_IDS, MAX_PHOTO_IDS),
  url: `photos/${  getRandomNumber(MIN_PHOTO_IDS, MAX_PHOTO_IDS)  }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKES_NUMBERS, MAX_LIKES_NUMBERS),
  comments: createUserComment(),
});
createPhotoDescription();

// eslint-disable-next-line no-unused-vars
const usersPosts = new Array(COUNT_POST_PHOTOS).fill(null).map(() => createPhotoDescription());
