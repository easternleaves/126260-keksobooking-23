// 1. Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    throw new Error('Все значения должны быть положительными');
  }

  if (max < min) {
    throw new Error('Конечное значение не может быть меньше начального');
  }

  if (max === min) {
    throw new Error('Начальное и конечное значения не должны совпадать');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;  // max - min + 1: кол-во элементов диапазона [min, max], +1 мы добавляем чтобы включить максимальное значение?
}

getRandomIntInclusive();

// 2. Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloatingPoint (min, max, digits) {
  return (Math.random() * (max - min + 1) + min).toFixed(digits);
}

getRandomFloatingPoint();
