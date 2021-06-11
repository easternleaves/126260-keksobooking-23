//

const getRandomFloat = (min = 0, max = 10, precision = 5) => {
  if (min < 0 || max < 0 || max < min || max === min || precision < 0) {
    throw new Error('Ожидаемые аргументы: 0 < min < max, min != max, 0 < precision');
  }
  return Number((Math.random() * (max - min + 1) + min).toFixed(precision));
};

//

const getRandomInt = (min = 0, max = 10) => getRandomFloat(Math.ceil(min), Math.floor(max), 0);

getRandomFloat();
getRandomInt();
