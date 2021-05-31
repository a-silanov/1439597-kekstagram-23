/* eslint-disable no-console */
/* eslint-disable prefer-const */
// Функция, возвращающая случайное целое число из переданного диапазона включительно.

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
