// Функция, возвращающая случайное целое число из переданного диапазона включительно.

/* описание метода взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random. Пока не совсем разобрался с функцией- почему прибавляем 1 и min,но еще подумаю*/


const getRandomNumber = function (min, max) {
  if (min < 0 || max <= min) {
    return 'Где-то ошибка!';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber();


// Функция для проверки максимальной длины строки.

const textLong = function (comment, long) {
  if (comment.length > long) {
    return false;
  }
  return true;
};
textLong();
