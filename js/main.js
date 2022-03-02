//Функция, возвращающая случайное целое число из переданного диапазона включительно
//из MDN WEB DOCS
const getRandomIntInclusive = (min, max) => {
  if(max > min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return false;
};
//Функция для проверки максимальной длины строки
const compareMaxLengthWithValue = (string, value) => string.length <= value;

getRandomIntInclusive(0,10);
compareMaxLengthWithValue('Hello', 140);
