// Функция для проверки максимальной длины строки.

const textLong = (comment, long) => comment.length <= long;

textLong('это строка', 140);

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

/* описание метода взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random. Пока не совсем разобрался с функцией- почему прибавляем 1 и min,но еще подумаю*/


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
getRandomNumber(2, 45);

const ID = getRandomNumber(1, 25);


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

const DESCRIPTION = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const randomDescriptionIndex = getRandomNumber(0, DESCRIPTION.length - 1);
DESCRIPTION[randomDescriptionIndex];

const LIKES = getRandomNumber(15, 200);

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const randomMessageIndex = getRandomNumber(0, MESSAGE.length - 1);
MESSAGE[randomMessageIndex];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createPhotoDescription = () => ({
  id: getRandomArrayElement(ID),
  url: `photos/${  getRandomNumber(1, 25)  }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomArrayElement(LIKES),
  comments: [{
    id: getRandomNumber(1, 25),
    avatar: `img/avatar-${  ID  }.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  },
  ],
});
createPhotoDescription();

const photo = [
  createPhotoDescription(),
  createPhotoDescription(),
  createPhotoDescription(),
  createPhotoDescription(),
];

// eslint-disable-next-line no-console
console.log(photo); //не понимаю,почему ругается линтер?вроде в демонстрации все так же было
