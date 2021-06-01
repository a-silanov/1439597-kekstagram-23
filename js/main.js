/* eslint-disable prefer-const */
// Функция, возвращающая случайное целое число из переданного диапазона включительно.

/* описание метода взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random. Пока не совсем разобрался с функцией- почему прибавляем 1 и min,но еще подумаю*/

// eslint-disable-next-line prefer-const
let min = 0;
// eslint-disable-next-line prefer-const
let max = 200;
let text = 'Где-то ошибка!';

// eslint-disable-next-line no-shadow
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min <= max) {
    return text;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(min, max);

// Функция для проверки максимальной длины строки.

// eslint-disable-next-line no-unused-vars
let comment = '';
let message = false;

function textLong() {
  if(comment.length > 140) {
    return message;
  }
  return comment;
}
textLong();

/* а через тернарный оператор ведь можно вот так? или не стоит?:
 let textLong = (comment.length > 140) ? comment : message; */
